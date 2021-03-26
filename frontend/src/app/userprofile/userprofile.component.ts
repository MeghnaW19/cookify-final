import { Component, OnInit } from '@angular/core';
import { FrontendserviceService } from '../frontendservice.service';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userimage="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  private user;
  private recipespublished=[];
  private recipestried=[];
  private recipesliked=[];
  private name;
  constructor(private service:FrontendserviceService) { }
  image="";
  urll:string;
  upload=true;
  previousImage;
  cancelImage=true;
  numberOfTried;
  numberOfLiked;
  numberOfPublished;
  ngOnInit() {
    let username=localStorage.getItem('username');
    this.name=localStorage.getItem('name');
    this.service.getUserDetails(username).subscribe((data)=>
    {console.log(data);this.user=data;console.log(this.user.username +this.user.name );
     if(this.user.image==null)
     {
       this.user.image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
     }
    this.recipespublished=data.recipesPublished;
      this.recipestried=data.recipesTried;
      this.recipesliked=data.recipesLiked;
      this.numberOfLiked=Object.keys(data.recipesLiked).length;
      this.numberOfPublished=Object.keys(data.recipesPublished).length;
      this.numberOfTried=Object.keys(data.recipesTried).length;

    })
     // delay(10000);
    console.log("shshshh")
    console.log(this.user+"hello");
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.previousImage=this.user.image;
    this.urll=data
    this.image=data;
    this.user.image=data;
    this.upload=false;

  }

  getUrl() {
    let url="url('"+this.user.image+"')";
    console.log(url+"hhdj");
    return url;
  }

  approve() {
    let newUser=this.user;
    this.service.updateImage(newUser).subscribe(data=>console.log(data));
    this.upload=true;
  }

  cancel() {
    // this.urll=this.onFileComplete(this.previousImage);
    this.cancelImage=false;
    this.upload=true;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
