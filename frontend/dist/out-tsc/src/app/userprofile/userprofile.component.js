import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserprofileComponent = class UserprofileComponent {
    constructor(service) {
        this.service = service;
        this.userimage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
        this.recipespublished = [];
        this.recipestried = [];
        this.recipesliked = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        this.name = localStorage.getItem('name');
        this.service.getUserDetails(username).subscribe((data) => {
            console.log(data);
            this.user = data;
            console.log(this.user.username + this.user.name);
            this.recipespublished = data.recipesPublished;
            this.recipestried = data.recipesTried;
            this.recipesliked = data.recipesLiked;
        });
        // delay(10000);
        console.log("shshshh");
        console.log(this.user + "hello");
    }
};
UserprofileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-userprofile',
        templateUrl: './userprofile.component.html',
        styleUrls: ['./userprofile.component.css']
    })
], UserprofileComponent);
export { UserprofileComponent };
//# sourceMappingURL=userprofile.component.js.map