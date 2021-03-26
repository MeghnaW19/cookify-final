import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TestcomponentComponent = class TestcomponentComponent {
    constructor() {
        this.lat = 'locating...';
        this.lng = 'locating...';
    }
    ngOnInit() {
    }
    findme() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => { this.lat = position.coords.latitude; this.lng = position.coords.longitude; console.log(position); });
        }
        else {
            console.log("nothing");
        }
    }
};
TestcomponentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-testcomponent',
        templateUrl: './testcomponent.component.html',
        styleUrls: ['./testcomponent.component.css']
    })
], TestcomponentComponent);
export { TestcomponentComponent };
//# sourceMappingURL=testcomponent.component.js.map