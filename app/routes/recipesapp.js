import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesappRoute extends Route {
  @service store;
  model() {
    let recipeData = this.store.peekAll('recipe-detail').filter((ele) => {
      return Number(ele.id) < 8;
    });
    console.log(recipeData);
    return recipeData;
  }
}
