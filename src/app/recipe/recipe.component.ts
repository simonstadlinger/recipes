import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Event;
  constructor() { }

  ngOnInit() {
  }

}
