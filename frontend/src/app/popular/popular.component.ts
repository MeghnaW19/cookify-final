import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FrontendserviceService} from "../frontendservice.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  public recipe: Object = [];

  constructor(private http: HttpClient, private fservice: FrontendserviceService) {
  }

  ngOnInit() {
    this.fservice.getallpopularrecipe().subscribe(data => {
      this.recipe = data;
      for (let i in Object.keys(this.recipe)){
        if (this.recipe[i].recipeImage == null) {
          this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg"
        }}
      console.log(this.recipe, "data of latest recipe")
    });

  }
}
