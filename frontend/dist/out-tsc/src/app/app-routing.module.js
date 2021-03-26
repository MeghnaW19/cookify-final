import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponent } from './login/login.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TryrecipeComponent } from './tryrecipe/tryrecipe.component';
import { PublishRecipeComponent } from './publish-recipe/publish-recipe.component';
import { SelectinterestsComponent } from './selectinterests/selectinterests.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { OrderpreviewComponent } from "./tryrecipe/orderpreview/orderpreview.component";
import { PossiblerecipesComponent } from './possiblerecipes/possiblerecipes.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { PossibleRecipesCardsComponent } from "./possiblerecipes/possible-recipes-cards/possible-recipes-cards.component";
import { VoicetestComponent } from './voicetest/voicetest.component';
const routes = [
    { path: '', redirectTo: '/homecomponent', pathMatch: 'full' },
    { path: 'test', component: TestcomponentComponent },
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'homecomponent', component: HomecomponentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recipedetails/:recipeid', component: RecipedetailsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tryrecipe/:recipeid', component: TryrecipeComponent },
    { path: 'publish-recipe', component: PublishRecipeComponent },
    { path: 'selectyourinterests/:data', component: SelectinterestsComponent },
    { path: 'orderpreview', component: OrderpreviewComponent },
    { path: 'possiblerecipes', component: PossiblerecipesComponent, children: [{ path: 'possiblerecipescards', component: PossibleRecipesCardsComponent }] },
    { path: 'search/:name', component: SearchComponentComponent },
    { path: 'voicetest', component: VoicetestComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponent = [HomecomponentComponent, LoginComponent, RecipedetailsComponent, RegisterComponent, TryrecipeComponent, SelectinterestsComponent, UserprofileComponent, TestcomponentComponent, PossiblerecipesComponent, OrderpreviewComponent, SearchComponentComponent, VoicetestComponent];
//# sourceMappingURL=app-routing.module.js.map