import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecommededComponent = class RecommededComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.fservice.getallrecommendedrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
RecommededComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recommeded',
        templateUrl: './recommeded.component.html',
        styleUrls: ['./recommeded.component.css']
    })
], RecommededComponent);
export { RecommededComponent };
//# sourceMappingURL=recommeded.component.js.map