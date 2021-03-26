import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Validators } from '@angular/forms';
// export interface Procedure{
//   procedureName: string;
//   process: Process[];
// }
let PublishRecipeComponent = class PublishRecipeComponent {
    constructor(route, _formBuilder, http, fservice) {
        this.route = route;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.fservice = fservice;
        this.isLinear = false;
        this.isOptional = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.ingredients = [];
        this.processs = [];
        this.stage = [];
        this.step = [];
        this.step1 = [];
        this.step2 = [];
        this.step3 = [];
        this.step4 = [];
        this.steps = ['Step 1'];
        this.activeStep = this.steps[0];
        this.links = [this.steps[0]];
        this.activeLink = this.links[0];
        this.steps1 = ['Step 1'];
        this.activeStep1 = this.steps1[0];
        this.links1 = [this.steps1[0]];
        this.activeLink1 = this.links1[0];
        this.steps2 = ['Step 1'];
        this.activeStep2 = this.steps2[0];
        this.links2 = [this.steps2[0]];
        this.activeLink2 = this.links2[0];
        this.steps3 = ['Step 1'];
        this.activeStep3 = this.steps3[0];
        this.links3 = [this.steps3[0]];
        this.activeLink3 = this.links3[0];
        this.steps4 = ['Step 1'];
        this.activeStep4 = this.steps4[0];
        this.links4 = [this.steps4[0]];
        this.activeLink4 = this.links4[0];
        this.n = 1;
        this.a = 0;
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.a4 = 0;
        this.toggle = true;
        this.status = 'Confirm Ingredients';
        this.toggle1 = true;
        this.status1 = 'Confirm Step';
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.jwtToken = localStorage.getItem('token');
        this.name = localStorage.getItem('name');
        if (this.username == null) {
            this.route.navigateByUrl('/login');
        }
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        console.log(this.processs);
        console.log(this.ingredients);
    }
    onFileComplete(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll = data.body;
    }
    onFileComplete1(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll1 = data.body;
    }
    onFileComplete2(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll2 = data.body;
    }
    onFileComplete3(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll3 = data.body;
    }
    onFileComplete4(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll4 = data.body;
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.ingredients.push({ category: "tom",
                name: value.trim(),
                quantity: 0,
                unit: "tbs" });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(ingredients) {
        const index = this.ingredients.indexOf(ingredients);
        if (index >= 0) {
            this.ingredients.splice(index, 1);
        }
    }
    addLink() {
        this.links.push(`Step ${this.links.length + 1}`);
    }
    addLink1() {
        console.log(this.links1);
        this.links1.push(`Step ${this.links1.length + 1}`);
        console.log(this.links1);
    }
    addLink2() {
        this.links2.push(`Step ${this.links2.length + 1}`);
    }
    addLink3() {
        this.links3.push(`Step ${this.links3.length + 1}`);
    }
    addLink4() {
        this.links4.push(`Step ${this.links4.length + 1}`);
    }
    // addStep() {
    //   this.steps.push(`Step ${this.steps.length + 1}`);
    // }
    addProcess(value) {
        console.log(value);
        this.step.push({ stepContent: value });
        console.log(this.step);
    }
    addProcess1(value) {
        this.step1.push({ stepContent: value });
        console.log(this.step1);
    }
    addProcess2(value) {
        this.step2.push({ stepContent: value });
    }
    addProcess3(value) {
        this.step3.push({ stepContent: value });
    }
    addProcess4(value) {
        this.step4.push({ stepContent: value });
    }
    adda() {
        this.a++;
    }
    adda1() {
        this.a1++;
    }
    adda2() {
        this.a2++;
    }
    adda3() {
        this.a3++;
    }
    adda4() {
        this.a4++;
    }
    // addStages(value){
    //   if(this.n==1){
    //   this.stage.push({stageDescription:value,steps:this.step});
    //   }else if(this.n==2){
    //     this.stage.push({stageDescription:value,steps:this.step1});
    //     } else if(this.n==3){
    //       this.stage.push({stageDescription:value,steps:this.step2});
    //       } else if(this.n==4){
    //         this.stage.push({stageDescription:value,steps:this.step3});
    //         } else if(this.n==5){
    //           this.stage.push({stageDescription:value,steps:this.step4});
    //           }
    // }
    addStages(value, value1) {
        this.stage.push({ stageName: value, duration: value1, steps: this.step, images: this.urll });
        console.log(this.stage);
    }
    addStages1(value, value1) {
        this.stage.push({ stageName: value, duration: value1, steps: this.step1, images: this.urll1 });
        console.log(this.stage);
    }
    addStages2(value, value1) {
        this.stage.push({ stageName: value, duration: value1, steps: this.step2, images: this.urll2 });
    }
    addStages3(value, value1) {
        this.stage.push({ stageName: value, duration: value1, steps: this.step3, images: this.urll3 });
    }
    addStages4(value, value1) {
        this.stage.push({ stageName: value, duration: value1, steps: this.step4, images: this.urll4 });
    }
    addIngredient(value1, value2) {
        let n = this.ingredients.length;
        if (this.ingredients.length > 0) {
            this.ingredients[n - 1].category = '';
            // this.ingredients[n-1].name=value;
            this.ingredients[n - 1].quantity = value1;
            this.ingredients[n - 1].unit = value2;
        }
        else {
            this.ingredients[0].category = '';
            // this.ingredients[0].name=value;
            this.ingredients[0].quantity = value1;
            this.ingredients[0].unit = value2;
        }
        console.log(this.ingredients);
    }
    enableDisableRule() {
        this.toggle = !this.toggle;
        this.status = this.toggle ? 'Confirm Ingredients' : 'Ingredients Confirmed';
    }
    enableDisableRule1(job) {
        this.toggle1 = !this.toggle1;
        this.status1 = this.toggle1 ? 'Confirm Step' : 'Step Confirmed';
    }
    publishRecipe(value1, value2, value3, value4, value5) {
        this.procedure = ({ stages: this.stage });
        let recipe = ({ recipeName: value1,
            description: value2,
            cuisine: value3,
            course: value4,
            servesFor: value5,
            images: [],
            price: 0,
            publishedBy: localStorage.getItem('username'),
            rating: 0,
            //           procedure:this.stage,
            procedure: this.procedure,
            ingredients: this.ingredients,
            comment: [],
            ratingCount: 0,
            duration: 0,
            publishedOn: Date.now()
        });
        //Empty image array being send
        //Getting todays date
        // let dateFormat = require('dateformat');
        // let now = new Date();
        // this.recipe.publishedOn=dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        this.fservice.postPublishRecipe(recipe).subscribe();
        console.log(recipe);
    }
    addn() {
        if (this.n == 5) {
        }
        else {
            this.n++;
        }
    }
};
PublishRecipeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-publish-recipe',
        templateUrl: './publish-recipe.component.html',
        styleUrls: ['./publish-recipe.component.css']
    })
], PublishRecipeComponent);
export { PublishRecipeComponent };
//# sourceMappingURL=publish-recipe.component.js.map