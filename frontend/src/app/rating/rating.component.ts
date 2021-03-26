import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FrontendserviceService } from '../frontendservice.service';
import { HttpClient } from '@angular/common/http';


export interface DialogData {
  rating: number;
  comments: string;
  recipeId:string;
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RatingComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,private route:ActivatedRoute,private fservice:FrontendserviceService,private http:HttpClient) { }
  private recipeId;
  private recipedetail:any;
  private Finaldetail:any;
  private _url;  
  ngOnInit() {
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(i,y) {
    this.data.rating=i;
    this.data.comments=y;
    console.log(this.data.rating );
    console.log(this.data.comments);   
    console.log(this.data.recipeId);
    

    this.fservice.getRecipeDetails(this.data.recipeId).subscribe((data1)=>{
      var rat={"username":localStorage.getItem('username'),"rating":this.data.rating,"time":null}
      
      for(i=0;i<data1.ratings.length;i++)
      {   
        let rat1=data1.ratings[i];
        console.log(rat1.username);
        if(rat.username!=null && rat.username==rat1.username)
        {console.log(rat1.username);
          rat1.rating=rat.rating;
          i=data1.ratings.length+5;
          console.log(i);
        }
      }
      if(i==data1.ratings.length)
      {
        data1.ratings.push(rat);
      }

      var com={"username":localStorage.getItem('username'),"comment":this.data.comments,"time":null,"userImage":null}
      for(i=0;i<data1.comments.length;i++)
      {   
        let com1=data1.comments[i];
        console.log(com1.username);
        if(com.username!=null && com.username==com1.username)
        {
          console.log(com1.username);
          com1.comment=com.comment;
          i=data1.comments.length+5;
          console.log(i);
        }
      }
      if(i==data1.comments.length)
      {
        data1.comments.push(com);
      }
      
      console.log("####");
      console.log(data1.ratings);
      console.log(data1.comments);
      this.recipedetail=data1; 
      console.log(this.recipedetail,"recipedetails");
      this.fservice.rating(this.recipedetail).subscribe();
    });
  
    this.fservice.getRecipeDetails(this.data.recipeId).subscribe((data2)=>{this.Finaldetail=data2;console.log(this.Finaldetail,"Finalrecipedetails")});
       
  }

}
