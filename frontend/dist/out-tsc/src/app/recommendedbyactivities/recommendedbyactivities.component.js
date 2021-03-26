import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecommendedbyactivitiesComponent = class RecommendedbyactivitiesComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
RecommendedbyactivitiesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recommendedbyactivities',
        templateUrl: './recommendedbyactivities.component.html',
        styleUrls: ['./recommendedbyactivities.component.css']
    })
], RecommendedbyactivitiesComponent);
export { RecommendedbyactivitiesComponent };
//# sourceMappingURL=recommendedbyactivities.component.js.map