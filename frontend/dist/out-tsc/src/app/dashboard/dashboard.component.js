import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(fservice, route, router) {
        this.fservice = fservice;
        this.route = route;
        this.router = router;
        this.user = [];
        this.showFiller = false;
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.jwtToken = localStorage.getItem('token');
        // console.log(this.jwtToken+"hhhh");
        if (this.username == null) {
            this.route.navigateByUrl('/login');
        }
        this.fservice.getUserDetails(this.username).subscribe((data) => {
            this.user = data;
            this.name = data.name;
            console.log(data, "dashboard user data");
            // localStorage.setItem('name',data.name);
        });
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map