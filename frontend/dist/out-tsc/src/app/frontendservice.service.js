import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
let FrontendserviceService = class FrontendserviceService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'AhHRFQWZBhpQDBaPLWMu2yGNwbS5AAQ2vwRL5tE9Rzh80PUdAy0axKdNr2SkQlSl';
        this.currentusernamesubject = new BehaviorSubject(localStorage.getItem('username'));
        this.currentusername = this.currentusernamesubject.asObservable();
        // this.token=new BehaviorSubject<String>(localStorage.getItem('token'));
        // this.currenttoken=this.token.asObservable();
    }
    getalltopmasters() {
        return this.http.get("http://localhost:3000/master");
    }
    getalltrendingrecipe() {
        // var httpOptions=this.makeToken('token');
        return this.http.get("http://localhost:8082/api/v1/recipes");
    }
    getallrecommendedbyhistoryrecipe() {
        var httpOptions = this.makeToken('token');
        return this.http.get("http://localhost:8096/api/v1/recommended/" + localStorage.getItem('username'));
    }
    getallrecommendedrecipe() {
        return this.http.get("http://localhost:8096/api/v1/recommendedByCuisine/" + localStorage.getItem('username'));
    }
    getallrecommendedrecipeByIngredients(list) {
        return this.http.get("http://localhost:8096/api/v1/recipes/" + list);
    }
    userRegister(user) {
        var url = "http://localhost:8080/userLogin/register";
        return this.http.post(url, user);
    }
    login(user) {
        let _url = "http://localhost:8080/userLogin/authenticate";
        return this.http.post(_url, user, { observe: 'response' });
    }
    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
    }
    //get user by id in selectinterest
    getUser(id) {
        var url = "http://localhost:8080/userLogin/user/" + id;
        return this.http.get(url);
    }
    getStateAndCountry() {
        return this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities");
    }
    getdataforinterests() {
        let _url = "http://localhost:3000/interestrecipes";
        return this.http.get(_url);
    }
    submitfinalfavourites(obj) {
        console.log(obj.cuisines);
        let _url1 = "http://localhost:8080/userLogin/user";
        return this.http.post(_url1, obj);
    }
    // localhost
    postPublishRecipe(obj) {
        var httpOptions = this.makeToken('token');
        let urlz = "http://localhost:8080/recipeService/api/v1/recipe";
        return this.http.post(urlz, obj, httpOptions);
    }
    getRecipeDetails(id) {
        return this.http.get("http://localhost:8082/api/v1/recipedetail/" + id);
        // return this.http.get<any>("http://localhost:8082/api/v1/recipedetail/"+id)
    }
    getUserDetails(username) {
        var httpOptions = this.makeToken('token');
        console.log(httpOptions.headers.get('Authorization') + " inside Service ");
        return this.http.get("http://localhost:8080/userProfile/api/v1/user/" + username, httpOptions);
    }
    saveuserlikerecipe(recipeobj) {
        var httpOptions = this.makeToken('token');
        let urlz = "http://localhost:8080/userProfile/api/v1/userlikerecipe/" + localStorage.getItem('username');
        console.log(urlz, "inside save");
        return this.http.post(urlz, recipeobj, httpOptions);
    }
    saveusertryrecipe(recipeobj) {
        var httpOptions = this.makeToken('token');
        let urlz = "http://localhost:8080/userProfile/api/v1/usertryrecipe/" + localStorage.getItem('username');
        console.log(urlz, "inside save");
        return this.http.post(urlz, recipeobj, httpOptions);
    }
    makeToken(token) {
        this.token = localStorage.getItem(token);
        this.fullToken = "Bearer " + this.token;
        console.log(this.fullToken);
        var httpOptions = {
            headers: new HttpHeaders({
                Authorization: this.fullToken
            })
        };
        return httpOptions;
    }
    getAddresses() {
        var url = "http://localhost:8095/api/v1/ds/" + localStorage.getItem("username");
        console.log(localStorage.getItem("username"));
        console.log(this.http.get(url));
        return this.http.get(url);
    }
    //Add address for the first time
    addFirstAddress(address) {
        var url = "http://localhost:8095/api/v1/ds";
        return this.http.post(url, address);
    }
    //to post address
    addAddress(address) {
        console.log(address);
        var url = "http://localhost:8095/api/v1/da/" + localStorage.getItem('username');
        return this.http.put(url, address);
    }
    move(array) {
        this.ordered = array;
        console.log(this.ordered);
        console.log("In move function");
    }
    getarray() {
        console.log(this.ordered);
        console.log("In ordered Function");
        return this.ordered;
    }
    //to pass the current delivery address and list of ingredients
    addOrderDetails(orderDetails) {
        //replace with orderDetails api and add username(user) as path variable
        console.log(orderDetails);
        var url = "http://localhost:8095/api/v1/od";
        //add jwt token in http Authorization header
        return this.http.post(url, orderDetails);
    }
    //to get deliveryguy object which contains deliveryguy username and coordinates
    getDeliveryGuy() {
        //replace with get deliveryGuy api
        var url = "http://localhost:8095/api/v1/dg";
        //add jwt token in http Authorization header
        return this.http.get(url);
    }
    //to get the distance and time from bing api
    getDistanceTime(userCoordinates, deliveryGuyCoordinates) {
        //user location
        var userLocation = userCoordinates.latitude + ',' + userCoordinates.longitude;
        console.log("userCoordinates" + userCoordinates.latitude);
        //deliveryguy location
        console.log(deliveryGuyCoordinates);
        var deliveryGuyLocations = "";
        for (let val of deliveryGuyCoordinates) {
            deliveryGuyLocations += val.latitude + ',' + val.longitude + ';';
        }
        var deliveryGuyLocations = deliveryGuyLocations.substring(0, deliveryGuyLocations.length - 1);
        console.log(deliveryGuyLocations);
        let bingUrl = `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${userLocation}&destinations=${deliveryGuyLocations}&travelMode=driving&key=${this.apiKey}`;
        console.log(bingUrl);
        return this.http.get(bingUrl);
    }
    //to get orderId
    getOrderId() {
        var url = "http://localhost:8095/api/v1/";
        return this.http.get(url);
    }
    //to post list of deliveryguys along with distance and time in order
    deliveryGuysList(deliveryGuyList) {
        //username=localStorage.getItem('username');
        // var orderId = this.getOrderId(localStorage.getItem('username'));
        //replace with postDeliveryGuy list api
        console.log(deliveryGuyList);
        var url = "http://localhost:8095/api/v1/ods";
        //add jwt token in http Authorization header
        return this.http.post(url, deliveryGuyList);
    }
    //
    getSuggestedIngredients(value) {
        return this.http.get("http://localhost:8096/api/v1/suggested/ingredients/" + value);
    }
    //suggested stages while publishing
    getSuggestedStages(value) {
        return this.http.get("http://localhost:8096/api/v1/suggested/stages/" + value);
    }
    //get the regional name of  ingredients in recipe details
    getRegionalName(view) {
        return this.http.get("http://localhost:8096/api/v1/ingredients/" + view + "_" + localStorage.getItem('username'));
    }
    getIngredients(recipeid) {
        return this.http.get("http://localhost:8096/api/v1/ingredientsGrouped/" + recipeid);
    }
};
FrontendserviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FrontendserviceService);
export { FrontendserviceService };
//# sourceMappingURL=frontendservice.service.js.map