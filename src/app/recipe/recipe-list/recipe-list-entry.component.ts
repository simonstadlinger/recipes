import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list-entry',
  templateUrl: './recipe-list-entry.component.html',
  styles: []
})
export class RecipeListEntryComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected: EventEmitter<any> =  new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
      this.recipeSelected.emit(this.recipe);
  }

}
