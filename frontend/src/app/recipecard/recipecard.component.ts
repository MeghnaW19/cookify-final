import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.css']
})
export class RecipecardComponent implements OnInit {

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
    console.log(this.id,"bar");
    console.log(this.recipe_name);
    console.log(this.duration);
  }

  tr(id)
  {
    this.router.navigateByUrl(`/recipedetails/${id}`);
  }

}
