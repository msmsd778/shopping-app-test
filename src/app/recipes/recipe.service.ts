import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         'A wonderful tasty schnitzel',
          'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_2560%2Cc_limit/chicken-schnitzel.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
         'What else you need to say??',
          'https://i.pinimg.com/originals/85/aa/6f/85aa6f49845ded62e997a6fa979b4af4.jpg',
          [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 1)
          ])
      ];
    

    constructor(private slService: ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}