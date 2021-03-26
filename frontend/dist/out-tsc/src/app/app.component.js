import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { NavigationStart } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(router, fservice) {
        this.router = router;
        this.fservice = fservice;
        this.title = "music-frontend";
        this.shownav = false;
    }
    ngOnInit() {
        this.router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if (event.url == "/homecomponent" || event.url == "/login" || event.url == "/register" || event.url == '/') {
                    this.shownav = true;
                }
                else {
                    this.shownav = false;
                }
            }
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map