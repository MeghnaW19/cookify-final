import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardrecipecard',
  templateUrl: './dashboardrecipecard.component.html',
  styleUrls: ['./dashboardrecipecard.component.css']
})
export class DashboardrecipecardComponent implements OnInit {

  @Input() id;
  @Input() recipe_name;
  @Input() cusine_name;
  @Input() image_path;
  @Input() serve;
  @Input() duration;
  @Input() published_on;
  @Input() master_name;
  @Input() rating_value;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  tr(id)
  {
    this.router.navigateByUrl(`/recipedetails/${id}`);
  }

}
