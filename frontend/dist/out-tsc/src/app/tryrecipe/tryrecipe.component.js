import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
let TryrecipeComponent = class TryrecipeComponent {
    constructor(http, route, fservice, dialog, router) {
        this.http = http;
        this.route = route;
        this.fservice = fservice;
        this.dialog = dialog;
        this.router = router;
        this.recipe = [];
        this.FinalOrder = [];
        this.igQuantity = [];
        this.igUnit = [];
        this.display = true;
        this.display2 = false;
        this.newnum = 1;
        this.index = 0;
        this.ing = [];
        this.ingName = [];
        this.ingQuantity = [];
        this.ingQuantityFinal = [];
        this.ingnames = [];
        this.timeRem = [];
        this.isStartDisabled = false;
        this.isPauseDisabled = false;
        this.isMainDisabled = false;
        //To store user added ingredients
        this.fieldArray = [];
        this.newAttribute = {};
        this.add = 1;
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        // console.log(this.jwtToken+"hhhh");
        if (username == null) {
            this.router.navigateByUrl('/login');
        }
        let recipeid = this.route.snapshot.paramMap.get('recipeid');
        console.log(recipeid, "ddddddd");
        this.fservice.getRecipeDetails(recipeid)
            .subscribe(data => {
            this.recipe = data;
            console.log(this.recipe, "Recipe Details");
            this.num = data.servesFor;
            this.numduplicate = data.servesFor;
            this.igLength = (data.ingredients).length;
            this.ing = data.ingredients;
            this.ingnames = data.ingredients.name;
            this.Procedure = data.procedure;
            console.log(data.ingredients);
            for (let i = 0; i < this.ing.length; i++) {
                this.ingName[i] = this.ing[i].name;
                this.ingQuantity[i] = this.ing[i].quantity;
            }
            console.log(this.ingName);
            console.log(this.ingQuantity);
            for (let i = 0; i < this.Procedure.stages.length; i++) {
                this.timeRem[i] = this.Procedure.stages[i].duration * 60;
            }
        });
    }
    // Serve for count, pass it to backend
    changeserve(operation) {
        if (operation == 'minus') {
            if (this.num <= 0) {
                this.num = 0;
            }
            else {
                this.num = this.num - 1;
                if (this.num == this.numduplicate) {
                    this.display = true;
                    this.display2 = false;
                    for (let i = 0; i < this.ingQuantity.length; i++) {
                        this.ingQuantityFinal[i] = this.ingQuantity[i];
                    }
                    ;
                    console.log(this.ingQuantityFinal);
                }
                else {
                    this.display = false;
                    this.display2 = true;
                    this.newnum = (this.num * 0.9) / this.numduplicate;
                    for (let i = 0; i < this.ingQuantity.length; i++) {
                        this.ingQuantityFinal[i] = this.ingQuantity[i] * this.newnum;
                    }
                    ;
                    console.log(this.ingQuantityFinal);
                    this.cooknum = (this.num * 0.5) / this.numduplicate;
                }
            }
        }
        else {
            this.num = this.num + 1;
            if (this.num == this.numduplicate) {
                this.display = true;
                this.display2 = false;
                for (let i = 0; i < this.ingQuantity.length; i++) {
                    this.ingQuantityFinal[i] = this.ingQuantity[i];
                }
                ;
                console.log(this.ingQuantityFinal);
            }
            else {
                this.display = false;
                this.display2 = true;
                this.newnum = (this.num * 0.9) / this.numduplicate;
                for (let i = 0; i < this.ingQuantity.length; i++) {
                    this.ingQuantityFinal[i] = this.ingQuantity[i] * this.newnum;
                }
                ;
                console.log(this.ingQuantityFinal);
                this.cooknum = (this.num * 0.5) / this.numduplicate;
            }
            // console.log(this.ing);
        }
    }
    // Pass Entered quantity of ingredients to backend
    orderval() {
        var obj = [];
        for (let i = 0; i < this.igLength; i++) {
            var x;
            x = { "name": this.ing[i].name, "quantity": this.igQuantity[i], "unit": this.igUnit[i] };
            if (this.igQuantity[i] != null && this.igUnit[i]) {
                obj.push(x);
            }
        }
        for (let i = 0; i < (obj.length); i++) {
            this.FinalOrder[i] = obj[i];
        }
        for (let i = obj.length, j = 0; i < (obj.length + this.fieldArray.length); i++, j++) {
            this.FinalOrder[i] = this.fieldArray[j];
        }
        console.log("Before");
        console.log(this.FinalOrder);
        console.log("After");
        this.router.navigateByUrl(`/orderpreview`);
        console.log(obj);
        console.log(this.fieldArray);
        console.log(this.FinalOrder);
        this.fservice.move(this.FinalOrder);
    }
    // Store time for each stage
    getStageTime() {
        for (let i = 0; i < this.Procedure.length; i++) {
            this.timeRem[i] = this.Procedure[i].stageTime;
        }
    }
    startTimer(i) {
        this.isMainDisabled = true;
        this.isStartDisabled = true;
        this.isPauseDisabled = false;
        this.interval = setInterval(() => {
            if (this.timeRem[i] > 0) {
                this.timeRem[i]--;
            }
            else {
                this.timeRem[i] = 0;
                this.isStartDisabled = false;
            }
        }, 1000);
    }
    // Pause Timer
    pauseTimer(i) {
        this.isPauseDisabled = true;
        this.isStartDisabled = false;
        clearInterval(this.interval);
    }
    openDialog() {
        const dialogRef = this.dialog.open(RatingComponent, {
            width: '30%', height: '50%',
            data: { rating: this.rating, comments: this.comments }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.rating = result;
        });
        this.fservice.saveusertryrecipe(this.recipe).subscribe();
    }
    //pass it to backend
    addFieldValue() {
        this.add = this.add + 1;
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
        console.log(this.fieldArray);
    }
    //delete user added ingredients
    deleteRow(id) {
        this.fieldArray.splice(id, 1);
    }
};
TryrecipeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tryrecipe',
        templateUrl: './tryrecipe.component.html',
        styleUrls: ['./tryrecipe.component.css']
    })
], TryrecipeComponent);
export { TryrecipeComponent };
//# sourceMappingURL=tryrecipe.component.js.map