import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('A test recipe', 'This is a test recipe', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F09%2F27%2FScreen-Shot-2021-09-26-at-8.52.38-PM.png&w=426&h=285&c=sc&poi=face&q=85'),
        new Recipe('A test recipe 2', 'This is a test recipe 2', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F09%2F27%2FScreen-Shot-2021-09-26-at-8.52.38-PM.png&w=426&h=285&c=sc&poi=face&q=85')
      ];

    
    getRecipes() {
        return this.recipes.slice();
    }
    
}