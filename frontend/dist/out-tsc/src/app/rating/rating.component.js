import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let RatingComponent = class RatingComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onClick() {
        console.log(this.data.rating + this.data.comments);
    }
};
RatingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map