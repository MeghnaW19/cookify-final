import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MasterComponent = class MasterComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.masterdata = [];
    }
    ngOnInit() {
        this.fservice.getalltopmasters().subscribe(data => { this.masterdata = data; console.log(this.masterdata, "in master"); });
    }
    masterid(id) {
        console.log("clicked on master with id:" + id);
    }
};
MasterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-master',
        templateUrl: './master.component.html',
        styleUrls: ['./master.component.css']
    })
], MasterComponent);
export { MasterComponent };
//# sourceMappingURL=master.component.js.map