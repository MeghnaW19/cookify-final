import { Component, OnInit } from '@angular/core';
import { DetailService} from './detail.service'
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';


@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
  
})
export class RecipedetailsComponent implements OnInit {
  bounce: any;
  id=0;
  title = 'recipe';
  recipeid;
  index=1;
  count=0;
  public recipedetail;
  regionalname;
  ingredients;
  public name;
  guestuser;
  public viewcomments=[];
  public viewcount;
  public duration:any;
  public init=0;
  public commentsArray=[];
  public displaycomment=false;

  constructor(private search1:DetailService,private route:ActivatedRoute,private router:Router, private http:HttpClient,private fservice:FrontendserviceService) { }
  ngOnInit()
  {

    this.name=localStorage.getItem('name');
    if(this.name==null)
    {
      this.guestuser=true;
    }
    this.recipeid= this.route.snapshot.paramMap.get('recipeid');
    this.fservice.getNumberOfTriedInRecipe(this.recipeid).subscribe((data)=>this.viewcount=data);
    this.fservice.getRecipeDetails(this.recipeid).subscribe((data)=>
    {
      this.recipedetail=data; console.log(data,"recipedetails")
      this.duration=data.procedure.stages;
      console.log(this.duration);
      for(let i=0;i<this.duration.length;i++)
      { 
        let totalduration=this.duration[i].duration;
        console.log(totalduration);
        this.init=this.init+totalduration;
        console.log(this.init);
      }
      data.cookingTime=this.init;
      console.log(data.cookingTime);
      console.log(data.comments);
      this.commentsArray=data.comments;
      console.log(this.commentsArray);
      console.log(this.viewcomments,"in RECIPEDETAILS")
      let j=0;
      for(let i=0;i<this.commentsArray.length;i++)
      {
        if((this.commentsArray[i].comment)!="")
        {
          this.viewcomments[j]=this.commentsArray[i];
          j++;
        }
      };
      console.log(this.viewcomments,"in RECIPEDETAILS")
      console.log(this.viewcomments.length,);
      if(this.viewcomments.length==0)
      {
       this.displaycomment=true;
      }
      console.log(this.displaycomment);
    });
   
    

    console.log("hhhhh");
    this.fservice.getIngredients(this.recipeid).subscribe((data)=>{console.log(data);
    this.ingredients=data;
    });

    this.fservice.getNumberOfTried(this.recipeid).subscribe((data)=>{console.log(data)});
  }

  navtopage(id)
  {
    this.router.navigateByUrl(`/tryrecipe/${this.recipeid}/${id}`)
  }

  like()
  {
    if(localStorage.getItem('username')==null)
    {
      this.router.navigateByUrl('/login');
    }
    else
    {
      console.log("like recipe");
    this.fservice.saveuserlikerecipe(this.recipedetail).subscribe();

    }
    
  }

  ing;

  regionalName(view: any) {
    this.ing=view;
  }

  viewname(name: any) {
    if(this.ing==name)
    {
      return true;
    }
    else {
      return false;
    }
  }

  removeRegionalName() {
    this.ing="";
  }
}
