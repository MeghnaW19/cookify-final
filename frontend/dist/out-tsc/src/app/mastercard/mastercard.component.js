import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MastercardComponent = class MastercardComponent {
    constructor() {
        this.cu = [];
    }
    ngOnInit() {
    }
    master(id) {
        console.log("clicked on master with id:" + id);
    }
};
tslib_1.__decorate([
    Input()
], MastercardComponent.prototype, "id", void 0);
tslib_1.__decorate([
    Input()
], MastercardComponent.prototype, "master_name", void 0);
tslib_1.__decorate([
    Input()
], MastercardComponent.prototype, "image_path", void 0);
tslib_1.__decorate([
    Input()
], MastercardComponent.prototype, "cu", void 0);
MastercardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mastercard',
        templateUrl: './mastercard.component.html',
        styleUrls: ['./mastercard.component.css']
    })
], MastercardComponent);
export { MastercardComponent };
//# sourceMappingURL=mastercard.component.js.map