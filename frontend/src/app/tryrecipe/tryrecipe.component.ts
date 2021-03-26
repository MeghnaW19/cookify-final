import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { MatDialog } from '@angular/material/dialog';
import { Ingredients } from '../OrderDetails';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-tryrecipe',
  templateUrl: './tryrecipe.component.html',
  styleUrls: ['./tryrecipe.component.css']
})
export class TryrecipeComponent implements OnInit {


  //Recipe details
  public recipe=[];
  public igLength;
  public FinalOrder=[];
  public igQuantity=[];
  public igUnit=[];
  public cooknum;
  private num;
  private init=0;
  private numduplicate;
  private newnum=1;
  public index=0;
  //Ingredient details
  public ing=[];
  public ingName=[];
  public ingQuantity=[];
  public ingQuantityFinal=[];
  public ingnames=[];
  public Procedure: any;
  public duration=[];
  public durationDupicate=[];
  //To start and pause timer
  public timeRem=[];
  public timeRemDuplicate=[];
  public timePercent=[];

  public showStart=[];
  public showPause=[];
  public showStop=[];
  public showRestart=[];
  public intervals=[];
  //For voice control
  public speech=[];
  public stepSpeech:string [][];
  public stepLength = [];
  //Quantity per serve
  public isPrimes = false;
  public isOdd=false;
  public isEven = false;
  public onum = 1;
  public recipeid;
  public head=[];
  public timer=[];
  public duration1:any;
  public matTab;
  public xpandStatus = [];
  public cookingTime;
  public isMinusDisabled = false;
  constructor(private http:HttpClient, private route:ActivatedRoute, private fservice:FrontendserviceService, public dialog: MatDialog, private router:Router) {
    this.stepSpeech = [];
   }
  name;
  ngOnInit() {

    let username=localStorage.getItem('username');
    this.checkNumber(this.num);

    if(username==null)
    {
      this.router.navigateByUrl('/login');
    }
    this.name=localStorage.getItem('name');

    this.recipeid=this.route.snapshot.paramMap.get('recipeid');
    this.matTab=this.route.snapshot.paramMap.get('tabid');
    console.log(this.recipeid,"ddddddd");
    this.fservice.getRecipeDetails(this.recipeid)
    .subscribe(data => {this.recipe=data;
                        console.log(this.recipe,"Recipe Details");
                        
                        this.duration1=data.procedure.stages;
                        console.log(this.duration1);
                        for(let i=0;i<this.duration1.length;i++)
                        { 
                          let totalduration=this.duration1[i].duration;
                          console.log(totalduration);
                          this.init=this.init+totalduration;
                          console.log(this.init);
                        }
                        data.cookingTime=this.init;
                        console.log(data.cookingTime);
                  

                        this.num=data.servesFor;
                        this.onum=data.servesFor;
                        this.numduplicate=data.servesFor;
                        this.igLength=(data.ingredients).length;
                        this.ing=data.ingredients;
                        this.ingnames=data.ingredients.name;
                        this.Procedure=data.procedure;
                        console.log(data.ingredients);
                        this.cookingTime = data.cookingTime;
                        for(let i=0; i<this.ing.length; i++)
                        {
                          this.ingName[i]=this.ing[i].name;
                          this.ingQuantity[i]=this.ing[i].quantity;
                         }
                         console.log(this.ingName);
                         console.log(this.ingQuantity);
                       for(let i=0; i<data.procedure.stages.length; i++) {
                          this.timeRem[i] = this.Procedure.stages[i].duration*60;
                          this.duration[i] = this.Procedure.stages[i].duration*60;
                          this.durationDupicate[i] = this.duration[i];
                          this.timeRemDuplicate[i] = this.timeRem[i];
                          this.timePercent[i] = 0;
                          this.head[i]="normal";
                          this.timer[i]="normalTimer";
                          if(i==0)
                            this.xpandStatus[i]=true;
                          else
                            this.xpandStatus[i]=false;
                          //this.xpandNoClose[i] = false;
                          this.showStart[i]=true;
                          this.showPause[i]=false;
                          this.showStop[i]=false;
                          this.showRestart[i]=false;
                          this.intervals[i];
                          //Store steps
                          this.stepSpeech[i] = [];
                          this.stepLength[i] = this.Procedure.stages[i].steps.length;
                          for(let j=0; j<this.stepLength[i]; j++) {
                            this.stepSpeech[i][j]='step '+ (j+1) + ', ' + this.Procedure.stages[i].steps[j].stepContent;
                          }

                          var intro = "Hey, let's make"+data.recipeName+"! Have a wonderful cooking time. ";
                          var steps = ". This consists of, " + this.Procedure.stages[i].steps.length + "steps. "
                          if(i==0) {
                            this.speech[i]=intro+"Stage"+(i+1)+'. '+this.Procedure.stages[i].stageName+steps;
                          }
                          else
                            this.speech[i]="Stage"+(i+1)+','+this.Procedure.stages[i].stageName+steps;
                        }});


                      console.log(this.synthesis.speaking);



  }

  // Serve for count, pass it to backend
  changeserve(operation)
  {
    if(operation=='minus'){
      if(this.num<=0)
      {
        this.num=0;
      }
      else
      {
        this.num=this.num-1;
        if(this.num==this.numduplicate)
        {
         for(let i=0;i<this.ingQuantity.length;i++)
          {this.ingQuantityFinal[i]=this.ingQuantity[i]};
          console.log(this.ingQuantityFinal);
          this.cooknum=(this.num)/this.numduplicate;
        }
        else
        {
          this.newnum=((this.num*0.9)/this.numduplicate);

          for(let i=0;i<this.ingQuantity.length;i++)
          {this.ingQuantityFinal[i]=this.ingQuantity[i]*this.newnum};
        console.log(this.ingQuantityFinal);
          this.cooknum=(this.num)/this.numduplicate;}
      }

    }
    else{
      this.num=this.num+1;
      if(this.num==this.numduplicate)
        {
          for(let i=0;i<this.ingQuantity.length;i++)
          {this.ingQuantityFinal[i]=this.ingQuantity[i]};
          console.log(this.ingQuantityFinal);
          this.cooknum=(this.num)/this.numduplicate;
        }
        else {
          this.newnum=(this.num*0.9)/this.numduplicate;
          for(let i=0;i<this.ingQuantity.length;i++)
          {this.ingQuantityFinal[i]=this.ingQuantity[i]*this.newnum};
          console.log(this.ingQuantityFinal);
          this.cooknum=(this.num)/this.numduplicate;}
    }
    this.cookingTime=0;
    for(let i=0; i<this.Procedure.stages.length; i++) {
      this.duration[i] = this.durationDupicate[i]*this.cooknum;
      this.timeRem[i] = this.timeRemDuplicate[i]*this.cooknum;
      this.cookingTime += this.duration[i];
      this.head[i]="normal";
      this.timer[i]="normalTimer";
      this.timePercent[i] = 0;
      this.synthesis.cancel();
      clearInterval(this.intervals[i]);
      //Show timer controls
      this.showStart[i] = true;
      this.showPause[i] = false;
      this.showStop[i] = false;
      this.showRestart[i] = false;

    }
    this.cookingTime/=60;

  }

  // Pass Entered quantity of ingredients to backend
  orderval()
  {
     var obj=[];
    for(let i=0; i<this.igLength; i++)
    {
      var x:Ingredients;
      x={"category":"tom","name":this.ing[i].name,"quantity":this.igQuantity[i],"unit":this.igUnit[i]};
      if(this.igQuantity[i]!=null && this.igUnit[i]) {
        obj.push(x);
      }
    }
    for(let i=0;i<(obj.length);i++)
    {
     this.FinalOrder[i]=obj[i];
    }

    for(let i=obj.length,j=0;i<(obj.length+this.fieldArray.length);i++,j++)
    {
      this.FinalOrder[i]=this.fieldArray[j];
    }
    console.log("Before");
    console.log(this.FinalOrder);
    console.log("After");

    this.router.navigateByUrl(`/orderpreview/${this.recipeid}`);
    console.log(obj);
    console.log(this.fieldArray);
    console.log(this.FinalOrder);
    this.fservice.move(this.FinalOrder);
  }

  //Voice synthesiser
  synthesis = window.speechSynthesis;

  startTimer(i) {

      //Show timer controls
      this.showStart[i] = false;
      this.showPause[i] = true;
      this.showStop[i] = true;
      this.showRestart[i] = false;
      //Start voice when timer starts
      if(this.timeRem[i]==this.duration[i]) {
        var utterance = new SpeechSynthesisUtterance();
        utterance.text = this.speech[i];
        this.synthesis.speak(utterance);
        if( i==0 ) {
          var utterance1 = new SpeechSynthesisUtterance(' You can pause the timer at any point of time and move on to next stage if you want. Enjoy cooking. ');
          this.synthesis.speak(utterance1);
        }
        else {
          var utterance1 = new SpeechSynthesisUtterance(' Enjoy cooking. ');
          this.synthesis.speak(utterance1);
        }
        for(let j=0; j<this.stepLength[i]; j++) {
          var utteranceStep = new SpeechSynthesisUtterance();
          utteranceStep.text = this.stepSpeech[i][j];
          this.synthesis.speak(utteranceStep);
        }
      }

      //Timer
      this.intervals[i] = setInterval(() => {
        if(this.timeRem[i] > 0) {
          this.timeRem[i]--;
          this.timePercent[i] = ((this.duration[i]-this.timeRem[i])*100)/this.duration[i];
          this.head[i]="ongoing";
          this.timer[i]="ongoingTimer";
          //Halfway through cooking
          if(this.timeRem[i] == (this.duration[i])/2) {
            var utterance = new SpeechSynthesisUtterance('Hello world');
            utterance.text = "Hey, we are halfway through " + this.Procedure.stages[i].stageName + ". Hope you are there.";
            this.synthesis.speak(utterance);
          }
          //Cooking about to end
          if(this.timeRem[i] == this.duration[i]*0.1) {
            var utterance = new SpeechSynthesisUtterance('Hello world');
            utterance.text = "Hey, hope " + this.Procedure.stages[i].stageName + " is almost done. ";
            this.synthesis.speak(utterance);
            //Last stage
            if( i== this.Procedure.stages.length-1) {
              var utterance1 = new SpeechSynthesisUtterance('Hope you enjoyed it. ');
              var utterance2 = new SpeechSynthesisUtterance("Please don't forget to rate the recipe");
              this.synthesis.speak(utterance1);
              this.synthesis.speak(utterance2);
            }
            else {
              var utterance1 = new SpeechSynthesisUtterance();
              utterance1.text = "Our next stage is " + this.Procedure.stages[i+1].stageName;
              this.synthesis.speak(utterance1);
            }
          }
        }
        //If timer is stopped
        else {
          this.head[i]="completed";
          this.timer[i]="completedTimer"
          //Display only Restart
          this.timeRem[i] = 0;
          this.showRestart[i] = true;
          this.showStart[i] = false;
          this.showStop[i] = false;
          this.showPause[i] = false;

        }
      },1000)
  }
// Pause Timer
  pauseTimer(i) {
    this.showPause[i] = false;
    this.showStart[i] = true;
    this.showRestart[i] = false;
    this.showStop[i] = true;
    clearInterval(this.intervals[i]);
  }

  //Stop Timer
  stopTimer(i) {
    this.synthesis.cancel();
    this.head[i]="completed";
    this.timer[i]="completedTimer"
    this.showStart[i]=false;
    this.showPause[i]=false;
    this.showStop[i]=false;
    this.showRestart[i]=true;
    this.timeRem[i] = 0;
    this.timePercent[i] = 100;

  }

  //Restart Timer
  restartTimer(i) {
    this.showStart[i] = false;
    this.showPause[i] = true;
    this.showStop[i] = true;
    this.showRestart[i] = false;
    this.timeRem[i] = this.duration[i];
    clearInterval(this.intervals[i]);
    this.startTimer(i);
  }

  //Rating and comments
  rating: number;
  comments: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(RatingComponent, {
      data: {rating: this.rating, comments: this.comments,recipeId:this.recipeid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rating = result;
    });

     this.fservice.saveusertryrecipe(this.recipe).subscribe();
  }

  //To store user added ingredients
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  public add = 1;

  //pass it to backend
  addFieldValue() {
      this.add = this.add+1
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
      console.log(this.fieldArray);
  }

  //delete user added ingredients
  deleteRow(id){
    this.fieldArray.splice(id, 1);
  }

  checkNumber(num){
    if(this.num%2 == 0){
      this.isEven = true;
    } else if(this.num%2!=0){
      this.isOdd = true;
    }

  }

}

