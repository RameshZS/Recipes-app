import Route from '@ember/routing/route';

export default class DeletePageRoute extends Route {
  model(params) {
    const { recipe_id } = params;
    let recipeData = this.store.peekRecord('recipe-details', recipe_id);
    return recipeData;
  }
}
