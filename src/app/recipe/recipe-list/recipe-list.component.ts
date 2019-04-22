import { Component, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent{

  recipe: Recipe;
  @Output() recipeSelected: EventEmitter<any> = new  EventEmitter<Recipe>();


  
  constructor(){
      this.recipe = new Recipe('recipe1', 'this is the first recipe', 'https://www.entornoturistico.com/wp-content/uploads/2019/01/pad-thai-660x330.jpg', 'heavy');
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);  
}
}
