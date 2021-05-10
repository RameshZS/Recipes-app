import Route from '@ember/routing/route';

export default class CategoryPageRoute extends Route {
  model(params) {
    const { category_id } = params;
    let category_recipes = this.store.peekRecord('category', category_id);
    return category_recipes;
  }
}
