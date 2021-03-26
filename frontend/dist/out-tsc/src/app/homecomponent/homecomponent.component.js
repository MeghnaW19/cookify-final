import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomecomponentComponent = class HomecomponentComponent {
    constructor(router) {
        this.router = router;
    }
    fn(name) {
        this.router.navigate(['/search', name]);
    }
    ngOnInit() {
    }
};
HomecomponentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-homecomponent',
        templateUrl: './homecomponent.component.html',
        styleUrls: ['./homecomponent.component.css']
    })
], HomecomponentComponent);
export { HomecomponentComponent };
//# sourceMappingURL=homecomponent.component.js.map