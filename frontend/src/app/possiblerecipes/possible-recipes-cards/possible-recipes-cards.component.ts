import {Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges, SimpleChange} from '@angular/core';
import {FrontendserviceService} from "../../frontendservice.service";

@Component({
  selector: 'app-possible-recipes-cards',
  templateUrl: './possible-recipes-cards.component.html',
  styleUrls: ['./possible-recipes-cards.component.css']
})

export class PossibleRecipesCardsComponent implements OnInit{
  @Input() ingredients = [];

  constructor(private  frontendservice:FrontendserviceService) { }

  recipe=[]

  ngOnInit() {
    console.log(this.ingredients);
    let list='';
    for(let i=0;i<this.ingredients.length;i++){
      list+='_'+this.ingredients[i];
    }
    console.log(list);
    this.frontendservice.getallrecommendedrecipeByIngredients(list).subscribe((data)=>{this.recipe=data;console.log(data)});

  }

  getRecipes(list)
  {
  }
}
