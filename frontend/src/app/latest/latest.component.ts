import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FrontendserviceService} from "../frontendservice.service";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  public recipe: Object =[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {

    this.fservice.getalllatestrecipe().subscribe(data => {this.recipe=data;
      for (let i in Object.keys(this.recipe)) {
        if (this.recipe[i].recipeImage == null) {
          this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg"
        }
      }
    console.log(this.recipe,"data of latest recipe")});
  }
}
