import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SearchComponentComponent = class SearchComponentComponent {
    constructor(searchRecipe, route, http, router) {
        this.searchRecipe = searchRecipe;
        this.route = route;
        this.http = http;
        this.router = router;
        this.searchResult = {};
    }
    tr(id) {
        this.router.navigate(['/recipedetails', id]);
        console.log(id);
    }
    ngOnInit() {
        let name = this.route.snapshot.paramMap.get('name');
        console.log(name);
        let _url = "http://15.206.52.125:8082/api/v1/recipes/" + name;
        console.log(_url);
        this.http.get(_url).subscribe((data) => { this.searchResult = data; console.log(data, "searchresults"); });
    }
};
tslib_1.__decorate([
    Input()
], SearchComponentComponent.prototype, "message1", void 0);
SearchComponentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-component',
        templateUrl: './search-component.component.html',
        styleUrls: ['./search-component.component.css']
    })
], SearchComponentComponent);
export { SearchComponentComponent };
//# sourceMappingURL=search-component.component.js.map