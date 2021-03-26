import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public recipe=[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {

    this.fservice.getalltrendingrecipe().subscribe(data => {this.recipe=data;
      for (let i in Object.keys(this.recipe)) {
        if (this.recipe[i].recipeImage == null) {
          this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg"
        }
      }
    console.log(this.recipe,"data of trending recipe")});
  }
}
