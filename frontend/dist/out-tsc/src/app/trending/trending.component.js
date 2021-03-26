import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TrendingComponent = class TrendingComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getalltrendingrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
TrendingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-trending',
        templateUrl: './trending.component.html',
        styleUrls: ['./trending.component.css']
    })
], TrendingComponent);
export { TrendingComponent };
//# sourceMappingURL=trending.component.js.map