import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { FrontendserviceService } from '../frontendservice.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-selectinterests',
  templateUrl: './selectinterests.component.html',
  styleUrls: ['./selectinterests.component.css']
})
export class SelectinterestsComponent implements OnInit {

  public reposearch=[
    {
      "id":1,
      "cuisine":"Indian",
      "image":"http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
    },
    {
      "id":2,
      "cuisine":"Italian",
      "image":"https://serafinamia.com/wp-content/uploads/2018/09/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg"
    },
    {
      "id":3,
      "cuisine":"Chinese",
      "image":"https://www.kinki.ca/wp-content/uploads/2018/06/Canadian-Chinese-Food-10-Greatest-Dishes-800x444.jpg"
     },
    {
      "id":4,
      "cuisine":"American",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JM1iM7Z-w9_bYkerPeE8YAMNEKoplfKqn0lmymalhiFfBTmQLg&s"
    },
    {
      "id":5,
      "cuisine":"Thai",
      "image":"http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg"
    },
    {
      "id":6,
      "cuisine":"Continental",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum1F6ePUaO0U5PstP94NACMo8DjigHk-69WEWARtLSkzB2NzI&s"
    },
    {
      "id":7,
      "cuisine":"Mexican",
      "image":"https://www.englishclub.com/images/vocabulary/food/mexican/mexican-food.jpg"
    },
    {
      "id":8,
      "cuisine":"Japanese",
      "image":"https://www.ennri.com/images/slides/slide_05.png"
    }
  ];
  public recipeform: FormGroup;
  public id;

  private search:any;
  favList=[];
  constructor(private formBuilder: FormBuilder,  private search1:FrontendserviceService,private router:Router,private activateroute:ActivatedRoute)
  {
    this.recipeform = this.formBuilder.group({
    favourites:this.formBuilder.array([])
    });
  }
  public addfinal()
  {
    for(var i in Object.keys(this.recipeform.value.favourites))
    {
      let favCuisine=this.recipeform.value.favourites[i];
      this.favList.push(favCuisine.cuisine);
    }
     console.log(this.favList);
    var newUser={username:this.user.username,emailId:this.user.emailId,name:this.user.name,password:this.user.password,city:this.user.city,state:this.user.state,country:this.user.country,age:this.user.age,gender:this.user.gender,cuisines:this.favList};
    console.log(newUser+"new cuisine");

    this.search1.submitfinalfavourites(newUser).subscribe((res)=>console.log(res));
    this.router.navigateByUrl(`/login`);
  }

  onChange(view:any,isChecked:boolean)
  {
  const control=<FormArray>this.recipeform.controls.favourites;
    if(isChecked)
    {
      control.push(new FormControl(view));
      console.log(this.recipeform);
      console.log(control);
      console.log(view);
    }
    else
    {
    const index=control.controls.findIndex(x=>(x.value==view))
    console.log(view);
    control.removeAt(index);
    console.log(index);
    }
  }
  user;
  ngOnInit()
  {
    let data=this.activateroute.snapshot.paramMap.get('data');
    console.log(data + "ssss");
    this.search1.getUser(data).subscribe((res)=>{console.log(res);this.user=res;});
  }

}
