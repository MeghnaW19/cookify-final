import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let LoggednavbarComponent = class LoggednavbarComponent {
    constructor(iconRegistry, sanitizer, service, route) {
        this.service = service;
        this.route = route;
        this.user = [];
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    fn(name) {
        this.route.navigate(['/search', name]);
    }
    ngOnInit() {
    }
    logout() {
        this.service.logout();
        this.route.navigateByUrl('/homecomponent');
    }
};
tslib_1.__decorate([
    Input()
], LoggednavbarComponent.prototype, "name", void 0);
LoggednavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loggednavbar',
        templateUrl: './loggednavbar.component.html',
        styleUrls: ['./loggednavbar.component.css']
    })
], LoggednavbarComponent);
export { LoggednavbarComponent };
//# sourceMappingURL=loggednavbar.component.js.map