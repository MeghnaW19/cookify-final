(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- About-Area -->\n<!-- here will be trending recpie cards-->\n<section class=\"section-padding\" id=\"about_page\" style=\"margin-top: -13%\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                <div class=\"page-title text-center\">\n                    <img src=\"../../assets/homecomponentassets/images/cooking.png\" alt=\"About Logo\">\n                    <div class=\"space-20\"></div>\n                    <h5 class=\"title\">About Cookify</h5>\n                    <div class=\"space-30\"></div>\n                    <h3 class=\"red-color\">Cookify helps you to know and build a delicious unique recipe and also connects you with world popular chef. </h3>\n                    <div class=\"space-20\"></div>\n                    <p class=\"remark\"><strong>Remarkable frozen ready meals, prepared by our own chefs and delivered to your door via our nationwide delivery service.</strong> </p>\n                    <p><u>Discover Your Talent!.</u></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- About-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar *ngIf=\"shownav\"></app-navbar>\n\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar [name]=\"name\"></app-loggednavbar>\n\n<div class=\"container-fluid\" style=\"margin-top: 60px;width: 100%;margin-right: 0;margin-left: 0;background: #FAFAFA\">\n\n \n\n\n\n    <div class=\"service-box wow fadeInUp abcd\" data-wow-delay=\"0.2s\" style=\"position: fixed; margin-top: 450px;z-index: 9999;\">\n        <div style=\"align-items: center; cursor: pointer;\" class=\"publishicon\" [routerLink]=\"['/publish-recipe']\">\n                <img style=\"width: 70%;margin-top: -50px;\" src=\"../../assets/homecomponentassets/images/about-logo.png\" alt=\"About Logo\">\n                <span class=\"badge badge-error\">Publish Recipe</span>\n    \n        </div>\n          \n           \n    </div>\n\n    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\" style=\"margin-top: 50px;position: fixed;\">\n      <div class=\"plus\">\n  \n          <button [routerLink]=\"['/possiblerecipes']\"><span class=\"lnr lnr-magic-wand\"></span></button>\n  \n      </div>\n  </div>\n\n              <div class=\"main\">\n                    <div  style=\"display: flex; flex-direction: column;padding: 35px;margin-top: 30px;margin-right: 0px;\">\n\n\n                            <app-recommeded></app-recommeded>\n\n\n                    </div>\n                    <div id=\"trending\" style=\"display: flex; flex-direction: column;padding: 35px;\">\n                      <app-recommendedbyactivities></app-recommendedbyactivities>\n\n\n\n                    </div>\n                    \n                <div id=\"recommhyst\" style=\"display: flex; flex-direction: column;padding: 35px;\">\n                  <app-dashboardtrending></app-dashboardtrending>\n\n\n                </div>\n                \n\n                 </div>\n\n               \n                 \n\n              </div>\n\n            \n\n\n\n\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardrecipecard/dashboardrecipecard.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardrecipecard/dashboardrecipecard.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 280px;min-width: 280px;\">\n    <div (click)=\"tr(id)\" class=\"team-boxrec\" style=\"font-size: 12px;background: white\" >\n        <div class=\"crop\">\n            <img src=\"{{image_path}}\" style=\"width: 100%\" alt=\"recipe image\">\n        </div>\n        <div>\n            <h5 style=\"color: #CB2520;\"><strong>{{recipe_name}}</strong></h5>\n        </div>\n\n        <div class=\"row\" >\n            <div class=\"col-sm-4\" style=\" color: #78C257\">\n                <strong>{{cusine_name}}</strong>\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: center\">\n                <span class=\"lnr lnr-star\" ></span><b> {{rating_value | number:'1.0-1'}}</b>\n            </div>\n                <div class=\"col-sm-4\" style=\"text-align: end\">\n                <strong>{{duration}} min</strong>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\" style=\"text-align: left;font-size: 12px;\">\n                <strong>Serve: {{serve}}</strong>\n            </div>\n            <div class=\"col-sm-6\" style=\"text-align: end\">\n                <b class=\"position\" style=\"font-size: 12px;\">{{master_name}}</b>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardtrending/dashboardtrending.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardtrending/dashboardtrending.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -22%\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-left\" style=\"margin-left: 100px\">\n                    <h5 class=\"title\">Trending</h5>\n                </div>\n            </div>\n        </div>\n        <div style=\"margin-top: -25px\"\n            ng2-carouselamos\n            [width]=\"1200\"\n            [items]=recipe\n            (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n            [$item]=\"itemTemplate\"\n            [$prev]=\"prevTemplate\"\n            [$next]=\"nextTemplate\" >\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n                <div class=\"team-slide\">\n                    <ng-template #prevTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-left\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                    <ng-template let-item let-i=\"index\" #itemTemplate >\n                        <app-dashboardrecipecard  [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item.cuisine\" [serve]=\"item.servesFor\" [duration]=\"item.duration\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-dashboardrecipecard>\n                    </ng-template>\n                    <ng-template #nextTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Feature-Area -->\n<section class=\"feature-area section-padding-top\" id=\"features_page\" style=\"position: relative\">\n    <div class=\"container\">\n        <div class=\"row\"  >\n            <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\" style=\"margin-top: -8%;\">\n                <div class=\"page-title text-center\">\n                    <h5 class=\"title\">Features</h5>\n                    <div class=\"space-10\"></div>\n                    <h3>With cookify you can</h3>\n                    <div class=\"space-60\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\"  style=\"margin-top: -5%\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"box-icon\">\n                        <i class=\"lnr lnr-pencil\"></i>\n                        \n                    </div>\n                    <h4>Publish a Recipe:</h4>\n                    <p>Have a new recipe and want to publish? Don't hesitate, as you'll have the best experience to publish it</p>\n                </div>\n                <div class=\"space-60\"></div>\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.4s\">\n                    <div class=\"box-icon\">\n                            \n                        <i class=\"lnr lnr-star-empty\"></i>\n                    </div>\n                    <h4>Search recipes based on ingredients</h4>\n                    <p>Cook with whatever ingredients you have in your kitchen</p>\n                </div>\n                <div class=\"space-60\"></div>\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.6s\">\n                    <div class=\"box-icon\">\n                        <i class=\"lnr lnr-question-circle\"></i>\n                    </div>\n                    <h4>Less Ingredients? don't know what to cook?</h4>\n                    <p>Hold on! Less is More.! We give you the power to make best recipe with the ingredients you have </p>\n                </div>\n                <div class=\"space-60\"></div>\n            </div>\n            <div class=\"hidden-xs hidden-sm col-md-4\">\n                <figure class=\"mobile-image\">\n                    <img  src=\"../../assets/homecomponentassets/images/header-mobile.png\" alt=\"Feature Photo\">\n                </figure>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"box-icon\">\n                        <i class=\"lnr lnr-volume-high\"></i>\n                    </div>\n                    <h4>Voice enabled cooking experience:</h4>\n                    <p>Cookify provides an interactive way for cooking</p>\n                </div>\n                <div class=\"space-60\"></div>\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.4s\">\n                    <div class=\"box-icon\">\n                        <i class=\"lnr lnr-bicycle\"></i>\n                    </div>\n                    <h4>Ingredients Delivery: </h4>\n                    <p>Want to cook? But don't have ingredients? Don't worry Cookify will provide you with ingredients at your doorstep.</p>\n                </div>\n                <div class=\"space-60\"></div>\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.6s\">\n                    <div class=\"box-icon\">\n                        <i class=\"lnr lnr-cog\"></i>\n                    </div>\n                    <h4>Try a recipe</h4>\n                    <p>With Cookify, you can also Cook a recipe you like</p>\n                </div>\n                <div class=\"space-60\"></div>\n            </div>\n        </div>\n    </div>\n</section>\n    <!-- Feature-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload-profile/file-upload-profile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload-profile/file-upload-profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button color=\"warn\" (click)=\"onClick()\">\n  <mat-icon>file_upload</mat-icon>\n  {{text}}\n</button>\n<br/>\n<ul>\n  <li *ngFor=\"let file of files\">\n    <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>\n    <span id=\"file-label\">\n      {{file.data.name}}\n      <a title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n        <mat-icon>refresh</mat-icon>\n      </a>\n      <button  (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </span>\n  </li>\n</ul>\n<input type=\"file\" id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\"/>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button color=\"warn\" (click)=\"onClick()\">\n    <mat-icon>file_upload</mat-icon>\n    {{text}}\n</button>\n<br/>\n<ul>\n    <li *ngFor=\"let file of files\" [@fadeInOut]=\"file.state\">\n        <mat-progress-bar [value]=\"file.progress\"></mat-progress-bar>\n        <span id=\"file-label\">\n        {{file.data.name}}\n        <a title=\"Retry\" (click)=\"retryFile(file)\" *ngIf=\"file.canRetry\">\n        <mat-icon>refresh</mat-icon></a>\n        <a title=\"Cancel\" (click)=\"cancelFile(file)\" *ngIf=\"file.canCancel\">\n        <mat-icon>cancel</mat-icon></a>\n        </span>\n    </li>\n</ul>\n<input type=\"file\" id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\" accept=\"{{accept}}\" style=\"display:none;\"/>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-5 pt-5 pb-5 footer\" id=\"contact_page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-xs-12 about-company\">\n        <h2>Cookify</h2>\n        <p class=\"pr-5 text-white-50\">Platform to publish and try your recipes</p>\n        <p class=\"\"><small class=\"text-white-50\">© 2019. All Rights Reserved.</small></p>\n      </div>\n      <div class=\"col-lg-3 col-xs-12 links\">\n        <h4 class=\"mt-lg-0 mt-sm-3\">Quick Links</h4>\n        <ul class=\"m-0 p-0\">\n          <li> <a [ngx-scroll-to]=\"'#home_page'\">Home</a></li>\n          <li> <a [ngx-scroll-to]=\"'#trending_page'\">Trending</a></li>\n          <li> <a [ngx-scroll-to]=\"'#about_page'\">About</a></li>\n          <li> <a [ngx-scroll-to]=\"'#features_page'\">Features</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 col-xs-12 location\">\n        <h4 class=\"mt-lg-0 mt-sm-4\">Social Links</h4>\n        <p>Follow us </p>\n        <a  style=\"color: white\" href=\"https://www.linkedin.com/in/barun-sarraf-908403123/\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a>&nbsp;\n        <a  style=\"color: white\" href=\"https://www.instagram.com/designsuiux/\"><i class=\"fab fa-instagram\"></i></a>&nbsp;\n        <i class=\"fab fa-twitter\"></i>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home-Area -->\n<header class=\"home-area overlay\" id=\"home_page\">\n    <div class=\"container\" style=\"margin-top: -14%\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 hidden-sm col-md-4\">\n                <figure class=\"mobile-image wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <img style=\"width:78%;margin-top: 25%\" src=\"../../assets/homecomponentassets/images/header-mobile.png\" alt=\"\">\n                </figure>\n            </div>\n            <div class=\"col-xs-12 col-md-8\" style=\"align-self: center\">\n                <div class=\"space-80 hidden-xs\"></div>\n                <h1 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Start your amazing recipe through cookify.</h1>\n                <div class=\"space-20\"></div>\n                <div class=\"search wow fadeInUp\" data-wow-delay=\"0.8s\">\n                    <form>\n                        <input type=\"text\" #Search class=\"control\" placeholder=\"Search recipe...\" required=\"required\" id=\"serachvlaue\" >\n                        <button class=\"bttn-white active\" style=\"height: 50px;\" type=\"submit\" (click)=\"fn(Search.value)\"><span class=\"lnr lnr-location\"></span>Search</button>\n                        <label class=\"mt10\" for=\"searchvalue\"></label>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n\n<div class=\"service-box wow fadeInUp abcd\" data-wow-delay=\"0.2s\" style=\"position: fixed;z-index: 9999;\">\n    <div style=\"align-items: center; cursor: pointer;\" class=\"publishicon\" [routerLink]=\"['/publish-recipe']\">\n        <img style=\"width: 70%;margin-top: -80px;\" src=\"../../assets/homecomponentassets/images/about-logo.png\" alt=\"About Logo\">\n        <span class=\"badge badge-error\">Publish Recipe</span>\n    </div>\n</div>\n\n\n\n\n<div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n    <div class=\"plus\">\n\n        <button [routerLink]=\"['/possiblerecipes']\"><span class=\"lnr lnr-magic-wand\"></span></button>\n\n    </div>\n</div>\n\n\n<!-- Home-Area-End -->\n<app-trending ></app-trending>\n<app-latest></app-latest>\n<app-popular></app-popular>\n<app-about></app-about>\n<app-features></app-features>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -10%\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-title text-center\">\n          <h5 class=\"title\">Latest Recipes</h5>\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: -25px\"\n      ng2-carouselamos\n      [width]=\"1000\"\n      [items]=recipe\n      (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n      [$item]=\"itemTemplate\"\n      [$prev]=\"prevTemplate\"\n      [$next]=\"nextTemplate\" >\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"team-slide\">\n          <ng-template #prevTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-left\"></i>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template let-item let-i=\"index\" #itemTemplate >\n\n            <app-recipecard  [id]=\"item?.id\" [recipe_name]=\"item.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.duration\" [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedBy\" [rating_value]=\"item?.rating\" ></app-recipecard>\n          </ng-template>\n          <ng-template #nextTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-right\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- MainMenu-Area -->\n<nav class=\"mainmenu-area\" data-spy=\"affix\" data-offset-top=\"200\" style=\"position: fixed\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#primary_menu\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\"  [routerLink]=\"['/homecomponent']\" ><img src=\"../assets/homecomponentassets/images/logo_cookify.png\"  alt=\"Logo\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"primary_menu\"  >\n      <ul class=\"nav navbar-nav mainmenu\" >\n        <li style=\"width: 50%;\" ><input type=\"text\" style=\"border-radius: 50px;padding: 10px;\" #Search class=\"control\" placeholder=\"Search recipes...\" required=\"required\" id=\"serachvlaue\" ></li>\n        <li style=\"margin-left: 10px;\"><button class=\"bttn-default active searching\" mat-mini-fab type=\"submit\" (click)=\"fn(Search.value)\" style=\"background-color: brown; color:white;\"><i class=\"fa fa-search\"></i></button></li>\n        <li><a *ngIf='guestuser==null'[routerLink]=\"['/dashboard']\">Home</a> <a *ngIf='guestuser'[routerLink]=\"['/homecomponent']\">Home</a>  </li>\n        <li style=\"margin-left: 5px\"> <a *ngIf='!guestuser || guestuser==null' style=\"cursor:none;text-decoration: none;\" class=\"onhoverwelcome\" >Welcome {{name}}</a> </li>\n        <li *ngIf='!guestuser || guestuser==null' style=\"margin-left:15px \">\n          <a (click)=\"login()\" style=\"cursor: pointer;\" [matMenuTriggerFor]=\"menu\"><mat-icon >toc</mat-icon></a>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item [routerLink]=\"['/userprofile']\">\n              <mat-icon>account_circle</mat-icon>\n              <span>Profile</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>build</mat-icon>\n              <span>Account Setting</span>\n            </button>\n            <button mat-menu-item (click)=\"logout()\">\n              <mat-icon>power_settings_new</mat-icon>\n              <span>Log Out</span>\n            </button>\n          </mat-menu>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- MainMenu-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body>\n    <ngx-spinner\n    bdColor=\"rgba(51,51,51,0.8)\"\n    size=\"medium\"\n    color=\"#fff\"\n    type=\"ball-scale-multiple\">\n        <p style=\"font-size: 20px; color: white\">signing in..</p>\n    </ngx-spinner>\n    <div class=\"page-wrapper bg-red p-t-100 p-b-100 font-robo\">\n        <div class=\"wrapper wrapper--w960\">\n            <div class=\"card card-2\">\n                <div class=\"card-heading\"></div>\n                <div class=\"card-body\">\n                    <h2 class=\"title\">Login into cookify</h2>\n                    <div>\n                        <input #username  style=\" border: 1px solid grey;padding: 3px; margin-bottom: 5px; \n                        border-radius: 2px;\" class=\"input--style-2\" type=\"text\" placeholder=\"Username\">\n                        <input #password  size=\"2px\" style=\" border: 1px solid grey;padding: 3px; margin-bottom: 5px; \n                        border-radius: 2px;\" class=\"input--style-2\" type=\"password\" placeholder=\"Password\">\n                        <button class=\"btn btn--radius btn--green\" (click)=\"submitlogindetails(username.value,password.value)\" type=\"submit\">Log In</button>\n                    </div>\n                    <p>{{loginstatus}}</p>\n                    <div>\n                        <span>New User? \n                        <a style=\"cursor: pointer;color: blue\" (click)=\"register()\">Register here</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n        \n</body>\n\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"master_page\"  style=\"margin-top: -13%\">\n        <br>\n        <div class=\"container\">\n                <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                        <div class=\"page-title text-center\">\n                                                <h5 class=\"title\">Master Blasts</h5>\n                                        </div>\n                                </div>\n                </div>\n                <div\n                ng2-carouselamos\n                [width]=\"1000\"\n                [items]=masterdata\n                [$item]=\"itemTemplate\"\n                (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n                [$prev]=\"prevTemplate\"\n                [$next]=\"nextTemplate\" >\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                                <div class=\"team-slide\">\n                                        <ng-template #prevTemplate>\n                                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                        <div class=\"box-icon\">\n                                                                <i class=\"lnr lnr-chevron-left\"></i>\n                                                        </div>\n                                                </div>\n                                        </ng-template>\n                                        <ng-template let-item let-i=\"index\" #itemTemplate>\n                                                <app-mastercard [id]=\"item.id\" [master_name]=\"item.master_name\" [image_path]=\"item.image_path\" [cu]=\"item.cusine_name\" ></app-mastercard>\n                                        </ng-template>\n                                        <ng-template #nextTemplate>\n                                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                        <div class=\"box-icon\">\n                                                        <i class=\"lnr lnr-chevron-right\"></i>\n                                                        </div>\n                                                </div>\n                                        </ng-template>\n                                </div>\n                                <div align=\"center\">\n                                        <div class=\"space-50\"></div>\n                                        <a href=\"#\" class=\"bttn-default wow fadeInUp\" data-wow-delay=\"0.5s\">Be a Master</a>\n                                </div>\n                        </div>\n                </div>\n        </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <div style=\"min-width: 300px;max-width: 350px;\" >\n        <div class=\"team-box\" (click)=\"master(id)\">\n               <div class=\"team-image\">\n                              <img src=\"{{image_path}}\"  alt=\"master image\">\n                </div>\n                            <h4>{{master_name}}</h4>\n                            <div style=\"display: flex;\">\n                                 <div *ngFor=\"let x of cu\" style=\"margin-right: 10px \">\n                                <span class=\" badge\" style=\"background-color: #78C257\">{{x}}</span>\n                            </div>\n                </div>\n                           \n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- MainMenu-Area -->\n<nav class=\"mainmenu-area\" data-spy=\"affix\" data-offset-top=\"200\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#primary_menu\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/homecomponent']\"><img src=\"../assets/homecomponentassets/images/logo_cookify.png\" alt=\"Logo\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"primary_menu\">\n            <ul class=\"nav navbar-nav mainmenu linkcursor\">\n                <li class=\"active\"><a [ngx-scroll-to]=\"'#home_page'\">Home</a></li>\n                <li><a [ngx-scroll-to]=\"'#trending_page'\" >Trending</a></li>\n                <li><a [ngx-scroll-to]=\"'#about_page'\" >About</a></li>\n                <li><a [ngx-scroll-to]=\"'#features_page'\"  >Features</a></li>\n                <li><a [ngx-scroll-to]=\"'#contact_page'\">Contacts</a></li>\n            </ul>\n\n            <div class=\"right-button hidden-xs\">\n                <a *ngIf='!loggedin' (click)=\"login()\" style=\"cursor: pointer\" >Login</a>\n                <a *ngIf='loggedin' [routerLink]=\"['/dashboard']\" style=\"cursor: pointer\" >DashBoard</a>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- MainMenu-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popular/popular.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popular/popular.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -10%\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-title text-center\">\n          <h5 class=\"title\">Popular Recipes</h5>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"margin-top: -25px\"\n    ng2-carouselamos\n    [width]=\"1000\"\n    [items]=recipe\n    (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n    [$item]=\"itemTemplate\"\n    [$prev]=\"prevTemplate\"\n    [$next]=\"nextTemplate\" >\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"team-slide\">\n          <ng-template #prevTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-left\"></i>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template let-item let-i=\"index\" #itemTemplate >\n            <app-recipecard  [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" \n            [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.duration\" \n            [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedBy\" [rating_value]=\"item?.rating\" ></app-recipecard>\n          </ng-template>\n          <ng-template #nextTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-right\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 card-spacing\" *ngFor=\"let recipe of recipe\">\n      <mat-card >\n        <mat-card-header>\n          <mat-card-title>{{recipe?.recipeName}}</mat-card-title>\n          <mat-card-subtitle>{{recipe?.cuisine}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image style=\"padding-left: 24px;\" src=\"https://material.angular.io/assets/img/examples/shiba2.jpg(96 kB)\n        https://material.angular.io/assets/img/examples/shiba2.jpg\n        \" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            Recipe Description\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-stroked-button color=\"warn\">View</button>\n          <button mat-stroked-button color=\"warn\">Try</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possiblerecipes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possiblerecipes.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar [name]=\"name\"></app-loggednavbar>\n<mat-card class=\"container ingredientsList\" >\n  <h5 class=\"title\" style=\"margin-left:0;\">Commonly used ingredients</h5>\n  <mat-chip-list >\n    <mat-chip\n      *ngFor=\"let ingredient of commonlyUsedIngredients\"\n      [selectable]=\"selectable\"\n      (click)=\"addToform(ingredient)\">\n      {{ingredient}}\n    </mat-chip>\n  </mat-chip-list>\n</mat-card>\n<div class=\"container \" style=\"padding-top: 40px;\" >\n  <form [formGroup]=\"firstFormGroup\">\n    <mat-form-field class=\"demo-chip-list\">\n      <mat-chip-list #chipList>\n        <mat-chip\n          *ngFor=\"let ingredient of ingredients\"\n          [selectable]=\"selectable\"\n          [removable]=\"removable\"\n          (removed)=\"remove(ingredient)\">\n          {{ingredient}}\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n        </mat-chip>\n        <input title=\"please select items from the search results\"\n          placeholder=\"Input Ingredients...\"\n          #ingredientInput\n          [formControl]=\"ingredientCtrl\"\n          [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"add($event)\"\n        />\n      </mat-chip-list>\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n        <mat-option *ngFor=\"let ingredient of filteredIngredients | async\" [value]=\"ingredient\">\n          {{ ingredient }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n  <div align=\"right\">\n    <div class=\"space-50\"></div>\n    <a  style=\"color: white;cursor: pointer;\" class=\"bttn-default wow fadeInUp\" (click)=\"showPossibleRecipes()\" data-wow-delay=\"0.5s\">Search Recipes</a>\n  </div>\n</div>\n\n\n\n\n<div class=\"container \" style=\"padding-top: 70px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 card-spacing\" *ngFor=\"let recipe of recipe\">\n      <div style=\"max-width: 280px;min-width: 280px;\">\n        <div (click)=\"tr(recipe.id)\" class=\"team-boxrec\" style=\"font-size: 12px;background: white\" >\n          <div>\n            <img src=\"{{image}}\" style=\"width: 100%\" alt=\"recipe image\">\n          </div>\n          <div>\n            <strong><h6>{{recipe.recipeName}}</h6></strong>\n          </div>\n          <div class=\"row\" >\n            <div class=\"col-sm-4\" style=\" color: #78C257\">\n              <strong>{{recipe.cuisine}}</strong>\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: center\">\n              <span class=\"lnr lnr-star\" ></span><b> {{recipe.rating}}</b>\n\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: end\">\n              <strong>{{recipe.cookingTime}} min </strong>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\" style=\"text-align: left;font-size: 12px;\">\n              <strong>Serve: {{recipe.servesFor}}</strong>\n            </div>\n            <div class=\"col-sm-6\" style=\"text-align: end\">\n              <b class=\"position\" style=\"font-size: 12px;\">{{recipe.publishedBy}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n\n\n<app-loggednavbar [name]=\"name\"></app-loggednavbar>\n\n\n<div style=\"height: 100%;\">\n   .\n<div style=\"align-items: center; margin-bottom: -8%;\">\n\n  </div>\n<div style=\"margin-top: 200px; margin-left: 10%; margin-bottom: -20%;margin-right: 10%; padding: 20px; background: #CB202D;\">\n\n\n  <!-- <img src=\"\"/> -->\n\n  <!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n      {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n    </button> -->\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n\n      <!-- First stage of recipe publishing -->\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n              <ng-template matStepLabel>Fill recipe details</ng-template>\n\n\n              <div class=\"row\" >\n                <div class=\"col-sm-4\" >\n                 \n                    <div class=\"container crop\" style=\"padding: 15px;\">\n                      \n                        <img *ngIf=imageview src=\"{{urll1}}\" alt=\"recipe image\" class=\"image\" style=\"width:100%;opacity: 0.5;\">\n                        <img *ngIf=!imageview src=\"{{urll1}}\" alt=\"recipe image\" class=\"image\" style=\"width:100%;opacity: 1;\">\n                        <div class=\"middle\">\n\n                          <div>\n                              <button style=\"padding: 20px;\">\n                                  <app-file-upload (complete)=\"onFileComplete1($event)\"  required ></app-file-upload>\n                              </button>\n                          </div>\n                        </div>\n                      </div>\n                    \n                </div>\n                <div class=\"col-sm-8\">\n                  \n                      <mat-form-field class=\"example-full-width\" >\n                          <input #recipeName matInput placeholder=\"Name\" formControlName=\"firstCtrl\" required maxlength=\"30\">\n                          <mat-hint align=\"end\">{{recipeName.value.length}} / 30</mat-hint>\n                      </mat-form-field>\n                  \n                  <div class=\"row\">\n                    <div class=\"col-sm-8\" >\n                        <mat-form-field class=\"example-full-width\">\n                            <input #cusine type=\"text\" placeholder=\"Cusine\" aria-label=\"Number\" matInput [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                              <mat-autocomplete #auto=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let option1 of filteredOptions1 | async\" [value]=\"option1\">\n                                  {{option1}}\n                                </mat-option>\n                              </mat-autocomplete>\n                            <!-- <input #cusine matInput placeholder=\"Cusine\" > -->\n                          </mat-form-field>\n\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <mat-form-field>\n\n                            <input #type type=\"text\" placeholder=\"Course\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto2\">\n                            <mat-autocomplete #auto2=\"matAutocomplete\">\n                              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                              </mat-option>\n                            </mat-autocomplete>\n\n                          <!-- <mat-label #course>Course</mat-label>\n                          <select #type matNativeControl required>\n                            <option value=\"Starter\">Starters</option>\n                            <option value=\"Main Course\">Main Course</option>\n                            <option value=\"Dessert\">Dessert</option>\n                            <option value=\"Beverage\">Beverage</option>\n                          </select> -->\n                        </mat-form-field>\n                      </div>\n\n                    \n                  </div>\n                   \n                </div>\n\n              </div>\n              <div class=\"row\" style=\"padding: 15px;margin-left: 10px\" >\n                  <mat-form-field class=\"example-full-width\">\n                      <textarea #description matInput placeholder=\"Description\" formControlName=\"firstCtrl\" maxlength=\"50\"></textarea>\n                      <mat-hint align=\"end\">{{description.value.length}} / 50</mat-hint>\n                    </mat-form-field>\n              </div>\n\n                     \n                        \n                     \n\n                       \n                        \n                        <!-- <button>upload</button> -->\n                      \n                        <!-- <mat-form-field class=\"example-full-width\" style=\"padding: 20px;\">\n                          <input matInput placeholder=\"serves\" >\n                        </mat-form-field> -->\n                        <div class=\"col-auto \" >\n\n                        <button class=\"btn btn--radius btn--green pull-right\"  matStepperNext (click)=\"getsuggestedIngredients(recipeName.value,cusine.value,type.value)\" >Next</button>\n\n                        </div>\n                      </form>\n                  </mat-step>\n\n\n          <!-- <mat-form-field>\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n          </mat-form-field> -->\n          <!-- <div>\n            <button mat-button matStepperNext class=\"btn btn--radius btn--green\">Next</button>\n          </div> -->\n\n\n        <!--Second Stage of recipe publishing  -->\n\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Add Ingredients</ng-template>\n\n          <div class=\"container\" >\n          <div class=\"column\" >\n          <mat-form-field>\n            <input #serves matInput placeholder=\"No. of Serves\" formControlName=\"secondCtrl\" required>\n\n          </mat-form-field>\n          <!-- <div class=\"align-right\">\n                  <mat-chip-list aria-label=\"Fish selection\">\n                          <mat-chip>One fish</mat-chip>\n                          <mat-chip>Two fish</mat-chip>\n                          <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                          <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n                        </mat-chip-list>\n          </div> -->\n          <!-- Division for adding ingredients -->\n          <div >\n          <mat-form-field class=\"example-chip-list\" >\n                  <mat-chip-list #chipList>\n                    <mat-chip *ngFor=\"let ingredient of ingredients\"\n                              [selectable]=\"selectable\"\n                              [removable]=\"removable\"\n                              (removed)=\"remove(ingredient)\">\n                              {{ingredient.name}}\n                      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <input  placeholder=\"Add Ingredients...\"\n                    [formControl]=\"ingredientCtrl\"\n                     #ingredientInput\n                    [matAutocomplete]=\"auto3\"\n                    [matChipInputFor]=\"chipList\"\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                    [matChipInputAddOnBlur]=\"addOnBlur\"\n                    (matChipInputTokenEnd)=\"add($event)\"\n                  />\n                  </mat-chip-list>\n                  <mat-autocomplete autoActiveFirstOption #auto3=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                    <mat-option *ngFor=\"let ingredient of filteredIngredients | async\" [value]=\"ingredient\">\n                      {{ ingredient }}\n                    </mat-option>\n                  </mat-autocomplete>\n\n\n<!--                   </mat-chip-list>-->\n                </mat-form-field>\n\n\n              </div>\n          </div>\n          <div class=\"column2\" >\n            <mat-card class=\"container ingredientsList\" style=\"padding-right: 30px;min-width: 300px;\n  max-width: 150px;\">\n              <h5 class=\"title\" style=\"margin-left:0;\">Suggested ingredients </h5>\n              <mat-chip-list >\n                <mat-chip\n                  *ngFor=\"let ingredient of suggestedIngredients\"\n                  [selectable]=\"selectable\"\n\n                  (click)=\"addToform(ingredient)\">\n                  {{ingredient}}\n                  <!--      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>-->\n                </mat-chip>\n              </mat-chip-list>\n            </mat-card>\n\n          </div>\n        </div>\n              <!-- Ingredients addition finished -->\n\n              <!-- Add ingredients quantity  // table creation-->\n              <div style=\"overflow-x:auto;\">\n              <table  *ngFor=\"let ingredient of ingredients\" style=\"font-size:24px \">\n                  <tr>\n                       <td>{{ingredient.name}}</td>\n                       <!-- <td style=\"padding-left: 20px;\"><input #name style=\"width: 40px; border: 2px solid red;\" placeholder={{ingredient.name}}></td> -->\n                       <td style=\"padding-left: 30px; width: 30% ;\"><input #measurement type=\"number\" class=\"form-control\"  placeholder={{ingredient.quantity}} style=\" min-width: 40px;\"></td>\n                       <td style=\"padding-left: 40px; width: 30% ;\"><!-- <input  style=\"width: 40px; border: 2px solid red;\" placeholder={{ingredient.unit}}> -->\n                        <mat-form-field style=\"padding: 20px;\">\n                            <mat-label >Quantity</mat-label>\n                            <select #unit matNativeControl required (change)=\"addIngredient(measurement.value,unit.value);\">\n                              <option value=\" \">Select Unit</option>\n                              <option value=\"tbs\">tbs</option>\n                              <option value=\"bowl\">bowl</option>\n                              <option value=\"gms\">gms</option>\n                              <option value=\"kgs\">kgs</option>\n                            </select>\n                          </mat-form-field>\n                      </td>\n\n                   </tr>\n\n\n\n              </table>\n              </div>\n\n\n          <div class=\"col-auto\">\n\n            <button  matStepperNext class=\"btn btn--radius btn--green pull-right\" style=\"padding: 10px; margin: 10px;\">Next</button>\n            <button  matStepperPrevious class=\"btn btn--radius btn--green pull-right\" style=\"padding: 10px; margin: 10px;\">Back</button>\n          </div>\n        </form>\n      </mat-step>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!-- Section to write recipe procedure -->\n\n      <mat-step>\n        <ng-template matStepLabel>Recipe Procedure</ng-template>\n\n          <div style=\"padding: 3px; background: #CB202D;\">\n\n\n\n          <mat-horizontal-stepper [linear]=\"isLinear\" #stepper >\n\n\n            <mat-step [stepControl]=\"firstFormGroup\" *ngFor=\"let stage of stages\" >\n\n                <span *ngIf='stage.stagevalue'>\n\n                    <div class=\"alert alert-success animi\" role=\"alert\">\n                        We have saved this stage\n                    </div>\n\n\n                   </span>\n\n                   <span *ngIf='!stage.stagevalue'>\n\n\n\n\n\n\n\n              <form [formGroup]=\"firstFormGroup\" >\n\n                <ng-template matStepLabel>New Stage</ng-template>\n\n\n                <div class=\"row\" >\n                    <div class=\"col-sm-4\" >\n                     \n                        <div class=\"container\" style=\"padding: 10px;\">\n                          <div class=\"crop\">\n                              <img *ngIf=stageimageview src=\"{{urll}}\" alt=\"recipe image\" class=\"image\" style=\"width:100%;opacity: 0.5;\">\n                              <img *ngIf=!stageimageview src=\"{{urll}}\" alt=\"recipe image\" class=\"image\" style=\"width:100%;opacity: 1;\">\n                          </div>\n                           \n                            <div class=\"middle\">\n    \n                              <div>\n                                  <button style=\"padding: 20px;\">\n                                      <app-file-upload (complete)=\"onFileComplete($event)\"  required ></app-file-upload>\n                                  </button>\n                              </div>\n                            </div>\n                          </div>\n                        \n                    </div>\n                    <div class=\"col-sm-8\">\n                      \n                        <mat-form-field >\n                            <input matInput #stagename placeholder=\"Stage Name\" formControlName=\"firstCtrl\" required>\n                          </mat-form-field>\n\n                      \n                      <div class=\"row\"   >\n                          <div class=\"col-sm-3\">\n                              <mat-form-field>\n      \n      \n                              <input type=\"number\" matInput #duration placeholder=\"Duration(min)\" formControlName=\"firstCtrl\" required>\n      \n                            </mat-form-field>\n                                </div>\n\n                        <div class=\"col-sm-9\" style=\"text-align: right;\" align=\"right\">\n                            \n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                    <div align=\"right\" style=\"margin-right: 45px\" >\n                                        <button type=\"button\"  matTooltip=\"Stage is a part of recipe \" [matTooltipPosition]=\"positionOptions\" style=\"background: #CB202D;border: none;border-radius: 0\" class=\"btn-outline\" (click)=\"createstage()\" class=\"btn btn-secondary\">Add Stage</button>\n                                        <button type=\"button\" matTooltip=\"Steps are instructions to perform a stage.\" [matTooltipPosition]=\"positionOptions\" style=\"background: #d93038;border: none;border-radius: 0;\" (click)=\"createstep(stage)\" class=\"btn btn-secondary\">Add steps</button>\n                                        <button type=\"button\"  matTooltip=\"Save before proceeding further\" [matTooltipPosition]=\"positionOptions\" style=\"background: #dd464d; border: none;border-radius: 0\" (click)=\"save(stagename.value,duration.value,stage)\" class=\"btn btn-secondary\">Save and Continue</button>\n                                    </div>\n                                      \n                                  </div>\n                          \n    \n                        </div>\n                       \n    \n                        \n                      </div>\n                       \n                    </div>\n    \n                  </div>\n\n\n\n              </form>\n\n\n\n             <ol style=\"padding: 14px;\" >\n                <li *ngFor=\"let step of stage.steps ; let p=index\" >\n              \n                <mat-form-field class=\"example-full-width\">\n                    <input [(ngModel)]=newarr[p] type=\"text\" matInput #Search placeholder=\"Step Content\" formControlName=\"firstCtrl\" required>\n                </mat-form-field>\n                 \n              </li>\n\n                  <!-- <li style=\"width: 50%;\" *ngFor=\"let step of stage.steps ; let p=index\" ><input  [(ngModel)]=newarr[p] type=\"text\" style=\"border-radius: 50px;padding: 10px;\" #Search class=\"control\" placeholder=\"Step Content\" required id=\"serachvalue\" ></li>\n                  <input [(ngModel)]=newarr[p] placeholder=\"Step Content\" required > -->\n\n\n             </ol>\n\n\n\n\n\n            </span>\n\n\n\n            </mat-step>\n\n\n\n          </mat-horizontal-stepper>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n           <!-- <h3>Give Procedure for recipe</h3> -->\n\n           <!--BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN -->\n           <!-- <ul>\n                <li *ngIf=\"n==1 || n==2 || n==3 || n==4 || n==5 \">\n\n                  <input #stageDesc matInput placeholder=\"stage Description\">\n                  <input #duration matInput placeholder=\"Duration\">\n                  <app-file-upload (complete)=\"onFileComplete($event)\" ></app-file-upload>\n                  <img src=\"{{urll}}\"/>\n\n\n                  <ul *ngIf=\"n==1 || n==2 || n==3 || n==4 || n==5 \">\n                  <li  *ngFor=\"let link of links\">\n                    {{link}}<br>\n\n                    <mat-form-field class=\"example-full-width\" >\n                          <textarea #step matInput ></textarea>\n\n                    </mat-form-field>\n                       <br/>\n\n\n\n\n\n\n\n                    <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink();addProcess(step.value)\" style=\"margin:20px;\" >\n                      <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n                    </button>\n\n                    <button (click)=\"addProcess(step.value)\" class=\"btn btn--radius btn--green\">Finish adding steps</button>\n\n\n\n                </li>\n\n                </ul>\n\n                <button (click)=\"addStages(stageDesc.value,duration.value);adda();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n              </li>\n              </ul>\n\n              <br/>\n              <ul>\n              <li *ngIf=\" n==2 || n==3 || n==4 || n==5 \">\n\n                <input #stageDesc1 matInput placeholder=\"stage Description\">\n                <input #duration1 matInput placeholder=\"Duration\">\n                <app-file-upload (complete)=\"onFileComplete($event)\" ></app-file-upload>\n                <img src=\"{{urll1}}\"/>\n\n                <ul *ngIf=\" n==2 || n==3 || n==4 || n==5 \">\n                <li  *ngFor=\"let link of links1\">\n                  {{link}}<br>\n\n                  <mat-form-field class=\"example-full-width\" >\n                        <textarea #step1 matInput ></textarea>\n\n                  </mat-form-field>\n                     <br/>\n\n\n\n\n\n\n\n                  <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink1();addProcess1(step1.value)\" style=\"margin:20px;\" >\n                    <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n                  </button>\n\n                  <button (click)=\"addProcess1(step1.value)\" class=\"btn btn--radius btn--green\">Finish adding steps</button>\n\n\n                <button (click)=\"addStages1(stageDesc1.value,duration1.value);adda1();addProcess1(step1.value)\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n              </li>\n\n              </ul>\n              <button (click)=\"addStages1(stageDesc1.value,duration1.value);adda1();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n\n            </li>\n          </ul>\n\n            <br/>\n            <ul>\n            <li *ngIf=\" n==3 || n==4 || n==5 \">\n\n              <input #stageDesc2 matInput placeholder=\"stage Description\">\n              <input #duration2 matInput placeholder=\"Duration\">\n              <app-file-upload (complete)=\"onFileComplete($event)\" ></app-file-upload>\n              <img src=\"{{urll2}}\"/>\n\n              <ul *ngIf=\" n==3 || n==4 || n==5 \">\n              <li  *ngFor=\"let link of links2\">\n                {{link}}<br>\n\n                <mat-form-field class=\"example-full-width\" >\n                      <textarea #step2 matInput ></textarea>\n\n                </mat-form-field>\n                   <br/>\n\n\n\n\n\n\n\n                <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink2();addProcess2(step2.value)\" style=\"margin:20px;\" >\n                  <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n                </button>\n                <button (click)=\"addProcess2(step2.value)\" class=\"btn btn--radius btn--green\">Finish adding steps</button>\n\n              </li>\n            </ul>\n\n\n              <button (click)=\"addStages2(stageDesc2.value,duration2.value);adda2();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n            </li>\n\n            </ul>\n\n          <br/>\n          <ul>\n          <li *ngIf=\" n==4 || n==5 \">\n\n            <input #stageDesc3 matInput placeholder=\"stage Description\">\n            <input #duration3 matInput placeholder=\"Duration\">\n            <app-file-upload (complete)=\"onFileComplete($event)\" ></app-file-upload>\n            <img src=\"{{urll3}}\"/>\n\n            <ul *ngIf=\" n==4 || n==5 \">\n            <li  *ngFor=\"let link of links3\">\n              {{link}}<br>\n\n              <mat-form-field class=\"example-full-width\" >\n                    <textarea #step3 matInput ></textarea>\n\n              </mat-form-field>\n                 <br/>\n\n\n\n\n\n\n\n              <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink3();addProcess3(step3.value)\" style=\"margin:20px;\" >\n                <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n              </button>\n              <button (click)=\"addProcess3(step3.value)\" class=\"btn btn--radius btn--green\">Finish adding steps</button>\n\n            </li>\n          </ul>\n\n            <button (click)=\"addStages3(stageDesc3.value,duration3.value);adda3();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n          </li>\n\n          </ul>\n\n        <br/>\n        <ul>\n        <li *ngIf=\" n==5 \">\n\n          <input #stageDesc4 matInput placeholder=\"stage Description\">\n          <input #duration4 matInput placeholder=\"Duration\">\n          <app-file-upload (complete)=\"onFileComplete($event)\" ></app-file-upload>\n          <img src=\"{{urll4}}\"/>\n\n          <ul *ngIf=\" n==5 \">\n          <li  *ngFor=\"let link of links4\">\n            {{link}}<br>\n\n            <mat-form-field class=\"example-full-width\" >\n                  <textarea #step4 matInput ></textarea>\n\n            </mat-form-field>\n               <br/>\n\n\n\n\n\n\n\n            <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink4();addProcess4(step4.value)\" style=\"margin:20px;\" >\n              <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n            </button>\n            <button (click)=\"addProcess4(step4.value)\" class=\"btn btn--radius btn--green\">Finish adding steps</button>\n\n          </li>\n        </ul>\n\n          <button (click)=\"addStages4(stageDesc4.value,duration4.value);adda4();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n        </li>\n\n        </ul> -->\n\n\n        <!--BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN BARUN -->\n\n      <br/>\n<!--\n              <li *ngIf=\" n==2 || n==3 || n==4 || n==5  \">\n\n                  <input #stageDesc1 matInput placeholder=\"Stage Description\">\n                  <input #duration1 matInput placeholder=\"Duration\">\n                  <app-file-upload (complete)=\"onFileComplete1($event)\" ></app-file-upload>\n\n                <ul>\n                <li  *ngFor=\"let link of links1\">\n                  {{link}}\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea #step1 matInput ></textarea>\n                  </mat-form-field>\n\n                     <br/>\n\n\n\n\n\n\n         <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink1();addProcess1(step1.value)\" style=\"margin:20px;\" >\n                  <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n              </button>\n\n\n\n\n              <button (click)=\"addStages1(stageDesc1.value,duration1.value);adda1();addProcess1(step1.value)\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a1>0\"> Stage Confirmed</a> <a *ngIf=\"a1==0\">  Confirm the Stage</a></button>\n\n\n\n            <br/>\n            </ul>\n\n\n\n\n            <a *ngIf=\"n==3 || n==4 || n==5  \">\n\n                <input #stageDesc2 matInput placeholder=\"stage Description\">\n                <input #duration2 matInput placeholder=\"Duration\">\n                <app-file-upload (complete)=\"onFileComplete2($event)\" ></app-file-upload>\n\n\n              <a  *ngFor=\"let link of links2\">\n                {{link}}</a>\n                  <mat-form-field class=\"example-full-width\">\n                      <textarea #step2 matInput ></textarea>\n                    </mat-form-field>\n                   <br/>\n       <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink2();addProcess2(step2.value)\" style=\"margin:20px;\" >\n               <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n            </button>\n\n            <button (click)=\"addStages2(stageDesc2.value,duration2.value);adda2();addProcess2(step2.value)\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a2>0\"> Stage Confirmed</a> <a *ngIf=\"a2==0\">  Confirm the Stage</a></button>\n\n          </a>\n\n          <br/>\n\n\n\n\n          <a *ngIf=\" n==4 || n==5  \">\n\n              <input #stageDesc3 matInput placeholder=\"stage Description\">\n              <input #duration3 matInput placeholder=\"Duration\">\n              <app-file-upload (complete)=\"onFileComplete3($event)\" ></app-file-upload>\n\n\n            <a  *ngFor=\"let link of links3\">\n              {{link}}</a>\n                <mat-form-field class=\"example-full-width\">\n                    <textarea #step3 matInput ></textarea>\n                  </mat-form-field>\n                 <br/>\n     <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink3();addProcess3(step3.value)\" style=\"margin:20px;\" >\n              <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n          </button>\n\n          <button (click)=\"addStages3(stageDesc3.value,duration3.value);adda3();addProcess3(step3.value)\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a3>0\"> Stage Confirmed</a> <a *ngIf=\"a3==0\">  Confirm the Stage</a></button>\n\n        </a>\n\n        <br/>\n\n\n\n\n        <a *ngIf=\" n==5  \">\n\n            <input #stageDesc4 matInput placeholder=\"stage Description\">\n            <input #duration4 matInput placeholder=\"Duration\">\n            <app-file-upload (complete)=\"onFileComplete4($event)\" ></app-file-upload>\n\n\n          <a  *ngFor=\"let link of links4\">\n            {{link}}</a>\n              <mat-form-field class=\"example-full-width\">\n                  <textarea #step4 matInput ></textarea>\n                    <br>\n                </mat-form-field>\n               <br/>\n   <button  type=\"button\" class=\"btn btn-warning\" (click)=\"addLink4();addProcess4(step4.value)\" style=\"margin:20px;\" >\n            <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n        </button>\n\n\n        <button (click)=\"addStages4(stageDesc4.value,duration4.value);adda4();addProcess4(step4.value)\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a4>0\"> Stage Confirmed</a> <a *ngIf=\"a4==0\">  Confirm the Stage</a></button>\n\n\n      </a> -->\n\n\n\n\n<!--\n                 <br/> <button type=\"submit\" (click)=\"addn();\">Add Stage</button> -->\n\n\n        <div class=\"col-auto\">\n          <span>*make sure you save your stages before submitting</span>\n          <button  (click)=\"publishRecipe(recipeName.value, description.value,cusine.value,type.value,serves.value)\" class=\"btn btn--radius btn--green pull-right\"   style=\"padding: 10px; margin: 10px;\" [routerLink]=\"['/dashboard']\"  >Submit</button>\n          <!-- <button  (click)=\"stepper.reset()\" class=\"btn btn--radius btn--green pull-right\" style=\"padding: 10px; margin: 10px;\">Reset</button> -->\n          <button  matStepperPrevious class=\"btn btn--radius btn--green pull-right\" style=\"padding: 10px;margin: 10px;\">Back</button>\n\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n\n\n\n  </div>\n</div>\n</body>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\" class=\"body\">\n  <div  mat-dialog-title class=\"body\">Hope you enjoyed cooking!</div>\n  <div mat-dialog-content class=\"body\">\n    <p id=\"rate\">Rate Recipe</p>\n    <rating [max]=\"5\" #rating [customTemplate]=\"tt\"></rating>\n    <ng-template #tt let-i=\"index\" let-v=\"value\">\n      <button class=\"btn btn-{{i < v ? 'warning' : 'default'}}\">\n        {{i < v ? '&#9733;' : '&#9734;'}}\n      </button>\n    </ng-template>\n    <p>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Add comments here</mat-label>\n        <input matInput placeholder=\"Placeholder\" #comments>\n        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n        <mat-hint>Your comments are valuable</mat-hint>\n      </mat-form-field>\n    </p>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button class=\"btn btn-warning\" [mat-dialog-close]=\"rating.value\" cdkFocusInitial (click)=onClick(rating.value,comments.value)>Rate</button>\n    <button mat-button class=\"btn btn-outline-danger\" (click)=\"onNoClick()\" style=\"color: red;\">Rate Later</button>\n  </div>\n</section>\n  \n<br><br>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 300px;min-width: 250px;\">\n    <div (click)=\"tr(id)\" class=\"team-boxrec\" >\n            <div class=\"crop\">\n                    <img src=\"{{image_path}}\" style=\"width: 100%;max-width: 600px;max-height: 350px\" alt=\"\">\n            </div>\n\n            <div>\n            <h5 style=\"color: #CB2520;\">  <strong>{{recipe_name}}</strong></h5>\n        </div>\n        <div class=\"row\" >\n            <div class=\"col-sm-4\" style=\" color: #78C257\">\n                <strong>{{cusine_name}}</strong>\n            </div>\n                <div class=\"col-sm-4\" style=\"text-align: center\">\n                <span class=\"lnr lnr-star\" ></span><b> {{rating_value}}</b>\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: end\">\n                <strong>{{duration}} min</strong>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6\" style=\"text-align: left\">\n                <strong>Serves: {{serve}}</strong>\n            </div>\n            <div class=\"col-sm-6\" style=\"text-align: end\">\n                <b class=\"position\" style=\"font-size: 14px;\">{{master_name}}</b>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar [name]=\"name\" [guestuser]=\"guestuser\"></app-loggednavbar>\n<div class=\"container\" style=\"padding-top: 100px\" >\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <img mat-card-image src=\"{{recipedetail.recipeImage}}\" alt=\"Photo of a Shiba Inu\">\n    </div>\n    <div class=\"col-sm-8 abcd\">\n      <mat-card>\n        <mat-card-title> {{recipedetail.recipeName}}</mat-card-title>\n        <mat-card-content>\n          <div class=\"row\">\n            <div class=\"col-sm-3\" style=\" color: #78C257;text-align: left\">\n              <strong>Recipe By: {{recipedetail.publishedBy}}</strong>\n            </div>\n            <div class=\"col-sm-3\" style=\"color: #78C257;text-align:left\">\n              <span class=\"lnr lnr-star\" ></span><b> {{recipedetail.rating | number:'.1-2'}}</b>\n              </div>\n            <div class=\"col-sm-3\" style=\" color: #78C257;text-align: left\">\n              <strong>Tried By: {{viewcount}}</strong>\n            </div>\n            <div class=\"col-sm-3\" style=\"color: #78C257;text-align: left\">\n              <strong>Duration:{{recipedetail.duration}}</strong>\n            </div>\n          </div>\n        </mat-card-content>\n\n        <mat-card-subtitle></mat-card-subtitle>\n        <mat-card-subtitle></mat-card-subtitle>\n\n        <mat-card-content style=\"margin: auto\">\n          <p >\n            {{recipedetail.description}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button style=\"color:#eb4653\" (click)=\"like()\">Add To Favourites</button>\n          <button mat-button style=\"color:#eb4653\" (click)=\"navtopage(1)\">Try the Recipe</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\" style=\"margin-top: 10px;\">\n  <div clas=\"row\">\n    <div class=\"col-sm-3\">\n      <div style=\"margin-left:95px; margin-bottom:10px ;\" >\n        <button type=\"button\" (click)=\"navtopage(0)\" class=\"btn btn-success movemove\" style=\"text-align: center; padding-left: 10px;\">Order Ingredients</button>\n      </div>\n      <mat-card class=\"example-card\" >\n        <mat-card-title style=\"text-align: center;background:#434345;color: white\">Ingredients\n        </mat-card-title>\n        <mat-card-content>\n          <div class=\"row\">\n            <div class=\"col-sm-12\" *ngFor=\"let view of ingredients\" >\n                <mat-card style=\"margin-bottom: 5px;\"> \n                  <mat-card-content>\n                    <p class=\"card-text\" style=\"text-align: center;color:#eb1e2c\" >{{view.ingredients|titlecase}}  </p>\n                    <p  style=\"text-align: center\" *ngIf=\"view.regional\">{{\"Also known as \"+ view.regional}}</p>\n                  </mat-card-content>\n                </mat-card>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div class=\"col-sm-9\">\n      <mat-card class=\"example-card\" >\n        <mat-card-title style=\"text-align:center;background:#434345;color: white\">Procedure\n        </mat-card-title>\n        <mat-card-content>\n          <div class=\"row\" >\n            <div class=\"col-sm-12\"   >\n              <mat-card  >\n                <div *ngFor=\"let view of recipedetail.procedure.stages;let i=index\" style=\"margin-bottom: 0px;\">\n                  <mat-card-subtitle>\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <p  style=\"color:#eb4653;text-align: left\"> Stage {{i+1}}-<strong>{{view.stageName |titlecase}} </strong> </p>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <p  style=\"color: #78C257;text-align:left\"><strong>Duration:</strong>{{view.duration}} min  </p> \n                      </div>                  \n                    </div>\n                  </mat-card-subtitle>\n                  <ol> \n                    <mat-card-content *ngFor=\"let cc of view.steps\" style=\"text-align:left;margin-left: 50px\">\n                    <li>{{cc.stepContent}}</li>\n                    </mat-card-content>\n                  </ol>\n                </div>\n              </mat-card>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" style=\"margin-top: 10px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div >\n        <div style=\"background: #434345\">\n          <div style=\"color: antiquewhite;padding-top: 10px;padding-bottom: 10px;padding-left: 5px;\">\n            Comments\n          </div>\n        </div>\n\n        <mat-card style=\"margin-top: 15px;\">\n          <div *ngFor=\"let view of viewcomments\">\n            <mat-card-header >\n              <div mat-card-avatar style=\"background-image: url(https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg);background-size: cover;\"></div>\n              <mat-card-title style=\"color: #eb4653;font-size: 15px;\">{{view.username | titlecase}}</mat-card-title>\n              <mat-card-subtitle style=\"color: #78C257\">{{view.comment}}</mat-card-subtitle>\n            </mat-card-header>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommeded/recommeded.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommeded/recommeded.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -100px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-left\">\n                    <h5 class=\"title\" style=\"margin-left: 100px\">Recommeded By Favourite Cuisines</h5>\n                </div>\n            </div>\n        </div>\n        <div style=\"margin-top: -25px\"\n        ng2-carouselamos\n        [width]=\"1200\"\n        [items]=recipe\n        (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n        [$item]=\"itemTemplate\"\n        [$prev]=\"prevTemplate\"\n        [$next]=\"nextTemplate\" >\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n                <div class=\"team-slide\">\n                    <ng-template #prevTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-left\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                    <ng-template let-item let-i=\"index\" #itemTemplate >\n                        <app-dashboardrecipecard  [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.duration\" [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedBy\" [rating_value]=\"item?.rating\" ></app-dashboardrecipecard>\n                    </ng-template>\n                    <ng-template #nextTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyactivities/recommendedbyactivities.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyactivities/recommendedbyactivities.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -22%\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-title text-left\" style=\"margin-left: 100px\">\n          <h5 class=\"title\">Recommended From Your Previous Activities</h5>\n        </div>\n      </div>\n    </div>\n    <div style=\"margin-top: -25px\"\n    ng2-carouselamos\n    [width]=\"1200\"\n    [items]=recipe\n    (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n    [$item]=\"itemTemplate\"\n    [$prev]=\"prevTemplate\"\n    [$next]=\"nextTemplate\" >\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12\">\n        <div class=\"team-slide\">\n          <ng-template #prevTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-left\"></i>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template let-item let-i=\"index\" #itemTemplate >\n            <app-dashboardrecipecard  [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item.cuisine\" [serve]=\"item.servesFor\" [duration]=\"item.duration\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-dashboardrecipecard>\n          </ng-template>\n          <ng-template #nextTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n              <div class=\"box-icon\">\n                <i class=\"lnr lnr-chevron-right\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: 60px;\">\n    <br>\n    <div class=\"container\" style=\"margin-top: 0px;\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-center\">\n                    <h5 class=\"title\">Recommended Recipe</h5>\n                    <h3 class=\"dark-color\">Based on your history</h3>\n                    <div class=\"space-60\"></div>\n                </div>\n            </div>\n        </div>\n        <div\n        ng2-carouselamos\n        [width]=\"1000\"\n        [items]=recipe\n        (onSelectedItem)=\"tr($event.item.id)\"\n        [$item]=\"itemTemplate\"\n        [$prev]=\"prevTemplate\"\n        [$next]=\"nextTemplate\" >\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"team-slide\">\n                    <ng-template #prevTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-left\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                    <ng-template let-item let-i=\"index\" #itemTemplate >\n                        <app-recipecard [recipe_name]=\"item.recipeName\" [image_path]=\"item.recipeImage\" [cusine_name]=\"item.cusine\" [serve]=\"item.servesFor\" [duration]=\"item.duration\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-recipecard>\n                    </ng-template>\n                    <ng-template #nextTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"page-wrapper bg-red p-t-70 p-b-100 font-robo\">\n        <div class=\"wrapper wrapper--w960\">\n            <div class=\"card card-2\">\n                <div class=\"card-heading\"></div>\n                <div class=\"card-body\">\n                    <h3 class=\"title\">Register with cookify</h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #name matInput placeholder=\"Name\" name=\"name\" [formControl]=\"nameFormControl\"\n                                        [errorStateMatcher]=\"matcher\">\n                                <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n                                    Name is <strong>required</strong>\n                                </mat-error>\n                                <mat-error *ngIf=\"nameFormControl.hasError('pattern')\">\n                                    Name pattern is <strong>invalid</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #email matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                                        [errorStateMatcher]=\"matcher\">\n                                <mat-error *ngIf=\"emailFormControl.hasError('pattern') && !emailFormControl.hasError('required')\">\n                                    Please enter a valid email address\n                                </mat-error>\n                                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                    Email is <strong>required</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #username matInput placeholder=\"Username\" name=\"userName\" [formControl]=\"userNameFormControl\"\n                                        [errorStateMatcher]=\"matcher\" maxlength=\"12\">\n                                <mat-error *ngIf=\"userNameFormControl.hasError('required')\">\n                                    Username is <strong>required</strong>\n                                </mat-error>\n                                <mat-error *ngIf=\"userNameFormControl.hasError('pattern')\">\n                                    Username can only contain <strong>alphanumerics, underscores and hyphen</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input type=\"password\" #password matInput placeholder=\"Password\" name=\"password\" [formControl]=\"passwordFormControl\"\n                                        [errorStateMatcher]=\"matcher\">\n                                <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                                    Password is <strong>required.</strong>\n                                </mat-error>\n                                <mat-error *ngIf=\"passwordFormControl.hasError('pattern')\">\n                                    Password is <strong>invalid.</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #city matInput placeholder=\"City\" name=\"city\" [formControl]=\"cityFormControl\"\n                                        [errorStateMatcher]=\"matcher\">\n                                <mat-error *ngIf=\"cityFormControl.hasError('required')\">\n                                    City is <strong>required</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #age matInput placeholder=\"Age\" name=\"age\" [formControl]=\"ageFormControl\"\n                                        [errorStateMatcher]=\"matcher\" >\n                                <mat-error *ngIf=\"ageFormControl.hasError('required')\">\n                                    Age is <strong>required</strong>\n                                </mat-error>\n                                <mat-error *ngIf=\"ageFormControl.hasError('pattern')\">\n                                        Age can only be<strong> a number</strong>\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input #st matInput type=\"text\" placeholder=\"State\" name=\"state\"  (mouseup)=\"getStateAndCountry($event,city.value)\" value={{state}}  [formControl]=\"myControl1\" [matAutocomplete]=\"auto\">\n                                  <mat-autocomplete #auto=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let option1 of filteredOptions1 | async\" [value]=\"option1\">\n                                      {{option1}}\n                                    </mat-option>\n                                  </mat-autocomplete>\n                                </mat-form-field>\n                        </div>\n                        <div class=\"col-5\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input #ct matInput type=\"text\" placeholder=\"Country\" name=\"country\" value={{country}}>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <form class=\"row-space\" [formGroup]=\"genderControl\">\n                        <div>\n                            <label for=\"gender\">Gender</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <label class=\"form-check-label\">\n                                <input formControlName=\"gender\" class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio1\"  value=\"male\" >Male\n                            </label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <label class=\"form-check-label\">\n                                <input  formControlName=\"gender\" class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio2\" value=\"female\">Female\n                            </label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <label class=\"form-check-label\">\n                                <input  formControlName=\"gender\" class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio3\" value=\"other\">Other\n                            </label>\n                        </div>\n                    </form>\n                    <button class=\"btn btn--radius btn--green\" type=\"submit\" [disabled]=\"nameFormControl.hasError('required') || nameFormControl.hasError('pattern') || emailFormControl.hasError('required')|| emailFormControl.hasError('pattern') || userNameFormControl.hasError('required') || userNameFormControl.hasError('pattern')|| passwordFormControl.hasError('required')|| passwordFormControl.hasError('pattern')\" (click)=\"registerUser(name.value, st.value, email.value,username.value,password.value,city.value,age.value,genderControl.value,ct.value)\">Next</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-component/search-component.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-component/search-component.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"container\" style=\"margin-top: 50px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\" *ngFor=\"let view of searchResult  \">\n      <div style=\"max-width: 350px;min-width: 300px;\">\n        <div (click)=\"tr(view.id)\" class=\"team-boxrec\">\n          <div>\n            <img src=\"{{image_path}}\" style=\"width: 100%\" alt=\"\">\n          </div>\n          <div>\n            <strong><h4>{{view.recipeName}}</h4></strong>\n          </div>\n          <div class=\"row\" >\n            <div class=\"col-sm-4\" style=\" color: #78C257\">\n              <strong>{{view.cuisine}}</strong>\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: center\">\n              <span class=\"lnr lnr-star\" ></span><b> {{view.rating|number:'.1-2'}}</b>\n            </div>\n            <div class=\"col-sm-4\" style=\"text-align: end;color: #78C257\">\n              <strong>{{view.duration}}</strong>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\" style=\"text-align: left\">\n              <strong>Serve: {{view.servesFor}}</strong>\n            </div>\n            <div class=\"col-sm-6\" style=\"text-align: end\">\n              <b class=\"position\" style=\"font-size: 14px;\">{{view.publishedBy}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\" style=\"background: #CB202D;padding-top: 70px;\" >\n    <div class=\"card-header\" style=\"background: #CB202D;text-align: center;color:white\" >Thanks For Registering</div>\n    <div class=\"card-body\" style=\"background:white\" >\n        <p style=\"text-align: center;color:#eb4653\">Choose Your Favourite Cuisines</p>\n        <a href=*><p  style=\"text-align: right;color:#434345;\">skip </p>\n        </a>\n        <form [formGroup]=\"recipeform\" >\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\" *ngFor=\"let view of reposearch;let i=index\">\n                        <div class=\"card-header\" style=\"background:#CB202D;; color:white\" >{{view.cuisine}}</div>\n                        <div class=\"card-body\">\n                            <img src={{view.image}} class=\"rounded-circle\" width=\"70%\" height=\"120px\">\n                        </div>\n                        <input type=\"checkbox\" style=\"align-content: right\" id={{i}} value=\"view\" (change)=\"onChange(view,$event.target.checked)\" >\n                    </div>\n                </div>\n            </div>\n            <a  class=\"btn btn-primary\"  style=\"margin:auto\"  (click)=\"addfinal()\">REGISTER</a>\n        </form>\n    </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map> -->\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<p>latitude: {{lat}}</p>\n<p>longitude: {{lng}}</p>\n\n<button (click)=\"findme()\">findme</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -10%\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-center\">\n                    <h5 class=\"title\">Trending Recipe</h5>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-top: -25px\"\n        ng2-carouselamos\n        [width]=\"1000\"\n        [items]=recipe\n        (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n        [$item]=\"itemTemplate\"\n        [$prev]=\"prevTemplate\"\n        [$next]=\"nextTemplate\" >\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"team-slide\">\n                    <ng-template #prevTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-left\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item let-i=\"index\" #itemTemplate >\n                        <app-recipecard  [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.duration\" [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedBy\" [rating_value]=\"item?.rating\" ></app-recipecard>\n                    </ng-template>\n\n\n                    <ng-template #nextTemplate>\n                        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/orderpreview/orderpreview.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/orderpreview/orderpreview.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\"\n>\n<p style=\"font-size: 20px; color: white\">Finding near by delivery man...</p>\n</ngx-spinner>\n<div style=\"margin-bottom: 125px;\">\n<app-loggednavbar [name]=\"\"></app-loggednavbar>\n</div>\n<mat-horizontal-stepper [linear]=false #stepper style=\"margin-top: -1%;\">\n      <ng-template matStepLabel>Basket</ng-template>\n<mat-step>\n    <table mat-table [dataSource]=\"order\" class=\"mat-elevation-z8\">\n\n  <!-- No. Columa2n -->\n  <!-- <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let i\"> {{i.}} </td>\n  </ng-container> -->\n\n  <!-- Ingredient Column -->\n  <ng-container matColumnDef=\"ingredient\" >\n    <th mat-header-cell *matHeaderCellDef> Ingredient </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Quantity Column -->\n  <ng-container matColumnDef=\"quantity\">\n    <th mat-header-cell *matHeaderCellDef> Quantity </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n  </ng-container>\n\n  <!-- Unit Column -->\n  <ng-container matColumnDef=\"unit\">\n    <th mat-header-cell *matHeaderCellDef> Unit </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.unit}} </td>\n  </ng-container>\n\n  <!-- Row  -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<div class=\"button\">\n  <button class=\"confirmIngredients\" (click)=\"navtopage(0)\"  mat-raised-button ><span style=\"padding-right: 5px;\"> Add more Ingredients </span></button>\n  <button class=\"confirmIngredients\" mat-raised-button matStepperNext>Confirm Ingredients</button>\n</div>\n\n</mat-step>\n\n\n\n  <mat-step [stepControl]=\"secondFormGroup\" [completed]=true>\n      <ng-template matStepLabel>Address</ng-template>\n\n    <div id=\"addr\">\n\n      <mat-card class=\"example-card\">\n      \n        <label id=\"example-radio-group-label\">Select your Address</label>\n        <mat-radio-group #radio aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"  [(ngModel)]=\"selectedAddress\">                 \n             <mat-radio-button  class=\"example-radio-button\"  *ngFor=\"let address of addresses;let i=index\" [value]=\"i\" >\n                 <!-- <mat-card (click)=fn()>\n            <mat-card-title > {{address.addressName}} </mat-card-title>\n            <mat-card-subtitle *ngIf=\"display\">{{address.name}}</mat-card-subtitle>\n                     \n               </mat-card> -->\n\n               <mat-accordion>\n\n\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{address.addressName}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{address.name}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>{{address.location}},</p>\n    <p>{{address.city}},{{address.state}}-{{address.pin}}</p>\n    <p>{{address.mobileNumber}}</p>\n  </mat-expansion-panel>\n               </mat-accordion>\n            \n          </mat-radio-button>\n          \n        </mat-radio-group>\n        <button mat-raised-button color=\"primary\" matStepperNext (click)=submit(selectedAddress)>submit</button>\n        \n\n\n\n\n\n      \n       \n     \n\n      </mat-card>\n      <mat-card class=\"example-card\">\n          <mat-accordion>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Add Address \n                  </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n                  <mat-radio-group\n                  aria-labelledby=\"example-radio-group-label\"\n                  class=\"example-radio-group2\"\n                  [(ngModel)]=\"favoriteSeason\">\n                  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n                    {{season}}\n                  </mat-radio-button>\n                </mat-radio-group>\n                <!-- <div>{{favoriteSeason}}</div> -->\n        \n        <form [formGroup]=\"secondFormGroup\">\n            <!-- <mat-radio-group aria-label=\"Select an option\">\n                <mat-radio-button [(ngModel)]=\"adde\" value=\"Work\">Work</mat-radio-button> <br>\n                <mat-radio-button [(ngModel)]=\"adde\" value=\"Home\">Home</mat-radio-button> <br>\n                <mat-radio-button [(ngModel)]=\"adde\" value=\"true\" >Other</mat-radio-button>\n                 <input name=\"options\"  [(ngModel)]=\"options\" type=\"radio\" [value]=\"true\" [checked]=\"options\"/> Yes\n\n                <input name=\"options\"[(ngModel)]=\"options\" type=\"radio\" [value]=\"false\" [checked]=\"!options\"/> No\n                \n               <div *ngIf=adde>\n                   Hello\n               </div>\n              </mat-radio-group> <br> -->\n           \n            \n            <mat-form-field class=\"form1\">   \n                <textarea #addressName matInput placeholder=\"Address Name\"  formControlName=\"secondCtrl\" value=\"{{favoriteSeason}}\" required>{{favoriteSeason}}</textarea>\n              </mat-form-field><br>\n              <!-- <mat-form-field class=\"form1\">   \n                <textarea #addressName matInput placeholder=\"Address Name\"  formControlName=\"secondCtrl\" value=\"{{favoriteSeason}}\" required>{{favoriteSeason}}</textarea>\n              </mat-form-field><br> -->\n          <mat-form-field class=\"form1\">\n            <textarea #name matInput placeholder=\"Name\"  formControlName=\"secondCtrl\" required></textarea>\n          </mat-form-field>\n          <br>\n          <mat-form-field class=\"form1\">\n            <input #mobile matInput placeholder=\"Mobile No\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input #address matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input #city matInput placeholder=\"City / District\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input #state matInput placeholder=\"State\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input #pin matInput placeholder=\"Pin Code\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n        </form>\n        <button mat-button id=\"saveAddress\" (click)=\"saveAddress(addressName.value,name.value,mobile.value,address.value,city.value,state.value,pin.value)\">Save</button>\n        <button mat-button id=\"cancelAddress\" (click)=\"cancelAddress()\">Cancel</button>\n      </mat-expansion-panel>\n    </mat-accordion>\n  \n      </mat-card>\n\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Summary</ng-template>\n\n    <div *ngIf='!orderplaced'>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext (click)=onClick()>Confirm</button>\n    </div>\n\n    \n\n    <div *ngIf='orderplaced'>\n      \n      \n   \n    <div style=\"max-width: 100%;min-width: 250px;padding: 30px;margin-top: -5%;\">\n\n     \n    \n\n        <div (click)=\"tr(id)\" class=\"team-boxrec\" >\n            <p>Order Placed</p>\n          <div style=\"text-align: right\">\n              <button type=\"button\"  (click)=\"getbacktocooking()\" matTooltip=\"Stage is a part of recipe \" [matTooltipPosition]=\"positionOptions\" style=\"background: #CB202D;border: 0;\" class=\"btn-outline\" class=\"btn btn-secondary\">let's get back to cooking</button>\n             \n          </div>\n            \n               \n                <div>\n                <h5 style=\"color: #CB2520;\">  <strong>Order Id: {{od.orderId}} </strong></h5>\n                </div>\n    \n    \n    \n                <div class=\"row\" >\n                    <div class=\"col-sm-4\">\n                        <strong>Recipent Name: {{od.address.name==\"\"?od.username:od.address.name}} </strong>\n                    </div>\n                     \n                    \n                      \n    \n                </div>\n    \n    \n                <div class=\"row\">\n                    <div class=\"col-sm-6\" style=\"text-align: left\">\n                        <strong>Recipent Address:  {{od.address.addressName}}  </strong>\n                        \n    \n                    </div>\n                   \n    \n                </div>\n                <hr>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-6\" style=\"text-align: left\">\n                        <strong>Delivery Valet:  {{od.deliveryUsername}} </strong>\n                        <br>\n                        <strong>Delivery mobile Number: {{od.deliveryGuy.mobileNumber}}</strong>\n    \n                    </div>\n                    <div class=\"col-sm-6\" style=\"text-align: end\">\n                        <span class=\"lnr lnr-clock\" ></span><strong> Delivery Time: </strong>\n                    </div>\n    \n                </div>\n                <hr>\n                <div style=\"text-align: center;\">\n                    <span class=\"badge badge-error\">Your Order Details</span>\n                </div>\n               \n                <div style=\"margin-top: -5%;\">\n\n               \n\n                <table mat-table [dataSource]=\"order\" class=\"mat-elevation-z3\">\n\n                    <!-- No. Columa2n -->\n                    <!-- <ng-container matColumnDef=\"id\">\n                      <th mat-header-cell *matHeaderCellDef> No. </th>\n                      <td mat-cell *matCellDef=\"let i\"> {{i.}} </td>\n                    </ng-container> -->\n                  \n                    <!-- Ingredient Column -->\n                    <ng-container matColumnDef=\"ingredient\" >\n                      <th mat-header-cell *matHeaderCellDef> Ingredient </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                  \n                    <!-- Quantity Column -->\n                    <ng-container matColumnDef=\"quantity\">\n                      <th mat-header-cell *matHeaderCellDef> Quantity </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n                    </ng-container>\n                  \n                    <!-- Unit Column -->\n                    <ng-container matColumnDef=\"unit\">\n                      <th mat-header-cell *matHeaderCellDef> Unit </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.unit}} </td>\n                    </ng-container>\n                  \n                    <!-- Row  -->\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                </div>\n\n\n\n        </div>\n    </div>\n\n    </div>\n    \n\n    \n  </mat-step>\n</mat-horizontal-stepper>\n<div style=\"margin-top:200px;\">\n  <app-footer></app-footer>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Nav Bar -->\n<app-loggednavbar [name]=\"name\"></app-loggednavbar>\n<!-- Head Section -->\n<section id=\"head-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <h1>{{recipe.recipeName}}</h1>\n        <h3>{{recipe.cuisine}}</h3>\n        <br>\n        <form>\n          <ul style=\"list-style-type:none\">\n            <li *ngIf=\"isEven\">\n              <label>Number of people  to serve : {{num-1}}-{{num}}</label>\n              <button id=\"plus-button\" type=\"button\" class=\"btn btn-dark\"\n              (click)=\"changeserve('minus')\" data-type=\"minus\" >\n                <span class=\"glyphicon glyphicon-minus\"></span>\n              </button>\n              <button id=\"minus-button\" type=\"button\" class=\"btn btn-dark\"\n                (click)=\"changeserve('plus')\" data-type=\"minus\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n              </button>\n            </li>\n            <li *ngIf=\"isOdd\">\n              <label>Number of people to serve : {{num}}-{{num+1}}</label>\n              <button id=\"plus-button\" type=\"button\" class=\"btn btn-dark\"\n              (click)=\"changeserve('minus')\" data-type=\"minus\" >\n                <span class=\"glyphicon glyphicon-minus\"></span>\n              </button>\n              <button id=\"minus-button\" type=\"button\" class=\"btn btn-dark\"\n              (click)=\"changeserve('plus')\" data-type=\"minus\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n              </button>\n            </li>\n          </ul>\n          <br><br>\n          <label *ngIf=\"display\">Estimated cooking time : {{recipe.cookingTime}}</label>\n          <label *ngIf=\"display2\">Estimated cooking time : {{recipe.cookingTime*cooknum}}</label>\n        </form>\n      </div>\n      <div class=col-lg-4>\n        <mat-card>\n            <img mat-card-image src={{recipe.recipeImage}} alt=\"{{recipe.recipeName}}\">\n        </mat-card>\n      </div>\n    </div>\n  </div><br>\n\n</section>\n\n<!-- Ingredients and Procedure -->\n<section id=\"body-section\" class=\"container\">\n  <mat-tab-group [selectedIndex]=\"matTab\">\n    <mat-tab label=\"Ingredients\">\n      <!-- Ingrediants Table -->\n      <h3>List of Ingredients</h3>\n      <table class=\"table table-striped table-bordered\" >\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">No.</th>\n            <th scope=\"col\">Ingredient</th>\n            <th scope=\"col\">Quantity Required</th>\n            <th scope=\"col\">Quantity you want to order</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let ingredient of recipe?.ingredients; let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{ingredient.name}}</td>\n            <td *ngIf=\"display\">{{ingredient.quantity}} {{ingredient.unit}}</td>\n            <td *ngIf=\"display2\">{{(ingredient.unit==\"bowl\" || ingredient.unit==\"tbs\") ? (ingredient.quantity*newnum.toFixed(0)) : (ingredient.quantity*newnum).toFixed(3)}} {{ingredient.unit}}</td>\n            <td>\n              <input type=\"text\" [(ngModel)]=igQuantity[i] placeholder=\"Enter the quantity of {{ingredient.name}} you want to order\" onkeypress='return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode == 46)'>\n              <mat-form-field>\n                <mat-label>Unit</mat-label>\n                <mat-select [(ngModel)]=igUnit[i]>\n                  <mat-option value=\"kg\">Kilogram</mat-option>\n                  <mat-option value=\"gram\">Gram</mat-option>\n                  <mat-option value=\"litre\">Litre</mat-option>\n                  <mat-option value=\"ml\">MilliLitre</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </td>\n\n                      <!-- Show user added ingredients row -->\n          </tr>\n          <tr *ngFor=\"let array of fieldArray; let k = index\" [attr.id]=\"k\">\n            <td>{{k+igLength+1}}</td>\n            <td>{{array.name}}</td>\n            <td>{{array.quantity}} {{array.unit}}</td>\n            <td>\n                <input type=\"text\" value=\"{{array.quantity}}\" [(ngModel)]=array.quantity>\n                <mat-form-field>\n                  <mat-label>Unit</mat-label>\n                  <mat-select value=\"{{array.unit}}\" [(ngModel)]=array.unit>\n                    <mat-option value=\"kg\">Kilogram</mat-option>\n                    <mat-option value=\"gram\">Gram</mat-option>\n                    <mat-option value=\"litre\">Litre</mat-option>\n                    <mat-option value=\"ml\">MilliLitre</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"deleteRow(k)\" style=\"float: right;\">\n                  <i class=\"far fa-trash-alt \"></i>\n                </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <!-- Add more ingredients -->\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <td>\n            {{add}}\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" id=\"newAttributeName\" [(ngModel)]=\"newAttribute.name\" name=\"newAttributeName\" >\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" id=\"newAttributeQuantity\" [(ngModel)]=\"newAttribute.quantity\" name=\"newAttributeQuantity\" >\n          </td>\n          <td>\n            <input class=\"form-control\" type=\"text\" id=\"newAttributeQuantity\" [(ngModel)]=\"newAttribute.quantity\" name=\"newAttributeQuantity\" >\n          </td>\n          <td>\n            <mat-form-field>\n              <mat-label>Unit</mat-label>\n              <mat-select id=\"newAttributeUnit\" [(ngModel)]=newAttribute.unit name=\"newAttributeUnit\" >\n                <mat-option value=\"kg\">Kilogram</mat-option>\n                <mat-option value=\"gram\">Gram</mat-option>\n                <mat-option value=\"litre\">Litre</mat-option>\n                <mat-option value=\"ml\">MilliLitre</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n          <td>\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue()\">Add</button>\n          </td>\n        </tr>\n      </table>\n\n      <!-- Order -->\n      <button (click)=\"orderval()\" class=\"btn btn-success\">Order</button>\n    </mat-tab>\n\n<!-- Procedure Stages -->\n    <mat-tab label=\"Start Cooking\"><br>\n<!-- Stages Expansion Panel -->\n      <mat-accordion *ngFor=\"let stage of recipe.procedure.stages; let j = index\">\n        <mat-expansion-panel [(expanded)]=\"xpandStatus[j]\">\n          <mat-expansion-panel-header [ngClass]=\"head[j]\">\n            <mat-panel-title>\n              <h3 style=\"text-align: center; color: #ffff;\">\n                {{stage.stageName}}\n              </h3>\n            </mat-panel-title>\n            <mat-panel-description style=\"color: #ffff; justify-content: flex-end;\">\n              <circle-progress style=\"padding-top: 0.5rem; padding-right: 1rem;\"\n              [endDate]=\"endDate\"\n              [initDate]=\"initDate\"\n              [outerStrokeColor] = \"'#ffff'\"\n              [radius] = \"20\"\n              [space] = \"1\"\n              [outerStrokeWidth] = \"2\"\n              [animationDuration] = \"0\"\n              [showInnerStroke] = \"false\"\n              [showTitle] = \"false\"\n              [showUnits] = \"false\"\n              [showSubtitle] = \"false\"\n            ></circle-progress>\n              <strong style=\"padding-top: 2rem;\">{{timeRem[j] | minuteSeconds}} / {{stage.duration}}min</strong>\n            </mat-panel-description>\n          </mat-expansion-panel-header><br>\n          <div class=\"row\">\n            <div class=\"col-lg-10\">\n              <ul *ngFor=\"let step of stage.steps; let i = index \">\n                <li> {{step.stepContent}} </li>\n              </ul>\n            </div>\n            <div class=\"col-lg-2\">\n            </div>\n          </div>\n          <section class=\"row\">\n            <!-- Start, Pause and Stop timer -->\n            <div *ngIf=\"showStart[j]\">\n              <button type=\"button\" class=\"btn\" (click)='startTimer(j)' style=\"color: green;\">Start Timer</button>\n            </div>\n            <div *ngIf=\"showRestart[j]\">\n                <button type=\"button\" class=\"btn\" (click)='restartTimer(j)' style=\"color: green;\">Restart Stage</button>\n            </div>\n            <div *ngIf=\"showPause[j]\">\n              <button type=\"button\" class=\"btn\" (click)='pauseTimer(j)' style=\"color: blue;\">Pause Timer</button>\n            </div>\n            <div *ngIf=\"showStop[j]\">\n                <button type=\"button\" class=\"btn\" (click)='stopTimer(j)' style=\"color: red;\">Stage Done</button>\n            </div>\n          </section>\n        </mat-expansion-panel><br>\n      </mat-accordion>\n\n      <!-- Navigate to rating  -->\n      <button id=\"\" (click)=\"openDialog()\" type=\"button\" class=\"btn btn-warning\" >Cooking Done</button>\n    </mat-tab>\n</mat-tab-group>\n\n</section> <br><br>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body bgcolor=\"#eb4653\">\n\n    <app-loggednavbar [name]=\"name\"></app-loggednavbar>\n    <div class=\"p-t-70\" style=\"background-color: #eb4653\" >\n        <mat-card class=\"container\" style=\"margin-bottom: -30px; margin-top: 10px; box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\">\n\n            <div class=\"row p-t-5\">\n                <div class=\"col-sm-4 \" style=\"margin-right: 100px;\">\n                    <mat-card class=\"container2 \" >\n                    <img class=\"image\" src=\"{{user?.image}}\"  alt=\"Profile image\"   *ngIf=\"upload; else elseblock;\"  >\n                    <ng-template #elseblock>\n                        <img class=\"image\" src=\"{{user?.image}}\"  alt=\"Profile image\"   style=\"opacity: 0.4;\" >\n\n                    </ng-template>\n                    <ng-template *ngIf=\"upload;then done;else uploadBlock;\"></ng-template>\n                    <ng-template #done>\n                    <div class=\"middle\">\n                        <app-file-upload (complete)=\"onFileComplete($event)\"></app-file-upload>\n                    </div></ng-template>\n                    <ng-template #uploadBlock>\n                        <div  class=\"middle2\">\n                    <button mat-button (click)=\"approve()\">\n                        <mat-icon>done</mat-icon>\n                    </button></div>\n                    </ng-template>\n\n                    </mat-card>\n\n\n                </div>\n                <div class=\"col-sm-6\" >\n                    <div class=\"p-t-5\">\n                        <mat-card style=\"margin-top: 100px;\">\n                        <h2><b>{{user?.name}}</b></h2>\n                        <mat-card-subtitle><b>Username: </b>{{user?.username }}</mat-card-subtitle>\n                        <mat-card-subtitle><b>Email:</b>{{user?.emailId}}</mat-card-subtitle>\n                        <mat-card-subtitle><b>City: </b>{{user?.emailId}}</mat-card-subtitle>\n                        <mat-card-subtitle><b>State: </b>{{user?.emailId}}</mat-card-subtitle>\n                        <!--                   <mat-card-subtitle><a href=\"#\">Edit your Profile</a></mat-card-subtitle>-->\n                </mat-card>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n            <div class=\"row\">\n                    <div class=\"col-sm-12 col-xs-12 p-t-40\">\n                        <div class=\"page-title text-center\">\n                            <h5 class=\"title\">Recipes you have published</h5>\n                        </div>\n                    </div>\n            </div>\n                <div\n                    ng2-carouselamos\n                    [width]=\"1000\"\n                    [items]=recipespublished\n                    (onSelectedItem)=\"tr($event.item.id)\"\n                    [$item]=\"itemTemplate\"\n                    [$prev]=\"prevTemplate\"\n                    [$next]=\"nextTemplate\" >\n                </div>\n                <div class=\"row m-t-30\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"team-slide\">\n                            <ng-template #prevTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-left\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n\n                            <ng-template let-item let-i=\"index\" #itemTemplate >\n                                <app-recipecard style=\"background-color: white;\" [id]=\"item?.recipeId\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item.serves\" [duration]=\"item.cookingTime\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedby\" [rating_value]=\"item.rating\" ></app-recipecard>\n                            </ng-template>\n                            <ng-template #nextTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-right\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"row\">\n                        <div class=\"col-sm-12 col-xs-12\">\n                            <div class=\"page-title text-center\">\n                                <h5 class=\"title\">Recipes you have liked</h5>\n                            </div>\n                        </div>\n                </div>\n                    <div\n                        ng2-carouselamos\n                        [width]=\"1000\"\n                        [items]=recipesliked\n                        (onSelectedItem)=\"tr($event.item.id)\"\n                        [$item]=\"itemTemplate\"\n                        [$prev]=\"prevTemplate\"\n                        [$next]=\"nextTemplate\" >\n                    </div>\n                    <div class=\"row m-t-30\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"team-slide\">\n                                <ng-template #prevTemplate>\n                                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <div class=\"box-icon\">\n                                            <i class=\"lnr lnr-chevron-left\"></i>\n                                        </div>\n                                    </div>\n                                </ng-template>\n\n                                <ng-template let-item let-i=\"index\" #itemTemplate >\n                                        <app-recipecard style=\"background-color: white;\" [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.cookingTime\" [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedby\" [rating_value]=\"item.rating\" ></app-recipecard>\n                                </ng-template>\n                                <ng-template #nextTemplate>\n                                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <div class=\"box-icon\">\n                                            <i class=\"lnr lnr-chevron-right\"></i>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </div>\n\n                <div class=\"row\">\n                        <div class=\"col-sm-12 col-xs-12\">\n                            <div class=\"page-title text-center\">\n                                <h5 class=\"title\">Recipes you have tried</h5>\n                            </div>\n                        </div>\n                </div>\n                    <div\n                        ng2-carouselamos\n                        [width]=\"1000\"\n                        [items]=recipestried\n                        (onSelectedItem)=\"tr($event.item.id)\"\n                        [$item]=\"itemTemplate\"\n                        [$prev]=\"prevTemplate\"\n                        [$next]=\"nextTemplate\" >\n                    </div>\n                    <div class=\"row m-t-30\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"team-slide\">\n                                <ng-template #prevTemplate>\n                                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <div class=\"box-icon\">\n                                            <i class=\"lnr lnr-chevron-left\"></i>\n                                        </div>\n                                    </div>\n                                </ng-template>\n\n                                <ng-template let-item let-i=\"index\" #itemTemplate >\n\n                                    <app-recipecard style=\"background-color: white;\" [id]=\"item?.id\" [recipe_name]=\"item?.recipeName\" [image_path]=\"item?.recipeImage\" [cusine_name]=\"item?.cuisine\" [serve]=\"item?.servesFor\" [duration]=\"item?.cookingTime\" [published_on]=\"item?.publishedOn\" [master_name]=\"item?.publishedby\" [rating_value]=\"item?.rating\" ></app-recipecard>\n                                </ng-template>\n                                <ng-template #nextTemplate>\n                                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                        <div class=\"box-icon\">\n                                            <i class=\"lnr lnr-chevron-right\"></i>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </div>\n        </mat-card>\n    </div>\n    <app-footer></app-footer>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voicetest/voicetest.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voicetest/voicetest.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br><br><br><br><br>\n<h1>Round progress bar</h1>\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress>\n\n\n\n<!-- <h3>Speech Synthesis</h3>\n<button type=\"button\" class=\"btn btn-danger\" (click)='start()'>Start</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='pause()'>Pause</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='resume()'>Resume</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='stop()'>Stop</button>\n<br>\n<h1>ngStyle</h1>\n<p [ngStyle]=\"{'background-color':color}\">\n    Start editing to see some magic happen :)\n</p>\n<button (click)=\"color = '#fff'\">light</button>\n<button (click)=\"color = '#cfd8dc'\">dark</button>\n<button (click)=\"color = '#29434e'\">normal</button>\n\n<h1>ngClass</h1>\n<p [attr.class]=\"voicePause ? light: voicePlay ? dark : normal\">\n  Start editing to see some magic happen :)\n</p>\n<button (click)=\"state = 'light'\">light</button>\n<button (click)=\"state = 'dark'\">dark</button>\n<button (click)=\"state = 'normal'\">normal</button> -->\n<!-- \n<h3>Control</h3>\n<button [disabled]=\"voicePlay\" type=\"button\" class=\"btn btn-danger\" (click)='control(\"start\")'>Start</button>\n<button [disabled]=\"voicePause\" type=\"button\" class=\"btn btn-warning\" (click)='control(\"pause\")'>Pause</button>\n<button [disabled]=\"voiceResume\" type=\"button\" class=\"btn btn-warning\" (click)='control(\"resume\")'>Resume</button>\n<button [disabled]=\"voiceStop\" type=\"button\" class=\"btn btn-warning\" (click)='control(\"stop\")'>Stop</button>\n<br>\n<h3>Speak tts</h3>\n<button type=\"button\" class=\"btn btn-danger\" (click)='startTTS()'>Start</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='pauseTTS()'>Pause</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='resumeTTS()'>Resume</button>\n<button type=\"button\" class=\"btn btn-warning\" (click)='stopTTS()'>Stop</button>\n<h3>Single Control</h3> -->\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);\n/* Google Fonts */\n/* Global */\nhtml {\n      min-height: 100%;\n      overflow: hidden;\n}\nbody {\n      height: calc(100vh - 8em);\n      padding: 4em;\n      color: rgba(255, 255, 255, 0.75);\n      font-family: 'Anonymous Pro', monospace;\n      background-color: rgb(25, 25, 25);\n}\n.remark{\n    font-weight: 50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0VBQWtFO0FBRGxFLGlCQUFpQjtBQUdqQixXQUFXO0FBQ1g7TUFDTSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0FBQ3RCO0FBRUE7TUFDTSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGdDQUFnQztNQUNoQyx1Q0FBdUM7TUFDdkMsaUNBQWlDO0FBQ3ZDO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdvb2dsZSBGb250cyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFub255bW91cytQcm8pO1xuXG4vKiBHbG9iYWwgKi9cbmh0bWwge1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOGVtKTtcbiAgICAgIHBhZGRpbmc6IDRlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgZm9udC1mYW1pbHk6ICdBbm9ueW1vdXMgUHJvJywgbW9ub3NwYWNlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyNSwgMjUpO1xufVxuXG4ucmVtYXJre1xuICAgIGZvbnQtd2VpZ2h0OiA1MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homecomponent/homecomponent.component */ "./src/app/homecomponent/homecomponent.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipedetails/recipedetails.component */ "./src/app/recipedetails/recipedetails.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tryrecipe/tryrecipe.component */ "./src/app/tryrecipe/tryrecipe.component.ts");
/* harmony import */ var _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publish-recipe/publish-recipe.component */ "./src/app/publish-recipe/publish-recipe.component.ts");
/* harmony import */ var _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectinterests/selectinterests.component */ "./src/app/selectinterests/selectinterests.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testcomponent/testcomponent.component */ "./src/app/testcomponent/testcomponent.component.ts");
/* harmony import */ var _tryrecipe_orderpreview_orderpreview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tryrecipe/orderpreview/orderpreview.component */ "./src/app/tryrecipe/orderpreview/orderpreview.component.ts");
/* harmony import */ var _possiblerecipes_possiblerecipes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./possiblerecipes/possiblerecipes.component */ "./src/app/possiblerecipes/possiblerecipes.component.ts");
/* harmony import */ var _search_component_search_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-component/search-component.component */ "./src/app/search-component/search-component.component.ts");
/* harmony import */ var _possiblerecipes_possible_recipes_cards_possible_recipes_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./possiblerecipes/possible-recipes-cards/possible-recipes-cards.component */ "./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.ts");
/* harmony import */ var _voicetest_voicetest_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./voicetest/voicetest.component */ "./src/app/voicetest/voicetest.component.ts");


















const routes = [
    { path: '', redirectTo: '/homecomponent', pathMatch: 'full' },
    { path: 'test', component: _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__["TestcomponentComponent"] },
    { path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"] },
    { path: 'homecomponent', component: _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__["HomecomponentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'recipedetails/:recipeid', component: _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__["RecipedetailsComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'tryrecipe/:recipeid/:tabid', component: _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__["TryrecipeComponent"] },
    { path: 'publish-recipe', component: _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_9__["PublishRecipeComponent"] },
    { path: 'selectyourinterests/:data', component: _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__["SelectinterestsComponent"] },
    { path: 'orderpreview/:recipeid', component: _tryrecipe_orderpreview_orderpreview_component__WEBPACK_IMPORTED_MODULE_13__["OrderpreviewComponent"] },
    { path: 'possiblerecipes', component: _possiblerecipes_possiblerecipes_component__WEBPACK_IMPORTED_MODULE_14__["PossiblerecipesComponent"], children: [{ path: 'possiblerecipescards', component: _possiblerecipes_possible_recipes_cards_possible_recipes_cards_component__WEBPACK_IMPORTED_MODULE_16__["PossibleRecipesCardsComponent"] }] },
    { path: 'search/:name', component: _search_component_search_component_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponentComponent"] },
    { path: 'voicetest', component: _voicetest_voicetest_component__WEBPACK_IMPORTED_MODULE_17__["VoicetestComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponent = [_homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__["HomecomponentComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__["RecipedetailsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__["TryrecipeComponent"], _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__["SelectinterestsComponent"], _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"], _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__["TestcomponentComponent"], _possiblerecipes_possiblerecipes_component__WEBPACK_IMPORTED_MODULE_14__["PossiblerecipesComponent"], _tryrecipe_orderpreview_orderpreview_component__WEBPACK_IMPORTED_MODULE_13__["OrderpreviewComponent"], _search_component_search_component_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponentComponent"], _voicetest_voicetest_component__WEBPACK_IMPORTED_MODULE_17__["VoicetestComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  flex: 1;\n  background-color: aquamarine;\n}\n\n.crop{\n  position: relative;\n  width: 240px;\n  height: 160px;\n  overflow: hidden;/*reset margin of figure tag*/\n}\n\n.crop img{\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  transform: translate(-50%,-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1AsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLENBQUMsNkJBQTZCO0FBQ2hEOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFHSCwrQkFBK0I7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG4uY3JvcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47LypyZXNldCBtYXJnaW4gb2YgZmlndXJlIHRhZyovXG59XG4uY3JvcCBpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontendservice.service */ "./src/app/frontendservice.service.ts");




let AppComponent = class AppComponent {
    constructor(router, fservice) {
        this.router = router;
        this.fservice = fservice;
        this.title = "music-frontend";
        this.shownav = false;
    }
    ngOnInit() {
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
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
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homecomponent/homecomponent.component */ "./src/app/homecomponent/homecomponent.component.ts");
/* harmony import */ var _trending_trending_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trending/trending.component */ "./src/app/trending/trending.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recipecard_recipecard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipecard/recipecard.component */ "./src/app/recipecard/recipecard.component.ts");
/* harmony import */ var _mastercard_mastercard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mastercard/mastercard.component */ "./src/app/mastercard/mastercard.component.ts");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recipedetails/recipedetails.component */ "./src/app/recipedetails/recipedetails.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _loggednavbar_loggednavbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loggednavbar/loggednavbar.component */ "./src/app/loggednavbar/loggednavbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _recommendedbyhistory_recommendedbyhistory_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./recommendedbyhistory/recommendedbyhistory.component */ "./src/app/recommendedbyhistory/recommendedbyhistory.component.ts");
/* harmony import */ var _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tryrecipe/tryrecipe.component */ "./src/app/tryrecipe/tryrecipe.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./publish-recipe/publish-recipe.component */ "./src/app/publish-recipe/publish-recipe.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./selectinterests/selectinterests.component */ "./src/app/selectinterests/selectinterests.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./testcomponent/testcomponent.component */ "./src/app/testcomponent/testcomponent.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _dashboardrecipecard_dashboardrecipecard_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dashboardrecipecard/dashboardrecipecard.component */ "./src/app/dashboardrecipecard/dashboardrecipecard.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _recommeded_recommeded_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./recommeded/recommeded.component */ "./src/app/recommeded/recommeded.component.ts");
/* harmony import */ var _dashboardtrending_dashboardtrending_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dashboardtrending/dashboardtrending.component */ "./src/app/dashboardtrending/dashboardtrending.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./minute-seconds.pipe */ "./src/app/minute-seconds.pipe.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _possiblerecipes_possiblerecipes_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./possiblerecipes/possiblerecipes.component */ "./src/app/possiblerecipes/possiblerecipes.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tryrecipe_orderpreview_orderpreview_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./tryrecipe/orderpreview/orderpreview.component */ "./src/app/tryrecipe/orderpreview/orderpreview.component.ts");
/* harmony import */ var _search_component_search_component_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./search-component/search-component.component */ "./src/app/search-component/search-component.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _possiblerecipes_possible_recipes_cards_possible_recipes_cards_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./possiblerecipes/possible-recipes-cards/possible-recipes-cards.component */ "./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.ts");
/* harmony import */ var _recommendedbyactivities_recommendedbyactivities_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./recommendedbyactivities/recommendedbyactivities.component */ "./src/app/recommendedbyactivities/recommendedbyactivities.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _voicetest_voicetest_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./voicetest/voicetest.component */ "./src/app/voicetest/voicetest.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");
/* harmony import */ var _popular_popular_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./popular/popular.component */ "./src/app/popular/popular.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _file_upload_profile_file_upload_profile_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./file-upload-profile/file-upload-profile.component */ "./src/app/file-upload-profile/file-upload-profile.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");









































































// import { SimplecardComponent } from './simplecard/simplecard.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_6__["HomecomponentComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_7__["TrendingComponent"], _master_master_component__WEBPACK_IMPORTED_MODULE_10__["MasterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_12__["FeaturesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _recipecard_recipecard_component__WEBPACK_IMPORTED_MODULE_15__["RecipecardComponent"], _mastercard_mastercard_component__WEBPACK_IMPORTED_MODULE_16__["MastercardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_19__["RecipedetailsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _loggednavbar_loggednavbar_component__WEBPACK_IMPORTED_MODULE_22__["LoggednavbarComponent"], _recommendedbyhistory_recommendedbyhistory_component__WEBPACK_IMPORTED_MODULE_27__["RecommendedbyhistoryComponent"], _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_28__["TryrecipeComponent"], _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_39__["SelectinterestsComponent"], _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_30__["PublishRecipeComponent"], _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_40__["UserprofileComponent"], _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_41__["TestcomponentComponent"], _dashboardrecipecard_dashboardrecipecard_component__WEBPACK_IMPORTED_MODULE_45__["DashboardrecipecardComponent"], _recommeded_recommeded_component__WEBPACK_IMPORTED_MODULE_47__["RecommededComponent"], _dashboardtrending_dashboardtrending_component__WEBPACK_IMPORTED_MODULE_48__["DashboardtrendingComponent"], _minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_50__["MinuteSecondsPipe"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_51__["RatingComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_55__["FileUploadComponent"], _possiblerecipes_possiblerecipes_component__WEBPACK_IMPORTED_MODULE_57__["PossiblerecipesComponent"], _tryrecipe_orderpreview_orderpreview_component__WEBPACK_IMPORTED_MODULE_59__["OrderpreviewComponent"], _search_component_search_component_component__WEBPACK_IMPORTED_MODULE_60__["SearchComponentComponent"], _possiblerecipes_possible_recipes_cards_possible_recipes_cards_component__WEBPACK_IMPORTED_MODULE_63__["PossibleRecipesCardsComponent"], _recommendedbyactivities_recommendedbyactivities_component__WEBPACK_IMPORTED_MODULE_64__["RecommendedbyactivitiesComponent"], _voicetest_voicetest_component__WEBPACK_IMPORTED_MODULE_66__["VoicetestComponent"], _latest_latest_component__WEBPACK_IMPORTED_MODULE_68__["LatestComponent"], _popular_popular_component__WEBPACK_IMPORTED_MODULE_69__["PopularComponent"], _file_upload_profile_file_upload_profile_component__WEBPACK_IMPORTED_MODULE_71__["FileUploadProfileComponent"]],
        imports: [
            _agm_core__WEBPACK_IMPORTED_MODULE_43__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDL37YbuTkA3eJyMt5UuEBZAo3UXwf_ZvA'
            }),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_72__["NgCircleProgressModule"].forRoot({}),
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__["MatRadioModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_62__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_46__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_61__["MatDividerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_44__["MatGridListModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_67__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__["Ng2CarouselamosModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_54__["MatSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_53__["RatingModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_26__["ScrollToModule"].forRoot(),
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_58__["MatAutocompleteModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_70__["MatTooltipModule"]
        ],
        entryComponents: [_rating_rating_component__WEBPACK_IMPORTED_MODULE_51__["RatingComponent"]],
        providers: [_frontendservice_service__WEBPACK_IMPORTED_MODULE_17__["FrontendserviceService"], {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_34__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { displayDefaultIndicatorType: false }
            },
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_34__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            },
            {
                provide: _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MAT_CHIPS_DEFAULT_OPTIONS"],
                useValue: {
                    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_36__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_36__["COMMA"]]
                }
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.sidenav {\n  height: 90%;\n  width: 260px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: white;\n  overflow-x: hidden;\n  box-shadow: 5px 10px 10px -6px #818181;\n  padding: 20px;\n  margin-top: 80px;\n  margin-left: 10px;\n  border-radius:10px;\n\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.hoverup{\n  border: 2px;\n}\n\n.main {\n  overflow: hidden;\n  /*width: 90%;*/\n  margin-left: 0%; /* Same as the width of the sidenav */\n  font-size: 28px; /* Increased text to enable scrolling */\n  padding: 0px 10px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n@media screen and (min-width: 480px) {\n  .abcd{\n    left:70%;\n  }\n}\n\n.abcd{\n  left:80%;\n}\n\n.publishicon{\n  animation: publish 1s infinite ease-in-out alternate-reverse;\n}\n\n@-webkit-keyframes publish{\n  0%{\n    transform: translateY(0px); \n  }\n  100%{\n    transform: translateY(15px);\n  }\n}\n\n@keyframes publish{\n  0%{\n    transform: translateY(0px); \n  }\n  100%{\n    transform: translateY(15px);\n  }\n}\n\n.badge {\n  padding: 1px 9px 2px;\n  font-size: 12.025px;\n  font-weight: bold;\n  white-space: nowrap;\n  color: #ffffff;\n  background-color: #999999;\n  border-radius: 9px;\n}\n\n.badge:hover {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.badge-error {\n  background-color: #CB202D;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBRSxxQ0FBcUM7RUFDdEQsZUFBZSxFQUFFLHVDQUF1QztFQUN4RCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzVCLFlBQVksZUFBZSxDQUFDO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBR3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNpZGVuYXYge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDI2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAtNnB4ICM4MTgxODE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG5cbn1cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLmhvdmVydXB7XG4gIGJvcmRlcjogMnB4O1xufVxuXG4ubWFpbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qd2lkdGg6IDkwJTsqL1xuICBtYXJnaW4tbGVmdDogMCU7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlbmF2ICovXG4gIGZvbnQtc2l6ZTogMjhweDsgLyogSW5jcmVhc2VkIHRleHQgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5hYmNke1xuICAgIGxlZnQ6NzAlO1xuICB9XG59XG4uYWJjZHtcbiAgbGVmdDo4MCU7XG59XG4gICBcbi5wdWJsaXNoaWNvbntcbiAgYW5pbWF0aW9uOiBwdWJsaXNoIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1Ymxpc2h7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyBcbiAgfVxuICAxMDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcbiAgfVxufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAxcHggOXB4IDJweDtcbiAgZm9udC1zaXplOiAxMi4wMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLmJhZGdlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFkZ2UtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IyMDJEO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(fservice, route, router) {
        this.fservice = fservice;
        this.route = route;
        this.router = router;
        this.user = [];
        this.showFiller = false;
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.jwtToken = localStorage.getItem('token');
        if (this.username == null) {
            this.route.navigateByUrl('/login');
        }
        this.fservice.getUserDetails(this.username).subscribe((data) => {
            this.user = data;
            this.name = data.name;
            console.log(data, "dashboard user data");
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboardrecipecard/dashboardrecipecard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboardrecipecard/dashboardrecipecard.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop{\n    position: relative;\n    width: 220px;\n    height: 140px;\n    overflow: hidden;/*reset margin of figure tag*/\n  }\n  .crop img{\n    border-radius: 2px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 100%;\n    width: auto;\n    transform: translate(-50%,-50%);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcmVjaXBlY2FyZC9kYXNoYm9hcmRyZWNpcGVjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0IsQ0FBQyw2QkFBNkI7RUFDaEQ7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUdILCtCQUErQjtFQUN6QyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHJlY2lwZWNhcmQvZGFzaGJvYXJkcmVjaXBlY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3B7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47LypyZXNldCBtYXJnaW4gb2YgZmlndXJlIHRhZyovXG4gIH1cbiAgLmNyb3AgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboardrecipecard/dashboardrecipecard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboardrecipecard/dashboardrecipecard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardrecipecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardrecipecardComponent", function() { return DashboardrecipecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardrecipecardComponent = class DashboardrecipecardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
DashboardrecipecardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "recipe_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "cusine_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "image_path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "serve", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "duration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "published_on", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "master_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DashboardrecipecardComponent.prototype, "rating_value", void 0);
DashboardrecipecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboardrecipecard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboardrecipecard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardrecipecard/dashboardrecipecard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboardrecipecard.component.css */ "./src/app/dashboardrecipecard/dashboardrecipecard.component.css")).default]
    })
], DashboardrecipecardComponent);



/***/ }),

/***/ "./src/app/dashboardtrending/dashboardtrending.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboardtrending/dashboardtrending.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHRyZW5kaW5nL2Rhc2hib2FyZHRyZW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboardtrending/dashboardtrending.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboardtrending/dashboardtrending.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardtrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardtrendingComponent", function() { return DashboardtrendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let DashboardtrendingComponent = class DashboardtrendingComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.fservice.getalltrendingrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
DashboardtrendingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
DashboardtrendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboardtrending',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboardtrending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboardtrending/dashboardtrending.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboardtrending.component.css */ "./src/app/dashboardtrending/dashboardtrending.component.css")).default]
    })
], DashboardtrendingComponent);



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mobile-image{\n    animation: barun 3s infinite ease-in-out alternate-reverse;\n}\n\n@-webkit-keyframes barun{\n    0%{\n        transform: translateY(0px);\n    }\n    100%{\n        transform: translateY(15px);\n    }\n}\n\n@keyframes barun{\n    0%{\n        transform: translateY(0px);\n    }\n    100%{\n        transform: translateY(15px);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLWltYWdle1xuICAgIGFuaW1hdGlvbjogYmFydW4gM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbkBrZXlmcmFtZXMgYmFydW57XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesComponent = class FeaturesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")).default]
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/file-upload-profile/file-upload-profile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/file-upload-profile/file-upload-profile.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#file-label {\n  display: inline-flex;\n  vertical-align: middle;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n#file-label mat-icon {\n  font-size: 18px;\n  text-align: center;\n}\n\n#file-label a {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQtcHJvZmlsZS9maWxlLXVwbG9hZC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkLXByb2ZpbGUvZmlsZS11cGxvYWQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuI2ZpbGUtbGFiZWwgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2ZpbGUtbGFiZWwgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/file-upload-profile/file-upload-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/file-upload-profile/file-upload-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: FileUploadProfileComponent, FileUploadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadProfileComponent", function() { return FileUploadProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FileUploadProfileComponent = class FileUploadProfileComponent {
    constructor(_http) {
        this._http = _http;
        /** Link text */
        this.text = 'Upload';
        /** Name used in form which will be sent in HTTP request. */
        this.param = 'file';
        /** Target URL for file uploading. */
        this.target = 'http://localhost:8080/recipeService/api/v1/uploadFile';
        /** File extension that accepted, same as 'accept' of <input type="file" />.
         By the default, it's set to 'image/*'. */
        this.accept = 'image/*';
        /** Allow you to add handler after its completion. Bubble up response text from remote. */
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parentData = 'file';
        this.files = [];
    }
    ngOnInit() {
    }
    onClick() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({ data: file, state: 'in',
                    inProgress: true, progress: 200, canRetry: false, canCancel: true });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    cancelFile(file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
    }
    retryFile(file) {
        this.uploadFile(file);
        file.canRetry = false;
    }
    uploadFile(file) {
        const fd = new FormData();
        fd.append(this.param, file.data);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.target, fd, {
            reportProgress: true,
            responseType: "text"
        });
        file.inProgress = true;
        file.sub = this._http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(event => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    this.upload = true;
                    console.log(file.progress + " " + file.inProgress);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(message => { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            file.inProgress = true;
            file.canRetry = true;
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(`${file.data.name} upload failed.`);
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.removeFileFromArray(file);
                this.complete.emit(event.body);
            }
            console.log(event);
        });
    }
    uploadFiles() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    removeFileFromArray(file) {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }
    approve(file) {
    }
};
FileUploadProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadProfileComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadProfileComponent.prototype, "param", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadProfileComponent.prototype, "target", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadProfileComponent.prototype, "accept", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileUploadProfileComponent.prototype, "complete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadProfileComponent.prototype, "parentData", void 0);
FileUploadProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload-profile/file-upload-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload-profile.component.css */ "./src/app/file-upload-profile/file-upload-profile.component.css")).default]
    })
], FileUploadProfileComponent);

class FileUploadModel {
}


/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul,li {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n}\n\n#file-label {\n      display: inline-flex;\n      vertical-align: middle;\n      font-size: 12px;\n      line-height: 18px;\n}\n\n#file-label mat-icon {\n      font-size: 18px;\n      text-align: center;\n}\n\n#file-label a {\n      cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCO0FBQ3RCOztBQUVBO01BQ00sb0JBQW9CO01BQ3BCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsaUJBQWlCO0FBQ3ZCOztBQUVBO01BQ00sZUFBZTtNQUNmLGtCQUFrQjtBQUN4Qjs7QUFFQTtNQUNNLGVBQWU7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwsbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNmaWxlLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4jZmlsZS1sYWJlbCBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmaWxlLWxhYmVsIGEge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent, FileUploadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FileUploadComponent = class FileUploadComponent {
    constructor(_http) {
        this._http = _http;
        /** Link text */
        this.text = 'Upload';
        /** Name used in form which will be sent in HTTP request. */
        this.param = 'file';
        /** Target URL for file uploading. */
        this.target = 'https://cookify.stackroute.io:8443/recipeService/api/v1/uploadFile';
        //   @Input() target = 'https://file.io';
        /** File extension that accepted, same as 'accept' of <input type="file" />.
            By the default, it's set to 'image/*'. */
        this.accept = 'image/*';
        /** Allow you to add handler after its completion. Bubble up response text from remote. */
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.files = [];
    }
    ngOnInit() {
    }
    onClick() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                console.log(file);
                this.files.push({ data: file, state: 'in',
                    inProgress: false, progress: 0, canRetry: false, canCancel: true });
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }
    cancelFile(file) {
        file.sub.unsubscribe();
        this.removeFileFromArray(file);
        this.cancel.emit();
    }
    retryFile(file) {
        this.uploadFile(file);
        file.canRetry = false;
    }
    uploadFile(file) {
        const fd = new FormData();
        fd.append(this.param, file.data);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', this.target, fd, {
            reportProgress: true,
            responseType: "text"
        });
        file.inProgress = true;
        file.sub = this._http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(event => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(message => { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            file.inProgress = false;
            file.canRetry = true;
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(`${file.data.name} upload failed.`);
        })).subscribe((event) => {
            if (typeof (event) === 'object') {
                this.removeFileFromArray(file);
                this.complete.emit(event.body);
            }
            console.log(event);
        });
    }
    uploadFiles() {
        const fileUpload = document.getElementById('fileUpload');
        fileUpload.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }
    removeFileFromArray(file) {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadComponent.prototype, "param", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadComponent.prototype, "target", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileUploadComponent.prototype, "accept", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileUploadComponent.prototype, "complete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileUploadComponent.prototype, "cancel", void 0);
FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 100 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")).default]
    })
], FileUploadComponent);

class FileUploadModel {
}


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\n  background: #CB202D;\n  color:white;\n}\n    \n.links ul li a{\n    list-style-type: none;\n    color:white;\n    transition: color .2s;\n    cursor: pointer;\n}\n    \n.links ul li{\n  list-style-type: none;\n}\n    \n.about-company i{\n  font-size: 25px;\n}\n    \n.about-company li a{\n  color:white;\n  transition: color .2s;\n}\n    \n.about-company li a:hover{\n  color:#4180CB\n}\n    \n.location i{\n  font-size: 18px;\n}\n    \n/* .copyright p{border-top:1px solid rgba(255,255,255,.1);}  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBLDhEQUE4RCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gIGJhY2tncm91bmQ6ICNDQjIwMkQ7XG4gIGNvbG9yOndoaXRlO1xufVxuICAgIFxuLmxpbmtzIHVsIGxpIGF7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlua3MgdWwgbGl7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuXG4uYWJvdXQtY29tcGFueSBpe1xuICBmb250LXNpemU6IDI1cHg7XG59IFxuXG4uYWJvdXQtY29tcGFueSBsaSBhe1xuICBjb2xvcjp3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xufVxuXG4uYWJvdXQtY29tcGFueSBsaSBhOmhvdmVye1xuICBjb2xvcjojNDE4MENCXG59XG5cbi5sb2NhdGlvbiBpe1xuICBmb250LXNpemU6IDE4cHg7XG59XG4vKiAuY29weXJpZ2h0IHB7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMSk7fSAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/frontendservice.service.ts":
/*!********************************************!*\
  !*** ./src/app/frontendservice.service.ts ***!
  \********************************************/
/*! exports provided: FrontendserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendserviceService", function() { return FrontendserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FrontendserviceService = class FrontendserviceService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'AhHRFQWZBhpQDBaPLWMu2yGNwbS5AAQ2vwRL5tE9Rzh80PUdAy0axKdNr2SkQlSl';
        this.currentusernamesubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](localStorage.getItem('username'));
        this.currentusername = this.currentusernamesubject.asObservable();
        // this.token=new BehaviorSubject<String>(localStorage.getItem('token'));
        // this.currenttoken=this.token.asObservable();
    }
    getalltopmasters() {
        return this.http.get("http://localhost:3000/master");
    }
    getalltrendingrecipe() {
        // var httpOptions=this.makeToken('token');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recipes/trending");
    }
    getallrecommendedbyhistoryrecipe() {
        let httpOptions = this.makeToken('token');
        let username = localStorage.getItem('username');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recommended/" + username, httpOptions);
    }
    getallrecommendedrecipe() {
        let httpOptions = this.makeToken('token');
        let username = localStorage.getItem('username');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recommendedByCuisine/" + username, httpOptions);
    }
    getallrecommendedrecipeByIngredients(list) {
        let httpOptions = this.makeToken('token');
        let username = localStorage.getItem('username');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recipes/" + list, httpOptions);
    }
    userRegister(user) {
        var url = "https://cookify.stackroute.io:8443/userLogin/register";
        return this.http.post(url, user);
    }
    login(user) {
        let _url = "https://cookify.stackroute.io:8443/userLogin/authenticate";
        return this.http.post(_url, user, { observe: 'response' });
    }
    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
    }
    //get user by id in selectinterest
    getUser(id) {
        var url = "https://cookify.stackroute.io:8443/userLogin/user/" + id;
        return this.http.get(url);
    }
    getStateAndCountry() {
        return this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities");
    }
    // public  getdataforinterests():Observable<any>
    //   { let _url= "http://localhost:3000/interestrecipes";
    //     return this.http.get<any>(_url);
    //   }
    submitfinalfavourites(obj) {
        console.log(obj.cuisines);
        let _url1 = "https://cookify.stackroute.io:8443/userLogin/user";
        return this.http.post(_url1, obj);
    }
    // localhost
    postPublishRecipe(obj) {
        var httpOptions = this.makeToken('token');
        let urlz = "https://cookify.stackroute.io:8443/recipeService/api/v1/recipe";
        return this.http.post(urlz, obj, httpOptions);
    }
    getRecipeDetails(id) {
        return this.http.get("https://cookify.stackroute.io:8443/recipeService/api/v1/recipedetail/" + id);
    }
    getUserDetails(username) {
        var httpOptions = this.makeToken('token');
        console.log(httpOptions.headers.get('Authorization') + " inside Service ");
        return this.http.get("https://cookify.stackroute.io:8443/userProfile/api/v1/user/" + username, httpOptions);
    }
    SearchRecipe(reqname) {
        let _url = "https://cookify.stackroute.io:8443/recipeService/api/v1/recipes/" + reqname;
        return this.http.get(_url);
    }
    saveuserlikerecipe(recipeobj) {
        var httpOptions = this.makeToken('token');
        let urlz = "https://cookify.stackroute.io:8443/userProfile/api/v1/userlikerecipe/" + localStorage.getItem('username');
        console.log(urlz, "inside save");
        return this.http.post(urlz, recipeobj, httpOptions);
    }
    saveusertryrecipe(recipeobj) {
        var httpOptions = this.makeToken('token');
        let urlz = "https://cookify.stackroute.io:8443/userProfile/api/v1/usertryrecipe/" + localStorage.getItem('username');
        console.log(urlz, "inside save");
        return this.http.post(urlz, recipeobj, httpOptions);
    }
    makeToken(token) {
        this.token = localStorage.getItem(token);
        this.fullToken = "Bearer " + this.token;
        console.log(this.fullToken);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: this.fullToken
            })
        };
        return httpOptions;
    }
    getAddresses() {
        var httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/ds/" + localStorage.getItem("username");
        console.log(localStorage.getItem("username"));
        console.log(this.http.get(url));
        return this.http.get(url, httpOptions);
    }
    //Add address for the first time
    addFirstAddress(address) {
        let httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/ds";
        return this.http.post(url, address, httpOptions);
    }
    //to post address
    addAddress(address) {
        console.log(address);
        let httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/da/" + localStorage.getItem('username');
        return this.http.put(url, address, httpOptions);
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
    rating(recipedetail) {
        let httpOptions = this.makeToken('token');
        let _url = "https://cookify.stackroute.io:8443/recipeService/api/v1/recipe";
        console.log("working");
        console.log(recipedetail, "service");
        return this.http.put(_url, recipedetail, httpOptions);
    }
    //to pass the current delivery address and list of ingredients
    addOrderDetails(orderDetails) {
        //replace with orderDetails api and add username(user) as path variable
        console.log(orderDetails);
        let httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/od";
        //add jwt token in http Authorization header
        return this.http.post(url, orderDetails, httpOptions);
    }
    //to get deliveryguy object which contains deliveryguy username and coordinates
    getDeliveryGuy() {
        //replace with get deliveryGuy api
        let httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/dg";
        //add jwt token in http Authorization header
        return this.http.get(url, httpOptions);
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
        let httpOptions = this.makeToken('token');
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/";
        return this.http.get(url, httpOptions);
    }
    //to post list of deliveryguys along with distance and time in order
    deliveryGuysList(deliveryGuyList) {
        //username=localStorage.getItem('username');
        // var orderId = this.getOrderId(localStorage.getItem('username'));
        //replace with postDeliveryGuy list api
        let httpOptions = this.makeToken('token');
        console.log(deliveryGuyList);
        var url = "https://cookify.stackroute.io:8443/deliveryService/api/v1/ods";
        //add jwt token in http Authorization header
        return this.http.post(url, deliveryGuyList, httpOptions);
    }
    //get the regional name of  ingredients in recipe details
    getRegionalName(view) {
        var httpOptions = this.makeToken('token');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/ingredients/" + view + "_" + localStorage.getItem('username'), httpOptions);
    }
    //get ingredients in group
    getIngredients(recipeid) {
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/allIngredients/" + recipeid + "_" + localStorage.getItem('username'));
    }
    getCommonlyUsedIngredients() {
        var httpOptions = this.makeToken('token');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/ingredients/mostused", httpOptions);
    }
    // a recipe tried how many times
    getNumberOfTried(recipeid) {
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/numberOfTried");
    }
    getalllatestrecipe() {
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recipes/latest");
    }
    getallpopularrecipe() {
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/recipes/popular");
    }
    //Number of people tried a recipe
    getNumberOfTriedInRecipe(recipeId) {
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/numberOfTried/" + recipeId);
    }
    getorderdetails() {
        var username = localStorage.getItem('username');
        var httpOptions = this.makeToken('token');
        return this.http.get("https://cookify.stackroute.io:8443/deliveryService/api/v1/od/" + username, httpOptions);
    }
    getSuggestedIngredients(value) {
        var httpOptions = this.makeToken('token');
        return this.http.get("https://cookify.stackroute.io:8443/recommendationService/api/v1/suggested/ingredients/" + value, httpOptions);
    }
    updateImage(newUser) {
        var httpOptions = this.makeToken('token');
        return this.http.put("https://cookify.stackroute.io:8443/userProfile/api/v1/user/", newUser, httpOptions);
    }
};
FrontendserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FrontendserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FrontendserviceService);



/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 480px) {\n  .abcd{\n  left:70%;\n  }\n}\n\n.abcd{\n  left:80%;\n\n}\n\n.publishicon{\n  animation: publish 1s infinite ease-in-out alternate-reverse;\n}\n\n@-webkit-keyframes publish{\n  0%{\n    transform: translateY(0px);\n  }\n  100%{\n    transform: translateY(20px);\n  }\n}\n\n@keyframes publish{\n  0%{\n    transform: translateY(0px);\n  }\n  100%{\n    transform: translateY(20px);\n  }\n}\n\n.badge {\n  padding: 1px 9px 2px;\n  font-size: 12.025px;\n  font-weight: bold;\n  white-space: nowrap;\n  color: #ffffff;\n  background-color: #999999;\n  border-radius: 9px;\n}\n\n.badge:hover {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.badge-error {\n  background-color: #CB202D;\n}\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZWNvbXBvbmVudC9ob21lY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtFQUNBLFFBQVE7RUFDUjtBQUNGOztBQUVBO0VBQ0UsUUFBUTs7QUFFVjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBR3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVjb21wb25lbnQvaG9tZWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmFiY2R7XG4gIGxlZnQ6NzAlO1xuICB9XG59XG5cbi5hYmNke1xuICBsZWZ0OjgwJTtcblxufVxuXG4ucHVibGlzaGljb257XG4gIGFuaW1hdGlvbjogcHVibGlzaCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbkBrZXlmcmFtZXMgcHVibGlzaHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMXB4IDlweCAycHg7XG4gIGZvbnQtc2l6ZTogMTIuMDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbi5iYWRnZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMjAyRDtcbn1cblxuICAiXX0= */");

/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: HomecomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecomponentComponent", function() { return HomecomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomecomponentComponent = class HomecomponentComponent {
    constructor(router) {
        this.router = router;
    }
    fn(name) {
        this.router.navigate(['/search', name]);
    }
    ngOnInit() {
    }
};
HomecomponentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomecomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homecomponent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homecomponent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homecomponent.component.css */ "./src/app/homecomponent/homecomponent.component.css")).default]
    })
], HomecomponentComponent);



/***/ }),

/***/ "./src/app/latest/latest.component.css":
/*!*********************************************!*\
  !*** ./src/app/latest/latest.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdGVzdC9sYXRlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/latest/latest.component.ts":
/*!********************************************!*\
  !*** ./src/app/latest/latest.component.ts ***!
  \********************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let LatestComponent = class LatestComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getalllatestrecipe().subscribe(data => {
            this.recipe = data;
            for (let i in Object.keys(this.recipe)) {
                if (this.recipe[i].recipeImage == null) {
                    this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg";
                }
            }
            console.log(this.recipe, "data of latest recipe");
        });
    }
};
LatestComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
LatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-latest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./latest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/latest/latest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./latest.component.css */ "./src/app/latest/latest.component.css")).default]
    })
], LatestComponent);



/***/ }),

/***/ "./src/app/loggednavbar/loggednavbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/loggednavbar/loggednavbar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainmenu-area{\n    background: rgb(203, 32, 45);\n    background: linear-gradient(45deg, rgba(203, 32, 45, 1) 0%, rgba(212, 70, 81, 1) 100%);\n}\n\n.right-button{\n    font-size: 96px;\n}\n\n.onhoverwelcome:hover{\n    text-decoration: none;\n}\n\n.searching{\n    transform: 5s scale(1) \n}\n\n.searching:hover{\n    transform: scale(0.9)\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nZ2VkbmF2YmFyL2xvZ2dlZG5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBRzVCLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZG5hdmJhci9sb2dnZWRuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlubWVudS1hcmVhe1xuICAgIGJhY2tncm91bmQ6IHJnYigyMDMsIDMyLCA0NSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjAzLCAzMiwgNDUsIDEpIDAlLCByZ2JhKDIxMiwgNzAsIDgxLCAxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjAzLCAzMiwgNDUsIDEpIDAlLCByZ2JhKDIxMiwgNzAsIDgxLCAxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjAzLCAzMiwgNDUsIDEpIDAlLCByZ2JhKDIxMiwgNzAsIDgxLCAxKSAxMDAlKTtcbn1cblxuLnJpZ2h0LWJ1dHRvbntcbiAgICBmb250LXNpemU6IDk2cHg7XG59XG5cbi5vbmhvdmVyd2VsY29tZTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zZWFyY2hpbmd7XG4gICAgdHJhbnNmb3JtOiA1cyBzY2FsZSgxKSBcbn1cblxuLnNlYXJjaGluZzpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/loggednavbar/loggednavbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/loggednavbar/loggednavbar.component.ts ***!
  \********************************************************/
/*! exports provided: LoggednavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggednavbarComponent", function() { return LoggednavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






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
LoggednavbarComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoggednavbarComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoggednavbarComponent.prototype, "guestuser", void 0);
LoggednavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loggednavbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loggednavbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loggednavbar.component.css */ "./src/app/loggednavbar/loggednavbar.component.css")).default]
    })
], LoggednavbarComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999;\n  text-align: center;\n}\n\n/*==================================================================\n[ Social ]*/\n\n.login100-form-social-item {\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  color: #3B5998;\n  border-radius: 50%;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO1dBQ1c7O0FBQ1g7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50eHQyIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBTb2NpYWwgXSovXG4ubG9naW4xMDAtZm9ybS1zb2NpYWwtaXRlbSB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let LoginComponent = class LoginComponent {
    constructor(router, http, FrontEndService, spinner) {
        this.router = router;
        this.http = http;
        this.FrontEndService = FrontEndService;
        this.spinner = spinner;
        this.user = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
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
            this.spinner.hide();
            console.log(error, "bbbbbbb");
            if (error.status == 401)
                this.spinner.hide();
            this.loginstatus = "Incorrect Details";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let MasterComponent = class MasterComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.masterdata = [];
    }
    ngOnInit() {
        this.fservice.getalltopmasters().subscribe(data => { this.masterdata = data; console.log(this.masterdata, "in master"); });
    }
    masterid(id) {
        console.log("clicked on master with id:" + id);
    }
};
MasterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")).default]
    })
], MasterComponent);



/***/ }),

/***/ "./src/app/mastercard/mastercard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mastercard/mastercard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmNhcmQvbWFzdGVyY2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/mastercard/mastercard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mastercard/mastercard.component.ts ***!
  \****************************************************/
/*! exports provided: MastercardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastercardComponent", function() { return MastercardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MastercardComponent = class MastercardComponent {
    constructor() {
        this.cu = [];
    }
    ngOnInit() {
    }
    master(id) {
        console.log("clicked on master with id:" + id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "master_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "image_path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "cu", void 0);
MastercardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mastercard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mastercard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mastercard.component.css */ "./src/app/mastercard/mastercard.component.css")).default]
    })
], MastercardComponent);



/***/ }),

/***/ "./src/app/minute-seconds.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/minute-seconds.pipe.ts ***!
  \****************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinuteSecondsPipe = class MinuteSecondsPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' +
            (value - minutes * 60).toString().padStart(2, '0');
    }
};
MinuteSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minuteSeconds'
    })
], MinuteSecondsPipe);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.loggedin = false;
    }
    ngOnInit() {
        if (localStorage.getItem('username') != null) {
            this.loggedin = true;
        }
    }
    login() {
        this.router.navigateByUrl(`/login`);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/popular/popular.component.css":
/*!***********************************************!*\
  !*** ./src/app/popular/popular.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXIvcG9wdWxhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/popular/popular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popular/popular.component.ts ***!
  \**********************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let PopularComponent = class PopularComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getallpopularrecipe().subscribe(data => {
            this.recipe = data;
            for (let i in Object.keys(this.recipe)) {
                if (this.recipe[i].recipeImage == null) {
                    this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg";
                }
            }
            console.log(this.recipe, "data of latest recipe");
        });
    }
};
PopularComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
PopularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popular',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popular/popular.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popular.component.css */ "./src/app/popular/popular.component.css")).default]
    })
], PopularComponent);



/***/ }),

/***/ "./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  max-width: 400px;\n}\n.card-spacing{\n  padding: 25px 25px 25px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zc2libGVyZWNpcGVzL3Bvc3NpYmxlLXJlY2lwZXMtY2FyZHMvcG9zc2libGUtcmVjaXBlcy1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wb3NzaWJsZXJlY2lwZXMvcG9zc2libGUtcmVjaXBlcy1jYXJkcy9wb3NzaWJsZS1yZWNpcGVzLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5jYXJkLXNwYWNpbmd7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PossibleRecipesCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleRecipesCardsComponent", function() { return PossibleRecipesCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../frontendservice.service */ "./src/app/frontendservice.service.ts");



let PossibleRecipesCardsComponent = class PossibleRecipesCardsComponent {
    constructor(frontendservice) {
        this.frontendservice = frontendservice;
        this.ingredients = [];
        this.recipe = [];
    }
    ngOnInit() {
        console.log(this.ingredients);
        let list = '';
        for (let i = 0; i < this.ingredients.length; i++) {
            list += '_' + this.ingredients[i];
        }
        console.log(list);
        this.frontendservice.getallrecommendedrecipeByIngredients(list).subscribe((data) => { this.recipe = data; console.log(data); });
    }
    getRecipes(list) {
    }
};
PossibleRecipesCardsComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PossibleRecipesCardsComponent.prototype, "ingredients", void 0);
PossibleRecipesCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-possible-recipes-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./possible-recipes-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./possible-recipes-cards.component.css */ "./src/app/possiblerecipes/possible-recipes-cards/possible-recipes-cards.component.css")).default]
    })
], PossibleRecipesCardsComponent);



/***/ }),

/***/ "./src/app/possiblerecipes/possiblerecipes.component.css":
/*!***************************************************************!*\
  !*** ./src/app/possiblerecipes/possiblerecipes.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n  background-color: green;\n}\n\n.demo-chip-list {\n  width: 100%;\n}\n\n.column {\n  float: left;\n  width: 60%;\n  padding: 10px;\n  height: 300px; /* Should be removed. Only for demonstration */\n  margin-left: 5%;\n}\n\n.column2 {\n  float: left;\n  width: 25%;\n  padding: 10px;\n  height: 300px; /* Should be removed. Only for demonstration */\n  margin-left: 5%;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n  .column2 {\n    width: 100%;\n  }\n}\n\n.ingredientsList{\n  width: 84%;\n  margin-left: 8%;\n  border-radius: 10px;\n  margin-top: 100px;\n  background: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zc2libGVyZWNpcGVzL3Bvc3NpYmxlcmVjaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYSxFQUFFLDhDQUE4QztFQUM3RCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYSxFQUFFLDhDQUE4QztFQUM3RCxlQUFlO0FBQ2pCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQSx1R0FBdUc7O0FBQ3ZHO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3NpYmxlcmVjaXBlcy9wb3NzaWJsZXJlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uZGVtby1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4OyAvKiBTaG91bGQgYmUgcmVtb3ZlZC4gT25seSBmb3IgZGVtb25zdHJhdGlvbiAqL1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5jb2x1bW4yIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMzAwcHg7IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbHVtbjIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLmluZ3JlZGllbnRzTGlzdHtcbiAgd2lkdGg6IDg0JTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/possiblerecipes/possiblerecipes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/possiblerecipes/possiblerecipes.component.ts ***!
  \**************************************************************/
/*! exports provided: PossiblerecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossiblerecipesComponent", function() { return PossiblerecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let PossiblerecipesComponent = class PossiblerecipesComponent {
    constructor(fservice, router, route) {
        this.fservice = fservice;
        this.router = router;
        this.route = route;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"]];
        this.ingredientCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.ingredients = [];
        this.allIngredients = ['Asafoetida', 'Basil, holy',
            'Bay leaf', 'Black peppercorns', 'Black salt', 'Butter', 'Caraway seed', 'Black Cardamom', 'Green cardamom', 'Carom seed',
            'Cinnamon stick', 'Citric acid', 'Clarified butter', 'Cloves', 'Coriander seed', 'Coriander leaves', 'Cumin seed', 'Curry leaf',
            'Dill leaves', 'Dried mango powder', 'Dry Pomegranate seeds', 'Dried red chili', 'Dried fenugreek leaves', 'Fenugreek seed',
            'Dried ginger powder', 'Honey', 'Jaggery', 'Mace', 'Mint leaves', 'Milk', 'Mustard seed', 'Nigella seed (Onion seed)', 'Nutmeg',
            'Red chili powder', 'Rock salt', 'Rose water', 'Saffron', 'Salt', 'Star anise', 'Sugar', 'Tamarind', 'Turmeric', 'Vinegar',
            'Amaranth leaves', 'Ash gourd', 'Banana flower', 'Beetroot', 'Bell Pepper (Capsicum)', 'Bitter gourd', 'Bottlegourd',
            'Broad beans (fava beans, lima beans, butter beans)', 'Cabbage', 'Carrot', 'Cauliflower', 'Cluster beans', 'Coconut (fresh)',
            'Colocasia leaves (Taro leaves)', 'Colocasia roots (Taro roots)', 'Coriander leaves (Cilantro)', 'Corn', 'Cucumber', 'Curry leaves',
            'Drumsticks', 'Eggplant (Brinjal or Aubergine)', 'Elephant Yam', 'Fenugreek leaves', 'French Beans (Green beans)', 'Garlic', 'Ginger',
            'Green chili', 'Green onion (Scallian or Spring onion)', 'Green peas', 'Ivy gourd', 'Jackfruit', 'Lemon (Lime)', 'Mushroom',
            'Mustard leaves', 'Okra (Ladies� finger)', 'Onion', 'Plantain (raw banana)', 'Potato', 'Pumpkin', 'Radish (Daikon)', 'Ridge gourd',
            'Shallot (pearl onion)', 'Snake gourd', 'Sorrel leaves', 'Spinach', 'Sweet potato', 'Apple', 'Apricot', 'Avocado (Butterfruit)',
            'Banana', 'Cantaloupe (Musk melon)', 'Custard apple', 'Gooseberry, Indian', 'Grapes', 'Guava', 'Lychee', 'Mango, ripe', 'Mango, unripe',
            'Orange', 'Papaya', 'Pears', 'Pineapple', 'Pomegranate', 'Sapota (Sapodilla)', 'Sugar cane', 'Sweet lime', 'Almond', 'Betel nut',
            'Cashew nut', 'Desiccated coconut', 'Dates', 'Dried date', 'Dried fig', 'Flax seed', 'Lotus seed', 'Peanut', 'Poppy seed', 'Pistachio',
            'Raisin', 'Sesame seed', 'Watermelon seeds', 'Amaranth grain', 'Barley', 'Broken wheat', 'Millet, Barnyard', 'Millet, finger',
            'Millet, foxtail', 'Millet, kodo', 'Millet, Little', 'Millet, pearl', 'Millet, Sorghum', 'Rice', 'Rice, beaten (rice flakes)',
            'Rice, parboiled', 'Rice, puffed', 'Semolina', 'Tapioca', 'Bengal gram, split and skinned', 'Bengal gram, whole (Black chickpeas)',
            'Bengal gram, roasted and split', 'Black eyed beans/peas', 'Black gram, split and skinned', 'Black gram, split and with skin',
            'Black gram, whole', 'Chickpea, green', 'Chickpea, white (Garbanzo beans)', 'Cowpeas, red', 'Green gram, split and skinned',
            'Green gram, whole', 'Horse gram', 'Lentil, pink and split', 'Peas, green', 'Peas, black', 'Peas, white', 'Pigeon peas', 'Mustard Oil',
            'SunflowerOil', 'Soybean Oil', 'Olive Oil', 'Rice Bran Oil', 'FlaxSeeds Oil', 'GroundNut Oil', 'Palm Oil', 'Sesame Oil',
            'Almond Oil (Edible)', 'Cashew Oil', 'Canola Oil', 'Margarine', 'Buttermilk', 'Instant Full Cream Milk Powder', 'Skimmed Milk Powder',
            'Cream', 'Cheese', 'Condensed Milk', 'Yogurt', 'Chicken ', 'Mutton', 'Prawns', 'Crab', 'Oyster', 'Katla', 'Rohu', 'Shark', 'Paneer', 'Saunf ', 'Variyali', 'Badishep', 'Sombu', 'Sopuginja', 'Perumjeerakam', 'Hing', 'Perungayam', 'Inguva',
            'Kayam', 'Tulsi', 'Thulasi', 'Thulasi Aakulu', 'Sivatulasi', 'Tej patta', 'Tamal patra', 'Tamal patri', 'Brinji elai', 'Talisapatri',
            'Karuva ela', 'Kali mirch', 'Kala mari', 'Kali miri', 'Milagu', 'Miriyalu', 'Krumulagu', 'Kala namak', 'Sanchal', 'Kale mitha',
            'Karuppu uppu', 'Nalla uppu', 'Karutha Uppu', 'Makkhan', 'Makhan', 'Loni', 'Vennai', 'Venna', 'Shahjeera', 'Shahi jeeru', 'Shajeera',
            'Karun Jeerakam', 'Seema Sopyginjale', 'Seemajeerakam', 'Badi elaichi', 'Moti elaychi', 'Veldoda', 'Periya elakkai', 'Yalakullu',
            'Karutta elam', 'Choti elaichi', 'Elaychi', 'Elakkai', 'Elam', 'Ajwain', 'Ajamo', 'Ova', 'Keram Vitai', 'Karom sid', 'Kaream viit',
            'Dalchini', 'Taj', 'Lavanga pattai', 'Dalchina Chekka', 'Karuva patta', 'Nimboo sat', 'Limbu na phool (Saji na phool)',
            'Limbacya rasamadhye sapadanare amla', 'Citrik amilam', 'Nimma uppu', 'Sitrik acid', 'Ghee', 'Tup', 'Nei', 'Neyyi', 'Ney',
            'Laung', 'Laving', 'Lavang', 'Krambu', 'Lavangalu', 'Grambu', 'Sabut dhaniya', 'Dhana', 'Dhanay', 'Kothamalliverai', 'Dhaniyalu',
            'Kothamalli', 'Hara Dhania', 'Kothmir (Dhana)', 'Kothimbir', 'Kothimeera', 'Jeera', 'Jiru', 'Jira', 'Jeeragam', 'Jeelakara', 'Jeerakam',
            'Kari patta', 'Mitho limdo', 'Kadhilimbachi pana', 'Karuvepillai', 'Karivepaku', 'Kariveppela', 'Suva bhaji', 'Sava ni bhaji', 'Shepu',
            'Sathakuppi Sompa', 'Soya Koora', 'Sathakuppa', 'Amchur', 'amchur', 'Mangai podi', 'Mamidikaya Pudi', 'Manga Podi', 'Anardana',
            'Dadam na dana', 'Dalimbache Dane', 'Maadhulai Vidhai', 'Daanimma Ginjalu', 'Madhalanaranga', 'Sukhi lal mirch', 'Suku lal marchu',
            'Mirchya', 'Vatral milagai', 'Erra Mirapa Kayalu', 'Vattalmulaku', 'Kasoori methi', 'kasoori methi', 'Valalelya methici pane',
            'Venthiya Keera', 'Menthikora', 'Unanniya uluva ilakal', 'Methi ke dane', 'Methi na dana', 'Methi', 'Vendayam', 'Menthulu', 'Uluva',
            'Saunth', 'Sunth', 'Suntha', 'Sukku', 'Sonti', 'Chukku', 'Shahad', 'Madh', 'Then', 'Theene', 'Thean', 'Gur', 'Gol (Gor)', 'Gul', 'Vellam',
            'Bellam', 'Sharkkara', 'Javitri', 'Javintri', 'Jaipatri', 'Jadipattri', 'Japathri', 'Jathipathri', 'Pudina', 'fudino', 'Pudina akku',
            'Pudinaa', 'Doodh', 'Dudh', 'Paal', 'Palu', 'Rai ,Sarso', 'Rai', 'Mohri', 'Kadugu', 'Aavaalu', 'Kaduku', 'Kalonji', 'Dungali bija',
            'Kanda biyane', 'Karuppu yel', 'Nalla vittanalu', 'karinjirakam', 'Jaiphal', 'Jhadhikkai', 'Jajikayi', 'Jathi', 'Lal mirch powder',
            'Lal marchu', 'Lal mirchya', 'Mulakupodi', 'Sendha namak', 'Sendhalu mithu', 'Saindhav meeth', 'Kal uppu', 'Ralu Uppu', 'Para upp',
            'Gulab jal', 'Gulab pani', 'Kulap jal', 'Kesar', 'Keshar', 'Kungumappu', 'Kukumpoovu', 'Kumkumappovu', 'Namak', 'Mithu', 'Meeth', 'Uppu',
            'Chakraphool', 'Cakraphala', 'Badian', 'Anashuppu', 'Anaspuvu', 'Takkolam', 'Shakkar', 'Khand', 'Saakhar', 'Chakkarai', 'Chakara',
            'Panjasara', 'Imli', 'Aambali', 'Chincha', 'Puli', 'Chinthapandu', 'Vaallan puli', 'Haldi', 'Haldar', 'Halad', 'Manjal', 'Pasupu', 'Sirka',
            'Sirko', 'Shirka', 'Pulikaadi', 'Vinegar', 'Chorukka', 'Chauli bhaji', 'Cauli bhaji', 'Lal math', 'Molaikeerai', 'Totakura',
            'Chuvanna cheera', 'Petha-', 'Petha', 'Kohla', 'Poosanikai (Pushini Kaiy)', 'Boodida gummadikaya', 'Kumbalanga', 'Kele ka phool',
            'kela na ful', 'Kelful', 'Vazhaipoo', 'Arati Puvvu', 'Pazham Vazhakudappan', 'Chukandar', 'Beet', 'Beetroot kijangu', 'Beetroot',
            'Shimla mirch', 'Bholak marchu', 'Bhopli/bhongi mirchi', 'Kudamilagai', 'Capsicum', 'Kuda mulagu', 'Karela', 'karelu', 'Karla',
            'Pavara kaiy', 'Kakara kayi', 'Pavakka', 'Lauki', 'Dudhi', 'Dudhi Bhopla', 'Sura kaiy', 'Sorakaya', 'Churakka', 'Sem ki phalli',
            'valpapdi', 'Avara kaiy', 'Pedda Chikkudu', 'Amarakka', 'Patta gobi', 'Kobi', 'Muttaikos', 'Cabbage', 'Muttakoos', 'Gajar', 'Gaajar',
            'Carrot', 'Gajjara gadda', 'Phool gobi', 'koli flower', 'Phulkobi', 'Kovippu', 'Cauliflower', 'Gawar ki phalli', 'Gavar',
            'Kothavarangai', 'Goruchikkudu', 'Kothamara', 'Nariyal', 'Naliyer', 'Naral', 'Thengai', 'Kobbari Kaaya', 'Thenga', 'Arbi patta',
            'Patra', 'Aluchi pana', 'Chepankizhangu', 'Chemagadda', 'Chembu', 'Arbi', 'Arvi', 'Alu', 'Makkai', 'Makai', 'Maka', 'Cholam',
            'Mokkajonna Kandelu', 'Kheera', 'Kakdi', 'Velleri Kaiy', 'Kheera Dosakaya', 'Vellarikka', 'Surjan ki phalli', 'Saragva ni singh',
            'Shevgyachya shenga', 'Murungaikkai', 'Mulakada', 'Muringakayi', 'Baingan', 'Ringan', 'Vanga', 'Kathirikai', 'Vankaya', 'Vazhuthananga',
            'Zimikand or Suran', 'Suran', 'Chenai kizhangu', 'Kanda gadda', 'Chena', 'Methi ni bhaji', 'Methi bhaji', 'Vendayakeerai',
            'Menthi kura', 'Farash beans', 'Fansi', 'Shravan ghevda', 'Beans', 'Lahsun', 'Lasan', 'Lassun', 'Poondu', 'Vellulli', 'Velluthulli',
            'Adrak', 'Aadu', 'Inji', 'Allam', 'Hari mirch', 'Lila marcha', 'Hirvya mirchya', 'Pachai Milagai', 'Pacchi Mirapakaya', 'Pachchamulaku',
            'Hari pyaz', 'Lili Dungri', 'Kanda path', 'Pallari Vengayam', 'Vulli Kada', 'Ulli Thal', 'Matar', 'Vatana', 'Pattani', 'Pachi batani',
            'Tendli', 'Tindora', 'Tondli', 'Kovaikkai', 'Dondakaya', 'Kovaykka', 'Kathal', 'Phanas', 'Pala Pazham', 'Panasakai', 'Chakka', 'Nimbu',
            'Limbu', 'Elumichampazham', 'Nimmakaya', 'Cherunaranga', 'Khumbh', 'Mushroom', 'Kaalan', 'Kukka Godugu', 'Koon', 'Sarso ka saag',
            'Rai limba', 'Rai chi paan', 'Katuku ilaikal', 'Aava aaku', 'Kaduguila', 'Bhindi', 'Bhinda', 'Bhendi', 'Vendaikkai', 'Bendakaya', 'Pyaaz',
            'Dungari (Kanda)', 'Kanda', 'Vengayam', 'Ullipaya', 'Ulli', 'kachha kela', 'Kacha kela', 'Kacca keli', 'Vazhaikkai', 'Pachi Aratikaya',
            'Kaya (Nenthrakaya)', 'Aloo', 'Batata (Bataka)', 'Batata', 'Urulaikizhangu', 'Bangala Dumpa (Alugadda)', 'Urulakhizhangu', 'Kaddu',
            'Kolu', 'Lal bhopla', 'Seetaphul', 'Gummadikaya', 'Mathanga', 'Mooli', 'Mula', 'Mullangi', 'Turai', 'Turia', 'Dodka', 'Peerkangai',
            'Beerakaya', 'Peechinga', 'Chota pyaaz or Sambar onion', 'Nani dungari', 'Chote kande', 'China (Sambar vebgayam)', 'Ullipaaya',
            'Cheriya ulli', 'Chirchinda', 'Parval', 'Padval', 'Pudalang kaiy', 'Potlakaya', 'Padavalanga', 'Pitwaa', 'Sorela pandada', 'Ambadi',
            'Pulicha keerai', 'Gongura', 'Palak', 'Pasala keerai', 'Palakura', 'Palak cheera', 'Shakarkandi', 'Shakkariya', 'Ratala',
            'Valli kijangu', 'Chilakada Dumpa', 'Madhura Kizhangue', 'Seb', 'Safarjan', 'Safarchand', 'Applepazham', 'Sema regu', 'Apple',
            'Khoobani', 'Jardalu', 'Jardaloo', 'Sarkkarai Badami', 'Seema badam', 'Sheema pazham', 'Makhanphal', 'Evokado', 'Alpukat',
            'Vennai pazham', 'Venna Pandu', 'Avocado', 'Kela', 'Arati pandu', 'Pazham', 'Kharbooja', 'Teti', 'Kharbooj', 'Parangi pazham', 'Kantlop',
            'Sitaphal', 'Sitafal', 'Sithaphal', 'Seetha pazham', 'Sitaphalam', 'Seethappazham', 'Amla', 'Ambala', 'Awalah', 'Nellikai', 'Usiri',
            'Neli', 'Angoor', 'Draksha', 'Draakshm', 'Dratchai pazham', 'Mundhiringa', 'Amrud', 'Jamfal', 'Peru', 'Koiya pazham', 'Jama', 'Perakka',
            'Litchee', 'Lichi', 'Laichi pazham', 'Litchi Pandu', 'Aam', 'Keri', 'Amba', 'Mambazham', 'Mamidi', 'Manga', 'Kachha aam', 'Kachi keri',
            'Kairi', 'Mangai', 'Narangi or Santra', 'Santra', 'Santre', 'Kichilipazham', 'Narinja', 'Narang', 'Papita', 'Papaiyu', 'Popai',
            'Papali kai', 'Bobbaya', 'Kappanga', 'Nashpati', 'Piyels', 'Berikkai', 'Peri pandu', 'Sabarjil', 'Ananas', 'Annanas', 'Annasi pazham',
            'Anasa', 'Kaitha Chakka', 'Anar', 'Daadam', 'Daalimb', 'Madhulai', 'Danimma', 'Maadhala naarnga', 'Chikku', 'Chikoo', 'Sapota', 'Ganna',
            'Sherdi', 'Usa', 'Karuppan Charu', 'Cheruku Gada', 'Karumbin Neeru', 'Mausambi', 'Mosambi', 'Mosumbi', 'Chaatukudi', 'Battaiah', 'Badam',
            'Baadam', 'Badham', 'Badam kayu', 'Khubani', 'Saara Paruppu', 'Mutta Pazham', 'Supari', 'Sopari', 'Pakku', 'Bettu ginja', 'Paakkatakka',
            'Kaju', 'Mundiri paruppu', 'Jeedi pappu', 'Kasuandi', 'Kopra', 'Koparu', 'Suka khobra', 'Coparai', 'Kobbari', 'Copra', 'Khajur',
            'Perichampazham', 'Kharjoora pandu', 'Eenthapazham', 'Chuhara', 'Kharek', 'Kharik', 'Pericham Pinju', 'Khajoora', 'Kaarakka', 'Anjeer',
            'Atti Pazham', 'Athi Pallu', 'Alsi', 'Alasi', 'Javasu', 'Ali Vidai', 'Cheruchana vithu', 'Phool makhana', 'Makhana', 'Kamal bee',
            'Tamarai vitai', 'Tamara vittanam', 'Thaamara vithu', 'Moongphali', 'Singdana', 'Shengdana', 'Verkadalai', 'Pallilu', 'kappalandi',
            'Khus-khus', 'Khaskhas', 'Khasa khasa', 'Gasagasaalu', 'Kasakasa', 'Pista', 'Pista pappu', 'Kishmish', 'Kismis', 'Trakshai', 'Kismiss',
            'Til', 'Tal', 'Ellu', 'Nuvvulu', 'Magaz', 'Tadabuca bija', 'Tarabuja biyane', 'Tarpucani vitai', 'Puccakaya vittanam',
            'Thanni mthan vithu', 'Rajgira', 'Rajgaro', 'Thenai', 'Jau', 'Jav', 'Satu', 'Barliarisi', 'Barli Biyyam', 'Barli', 'Dalia', 'Fada ghaum',
            'Gavache Satva', 'Godhumai Ravai', 'Godumalu Rawa', 'Gothumbu Nurukku', 'Sama ke chawal', 'Samo /Moraiyo', 'Bhagar /Varai',
            'Kuthirai valli', 'Odalu', 'Kavadapullu', 'Ragi', 'Nachani', 'Kezhvaragu', 'Ragulu', 'Panji pullu', 'Kangni', 'Kang', 'Rala', 'Thinai',
            'Korra biyam', 'Thina', 'Kodra', 'Kodri', 'Kutki', 'Kuri', 'Vari', 'Saamai', 'Sama', 'Chama', 'Bajra', 'Bajri', 'Kambu', 'Sajjalu', 'Kambam',
            'Jowar', 'Juvar', 'Jowari', 'Jonna', 'Chawal', 'Chokha', 'Tandul', 'Arisi', 'Biyam', 'Pachari', 'Poha', 'Pauva', 'Pohe', 'Aval', 'Atukulu',
            'Ukda chawal', 'Bhatabhata cokha', 'Bhata bhopala', 'Puzhungal Arisi', 'Uppudu biyam', 'Puzhungalari', 'Murmura', 'Mamra', 'Churmura',
            'Pori', 'Borugulu', 'Sooji', 'Soji (ravo)', 'Rava', 'Ravai', 'Bombai Rawa', 'Sago', 'Sabudana', 'Javvarisi', 'Saggubiyyam', 'Kappa',
            'Chana dal', 'Chana ni dal', 'Harbaryachi /chanyachi dal', 'Kadalai paruppu', 'Samaga Pappu', 'Kadala parippu', 'Kala chana',
            'desi chana', 'Harbhara', 'Konda kadalai', 'Sanagalu', 'Kadala', 'Chivda dal', 'Pottu kadalai', 'Putnalupappu', 'Varutha Kadala',
            'Lobia (Chawli)', 'Chola', 'Karamani', 'Bobbarlu', 'Payar', 'Urad dal, dhuli', 'Adad ni dal', 'Udid dal', 'Ulutham paruppu',
            'Minapa pappu', 'Uzhunnu parippu', 'Urad dal chilka', 'Fotrawali adad ni dal', 'Ulutham Paruppu', 'Sabut urad', 'Akha adad',
            'Udid', 'Muzhu ulundu', 'Minumulu', 'Uzhunnu', 'Hara cholia', 'Lila chana', 'Cikki', 'Cikpa', 'Cikkan', 'Kabuli chana, chole',
            'kabuli chana', 'Kothukadalai', 'Mudip Chenagulu', 'Vella Kadala', 'Lobia', 'Choli', 'Chawli', 'Karamani Payir', 'Alasandulu',
            'Vanpayar', 'Moong dal, dhuli', 'Mag ni dal', 'Mugachi dal', 'Payatham paruppu', 'Pesarapappu', 'Cheruparipu', 'Sabut moong',
            'Mag', 'Mug', 'Pachai payaru', 'Pesarlu', 'Cherupayar', 'Kulith (kulthi)', 'Kalathi', 'Kulthacha pith', 'Kutirai kiram',
            'Gurra? gr?ma', 'Muthira', 'Masoor dal', 'Masur ni dal', 'Masurachi dal', 'Massor Paruppu', 'Misur Pappu', 'Masoor Parippu',
            'Hara matar', 'Lila vatana', 'Matara', 'Kala matar', 'Kala vatana', 'Taad ka tel', 'Karuppu pattani', 'Karutta pis', 'Safed matar',
            'Safed vatana', 'Pandhara vatana', 'Arhar dal (Toor dal)', 'Tuver ni dal', 'Turichi dal', 'Tuvaram paruppu', 'kandi pappu', 'Thuvara',
            'sarason ka tel', 'Sarasava t?la', 'Moharice tela', 'Katuku enney', 'Ava nune', 'katuk enna', 'Soorjamukhi ka tel', 'Suryamukhi tela',
            'Suryaphula tela', 'Curiyakanti enney', 'Poddutirugu?u nune', 'suryakanti enna', 'Soyaabeen ka tel', 'Soyabin tela', 'Coyapin enney',
            'Soyabin nune', 'Seayabin enna', 'Jaitoon ka tel', 'Olive tela', 'Aliv enney', 'Aliv nune', 'Oliv oyil', 'Rais braan oil',
            'Cokha kothali tela', 'Tandula konda tela', 'Arici tavitu enney', 'Biyyam bran ka nune', 'Ari tavit enna', 'Alasee ka tel',
            'Phleksasida tela', 'Alvitai enney', 'Avise ginjala nune', 'Canavitt enna', 'Moongaphalee ka tel', 'Magaphalinum tela',
            'Sengadana tela', 'Nilakkatalai enney', 'Verusanaga nune', 'Nilakkatala enney', 'Khajura tela', 'Pama tela', 'Pamayil',
            'Tavu?u nune', 'Pana enna', 'til ka tel', 'Tala nu? tela', 'T?lace tela', 'El enney', 'Nuvvula nune', 'ellenna', 'baadaam tel',
            'Badamanum tela', 'Badama tela', 'Patam enney', 'Badam nune', 'badam enna', 'kaajoo ka tel', 'Kaju tela', 'Muntiri enmey', 'Jidipappu',
            'ka?uvanti', 'kanola tel', 'Kenola tela', 'Ka?uku e??ey', 'Avanune', 'kaneala oyil', 'makkhan', 'Venney', 'nakalee makkhan', 'Marjarina',
            'Ve??eyai', 'margarin', 'chhaachh', 'Chasa', 'Taka', 'Mor', 'Majjiga', 'Mattan', 'Instant Full Cream Milk Powder',
            'Instanta phula krima dudhaci pavadara', 'Utanati mulu kirim pal tul', 'Taksana purti krim milk paudar',
            'talksana purnna krim palppeati', 'malae nikala hua doodh kee paudar', 'Skimda dudha pavadara', 'Skimda dudhaci psvadara',
            'Atai nikkiya pal poti', 'Cilikina pala podi', 'skind milkk peati', 'malaee', 'Krima', 'Malai', 'Kirim', 'Krim', 'Paneer', 'Cijha',
            'Cija', 'Cis', 'Cij', 'gaadha doodh', 'Ghatta karelum dudha', 'Atavalele dudha', 'Cuntiya pal', 'Ghanikrta palu', 'baspikaricca pal',
            'Dahee', 'Dahim', 'Dahi', 'Tayir', 'Peregu', 'Tair', 'Murgee', 'Cikana', 'Kombadi', 'Koli', 'Ciken', 'Keali', 'bhede ka maans', 'Matana',
            'Attiraicci', 'mattan', 'jheenge', 'Prona', 'Kolambi', 'Iralkalin', 'Royyalu', 'cem\'min', 'Kekada', 'Karacalo', 'Khekada', 'Nantu', 'Pita',
            'Nant', 'seep', 'Oistara', 'Oyastara', 'Cippi', 'Ayistar', 'muttucippi', 'Katala', 'Ketala', 'Kendai', 'Botchi or Botcha', 'Karakatla, Karaka',
            'Rohoo', 'Rohu', 'Reahu', 'Shaark', 'Sarka', 'Cura', 'Sark', 'Srav', 'Panira', 'Pannir', 'Panir', 'Fennel seeds'
        ];
        this.recipe = [];
        this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((ingredient) => ingredient ? this.filter(ingredient) : this.allIngredients.slice()));
        this.name = localStorage.getItem('name');
    }
    remove(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        this.commonlyUsedIngredients.push(ingredient);
        if (index >= 0) {
            this.ingredients.splice(index, 1);
        }
    }
    filter(name) {
        return this.allIngredients.filter(ingredient => ingredient.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    selected(event) {
        this.ingredients.push(event.option.viewValue);
        this.ingredientInput.nativeElement.value = '';
        this.ingredientCtrl.setValue(null);
    }
    showPossibleRecipes() {
        let list = '';
        for (let i = 0; i < this.ingredients.length; i++) {
            list += '_' + this.ingredients[i];
        }
        console.log(list);
        this.fservice.getallrecommendedrecipeByIngredients(list).subscribe((data) => { this.recipe = data; console.log(this.recipe); });
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        if (username == null) {
            this.router.navigateByUrl('/login');
        }
        this.fservice.getCommonlyUsedIngredients().subscribe((data) => {
            console.log(data);
            this.commonlyUsedIngredients = data;
        });
    }
    addToform(ingredient) {
        console.log(ingredient);
        this.ingredients.push(ingredient);
        const index = this.commonlyUsedIngredients.indexOf(ingredient);
        if (index >= 0) {
            this.commonlyUsedIngredients.splice(index, 1);
        }
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
PossiblerecipesComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ingredientInput', { static: false })
], PossiblerecipesComponent.prototype, "ingredientInput", void 0);
PossiblerecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-possiblerecipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./possiblerecipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/possiblerecipes/possiblerecipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./possiblerecipes.component.css */ "./src/app/possiblerecipes/possiblerecipes.component.css")).default]
    })
], PossiblerecipesComponent);



/***/ }),

/***/ "./src/app/publish-recipe/publish-recipe.component.css":
/*!*************************************************************!*\
  !*** ./src/app/publish-recipe/publish-recipe.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n  background-color: #cb252d;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23d4272f' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23d82c34' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23da353c' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23db3d45' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23dd464d' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e96267' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23f28184' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f9a2a3' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fdc5c6' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffebeb' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  height: 100%;\n  min-height: 100%;\n}\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 70%;\n  }\n\n.example-full-width {\n    width: 100%;\n  }\n\n.example-chip-list{\n    width: 60%;\n  }\n\n.example-form-field {\n    width: 200px;\n  }\n\n.green {\n    background-color: green;\n}\n\n.red {\n    background-color: red;\n}\n\n.column {\n  float: left;\n  width: 50%;\n  padding: 10px;\n  /*height: 300px; !* Should be removed. Only for demonstration *!*/\n\n}\n\n.column2 {\n  float: left;\n  min-width: 150px;\n  max-width: 250px;\n  padding: 10px;\n  /*height: 300px; !* Should be removed. Only for demonstration *!*/\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\nol {list-style: none; counter-reset: li}\n\nli::before {content: counter(li); color: #cb252d;\n  display: inline-block; width: 1em;\n  margin-left: -1em}\n\nli {counter-increment: li}\n\n.animi{\n    animation: animate 1s ease-in alternate-reverse;\n}\n\n@-webkit-keyframes animate{\n    0%{\n      scale: 0;\n      opacity: 0;\n        /* transform: translateY(0px); */\n\n\n    }\n    100%{\n      scale: 1;\n      opacity: 1;\n\n\n    }\n}\n\n@keyframes animate{\n    0%{\n      scale: 0;\n      opacity: 0;\n        /* transform: translateY(0px); */\n\n\n    }\n    100%{\n      scale: 1;\n      opacity: 1;\n\n\n    }\n}\n\n.container {\n  position: relative;\n  width: 90%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-size: cover;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.crop{\n  position: relative;\n  width: 240px;\n  height: 160px;\n  overflow: hidden;/*reset margin of figure tag*/\n}\n\n.crop img{\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: auto;\n  transform: translate(-50%,-50%);\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaC1yZWNpcGUvcHVibGlzaC1yZWNpcGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw4N0RBQTg3RDtFQUM5N0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixpRUFBaUU7O0FBRW5FOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlFQUFpRTtFQUNqRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQSxJQUFJLGdCQUFnQixFQUFFLGlCQUFpQjs7QUFDdkMsWUFBWSxvQkFBb0IsRUFBRSxjQUFjO0VBQzlDLHFCQUFxQixFQUFFLFVBQVU7RUFDakMsaUJBQWlCOztBQUNqQixJQUFJLHFCQUFxQjs7QUFFekI7SUFDRSwrQ0FBK0M7QUFDbkQ7O0FBR0E7SUFDSTtNQUNFLFFBQVE7TUFDUixVQUFVO1FBQ1IsZ0NBQWdDOzs7SUFHcEM7SUFDQTtNQUNFLFFBQVE7TUFDUixVQUFVOzs7SUFHWjtBQUNKOztBQWRBO0lBQ0k7TUFDRSxRQUFRO01BQ1IsVUFBVTtRQUNSLGdDQUFnQzs7O0lBR3BDO0lBQ0E7TUFDRSxRQUFRO01BQ1IsVUFBVTs7O0lBR1o7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixDQUFDLDZCQUE2QjtBQUNoRDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBR0gsK0JBQStCO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvcHVibGlzaC1yZWNpcGUvcHVibGlzaC1yZWNpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjI1MmQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDE2MDAgODAwJyUzRSUzQ2cgJTNFJTNDcGF0aCBmaWxsPSclMjNkNDI3MmYnIGQ9J000ODYgNzA1LjhjLTEwOS4zLTIxLjgtMjIzLjQtMzIuMi0zMzUuMy0xOS40Qzk5LjUgNjkyLjEgNDkgNzAzIDAgNzE5LjhWODAwaDg0My44Yy0xMTUuOS0zMy4yLTIzMC44LTY4LjEtMzQ3LjYtOTIuMkM0OTIuOCA3MDcuMSA0ODkuNCA3MDYuNSA0ODYgNzA1Ljh6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2Q4MmMzNCcgZD0nTTE2MDAgMEgwdjcxOS44YzQ5LTE2LjggOTkuNS0yNy44IDE1MC43LTMzLjVjMTExLjktMTIuNyAyMjYtMi40IDMzNS4zIDE5LjRjMy40IDAuNyA2LjggMS40IDEwLjIgMmMxMTYuOCAyNCAyMzEuNyA1OSAzNDcuNiA5Mi4ySDE2MDBWMHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZGEzNTNjJyBkPSdNNDc4LjQgNTgxYzMuMiAwLjggNi40IDEuNyA5LjUgMi41YzE5Ni4yIDUyLjUgMzg4LjcgMTMzLjUgNTkzLjUgMTc2LjZjMTc0LjIgMzYuNiAzNDkuNSAyOS4yIDUxOC42LTEwLjJWMEgwdjU3NC45YzUyLjMtMTcuNiAxMDYuNS0yNy43IDE2MS4xLTMwLjlDMjY4LjQgNTM3LjQgMzc1LjcgNTU0LjIgNDc4LjQgNTgxeicvJTNFJTNDcGF0aCBmaWxsPSclMjNkYjNkNDUnIGQ9J00wIDB2NDI5LjRjNTUuNi0xOC40IDExMy41LTI3LjMgMTcxLjQtMjcuN2MxMDIuOC0wLjggMjAzLjIgMjIuNyAyOTkuMyA1NC41YzMgMSA1LjkgMiA4LjkgM2MxODMuNiA2MiAzNjUuNyAxNDYuMSA1NjIuNCAxOTIuMWMxODYuNyA0My43IDM3Ni4zIDM0LjQgNTU3LjktMTIuNlYwSDB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2RkNDY0ZCcgZD0nTTE4MS44IDI1OS40Yzk4LjIgNiAxOTEuOSAzNS4yIDI4MS4zIDcyLjFjMi44IDEuMSA1LjUgMi4zIDguMyAzLjRjMTcxIDcxLjYgMzQyLjcgMTU4LjUgNTMxLjMgMjA3LjdjMTk4LjggNTEuOCA0MDMuNCA0MC44IDU5Ny4zLTE0LjhWMEgwdjI4My4yQzU5IDI2My42IDEyMC42IDI1NS43IDE4MS44IDI1OS40eicvJTNFJTNDcGF0aCBmaWxsPSclMjNlOTYyNjcnIGQ9J00xNjAwIDBIMHYxMzYuM2M2Mi4zLTIwLjkgMTI3LjctMjcuNSAxOTIuMi0xOS4yYzkzLjYgMTIuMSAxODAuNSA0Ny43IDI2My4zIDg5LjZjMi42IDEuMyA1LjEgMi42IDcuNyAzLjljMTU4LjQgODEuMSAzMTkuNyAxNzAuOSA1MDAuMyAyMjMuMmMyMTAuNSA2MSA0MzAuOCA0OSA2MzYuNi0xNi42VjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2YyODE4NCcgZD0nTTQ1NC45IDg2LjNDNjAwLjcgMTc3IDc1MS42IDI2OS4zIDkyNC4xIDMyNWMyMDguNiA2Ny40IDQzMS4zIDYwLjggNjM3LjktNS4zYzEyLjgtNC4xIDI1LjQtOC40IDM4LjEtMTIuOVYwSDI4OC4xYzU2IDIxLjMgMTA4LjcgNTAuNiAxNTkuNyA4MkM0NTAuMiA4My40IDQ1Mi41IDg0LjkgNDU0LjkgODYuM3onLyUzRSUzQ3BhdGggZmlsbD0nJTIzZjlhMmEzJyBkPSdNMTYwMCAwSDQ5OGMxMTguMSA4NS44IDI0My41IDE2NC41IDM4Ni44IDIxNi4yYzE5MS44IDY5LjIgNDAwIDc0LjcgNTk1IDIxLjFjNDAuOC0xMS4yIDgxLjEtMjUuMiAxMjAuMy00MS43VjB6Jy8lM0UlM0NwYXRoIGZpbGw9JyUyM2ZkYzVjNicgZD0nTTEzOTcuNSAxNTQuOGM0Ny4yLTEwLjYgOTMuNi0yNS4zIDEzOC42LTQzLjhjMjEuNy04LjkgNDMtMTguOCA2My45LTI5LjVWMEg2NDMuNGM2Mi45IDQxLjcgMTI5LjcgNzguMiAyMDIuMSAxMDcuNEMxMDIwLjQgMTc4LjEgMTIxNC4yIDE5Ni4xIDEzOTcuNSAxNTQuOHonLyUzRSUzQ3BhdGggZmlsbD0nJTIzZmZlYmViJyBkPSdNMTMxNS4zIDcyLjRjNzUuMy0xMi42IDE0OC45LTM3LjEgMjE2LjgtNzIuNGgtNzIzQzk2Ni44IDcxIDExNDQuNyAxMDEgMTMxNS4zIDcyLjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWNoaXAtbGlzdHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qaGVpZ2h0OiAzMDBweDsgISogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKiEqL1xuXG59XG5cbi5jb2x1bW4yIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qaGVpZ2h0OiAzMDBweDsgISogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKiEqL1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbm9sIHtsaXN0LXN0eWxlOiBub25lOyBjb3VudGVyLXJlc2V0OiBsaX1cbmxpOjpiZWZvcmUge2NvbnRlbnQ6IGNvdW50ZXIobGkpOyBjb2xvcjogI2NiMjUyZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbX1cbiAgbGkge2NvdW50ZXItaW5jcmVtZW50OiBsaX1cblxuICAuYW5pbWl7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDFzIGVhc2UtaW4gYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cblxuQGtleWZyYW1lcyBhbmltYXRle1xuICAgIDAle1xuICAgICAgc2NhbGU6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgKi9cblxuXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICBzY2FsZTogMTtcbiAgICAgIG9wYWNpdHk6IDE7XG5cblxuICAgIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5taWRkbGUge1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY3JvcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47LypyZXNldCBtYXJnaW4gb2YgZmlndXJlIHRhZyovXG59XG4uY3JvcCBpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/publish-recipe/publish-recipe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/publish-recipe/publish-recipe.component.ts ***!
  \************************************************************/
/*! exports provided: PublishRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishRecipeComponent", function() { return PublishRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/startWith */ "./node_modules/rxjs/internal/operators/startWith.js");
/* harmony import */ var rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__);









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
        this.imageview = true;
        this.stageimageview = true;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = ['Starter', 'Main Course', 'Dessert', 'Beverage'];
        this.myControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options1 = ['Indian', 'Italian', 'Mexican', 'American', 'Chinese', 'Thai', 'Continental', 'Japanese'];
        this.ingredientCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options3 = [
            'Fennel seeds', 'Asafoetida', 'Basil, holy',
            'Bay leaf', 'Black peppercorns', 'Black salt', 'Butter', 'Caraway seed', 'Black Cardamom', 'Green cardamom', 'Carom seed',
            'Cinnamon stick', 'Citric acid', 'Clarified butter', 'Cloves', 'Coriander seed', 'Coriander leaves', 'Cumin seed', 'Curry leaf',
            'Dill leaves', 'Dried mango powder', 'Dry Pomegranate seeds', 'Dried red chili', 'Dried fenugreek leaves', 'Fenugreek seed',
            'Dried ginger powder', 'Honey', 'Jaggery', 'Mace', 'Mint leaves', 'Milk', 'Mustard seed', 'Nigella seed (Onion seed)', 'Nutmeg',
            'Red chili powder', 'Rock salt', 'Rose water', 'Saffron', 'Salt', 'Star anise', 'Sugar', 'Tamarind', 'Turmeric', 'Vinegar',
            'Amaranth leaves', 'Ash gourd', 'Banana flower', 'Beetroot', 'Bell Pepper (Capsicum)', 'Bitter gourd', 'Bottlegourd',
            'Broad beans (fava beans, lima beans, butter beans)', 'Cabbage', 'Carrot', 'Cauliflower', 'Cluster beans', 'Coconut (fresh)',
            'Colocasia leaves (Taro leaves)', 'Colocasia roots (Taro roots)', 'Coriander leaves (Cilantro)', 'Corn', 'Cucumber', 'Curry leaves',
            'Drumsticks', 'Eggplant (Brinjal or Aubergine)', 'Elephant Yam', 'Fenugreek leaves', 'French Beans (Green beans)', 'Garlic', 'Ginger',
            'Green chili', 'Green onion (Scallian or Spring onion)', 'Green peas', 'Ivy gourd', 'Jackfruit', 'Lemon (Lime)', 'Mushroom',
            'Mustard leaves', 'Okra (Ladies� finger)', 'Onion', 'Plantain (raw banana)', 'Potato', 'Pumpkin', 'Radish (Daikon)', 'Ridge gourd',
            'Shallot (pearl onion)', 'Snake gourd', 'Sorrel leaves', 'Spinach', 'Sweet potato', 'Apple', 'Apricot', 'Avocado (Butterfruit)',
            'Banana', 'Cantaloupe (Musk melon)', 'Custard apple', 'Gooseberry, Indian', 'Grapes', 'Guava', 'Lychee', 'Mango, ripe', 'Mango, unripe',
            'Orange', 'Papaya', 'Pears', 'Pineapple', 'Pomegranate', 'Sapota (Sapodilla)', 'Sugar cane', 'Sweet lime', 'Almond', 'Betel nut',
            'Cashew nut', 'Desiccated coconut', 'Dates', 'Dried date', 'Dried fig', 'Flax seed', 'Lotus seed', 'Peanut', 'Poppy seed', 'Pistachio',
            'Raisin', 'Sesame seed', 'Watermelon seeds', 'Amaranth grain', 'Barley', 'Broken wheat', 'Millet, Barnyard', 'Millet, finger',
            'Millet, foxtail', 'Millet, kodo', 'Millet, Little', 'Millet, pearl', 'Millet, Sorghum', 'Rice', 'Rice, beaten (rice flakes)',
            'Rice, parboiled', 'Rice, puffed', 'Semolina', 'Tapioca', 'Bengal gram, split and skinned', 'Bengal gram, whole (Black chickpeas)',
            'Bengal gram, roasted and split', 'Black eyed beans/peas', 'Black gram, split and skinned', 'Black gram, split and with skin',
            'Black gram, whole', 'Chickpea, green', 'Chickpea, white (Garbanzo beans)', 'Cowpeas, red', 'Green gram, split and skinned',
            'Green gram, whole', 'Horse gram', 'Lentil, pink and split', 'Peas, green', 'Peas, black', 'Peas, white', 'Pigeon peas', 'Mustard Oil',
            'SunflowerOil', 'Soybean Oil', 'Olive Oil', 'Rice Bran Oil', 'FlaxSeeds Oil', 'GroundNut Oil', 'Palm Oil', 'Sesame Oil',
            'Almond Oil (Edible)', 'Cashew Oil', 'Canola Oil', 'Margarine', 'Buttermilk', 'Instant Full Cream Milk Powder', 'Skimmed Milk Powder',
            'Cream', 'Cheese', 'Condensed Milk', 'Yogurt', 'Chicken ', 'Mutton', 'Prawns', 'Crab', 'Oyster', 'Katla', 'Rohu', 'Shark', 'Paneer', 'Soy Sauce', 'Chilli Sauce', 'Tomato Sauce', 'Flour', 'Tomato', 'Cornstarch'
        ];
        this.isLinear = false;
        this.isOptional = false;
        this.positionOptions = 'above';
        this.i = 0;
        this.obj = { id: '0', stepContent: '' };
        this.newarr = [];
        this.stages = [{ id: 0, stagevalue: false, steps: [this.obj] }];
        this.index = 0;
        this.barun = "sarraf";
        this.bab = {};
        this.procedure = { stages: [] };
        this.finalpublishlist = [];
        // selectedFile: File
        // onFileChanged(event) {
        //   this.selectedFile = event.target.files[0];
        //   console.log("File changed");
        // }
        // onUpload() {
        //   // upload code goes here
        //   const uploadData = new FormData();
        //   console.log("In onUpload Function")
        //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        //   this.http.post("http://localhost:8082/api/v1/uploadFile", uploadData)
        //   .subscribe();
        // }
        this.urll = "../../assets//homecomponentassets/images/image256.jpg";
        this.urll1 = "../../assets//homecomponentassets/images/image256.jpg";
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.ingredients = [];
        this.processs = [];
        // procedure: Procedure;
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
    createstage() {
        var newstage = { id: this.i + 1, stagevalue: false, name, steps: [] };
        this.stages.push(newstage);
        this.i++;
    }
    createstep(stage) {
        this.stages.forEach(element => {
            if (element.id == stage.id) {
                var presentsteplist = element.steps;
                presentsteplist.push({ id: '0', stepContent: 'step content' });
                element.steps = presentsteplist;
                this.stages[element.id] = element;
            }
        });
    }
    save(stagevalue, durationvalue, stageview) {
        if (stagevalue != '' && durationvalue != '') {
            var stage = { stageName: stagevalue, duration: durationvalue, images: this.urll, steps: [] };
            this.newarr.forEach(element => {
                var steps = { stepContent: element };
                stage.steps.push(steps);
            });
            this.newarr = [];
            this.procedure.stages.push(stage);
            console.log(stage);
            this.stages[stageview.id].stagevalue = true;
            this.urll = "../../assets//homecomponentassets/images/sampleimage.jpg";
            this.stageimageview = true;
        }
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__["map"])(value => this._filter(value)));
        this.filteredOptions1 = this.myControl1.valueChanges
            .pipe(Object(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__["map"])(value1 => this._filter1(value1)));
        this.filteredIngredients = this.ingredientCtrl.valueChanges
            .pipe(Object(rxjs_internal_operators_startWith__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_8__["map"])(value2 => this._filter2(value2)));
        this.username = localStorage.getItem('username');
        this.jwtToken = localStorage.getItem('token');
        this.name = localStorage.getItem('name');
        if (this.username == null) {
            this.route.navigateByUrl('/login');
        }
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        console.log(this.processs);
        console.log(this.ingredients);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    _filter1(value1) {
        const filterValue1 = value1.toLowerCase();
        return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
    }
    _filter2(value2) {
        const filterValue2 = value2.toLowerCase();
        return this.options3.filter(option2 => option2.toLowerCase().includes(filterValue2));
    }
    onFileComplete(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll = data;
        this.stageimageview = false;
    }
    onFileComplete1(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.urll1 = data;
        this.imageview = false;
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
        console.log(value + input);
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
        console.log(this.ingredients);
        console.log(ingredients);
        const index = this.ingredients.indexOf(ingredients);
        console.log(index);
        // this.suggestedIngredients.push(ingredients.name);
        if (index >= 0) {
            this.ingredients.splice(index, 1);
        }
        this.suggestedIngredients.push(ingredients.name);
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
    cookingTime(procedure) {
        let x;
        x = 0;
        for (let v of procedure.stages) {
            x = x + Number(v.duration);
        }
        return x;
    }
    capital_letter(str) {
        let strs;
        strs = str.split(" ");
        for (var i = 0, x = strs.length; i < x; i++) {
            strs[i] = strs[i][0].toUpperCase() + strs[i].substr(1);
        }
        return strs.join(" ");
    }
    publishRecipe(value1, value2, value3, value4, value5) {
        //  this.procedure=({stages:this.stage});
        console.log("In publish recipe");
        let recipe = ({ recipeName: this.capital_letter(value1),
            description: value2,
            cuisine: value3,
            cookingTime: this.cookingTime(this.procedure),
            course: value4,
            servesFor: value5,
            recipeImage: this.urll1,
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
        console.log("hahahah", recipe);
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
    addToform(ingredient) {
        console.log(ingredient);
        this.ingredients.push({ category: "tom",
            name: ingredient.trim(),
            quantity: 0,
            unit: "tbs" });
        const index = this.suggestedIngredients.indexOf(ingredient);
        if (index >= 0) {
            this.suggestedIngredients.splice(index, 1);
        }
    }
    getsuggestedIngredients(value1, value2, value3) {
        let value = value1 + "_" + value2 + "_" + value3;
        this.fservice.getSuggestedIngredients(value).subscribe((data) => {
            console.log(data);
            this.suggestedIngredients = data;
        });
    }
    selected(event) {
        let newIngredient = { category: "tom",
            name: event.option.viewValue,
            quantity: 0,
            unit: "tbs" };
        console.log(event.option.viewValue);
        this.ingredients.push(newIngredient);
        //
        this.ingredientInput.nativeElement.value = '';
        // this.ingredientCtrl.setValue(null);
    }
};
PublishRecipeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__["FrontendserviceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ingredientInput', { static: false })
], PublishRecipeComponent.prototype, "ingredientInput", void 0);
PublishRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publish-recipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publish-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publish-recipe.component.css */ "./src/app/publish-recipe/publish-recipe.component.css")).default]
    })
], PublishRecipeComponent);



/***/ }),

/***/ "./src/app/rating/rating.component.css":
/*!*********************************************!*\
  !*** ./src/app/rating/rating.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    width: 30rem;\n}\nh1 {\n    color: #CB202D;\n}\n#rate {\n    color: #eb4653;\n}\nbutton {\n    margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgd2lkdGg6IDMwcmVtO1xufVxuaDEge1xuICAgIGNvbG9yOiAjQ0IyMDJEO1xufVxuI3JhdGUge1xuICAgIGNvbG9yOiAjZWI0NjUzO1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/rating/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let RatingComponent = class RatingComponent {
    constructor(dialogRef, data, route, fservice, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.route = route;
        this.fservice = fservice;
        this.http = http;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onClick(i, y) {
        this.data.rating = i;
        this.data.comments = y;
        console.log(this.data.rating);
        console.log(this.data.comments);
        console.log(this.data.recipeId);
        this.fservice.getRecipeDetails(this.data.recipeId).subscribe((data1) => {
            var rat = { "username": localStorage.getItem('username'), "rating": this.data.rating, "time": null };
            for (i = 0; i < data1.ratings.length; i++) {
                let rat1 = data1.ratings[i];
                console.log(rat1.username);
                if (rat.username != null && rat.username == rat1.username) {
                    console.log(rat1.username);
                    rat1.rating = rat.rating;
                    i = data1.ratings.length + 5;
                    console.log(i);
                }
            }
            if (i == data1.ratings.length) {
                data1.ratings.push(rat);
            }
            var com = { "username": localStorage.getItem('username'), "comment": this.data.comments, "time": null, "userImage": null };
            for (i = 0; i < data1.comments.length; i++) {
                let com1 = data1.comments[i];
                console.log(com1.username);
                if (com.username != null && com.username == com1.username) {
                    console.log(com1.username);
                    com1.comment = com.comment;
                    i = data1.comments.length + 5;
                    console.log(i);
                }
            }
            if (i == data1.comments.length) {
                data1.comments.push(com);
            }
            console.log("####");
            console.log(data1.ratings);
            console.log(data1.comments);
            this.recipedetail = data1;
            console.log(this.recipedetail, "recipedetails");
            this.fservice.rating(this.recipedetail).subscribe();
        });
        this.fservice.getRecipeDetails(this.data.recipeId).subscribe((data2) => { this.Finaldetail = data2; console.log(this.Finaldetail, "Finalrecipedetails"); });
    }
};
RatingComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.css */ "./src/app/rating/rating.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], RatingComponent);



/***/ }),

/***/ "./src/app/recipecard/recipecard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recipecard/recipecard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop{\n    position: relative;\n    width: 220px;\n    height: 140px;\n    overflow: hidden;/*reset margin of figure tag*/\n  }\n  .crop img{\n    border-radius: 2px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 100%;\n    width: auto;\n    transform: translate(-50%,-50%);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlY2FyZC9yZWNpcGVjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0IsQ0FBQyw2QkFBNkI7RUFDaEQ7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUdILCtCQUErQjtFQUN6QyIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWNhcmQvcmVjaXBlY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3B7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47LypyZXNldCBtYXJnaW4gb2YgZmlndXJlIHRhZyovXG4gIH1cbiAgLmNyb3AgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/recipecard/recipecard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recipecard/recipecard.component.ts ***!
  \****************************************************/
/*! exports provided: RecipecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipecardComponent", function() { return RecipecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RecipecardComponent = class RecipecardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log(this.id, "bar");
        console.log(this.recipe_name);
        console.log(this.duration);
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
RecipecardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "recipe_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "cusine_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "image_path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "serve", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "duration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "published_on", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "master_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "rating_value", void 0);
RecipecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipecard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipecard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipecard.component.css */ "./src/app/recipecard/recipecard.component.css")).default]
    })
], RecipecardComponent);



/***/ }),

/***/ "./src/app/recipedetails/detail.service.ts":
/*!*************************************************!*\
  !*** ./src/app/recipedetails/detail.service.ts ***!
  \*************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



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
DetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetailService);



/***/ }),

/***/ "./src/app/recipedetails/recipedetails.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abcd{\n    animation: abcd 1s  ease-in-out alternate-reverse;\n}\n@-webkit-keyframes abcd{\n    0%{\n        transform: translateY(0px);\n    }\n    100%{\n        transform: translateY(20px);\n    }\n}\n@keyframes abcd{\n    0%{\n        transform: translateY(0px);\n    }\n    100%{\n        transform: translateY(20px);\n    }\n}\n.movemove{\n    animation: movemove 1s  infinite ease-in-out alternate-reverse;\n}\n@-webkit-keyframes movemove{\n    0%{\n        transform: translateX(17px); \n    }\n    100%{\n        transform: translateX(-17px);\n    }\n}\n@keyframes movemove{\n    0%{\n        transform: translateX(17px); \n    }\n    100%{\n        transform: translateX(-17px);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlZGV0YWlscy9yZWNpcGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpREFBaUQ7QUFDckQ7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjtBQVBBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKO0FBRUE7SUFDSSw4REFBOEQ7QUFDbEU7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjtBQVBBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlZGV0YWlscy9yZWNpcGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJjZHtcbiAgICBhbmltYXRpb246IGFiY2QgMXMgIGVhc2UtaW4tb3V0IGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuQGtleWZyYW1lcyBhYmNke1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIH1cbn1cblxuLm1vdmVtb3Zle1xuICAgIGFuaW1hdGlvbjogbW92ZW1vdmUgMXMgIGluZmluaXRlIGVhc2UtaW4tb3V0IGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVtb3Zle1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7IFxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE3cHgpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/recipedetails/recipedetails.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipedetailsComponent", function() { return RecipedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.service */ "./src/app/recipedetails/detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");






let RecipedetailsComponent = class RecipedetailsComponent {
    constructor(search1, route, router, http, fservice) {
        this.search1 = search1;
        this.route = route;
        this.router = router;
        this.http = http;
        this.fservice = fservice;
        this.id = 0;
        this.title = 'recipe';
        this.index = 1;
        this.count = 0;
        this.viewcomments = [];
        this.init = 0;
        this.commentsArray = [];
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        if (this.name == null) {
            this.guestuser = true;
        }
        this.recipeid = this.route.snapshot.paramMap.get('recipeid');
        this.fservice.getNumberOfTriedInRecipe(this.recipeid).subscribe((data) => this.viewcount = data);
        this.fservice.getRecipeDetails(this.recipeid).subscribe((data) => {
            this.recipedetail = data;
            console.log(data, "recipedetails");
            this.duration = data.procedure.stages;
            console.log(this.duration);
            for (let i = 0; i < this.duration.length; i++) {
                let totalduration = this.duration[i].duration;
                console.log(totalduration);
                this.init = this.init + totalduration;
                console.log(this.init);
            }
            data.cookingTime = this.init;
            console.log(data.cookingTime);
            console.log(this.commentsArray);
            console.log(this.viewcomments, "in RECIPEDETAILS");
            let j = 0;
            for (let i = 0; i < this.commentsArray.length; i++) {
                if ((this.commentsArray[i].comment) != "") {
                    this.viewcomments[j] = this.commentsArray[i];
                    j++;
                }
            }
            ;
            console.log(this.viewcomments, "in RECIPEDETAILS");
        });
        console.log("hhhhh");
        this.fservice.getIngredients(this.recipeid).subscribe((data) => {
            console.log(data);
            this.ingredients = data;
        });
        this.fservice.getNumberOfTried(this.recipeid).subscribe((data) => { console.log(data); });
    }
    navtopage(id) {
        this.router.navigateByUrl(`/tryrecipe/${this.recipeid}/${id}`);
    }
    like() {
        console.log("like recipe");
        this.fservice.saveuserlikerecipe(this.recipedetail).subscribe();
    }
    regionalName(view) {
        this.ing = view;
    }
    viewname(name) {
        if (this.ing == name) {
            return true;
        }
        else {
            return false;
        }
    }
    removeRegionalName() {
        this.ing = "";
    }
};
RecipedetailsComponent.ctorParameters = () => [
    { type: _detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__["FrontendserviceService"] }
];
RecipedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipedetails.component.css */ "./src/app/recipedetails/recipedetails.component.css")).default]
    })
], RecipedetailsComponent);



/***/ }),

/***/ "./src/app/recommeded/recommeded.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recommeded/recommeded.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVkZWQvcmVjb21tZWRlZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recommeded/recommeded.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recommeded/recommeded.component.ts ***!
  \****************************************************/
/*! exports provided: RecommededComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommededComponent", function() { return RecommededComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let RecommededComponent = class RecommededComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
        this.fservice.getallrecommendedrecipe().subscribe(data => {
            this.recipe = data;
            for (let i in Object.keys(this.recipe)) {
                if (this.recipe[i].recipeImage == null) {
                    this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg";
                }
            }
            console.log(this.recipe, "data of trending recipe");
        });
    }
};
RecommededComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
RecommededComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommeded',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommeded.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommeded/recommeded.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommeded.component.css */ "./src/app/recommeded/recommeded.component.css")).default]
    })
], RecommededComponent);



/***/ }),

/***/ "./src/app/recommendedbyactivities/recommendedbyactivities.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/recommendedbyactivities/recommendedbyactivities.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGVkYnlhY3Rpdml0aWVzL3JlY29tbWVuZGVkYnlhY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/recommendedbyactivities/recommendedbyactivities.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/recommendedbyactivities/recommendedbyactivities.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecommendedbyactivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedbyactivitiesComponent", function() { return RecommendedbyactivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let RecommendedbyactivitiesComponent = class RecommendedbyactivitiesComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
        this.image = "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
    }
    ngOnInit() {
        this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => {
            this.recipe = data;
            for (let i in Object.keys(this.recipe)) {
                if (this.recipe[i].recipeImage == null) {
                    this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg";
                }
            }
            console.log(this.recipe, "data of trending recipe");
        });
    }
};
RecommendedbyactivitiesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
RecommendedbyactivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendedbyactivities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendedbyactivities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyactivities/recommendedbyactivities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendedbyactivities.component.css */ "./src/app/recommendedbyactivities/recommendedbyactivities.component.css")).default]
    })
], RecommendedbyactivitiesComponent);



/***/ }),

/***/ "./src/app/recommendedbyhistory/recommendedbyhistory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/recommendedbyhistory/recommendedbyhistory.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGVkYnloaXN0b3J5L3JlY29tbWVuZGVkYnloaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/recommendedbyhistory/recommendedbyhistory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/recommendedbyhistory/recommendedbyhistory.component.ts ***!
  \************************************************************************/
/*! exports provided: RecommendedbyhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedbyhistoryComponent", function() { return RecommendedbyhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let RecommendedbyhistoryComponent = class RecommendedbyhistoryComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => { console.log(data); this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
    tr(id) {
        console.log("clicked on trending recipe id:" + id);
    }
};
RecommendedbyhistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
RecommendedbyhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendedbyhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendedbyhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendedbyhistory.component.css */ "./src/app/recommendedbyhistory/recommendedbyhistory.component.css")).default]
    })
], RecommendedbyhistoryComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {box-sizing: border-box}\n\n/* Add padding to containers */\n\n.container {\n  padding: 16px;\n}\n\n/* Overwrite default styles of hr */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for the submit/register button */\n\n.registerbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn:hover {\n  opacity:1;\n}\n\n/* Add a blue text color to links */\n\na {\n  color: dodgerblue;\n}\n\n/* Set a grey background color and center the text of the \"sign in\" section */\n\n.signin {\n  background-color: #f1f1f1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLHNCQUFzQjs7QUFFekIsOEJBQThCOztBQUM5QjtFQUNFLGFBQWE7QUFDZjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSwrQ0FBK0M7O0FBQy9DO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XG5cbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXG4ucmVnaXN0ZXJidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5yZWdpc3RlcmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6MTtcbn1cblxuLyogQWRkIGEgYmx1ZSB0ZXh0IGNvbG9yIHRvIGxpbmtzICovXG5hIHtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXG4uc2lnbmluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
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
        this.myControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.options1 = [
            'Maharashtra', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Utar Pradesh'
        ];
        this.state = "";
        this.country = "";
        this.genderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('Male')
        });
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z ]*")
        ]);
        this.userNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-z0-9_-]{3,12}$')
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)
        ]);
        this.ageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[0-9]{1,3}")
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.filteredOptions1 = this.myControl1.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value1 => this._filter1(value1)));
    }
    _filter1(value1) {
        const filterValue1 = value1.toLowerCase();
        return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
    }
    getStateAndCountry($event, city) {
        this.frontendserviceservice.getStateAndCountry().subscribe((data) => {
            console.log(data);
            for (var i in Object.keys(data)) {
                let s = data[i].City;
                if (s == city) {
                    this.state = data[i].State;
                    this.country = "India";
                    break;
                }
            }
        });
    }
    registerUser(name, st, email, userName, password, city, age, gender, ct) {
        console.log(name + email + userName + password + city + age + gender.gender);
        if (this.state == "") {
            this.state = st;
            this.country = ct;
            console.log(this.state);
        }
        var userObj = { name: name, emailId: email, username: userName, password: password, city: city, state: this.state, country: this.country, age: age, gender: gender.gender };
        this.frontendserviceservice.userRegister(userObj).subscribe((data) => {
            console.log(data.id + "antara");
            this.userId = data.id;
            this.router.navigate(['/selectyourinterests', data.id]);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/search-component/search-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/search-component/search-component.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1jb21wb25lbnQvc2VhcmNoLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/search-component/search-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/search-component/search-component.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponentComponent", function() { return SearchComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let SearchComponentComponent = class SearchComponentComponent {
    constructor(searchRecipe, route, http, router) {
        this.searchRecipe = searchRecipe;
        this.route = route;
        this.http = http;
        this.router = router;
    }
    tr(id) {
        this.router.navigate(['/recipedetails', id]);
        console.log(id);
    }
    ngOnInit() {
        let name = this.route.snapshot.paramMap.get('name');
        console.log(name);
        this.searchRecipe.SearchRecipe(name).subscribe((data) => { this.searchResult = data; console.log(data, "searchresults"); });
    }
};
SearchComponentComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponentComponent.prototype, "message1", void 0);
SearchComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-component/search-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-component.component.css */ "./src/app/search-component/search-component.component.css")).default]
    })
], SearchComponentComponent);



/***/ }),

/***/ "./src/app/selectinterests/selectinterests.component.css":
/*!***************************************************************!*\
  !*** ./src/app/selectinterests/selectinterests.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGludGVyZXN0cy9zZWxlY3RpbnRlcmVzdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/selectinterests/selectinterests.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/selectinterests/selectinterests.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectinterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectinterestsComponent", function() { return SelectinterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SelectinterestsComponent = class SelectinterestsComponent {
    constructor(formBuilder, search1, router, activateroute) {
        this.formBuilder = formBuilder;
        this.search1 = search1;
        this.router = router;
        this.activateroute = activateroute;
        this.reposearch = [
            {
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
        var newUser = { username: this.user.username, emailId: this.user.emailId, name: this.user.name, password: this.user.password, city: this.user.city, state: this.user.state, country: this.user.country, age: this.user.age, gender: this.user.gender, cuisines: this.favList };
        console.log(newUser + "new cuisine");
        this.search1.submitfinalfavourites(newUser).subscribe((res) => console.log(res));
        this.router.navigateByUrl(`/login`);
    }
    onChange(view, isChecked) {
        const control = this.recipeform.controls.favourites;
        if (isChecked) {
            control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](view));
            console.log(this.recipeform);
            console.log(control);
            console.log(view);
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
    }
};
SelectinterestsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SelectinterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectinterests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selectinterests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selectinterests.component.css */ "./src/app/selectinterests/selectinterests.component.css")).default]
    })
], SelectinterestsComponent);



/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGNvbXBvbmVudC90ZXN0Y29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC90ZXN0Y29tcG9uZW50L3Rlc3Rjb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: TestcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcomponentComponent", function() { return TestcomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestcomponentComponent = class TestcomponentComponent {
    constructor() {
        this.lat = 'locating...';
        this.lng = 'locating...';
    }
    ngOnInit() {
    }
    findme() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => { this.lat = position.coords.latitude; this.lng = position.coords.longitude; console.log(position); });
        }
        else {
            console.log("nothing");
        }
    }
};
TestcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testcomponent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testcomponent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testcomponent.component.css */ "./src/app/testcomponent/testcomponent.component.css")).default]
    })
], TestcomponentComponent);



/***/ }),

/***/ "./src/app/trending/trending.component.css":
/*!*************************************************!*\
  !*** ./src/app/trending/trending.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nL3RyZW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/trending/trending.component.ts":
/*!************************************************!*\
  !*** ./src/app/trending/trending.component.ts ***!
  \************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let TrendingComponent = class TrendingComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getalltrendingrecipe().subscribe(data => {
            this.recipe = data;
            for (let i in Object.keys(this.recipe)) {
                if (this.recipe[i].recipeImage == null) {
                    this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg";
                }
            }
            console.log(this.recipe, "data of trending recipe");
        });
    }
};
TrendingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
TrendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trending.component.css */ "./src/app/trending/trending.component.css")).default]
    })
], TrendingComponent);



/***/ }),

/***/ "./src/app/tryrecipe/orderpreview/orderpreview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tryrecipe/orderpreview/orderpreview.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\n  width:94%;\n  margin-left: 3%;\n  margin-top: 7%;\n}\n\n.button{\n  margin-top: 3%;\n}\n\n.moreIngredients{\n  width: 170px;\n  margin-left: 23%;\n  margin-right: 4%;\n  margin-top: 2%;\n}\n\nmat-horizontal-stepper{\n  margin-left: 5%;\n  width: 90%;\n}\n\n.example-card{\n  width: 40%;\n  margin-left: 10%;\n  margin-top: 5%;\n  text-align: center;\n}\n\n.example-card2{\n  width: 40%;\n  margin-left: 8%;\n  margin-top: 10%;\n}\n\n.confirmIngredients {\n  width: 170px;\n  margin-left: 23%;\n  margin-top: 2%;\n  \n\n}\n\n.addOrSelect{\n  width: 98%;\n  margin: 1%;\n  height:50px;\n  text-align: center;\n}\n\n#addr\n{\n  display: flex;\n  flex-wrap: wrap;\n\n}\n\nmat-horizontal-stepper{\n  margin-top: 10%;\n}\n\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-group2 {\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.badge {\n  padding: 1px 9px 2px;\n  font-size: 12.025px;\n  font-weight: bold;\n  white-space: nowrap;\n  color: #ffffff;\n  background-color: #999999;\n  border-radius: 9px;\n}\n\n.badge:hover {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.badge-error {\n  background-color: #CB202D;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJ5cmVjaXBlL29yZGVycHJldmlldy9vcmRlcnByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYzs7O0FBR2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLGFBQWE7RUFDYixlQUFlOztBQUVqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUd6QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90cnlyZWNpcGUvb3JkZXJwcmV2aWV3L29yZGVycHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gIHdpZHRoOjk0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLmJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4ubW9yZUluZ3JlZGllbnRze1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG5tYXQtaG9yaXpvbnRhbC1zdGVwcGVye1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5leGFtcGxlLWNhcmR7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXhhbXBsZS1jYXJkMntcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5jb25maXJtSW5ncmVkaWVudHMge1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBcblxufVxuXG4uYWRkT3JTZWxlY3R7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMSU7XG4gIGhlaWdodDo1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYWRkclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbn1cbm1hdC1ob3Jpem9udGFsLXN0ZXBwZXJ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5leGFtcGxlLXJhZGlvLWdyb3VwMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDFweCA5cHggMnB4O1xuICBmb250LXNpemU6IDEyLjAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuLmJhZGdlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhZGdlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMjAyRDtcbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tryrecipe/orderpreview/orderpreview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tryrecipe/orderpreview/orderpreview.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderpreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderpreviewComponent", function() { return OrderpreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let OrderpreviewComponent = class OrderpreviewComponent {
    constructor(spinner, _formBuilder, frontendservice, http, route, activatedrouter) {
        this.spinner = spinner;
        this._formBuilder = _formBuilder;
        this.frontendservice = frontendservice;
        this.http = http;
        this.route = route;
        this.activatedrouter = activatedrouter;
        this.index = 0;
        this.seasons = ['Work', 'Home'];
        this.isNewUser = false;
        this.display = false;
        this.addresses = [];
        this.panelOpenState = false;
        this.displayedColumns = ['ingredient', 'quantity', 'unit'];
        this.orderdetails = {};
        this.deliveryGuyDetails = [];
        this.distanceTime = [];
        this.deliveryGuyCoordinates = [];
        this.deliveryGuyList = []; //contains delivery guy username,distance and time
        this.username = localStorage.getItem('username');
        this.od = {};
        this.orderplaced = false;
    }
    //after adding data to add addressna
    ngOnInit() {
        let username = localStorage.getItem('username');
        // console.log(this.jwtToken+"hhhh");
        if (username == null) {
            this.route.navigateByUrl('/login');
        }
        this.recipeid = this.activatedrouter.snapshot.paramMap.get('recipeid');
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.order = this.frontendservice.getarray();
        console.log(this.order);
        console.log("in ngonitnt in order privew");
        this.frontendservice.getAddresses().subscribe(data => {
            console.log(data);
            if (data == null) {
                this.isNewUser = true;
            }
            else {
                this.deliveryAddress = data;
                this.addresses = this.deliveryAddress.addresses;
                console.log(this.addresses);
            }
        });
    }
    saveAddress(addressName, name, mobile, address, city, state, pinCode) {
        //to get current location of the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                console.log(position);
                this.userCoordinates = { "latitude": this.latitude, "longitude": this.longitude };
                var addr = { "addressName": addressName, "name": name, "mobileNumber": mobile, "location": address, "city": city, "state": state, "pin": pinCode, "coordinates": this.userCoordinates };
                console.log(addr);
                var addrArray = [];
                addrArray.push(addr);
                console.log("In save address");
                this.addresses.push(addr);
                console.log(this.addresses);
                if (this.isNewUser) {
                    console.log("new User");
                    var newAddr = { "username": localStorage.getItem("username"), "addresses": addrArray };
                    console.log(newAddr);
                    this.frontendservice.addFirstAddress(newAddr).subscribe((data) => console.log(data));
                }
                else {
                    this.frontendservice.addAddress(addr).subscribe((data) => console.log(data));
                }
            });
            this.secondFormGroup.reset();
            //window.location.reload();
        }
        else {
            console.log("nothing");
        }
    }
    cancelAddress() {
        this.secondFormGroup.reset();
    }
    navtopage(id) {
        this.route.navigateByUrl(`/tryrecipe/${this.recipeid}/${id}`);
    }
    fn() {
        this.display = true;
    }
    fns(i) {
        console.log(i);
    }
    submit(i) {
        this.currentAddress = this.addresses[i];
        console.log(this.addresses);
        console.log(this.currentAddress);
    }
    getbacktocooking() {
        this.route.navigateByUrl(`/tryrecipe/${this.recipeid}/1`);
    }
    onClick() {
        this.spinner.show();
        //to post user current address and list of ingredients
        var addressIngredients = { "orderId": localStorage.getItem("username"), "username": localStorage.getItem('username'), "address": this.currentAddress, "ingredients": this.order, "deliveryUsername": "", "status": "Queue" };
        this.frontendservice.addOrderDetails(addressIngredients).subscribe(data => console.log(data));
        //to get coordinates of all the active delivery guys
        this.frontendservice.getDeliveryGuy().subscribe(data => {
            this.deliveryGuyDetails = data;
            console.log(data);
            //to store delivery guys coordinates
            for (let i = 0; i < this.deliveryGuyDetails.length; i++) {
                var x = { "latitude": this.deliveryGuyDetails[i].coordinates.latitude, "longitude": this.deliveryGuyDetails[i].coordinates.longitude };
                this.deliveryGuyCoordinates[i] = x;
            }
            this.spinner.hide();
            console.log(this.deliveryGuyCoordinates);
            //to get the distance and time from all the delivery guys
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                console.log(position);
                console.log(this.currentAddress);
                this.frontendservice.getDistanceTime(position.coords, this.deliveryGuyCoordinates).subscribe(list => {
                    this.distanceTime = list.resourceSets[0].resources[0].results;
                    for (let i = 0; i < this.distanceTime.length; i++) {
                        var x = { "deliveryUsername": this.deliveryGuyDetails[i].deliveryUsername,
                            "distance": this.distanceTime[i].travelDistance,
                            "time": this.distanceTime[i].travelDuration };
                        this.deliveryGuyList[i] = x;
                    }
                    //var finalList={"username":localStorage.getItem("username"),"deliveryGuyDistanceTime":this.deliveryGuyList};
                    //console.log(finalList);
                    var finalList = { "orderId": localStorage.getItem("username"), "deliveryGuyDistanceTime": this.deliveryGuyList };
                    //var orderList={"username":localStorage.getItem("username"),"address":this.currentAddress,"ingredients":this.order,""}
                    //to post delivery guy lists
                    console.log(finalList);
                    this.frontendservice.deliveryGuysList(finalList).subscribe(data => console.log(data));
                    this.recipentname = localStorage.getItem('name');
                    this.frontendservice.getorderdetails().subscribe((data) => { this.od = data, console.log("barunbarunbarun", data); });
                    this.orderplaced = true;
                });
            });
        });
    }
};
OrderpreviewComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderpreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderpreview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderpreview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/orderpreview/orderpreview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderpreview.component.css */ "./src/app/tryrecipe/orderpreview/orderpreview.component.css")).default]
    })
], OrderpreviewComponent);



/***/ }),

/***/ "./src/app/tryrecipe/tryrecipe.component.css":
/*!***************************************************!*\
  !*** ./src/app/tryrecipe/tryrecipe.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#head-section {\n    margin-top: 15rem;\n}\n#serve-form {\n    text-align: unset;\n}\n#plus-button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n#head-section h1 {\n    color: #CB202D;\n    text-align: center;\n}\n#head-section h3 {\n    color: #eb4653;\n    text-align: center;\n}\n#head-section label {\n    font-size: 2rem;\n}\n#body-section h3 {\n    text-align: center;\n     color: #CB202D;\n}\nth, td{\n    text-align: center;\n}\ninput {\n    width: 60%;\n}\n.normal {\n    background: #CB202D;\n}\n.normal:hover{\n    background: #Aa191f !important;\n}\n.normal.mat-expanded:active{\n    background: #8a191f !important;\n}\n.normal.mat-expanded:focus {\n    background-color: #8a191f;\n}\n.normal.mat-expanded {\n    background-color: #8a191f;\n}\n.ongoing {\n    background: orange;\n}\n.ongoing:hover{\n    background: orange !important;\n}\n.ongoing.mat-expanded:active{\n    background: orange !important;\n}\n.ongoing.mat-expanded:focus {\n    background-color: orange;\n}\n.ongoing.mat-expanded {\n    background-color: orange;\n}\n.completed {\n    background: green;\n}\n.completed:hover{\n    background: rgb(0, 121, 0) !important;\n}\n.completed.mat-expanded:active{\n    background: rgb(0, 109, 0) !important;\n}\n.completed.mat-expanded:focus {\n    background-color: rgb(0, 109, 0) !important;\n}\n.completed.mat-expanded {\n    background-color: rgb(0, 109, 0) !important;\n}\ncircle-progress {\n    margin-top: 0;\n    padding-top: 0;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJ5cmVjaXBlL3RyeXJlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtLQUNqQixjQUFjO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90cnlyZWNpcGUvdHJ5cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXJlbTtcbn1cbiNzZXJ2ZS1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbn1cbiNwbHVzLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuI2hlYWQtc2VjdGlvbiBoMSB7XG4gICAgY29sb3I6ICNDQjIwMkQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hlYWQtc2VjdGlvbiBoMyB7XG4gICAgY29sb3I6ICNlYjQ2NTM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hlYWQtc2VjdGlvbiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuI2JvZHktc2VjdGlvbiBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBjb2xvcjogI0NCMjAyRDtcbn1cbnRoLCB0ZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5ub3JtYWwge1xuICAgIGJhY2tncm91bmQ6ICNDQjIwMkQ7XG59XG4ubm9ybWFsOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNBYTE5MWYgIWltcG9ydGFudDtcbn1cbi5ub3JtYWwubWF0LWV4cGFuZGVkOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjOGExOTFmICFpbXBvcnRhbnQ7XG59XG4ubm9ybWFsLm1hdC1leHBhbmRlZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhMTkxZjtcbn1cbi5ub3JtYWwubWF0LWV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGExOTFmO1xufVxuLm9uZ29pbmcge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbn1cbi5vbmdvaW5nOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuLm9uZ29pbmcubWF0LWV4cGFuZGVkOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cbi5vbmdvaW5nLm1hdC1leHBhbmRlZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuLm9uZ29pbmcubWF0LWV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG4uY29tcGxldGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cbi5jb21wbGV0ZWQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDEyMSwgMCkgIWltcG9ydGFudDtcbn1cbi5jb21wbGV0ZWQubWF0LWV4cGFuZGVkOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTA5LCAwKSAhaW1wb3J0YW50O1xufVxuLmNvbXBsZXRlZC5tYXQtZXhwYW5kZWQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDksIDApICFpbXBvcnRhbnQ7XG59XG4uY29tcGxldGVkLm1hdC1leHBhbmRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwOSwgMCkgIWltcG9ydGFudDtcbn1cbmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tryrecipe/tryrecipe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tryrecipe/tryrecipe.component.ts ***!
  \**************************************************/
/*! exports provided: TryrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryrecipeComponent", function() { return TryrecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let TryrecipeComponent = class TryrecipeComponent {
    constructor(http, route, fservice, dialog, router) {
        this.http = http;
        this.route = route;
        this.fservice = fservice;
        this.dialog = dialog;
        this.router = router;
        //Recipe details
        this.recipe = [];
        this.FinalOrder = [];
        this.igQuantity = [];
        this.igUnit = [];
        this.display = true;
        this.display2 = false;
        this.newnum = 1;
        this.index = 0;
        //Ingredient details
        this.ing = [];
        this.ingName = [];
        this.ingQuantity = [];
        this.ingQuantityFinal = [];
        this.ingnames = [];
        this.duration = [];
        //To start and pause timer
        this.timeRem = [];
        this.timePercent = [];
        this.showStart = [];
        this.showPause = [];
        this.showStop = [];
        this.showRestart = [];
        this.intervals = [];
        //For voice control
        this.speech = [];
        //Quantity per serve
        this.isPrimes = false;
        this.isOdd = false;
        this.isEven = false;
        this.onum = 1;
        this.head = [];
        this.xpandStatus = [];
        //Voice synthesiser
        this.synthesis = window.speechSynthesis;
        //To store user added ingredients
        this.fieldArray = [];
        this.newAttribute = {};
        this.add = 1;
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        this.checkNumber(this.num);
        if (username == null) {
            this.router.navigateByUrl('/login');
        }
        this.name = localStorage.getItem('name');
        this.recipeid = this.route.snapshot.paramMap.get('recipeid');
        this.matTab = this.route.snapshot.paramMap.get('tabid');
        console.log(this.recipeid, "ddddddd");
        this.fservice.getRecipeDetails(this.recipeid)
            .subscribe(data => {
            this.recipe = data;
            console.log(this.recipe, "Recipe Details");
            this.num = data.servesFor;
            this.onum = data.servesFor;
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
            for (let i = 0; i < data.procedure.stages.length; i++) {
                this.timeRem[i] = this.Procedure.stages[i].duration;
                this.duration[i] = this.Procedure.stages[i].duration;
                this.timePercent[i] = 0;
                this.head[i] = "normal";
                if (i == 0)
                    this.xpandStatus[i] = true;
                else
                    this.xpandStatus[i] = false;
                //this.xpandNoClose[i] = false;
                this.showStart[i] = true;
                this.showPause[i] = false;
                this.showStop[i] = false;
                this.showRestart[i] = false;
                this.intervals[i];
                var intro = "Hey, let's make" + data.recipeName + "! Have a wonderful cooking time. ";
                var steps = ". This consists of, " + this.Procedure.stages[i].steps.length + "steps. ";
                if (i == 0) {
                    this.speech[i] = intro + "Stage" + (i + 1) + '. ' + this.Procedure.stages[i].stageName + steps;
                }
                else
                    this.speech[i] = "Stage" + (i + 1) + ',' + this.Procedure.stages[i].stageName + steps;
            }
        });
        console.log(this.synthesis.speaking);
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
                    this.newnum = ((this.num * 0.9) / this.numduplicate);
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
        }
    }
    // Pass Entered quantity of ingredients to backend
    orderval() {
        var obj = [];
        for (let i = 0; i < this.igLength; i++) {
            var x;
            x = { "category": "tom", "name": this.ing[i].name, "quantity": this.igQuantity[i], "unit": this.igUnit[i] };
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
        this.router.navigateByUrl(`/orderpreview/${this.recipeid}`);
        console.log(obj);
        console.log(this.fieldArray);
        console.log(this.FinalOrder);
        this.fservice.move(this.FinalOrder);
    }
    startTimer(i) {
        //Show timer controls
        this.showStart[i] = false;
        this.showPause[i] = true;
        this.showStop[i] = true;
        this.showRestart[i] = false;
        //Start voice when timer starts
        if (this.timeRem[i] == this.duration[i]) {
            var utterance = new SpeechSynthesisUtterance('Hello world');
            utterance.text = this.speech[i];
            this.synthesis.speak(utterance);
            if (i == 0) {
                var utterance1 = new SpeechSynthesisUtterance(' You can pause the timer and move on to next stage if you want. Enjoy cooking. ');
                this.synthesis.speak(utterance1);
            }
            else {
                var utterance1 = new SpeechSynthesisUtterance(' Enjoy cooking. ');
                this.synthesis.speak(utterance1);
            }
        }
        //Timer
        this.intervals[i] = setInterval(() => {
            if (this.timeRem[i] > 0) {
                this.timeRem[i]--;
                this.timePercent[i] = ((this.duration[i] - this.timeRem[i]) * 100) / this.duration[i];
                this.head[i] = "ongoing";
                //Halfway through cooking
                if (this.timeRem[i] == (this.duration[i]) / 2) {
                    var utterance = new SpeechSynthesisUtterance('Hello world');
                    utterance.text = "Hey, we are halfway through " + this.Procedure.stages[i].stageName + ". Hope you are there.";
                    this.synthesis.speak(utterance);
                }
                //Cooking about to end
                if (this.timeRem[i] == 30) {
                    var utterance = new SpeechSynthesisUtterance('Hello world');
                    utterance.text = "Hey, hope " + this.Procedure.stages[i].stageName + " is almost done. ";
                    this.synthesis.speak(utterance);
                    //Last stage
                    if (i == this.Procedure.stages.length - 1) {
                        var utterance1 = new SpeechSynthesisUtterance('Hope you enjoyed it. ');
                        var utterance2 = new SpeechSynthesisUtterance("Please don't forget to rate the recipe");
                        this.synthesis.speak(utterance1);
                        this.synthesis.speak(utterance2);
                    }
                    else {
                        var utterance1 = new SpeechSynthesisUtterance();
                        utterance1.text = "Our next stage is " + this.Procedure.stages[i + 1].stageName;
                        this.synthesis.speak(utterance1);
                    }
                }
            }
            //If timer is stopped
            else {
                this.head[i] = "completed";
                //Display only Restart
                this.timeRem[i] = 0;
                this.showRestart[i] = true;
                this.showStart[i] = false;
                this.showStop[i] = false;
                this.showPause[i] = false;
            }
        }, 1000);
    }
    // Pause Timer
    pauseTimer(i) {
        this.showPause[i] = false;
        this.showStart[i] = true;
        this.showRestart[i] = false;
        this.showStop[i] = true;
        clearInterval(this.intervals[i]);
    }
    //Stop Timer
    stopTimer(i) {
        this.synthesis.cancel();
        this.head[i] = "completed";
        this.showStart[i] = false;
        this.showPause[i] = false;
        this.showStop[i] = false;
        this.showRestart[i] = true;
        this.timeRem[i] = 0;
        this.timePercent[i] = 100;
    }
    //Restart Timer
    restartTimer(i) {
        this.showStart[i] = false;
        this.showPause[i] = true;
        this.showStop[i] = true;
        this.showRestart[i] = false;
        this.timeRem[i] = this.duration[i];
        clearInterval(this.intervals[i]);
        this.startTimer(i);
    }
    openDialog() {
        const dialogRef = this.dialog.open(_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"], {
            width: '30%', height: '50%',
            data: { rating: this.rating, comments: this.comments, recipeId: this.recipeid }
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
    checkNumber(num) {
        if (this.num % 2 == 0) {
            this.isEven = true;
        }
        else if (this.num % 2 != 0) {
            this.isOdd = true;
        }
    }
    changeUnits() {
    }
};
TryrecipeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TryrecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tryrecipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tryrecipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tryrecipe.component.css */ "./src/app/tryrecipe/tryrecipe.component.css")).default]
    })
], TryrecipeComponent);



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n  height:80%;\n}\n.p-t-20{\n  padding-top: 20px;\n}\n.p-b-20{\n  padding-bottom: 20px;\n}\n.p-t-5{\n  padding-top: 5px;\n}\n.p-t-40{\n  padding-top:40px;\n}\n.container{\n  margin-bottom: -30px;\n  margin-top: 25vh;\n  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n}\n.container2 {\n  margin-top: -25vh;\n  margin-left: 50px;\n  width: 300px;\n  height: 50vh;\n   border-radius: 50%;\n  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n\n}\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.middle2 {\n  transition: .5s ease;\n  opacity: 1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.image {\n  border-radius: 50%;\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: 100%;\n  transition: .5s ease;\n  /*backface-visibility: hidden;*/\n}\n.container2:hover .image {\n  opacity: 0.3;\n}\n.container2:hover .middle {\n  opacity: 1;\n}\n.text {\n  background-color: #4CAF50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n.column {\n  float: left;\n  width: 30%;\n  padding: 10px;\n}\n.column2 {\n  float: left;\n  min-width: 150px;\n  max-width: 250px;\n  padding: 10px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5SEFBeUg7QUFDM0g7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7R0FDWCxrQkFBa0I7RUFDbkIseUhBQXlIOztBQUUzSDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBR0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OjgwJTtcbn1cbi5wLXQtMjB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnAtYi0yMHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucC10LTV7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ucC10LTQwe1xuICBwYWRkaW5nLXRvcDo0MHB4O1xufVxuXG4uY29udGFpbmVye1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgbWFyZ2luLXRvcDogMjV2aDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5jb250YWluZXIyIHtcbiAgbWFyZ2luLXRvcDogLTI1dmg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTB2aDtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWlkZGxlMiB7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAvKmJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsqL1xufVxuXG4uY29udGFpbmVyMjpob3ZlciAuaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jb250YWluZXIyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG59XG5cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29sdW1uMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");



let UserprofileComponent = class UserprofileComponent {
    constructor(service) {
        this.service = service;
        this.userimage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
        this.recipespublished = [];
        this.recipestried = [];
        this.recipesliked = [];
        this.image = "";
        this.upload = true;
        this.cancelImage = true;
    }
    ngOnInit() {
        let username = localStorage.getItem('username');
        this.name = localStorage.getItem('name');
        this.service.getUserDetails(username).subscribe((data) => {
            console.log(data);
            this.user = data;
            console.log(this.user.username + this.user.name);
            if (this.user.image == null) {
                this.user.image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
            }
            this.recipespublished = data.recipesPublished;
            this.recipestried = data.recipesTried;
            this.recipesliked = data.recipesLiked;
        });
        // delay(10000);
        console.log("shshshh");
        console.log(this.user + "hello");
    }
    onFileComplete(data) {
        console.log(data); // We just print out data bubbled up from event emitter.
        this.previousImage = this.user.image;
        this.urll = data;
        this.image = data;
        this.user.image = data;
        this.upload = false;
    }
    getUrl() {
        let url = "url('" + this.user.image + "')";
        console.log(url + "hhdj");
        return url;
    }
    approve() {
        let newUser = this.user;
        this.service.updateImage(newUser).subscribe(data => console.log(data));
        this.upload = true;
    }
    cancel() {
        // this.urll=this.onFileComplete(this.previousImage);
        this.cancelImage = false;
        this.upload = true;
    }
};
UserprofileComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] }
];
UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")).default]
    })
], UserprofileComponent);



/***/ }),

/***/ "./src/app/voicetest/voicetest.component.css":
/*!***************************************************!*\
  !*** ./src/app/voicetest/voicetest.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".light {\n    background-color:#fff;\n}\n.dark {\n    background-color: #cfd8dc;\n}\n.normal {\n    background-color: #29434e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2V0ZXN0L3ZvaWNldGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNldGVzdC92b2ljZXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xufVxuLmRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG4ubm9ybWFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0MzRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/voicetest/voicetest.component.ts":
/*!**************************************************!*\
  !*** ./src/app/voicetest/voicetest.component.ts ***!
  \**************************************************/
/*! exports provided: VoicetestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicetestComponent", function() { return VoicetestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VoicetestComponent = class VoicetestComponent {
    constructor() { }
    ngOnInit() {
    }
};
VoicetestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voicetest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voicetest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voicetest/voicetest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voicetest.component.css */ "./src/app/voicetest/voicetest.component.css")).default]
    })
], VoicetestComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cgi/Documents/CookifyProject/cookify/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map