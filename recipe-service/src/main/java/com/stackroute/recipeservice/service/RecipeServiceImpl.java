package com.stackroute.recipeservice.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.stackroute.recipeservice.domain.Rating;
import com.stackroute.recipeservice.domain.Recipe;
import com.stackroute.recipeservice.domain.Stage;
import com.stackroute.recipeservice.exceptions.RecipeAlreadyExistException;
import com.stackroute.recipeservice.exceptions.RecipeNotFoundException;
import com.stackroute.recipeservice.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {
    RecipeRepository recipeRepository;
    @Autowired
    MongoTemplate mongoTemplate;
    @Autowired
    public RecipeServiceImpl(RecipeRepository recipeRepository){
        this.recipeRepository=recipeRepository;
    }

    private AmazonS3 s3client;

    @Value("${amazonProperties.endpointUrl}")
    private String endpointUrl;
    @Value("${amazonProperties.bucketName}")
    private String bucketName;
    @Value("${amazonProperties.accessKey}")
    private String accessKey;
    @Value("${amazonProperties.secretKey}")
    private String secretKey;
    @PostConstruct
    private void initializeAmazon() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        this.s3client = new AmazonS3Client(credentials);
    }

    /** This Method is used to save the recipe**/
    @Override
    public Recipe saveRecipe(Recipe recipe) throws RecipeAlreadyExistException
    { int sum=0;
      for(int i=0;i<recipe.getProcedure().getStages().size();i++) {
          List<Stage> reqstages = recipe.getProcedure().getStages();
          sum = reqstages.get(i).getDuration() + sum;
      }
         recipe.setCookingTime(sum);
          Recipe savedRecipe = recipeRepository.save(recipe);
          return savedRecipe;

    }

    /** This Method is used to Get all the recipe**/
    @Override
    public List<Recipe> getAllRecipes()  {
        List allRecipes=recipeRepository.findAll();
        return recipeRepository.findAll();
    }

    /** This Method is used to Delete a recipe**/
    @Override
    public Recipe deleteRecipe(String id) throws RecipeNotFoundException {
        Recipe recipe=recipeRepository.findById(id).get();
      if(recipeRepository.existsById(id))
      {
          recipeRepository.deleteById(id);return recipe;
      }
      else
      {
          throw new RecipeNotFoundException("No Such Recipe");
      }

    }


    /** This Method is used to Update a recipe**/
    @Override
    public Recipe updateRecipe(Recipe recipe) throws RecipeNotFoundException {

        System.out.println(recipeRepository.existsById(recipe.getId()));

        if(recipeRepository.existsById(recipe.getId()))
        {
            float n=(recipe.getRatingCount())+1;

            List<Rating> ratingArray=recipe.getRatings();
            float sum=0;
            float[] recipeValueArray=new float[ratingArray.size()];
            for (int i=0;i<ratingArray.size();i++)
            {
                recipeValueArray[i] =ratingArray.get(i).getRating();
                sum=sum+recipeValueArray[i];
            }
            float finalrating=sum/ratingArray.size();
            recipe.setRating(finalrating);

            recipe.setRatingduplicate(finalrating);
            recipe.setRatingCount(ratingArray.size());

            Recipe  recipe1=recipeRepository.save(recipe);
            return  recipe1;
        }
        else {
            throw new RecipeNotFoundException("No Such Recipe");
        }
    }


    /** This Method is used to get the recipe By Id**/
    @Override
    public Recipe getRecipeById(String id) throws RecipeNotFoundException {
        Optional<Recipe> recipe1=recipeRepository.findById(id);
        if(!recipe1.isEmpty())
        {
            Recipe recipe2=recipe1.get();
            return  recipe2;
        }
        else
        {
            throw new RecipeNotFoundException("No Recipe with such Id");
        }
    }

    /** This Method is used to Search a recipe By a Name**/
    @Override
    public List<Recipe> searchRecipe(String name) throws RecipeNotFoundException {

//        Query query=new Query();
//
//
//        query.addCriteria(Criteria.where("recipeName").is(name));
//
//
//        List<Recipe> recipes=mongoTemplate.find(query,Recipe.class);

        List<Recipe> recipes1 = recipeRepository.findAll();
        List<Recipe> res = new ArrayList<Recipe>();
        for(Recipe x : recipes1){
            if((x.getRecipeName().toLowerCase().contains(name.toLowerCase())))
            {
                res.add(x);
            }
        }



        if(res.size()==0)
        {
            throw new RecipeNotFoundException("No Such Recipe");
        }
        else {
            return res;
        }
    }

    public String uploadFile(MultipartFile multipartFile) {
        String fileUrl = "";
        try {
            File file = convertMultiPartToFile(multipartFile);
            String fileName = generateFileName(multipartFile);
            fileUrl = endpointUrl + "/" + bucketName + "/" + fileName;
            uploadFileTos3bucket(fileName, file);
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileUrl;
    }

    public String deleteFileFromS3Bucket(String fileUrl) {
        String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
        s3client.deleteObject(new DeleteObjectRequest(bucketName + "/", fileName));
        return "Successfully deleted";
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    private String generateFileName(MultipartFile multiPart) {
        return new Date().getTime() + "-" + multiPart.getOriginalFilename().replace(" ", "_");
    }

    private void uploadFileTos3bucket(String fileName, File file) {
        s3client.putObject(new PutObjectRequest(bucketName, fileName, file)
                .withCannedAcl(CannedAccessControlList.PublicRead));
    }

}
