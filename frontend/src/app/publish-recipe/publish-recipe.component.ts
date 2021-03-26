import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ENTER} from '@angular/cdk/keycodes';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';
import { DatePipe, NumberFormatStyle } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TooltipPosition } from '@angular/material/tooltip';
// import {Ingredients} from "../OrderDetails";





export interface Ingredients
{
  category: string;
  name: string;
  quantity:number;
  unit:string;
}

export interface Steps{
  stepContent: string;
}

export interface Stages{
  stageName:string;
  duration: number;
  steps:Steps[];
  image: string;
}

export interface Comments{
  userName: string;
  comment: string;
  time: Date;
  userImage: string;
}

export interface Ratings{
  userName: string;
  rating: number;
  time: Date;
}

export interface Process{
  processName: string;

}

export interface Procedure{
 stages :Stages[];
}





export interface Recipe{
  recipeName:string;
  description:string;
  servesFor:number;
  ingredients:Ingredients[];
  procedure:Procedure;
  cuisine:string;
  cookingTime:number;
  images:string[];
  ratingCount:number;
  duration:number;
  price:number;
  publishedOn:number;
  publishedBy:string;
  comment: Comments[];
  rating: number;
  course: string;
  recipeImage: string;

}

// export interface Procedure{
//   procedureName: string;
//   process: Process[];
// }



@Component({
  selector: 'app-publish-recipe',
  templateUrl: './publish-recipe.component.html',
  styleUrls: ['./publish-recipe.component.css']
})






export class PublishRecipeComponent implements OnInit {
  imageview=true;
  stageimageview=true;
  myControl = new FormControl();
  options:string[];
  filteredOptions: Observable<string[]>;
  myControl1 = new FormControl();
  options1:string[];
  filteredOptions1: Observable<string[]>;
  ingredientCtrl = new FormControl();
  filteredIngredients: Observable<any[]>;
  options3:string[];



  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stageFormGroup:FormGroup;
  isOptional = false;

  private username;
  private jwtToken;
  private name;


  positionOptions: TooltipPosition =  'above';


  i=0;
  obj ={id:'0',stepContent:''};
  newarr=[];
  stages=[{id:0,stagevalue:false,steps:[this.obj]}];

  index=0;
  barun="sarraf"

  @ViewChild('ingredientInput',{static:false}) ingredientInput: ElementRef;
  constructor(private route:Router, private _formBuilder: FormBuilder,private http:HttpClient,private fservice:FrontendserviceService) {

  }




  createstage()
  {
    var newstage={id:this.i+1,stagevalue:false,name,steps:[]};
    this.stages.push(newstage);
    this.i++;
  }

  bab={};


  createstep(stage)
  {
    this.stages.forEach(element => {
      if(element.id==stage.id)
      {
        var presentsteplist=element.steps;
        presentsteplist.push({id:'0',stepContent:'step content'});
        element.steps=presentsteplist;
        this.stages[element.id]=element;
      }

    });

  }





  procedure : Procedure={stages:[]};

  finalpublishlist=[];

  save(stagevalue,durationvalue,stageview)
  {
    if(stagevalue!='' && durationvalue!='')
    {

     var stage={stageName:stagevalue,duration:durationvalue,image:this.urll,steps:[]};

     this.newarr.forEach(element => {

      var steps={stepContent:element};
      stage.steps.push(steps);
     });

     this.newarr=[];

     this.procedure.stages.push(stage);
     console.log(stage);

      this.stages[stageview.id].stagevalue=true;
      this.urll="../../assets//homecomponentassets/images/samp1.jpg";
      this.stageimageview=true;
     }
  }





  ngOnInit() {
    this.fservice.getCuisines().subscribe((data)=>{console.log(data);this.options1=data;})
    this.fservice.getCourses().subscribe((data)=>{console.log(data);this.options=data;})
    this.fservice.getIngredientsWhilePublishing().subscribe((data)=>{console.log(data);this.options3=data});


    this.username=localStorage.getItem('username');
    this.jwtToken=localStorage.getItem('token');
    this.name=localStorage.getItem('name');

    if(this.username==null)
    {
      this.route.navigateByUrl('/login');
    }

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    console.log(this.processs);
    console.log(this.ingredients);

  }

  enableOption($event) {
    console.log("hh")
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.filteredOptions1 = this.myControl1.valueChanges
      .pipe(
        startWith(''),
        map(value1 => this._filter1(value1))
      );

    this.filteredIngredients = this.ingredientCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value2 => this._filter2(value2))
      );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();

    return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
  }

  private _filter2(value2: string): string[] {
    const filterValue2 = value2.toLowerCase();

    return this.options3.filter(option2 => option2.toLowerCase().includes(filterValue2));
  }


  // selectedFile: File

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log("File changed");
  // }

  // onUpload() {
  //   // upload code goes here
  //   const uploadData = new FormData();
  //   console.log("In onUpload Function")
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   this.http.post("http://localhost:8082/api/v1/uploadFile", uploadData)
  //   .subscribe();
  // }
  urll="../../assets//homecomponentassets/images/samp1.jpg";
  urll1="../../assets//homecomponentassets/images/samp1.jpg";
  urll2: string;
  urll3: string;
  urll4: string;




  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.urll=data;
    this.stageimageview=false;
  }

  onFileComplete1(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.urll1=data
    this.imageview=false;

  }

  onFileComplete2(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.urll2=data.body
  }

  onFileComplete3(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.urll3=data.body
  }

  onFileComplete4(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.urll4=data.body
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes=[ENTER];
  ingredients: Ingredients[] = [];


  processs: Process[]=[

  ];

  // procedure: Procedure;

  stage: Stages[]=[];
  step: Steps[]=[];
  step1: Steps[]=[];
  step2: Steps[]=[];
  step3: Steps[]=[];
  step4: Steps[]=[];





  steps = ['Step 1'];
  activeStep = this.steps[0];
  links = [this.steps[0]];
  activeLink = this.links[0];

  steps1 = ['Step 1'];
  activeStep1 = this.steps1[0];
  links1 = [this.steps1[0]];
  activeLink1 = this.links1[0];

  steps2 = ['Step 1'];
  activeStep2 = this.steps2[0];
  links2 = [this.steps2[0]];
  activeLink2 = this.links2[0];

  steps3 = ['Step 1'];
  activeStep3 = this.steps3[0];
  links3 = [this.steps3[0]];
  activeLink3 = this.links3[0];

  steps4 = ['Step 1'];
  activeStep4 = this.steps4[0];
  links4 = [this.steps4[0]];
  activeLink4 = this.links4[0];

  n :number = 1;

  recimg: string;


//
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
console.log(value+input)
    // Add our fruit
    if ((value || '').trim()) {
      this.ingredients.push({category: "tom",
        name: value.trim(),
        quantity:0,
        unit:"tbs"});

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredients: Ingredients): void {
    console.log(this.ingredients)
    console.log(ingredients)
    const index = this.ingredients.indexOf(ingredients);
    console.log(index)

    // this.suggestedIngredients.push(ingredients.name);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
    this.suggestedIngredients.push(ingredients.name);
  }

  addLink() {
    this.links.push(`Step ${this.links.length + 1}`);
  }

  addLink1() {
    console.log(this.links1)

    this.links1.push(`Step ${this.links1.length + 1}`);
    console.log(this.links1)

  }

  addLink2() {
    this.links2.push(`Step ${this.links2.length + 1}`);
  }

  addLink3() {
    this.links3.push(`Step ${this.links3.length + 1}`);
  }

  addLink4() {
    this.links4.push(`Step ${this.links4.length + 1}`);
  }



  addProcess(value){
    console.log(value)

    this.step.push({stepContent:value});
  console.log(this.step)

}

  addProcess1(value){
    this.step1.push({stepContent:value});
    console.log(this.step1);
  }

  addProcess2(value){
    this.step2.push({stepContent:value});
  }

  addProcess3(value){
    this.step3.push({stepContent:value});
  }

  addProcess4(value){
    this.step4.push({stepContent:value});
  }

  a:number=0;
  a1:number=0;
  a2:number=0;
  a3:number=0;
  a4:number=0;



  adda(){
    this.a++;
  }

  adda1(){
    this.a1++;
  }
  adda2(){
    this.a2++;
  }
  adda3(){
    this.a3++;
  }
  adda4(){
    this.a4++;
  }





     addStages(value,value1){
      this.stage.push({stageName:value,duration:value1,steps:this.step,image:this.urll});
      console.log(this.stage);

     }

     addStages1(value,value1){
      this.stage.push({stageName:value,duration:value1,steps:this.step1,image:this.urll1});
      console.log(this.stage);

     }

     addStages2(value,value1){
      this.stage.push({stageName:value,duration:value1,steps:this.step2,image:this.urll2});

     }

     addStages3(value,value1){
      this.stage.push({stageName:value,duration:value1,steps:this.step3,image:this.urll3});

         }

     addStages4(value,value1){
      this.stage.push({stageName:value,duration:value1,steps:this.step4,image:this.urll4});

     }

  addIngredient( value1, value2){
     let n = this.ingredients.length;
     if(this.ingredients.length>0){
    this.ingredients[n-1].category='';
    // this.ingredients[n-1].name=value;
    this.ingredients[n-1].quantity=value1;
    this.ingredients[n-1].unit=value2;
     } else{
      this.ingredients[0].category='';
      // this.ingredients[0].name=value;
      this.ingredients[0].quantity=value1;
      this.ingredients[0].unit=value2;
     }

     console.log(this.ingredients);
  }

  toggle = true;
  status = 'Confirm Ingredients';

   enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Confirm Ingredients' : 'Ingredients Confirmed';
    }

    toggle1 = true;
    status1 = 'Confirm Step';

     enableDisableRule1(job) {
      this.toggle1 = !this.toggle1;
      this.status1 = this.toggle1 ? 'Confirm Step' : 'Step Confirmed';
      }

    cookingTime(procedure : Procedure){
      let x :number;
      x=0;
      for(let v of procedure.stages){
         x =  x + Number(v.duration);
      }

      return x;

    }

     capital_letter(str: string)
{   let strs: string[];

         strs = str.split(" ");

    for (var i = 0, x = strs.length; i < x; i++) {
        strs[i] = strs[i][0].toUpperCase() + strs[i].substr(1);
    }

    return strs.join(" ");
}




  publishRecipe(value1,value2,value3,value4,value5){
    if(this.urll1=='../../assets//homecomponentassets/images/samp1.jpg')
    {
      this.urll1='../../assets//homecomponentassets/images/sampleimagecookify.jpg';
    }
          //  this.procedure=({stages:this.stage});
          console.log("In publish recipe")
     let  recipe : Recipe =({recipeName:this.capital_letter(value1),
          description:value2,
          cuisine:value3,
          cookingTime: this.cookingTime(this.procedure),
          course:value4,
          servesFor:value5,
          recipeImage:this.urll1,
          images:[],
          price:0,
          publishedBy:localStorage.getItem('username'),
          rating:0,
//           procedure:this.stage,
          procedure:this.procedure,
          ingredients:this.ingredients,
          comment:[],
          ratingCount:0,
          duration:0,
          publishedOn:Date.now()

        })

        //Empty image array being send


        //Getting todays date
        // let dateFormat = require('dateformat');
        // let now = new Date();
        // this.recipe.publishedOn=dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        console.log("hahahah",recipe);
        this.fservice.postPublishRecipe(recipe).subscribe();
     console.log(recipe);




  }

  addn(){
    if(this.n==5){

    }else{
    this.n++;
    }
  }




  addToform(ingredient: string) {
    console.log(ingredient);
    this.ingredients.push({category: "tom",
      name: ingredient.trim(),
      quantity:0,
      unit:"tbs"});
    const index = this.suggestedIngredients.indexOf(ingredient);

    if (index >= 0) {
      this.suggestedIngredients.splice(index, 1);
    }
  }


  suggestedIngredients;
  getsuggestedIngredients(value1: string,value2,value3) {
    let value=value1+"_" +value2+"_"+value3;
       this.fservice.getSuggestedIngredients(value).subscribe((data)=>{console.log(data);this.suggestedIngredients=data;
       });

  }
  selected(event: MatAutocompleteSelectedEvent): void {
    let newIngredient={category:"tom",
                        name:event.option.viewValue,
                        quantity:0,
                        unit:"tbs"}

    console.log(event.option.viewValue)
    this.ingredients.push(newIngredient);
    //
    console.log(this.ingredientInput.nativeElement.value+"dgdhh")
    this.ingredientInput.nativeElement.value = null;
    // this.ingredientCtrl.setValue(null);
  }


}
