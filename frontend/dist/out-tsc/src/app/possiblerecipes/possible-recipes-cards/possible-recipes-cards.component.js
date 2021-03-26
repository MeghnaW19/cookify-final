import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PossibleRecipesCardsComponent = class PossibleRecipesCardsComponent {
    constructor(frontendservice) {
        this.frontendservice = frontendservice;
        this.ingredients = [];
        this.recipe = [];
    }
    // ngOnChanges(changes: SimpleChanges) {
    //   console.log(this.ingredients);
    //   console.log(changes);
    //   let list='';
    //   for(let i=0;i<this.ingredients.length;i++){
    //     list+='_'+this.ingredients[i];
    //   }
    //   console.log(list);
    //   this.frontendservice.getallrecommendedrecipeByIngredients(list).subscribe((data)=>{this.recipe=data;console.log(data)});
    //
    // }
    ngOnInit() {
        console.log(this.ingredients);
        let list = '';
        for (let i = 0; i < this.ingredients.length; i++) {
            list += '_' + this.ingredients[i];
        }
        console.log(list);
        this.frontendservice.getallrecommendedrecipeByIngredients(list).subscribe((data) => { this.recipe = data; console.log(data); });
    }
    getRecipes(list) {
    }
};
tslib_1.__decorate([
    Input()
], PossibleRecipesCardsComponent.prototype, "ingredients", void 0);
PossibleRecipesCardsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-possible-recipes-cards',
        templateUrl: './possible-recipes-cards.component.html',
        styleUrls: ['./possible-recipes-cards.component.css']
    })
], PossibleRecipesCardsComponent);
export { PossibleRecipesCardsComponent };
//# sourceMappingURL=possible-recipes-cards.component.js.map