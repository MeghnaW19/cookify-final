import {ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FrontendserviceService } from '../frontendservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-possiblerecipes',
  templateUrl: './possiblerecipes.component.html',
  styleUrls: ['./possiblerecipes.component.css']
})
export class PossiblerecipesComponent {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  image="https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612";
  commonlyUsedIngredients;
  separatorKeysCodes = [ENTER];
  ingredientCtrl = new FormControl();
  filteredIngredients: Observable<any[]>;
  ingredients = [];
  allIngredients:String[];

  private name;

  @ViewChild('ingredientInput',{static:false}) ingredientInput: ElementRef;

  constructor(private fservice:FrontendserviceService,private router:Router,private route:ActivatedRoute) {
    
    this.name=localStorage.getItem('name');
  }

  remove(ingredient: any): void {
    const index = this.ingredients.indexOf(ingredient);
    this.commonlyUsedIngredients.push(ingredient);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }


  filter(name: string) {
    return this.allIngredients.filter(ingredient =>
    ingredient.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredients.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.ingredientCtrl.setValue(null);
  }

  recipe=[];
  showPossibleRecipes(){
    let list='';
    for(let i=0;i<this.ingredients.length;i++){
     list+='_'+this.ingredients[i];
    }
    console.log(list);
    this.fservice.getallrecommendedrecipeByIngredients(list).subscribe((data)=>{this.recipe=data;
      for (let i in Object.keys(this.recipe)) {
        if (this.recipe[i].recipeImage == null) {
          this.recipe[i].recipeImage = "https://www.washingtonian.com/wp-content/uploads/2019/06/unnamed-1-2048x1365.jpg"
        }
      }
    console.log(this.recipe)});
  }
  ngOnInit()
  {
    
    let username=localStorage.getItem('username');
    if(username==null)
    {
      this.router.navigateByUrl('/login');
    }

    this.fservice.getCommonlyUsedIngredients().subscribe((data)=>{console.log(data);
    this.fservice.getIngredientsWhileSearching().subscribe((data)=>{console.log(data);this.allIngredients=data});
    this.commonlyUsedIngredients=data;});
  }

  addToform(ingredient: string) {
    console.log(ingredient);
    this.ingredients.push(ingredient)
    const index = this.commonlyUsedIngredients.indexOf(ingredient);

    if (index >= 0) {
      this.commonlyUsedIngredients.splice(index, 1);
    }
  }
  tr(id)
  {
    this.router.navigateByUrl(`/recipedetails/${id}`);
  }

  getAllIngredients(event){
    this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(
      startWith(null),
      map((ingredient: string | null) => ingredient ? this.filter(ingredient) : this.allIngredients.slice()));
  }

  
}

