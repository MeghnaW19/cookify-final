import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RecipecardComponent = class RecipecardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log(this.id, "bar");
        console.log(this.recipe_name);
        console.log(this.duration);
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "id", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "recipe_name", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "cusine_name", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "image_path", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "serve", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "duration", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "published_on", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "master_name", void 0);
tslib_1.__decorate([
    Input()
], RecipecardComponent.prototype, "rating_value", void 0);
RecipecardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipecard',
        templateUrl: './recipecard.component.html',
        styleUrls: ['./recipecard.component.css']
    })
], RecipecardComponent);
export { RecipecardComponent };
//# sourceMappingURL=recipecard.component.js.map