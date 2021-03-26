import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let DashboardrecipecardComponent = class DashboardrecipecardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "id", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "recipe_name", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "cusine_name", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "image_path", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "serve", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "duration", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "published_on", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "master_name", void 0);
tslib_1.__decorate([
    Input()
], DashboardrecipecardComponent.prototype, "rating_value", void 0);
DashboardrecipecardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboardrecipecard',
        templateUrl: './dashboardrecipecard.component.html',
        styleUrls: ['./dashboardrecipecard.component.css']
    })
], DashboardrecipecardComponent);
export { DashboardrecipecardComponent };
//# sourceMappingURL=dashboardrecipecard.component.js.map