import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(frontendserviceservice, http, router) {
        this.frontendserviceservice = frontendserviceservice;
        this.http = http;
        this.router = router;
        this.state = "";
        this.country = "";
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email
        ]);
        this.nameFormControl = new FormControl('', [
            Validators.required, Validators.pattern("[a-zA_Z ]*")
        ]);
        this.userNameFormControl = new FormControl('', [
            Validators.required, Validators.pattern("[a-z0-9_-]*")
        ]);
        this.passwordFormControl = new FormControl('', [
            Validators.required
        ]);
        this.ageFormControl = new FormControl('', [
            Validators.required, Validators.pattern("[0-9]{1,3}")
        ]);
        this.cityFormControl = new FormControl('', [
            Validators.required
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
    getStateAndCountry($event, city) {
        this.frontendserviceservice.getStateAndCountry().subscribe((data) => {
            console.log(data);
            for (var i in Object.keys(data)) {
                let s = data[i].City;
                // console.log(s.length);
                if (s == city) {
                    this.state = data[i].State;
                    this.country = "India";
                    break;
                }
            }
        });
    }
    registerUser(name, st, email, userName, password, city, age, gender, ct) {
        console.log(name + email + userName + password + city + age + gender);
        if (this.state == "") {
            this.state = st;
            this.country = ct;
            console.log(this.state);
        }
        var userObj = { name: name, emailId: email, username: userName, password: password, city: city, state: this.state, country: this.country, age: age, gender: gender };
        this.frontendserviceservice.userRegister(userObj).subscribe((data) => {
            console.log(data.id + "antara");
            this.userId = data.id;
            this.router.navigate(['/selectyourinterests', data.id]);
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map