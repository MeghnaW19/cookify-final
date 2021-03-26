import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let DetailService = class DetailService {
    constructor(http) {
        this.http = http;
        this._url = "http://localhost:4006/Recipe_details";
        this._url1 = "http://localhost:4006/Ingredients";
        this._url2 = "http://localhost:4006/Procedure";
    }
    getrecipedetails() {
        return this.http.get(this._url);
    }
    getrecing() {
        return this.http.get(this._url1);
    }
    getproce() {
        return this.http.get(this._url2);
    }
};
DetailService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DetailService);
export { DetailService };
//# sourceMappingURL=detail.service.js.map