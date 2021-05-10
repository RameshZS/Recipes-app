import Route from '@ember/routing/route';

export default class AddnewRecipeRoute extends Route {
  model() {
    let data = this.store.peekAll('recipe-detail');
    let id = Number(data.lastObject.id) + 1;
    let idObj = {
      id: id,
    };
    let createNewRecipe = this.store.createRecord('recipe-detail', idObj);
    return createNewRecipe;
  }
}
