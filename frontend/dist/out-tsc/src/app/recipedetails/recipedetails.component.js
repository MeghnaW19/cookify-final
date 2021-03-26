import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecipedetailsComponent = class RecipedetailsComponent {
    constructor(search1, route, router, http, fservice) {
        this.search1 = search1;
        this.route = route;
        this.router = router;
        this.http = http;
        this.fservice = fservice;
        this.id = 0;
        this.title = 'recipe';
        this.index = 1;
        this.recipedetail = {};
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.recipeid = this.route.snapshot.paramMap.get('recipeid');
        this.fservice.getRecipeDetails(this.recipeid).subscribe((data) => { this.recipedetail = data; console.log(data, "recipedetails"); });
        this.fservice.getIngredients(this.recipeid).subscribe((data) => {
            console.log(data);
            this.ingredients = data;
            console.log(this.ingredients[0].i.propertyList[0].value + "hh");
        });
    }
    navtopage() {
        this.router.navigateByUrl(`/tryrecipe/${this.recipeid}`);
    }
    like() {
        console.log("like recipe");
        this.fservice.saveuserlikerecipe(this.recipedetail).subscribe();
    }
    regionalName(view) {
        this.ing = view;
        this.fservice.getRegionalName(view).subscribe((data) => { console.log(data); this.regionalname = "Also known as " + data; });
    }
    viewname(name) {
        if (this.ing == name) {
            return true;
        }
        else {
            return false;
        }
    }
    removeRegionalName() {
        this.ing = "";
    }
};
RecipedetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipedetails',
        templateUrl: './recipedetails.component.html',
        styleUrls: ['./recipedetails.component.css']
    })
], RecipedetailsComponent);
export { RecipedetailsComponent };
//# sourceMappingURL=recipedetails.component.js.map