import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipePreviewRoute extends Route {
  model(params) {
    const { recipe_id } = params;
    let singleRecipeData = this.store.peekRecord('recipe-detail', recipe_id);
    singleRecipeData.rollbackAttributes();
    return singleRecipeData;
  }
  /*get the particular data from emberdata*/
}
