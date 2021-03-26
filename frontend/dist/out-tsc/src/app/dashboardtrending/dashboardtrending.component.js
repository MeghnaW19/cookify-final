import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardtrendingComponent = class DashboardtrendingComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.fservice.getalltrendingrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
DashboardtrendingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboardtrending',
        templateUrl: './dashboardtrending.component.html',
        styleUrls: ['./dashboardtrending.component.css']
    })
], DashboardtrendingComponent);
export { DashboardtrendingComponent };
//# sourceMappingURL=dashboardtrending.component.js.map