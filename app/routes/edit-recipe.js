import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class EditRecipeRoute extends Route {
  model(params){
    const { recipe_id } = params;
    let recipeData = this.store.peekRecord('recipe-detail', recipe_id);
    console.log(recipeData);
    return recipeData;
  }
}
