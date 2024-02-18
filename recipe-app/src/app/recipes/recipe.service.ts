import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'Your basic everyday hamburger',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Mayo', 1),
        new Ingredient('Lettuce', 2),
      ]
    ),
    new Recipe(
      'Cheese Burger',
      'Delicious cheese burger',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Cheese', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
