import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecommendedbyhistoryComponent = class RecommendedbyhistoryComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => { console.log(data); this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
    tr(id) {
        console.log("clicked on trending recipe id:" + id);
    }
};
RecommendedbyhistoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recommendedbyhistory',
        templateUrl: './recommendedbyhistory.component.html',
        styleUrls: ['./recommendedbyhistory.component.css']
    })
], RecommendedbyhistoryComponent);
export { RecommendedbyhistoryComponent };
//# sourceMappingURL=recommendedbyhistory.component.js.map