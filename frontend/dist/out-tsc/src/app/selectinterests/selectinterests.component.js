import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let SelectinterestsComponent = class SelectinterestsComponent {
    constructor(formBuilder, search1, router, activateroute) {
        this.formBuilder = formBuilder;
        this.search1 = search1;
        this.router = router;
        this.activateroute = activateroute;
        this.reposearch = [{
                "id": 1,
                "cuisine": "Indian",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 2,
                "cuisine": "Italian",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 3,
                "cuisine": "Chinese",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 4,
                "cuisine": "American",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 5,
                "cuisine": "Thai",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 6,
                "cuisine": "Continental",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 7,
                "cuisine": "Mexican",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            },
            {
                "id": 8,
                "cuisine": "Japanese",
                "image": "http://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg"
            }
        ];
        this.favList = [];
        this.recipeform = this.formBuilder.group({
            favourites: this.formBuilder.array([])
        });
    }
    addfinal() {
        for (var i in Object.keys(this.recipeform.value.favourites)) {
            let favCuisine = this.recipeform.value.favourites[i];
            this.favList.push(favCuisine.cuisine);
        }
        console.log(this.favList);
        // console.log(this.user.id + "anbd");
        var newUser = { username: this.user.username, emailId: this.user.emailId, name: this.user.name, password: this.user.password, city: this.user.city, state: this.user.state, country: this.user.country, age: this.user.age, gender: this.user.gender, cuisines: this.favList };
        console.log(newUser + "new cuisine");
        this.search1.submitfinalfavourites(newUser).subscribe((res) => console.log(res));
        this.router.navigateByUrl(`/login`);
    }
    onChange(view, isChecked) {
        const control = this.recipeform.controls.favourites;
        if (isChecked) {
            control.push(new FormControl(view));
            console.log(this.recipeform);
            console.log(control);
            console.log(view);
            // console.log(this.recipeform.value.favourites +"boooooo");
        }
        else {
            const index = control.controls.findIndex(x => (x.value == view));
            console.log(view);
            control.removeAt(index);
            console.log(index);
        }
    }
    ngOnInit() {
        let data = this.activateroute.snapshot.paramMap.get('data');
        console.log(data + "ssss");
        this.search1.getUser(data).subscribe((res) => { console.log(res); this.user = res; });
        //  this.search1.getdataforinterests().subscribe(data=> {this.reposearch=data;console.log(data);});
    }
};
SelectinterestsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-selectinterests',
        templateUrl: './selectinterests.component.html',
        styleUrls: ['./selectinterests.component.css']
    })
], SelectinterestsComponent);
export { SelectinterestsComponent };
//# sourceMappingURL=selectinterests.component.js.map