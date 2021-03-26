import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../User';
let LoginComponent = class LoginComponent {
    constructor(router, http, FrontEndService, spinner) {
        this.router = router;
        this.http = http;
        this.FrontEndService = FrontEndService;
        this.spinner = spinner;
        this.user = new User();
    }
    ngOnInit() {
        this.loginstatus = "";
    }
    register() {
        this.router.navigateByUrl(`/register`);
    }
    submitlogindetails(username, password) {
        this.spinner.show();
        this.user.username = username;
        this.user.password = password;
        this.FrontEndService.login(this.user).subscribe((res) => {
            if (res.status == 200) {
                var token = JSON.stringify(res.body);
                var tokenPart = token.slice(10, -2);
                localStorage.setItem('token', tokenPart);
                localStorage.setItem('username', username);
                this.FrontEndService.getUserDetails(username).subscribe((data) => localStorage.setItem('name', data.name));
                /** spinner ends after 5 seconds */
                this.spinner.hide();
                this.router.navigate(['dashboard']);
            }
        }, (error) => {
            console.log(error, "bbbbbbb");
            this.spinner.hide();
            if (error.status == 401)
                this.loginstatus = "Incorrect Details";
            this.spinner.hide();
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map