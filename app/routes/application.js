import Route from '@ember/routing/route';
import { recipes } from '../data/recipesdata';
import { inject as service } from '@ember/service';
import { category } from '../data/category';

export default class ApplicationRoute extends Route {
  @service store;
  model() {
    category.forEach((ele) => {
      let addCategory = this.store.createRecord('category', ele);
      addCategory.type = ele;
      addCategory.save();
    });
    let recipeData = this.store.findAll('recipe-detail');
    if (recipeData.length == 0) {
      recipes.forEach((ele, id) => {
        ele.id = id;
        let recipe = this.store.createRecord('recipe-detail', ele);
        recipe.type = this.store.peekRecord('category', ele.type);
        console.log(recipe.type);
        recipe.save();
      });
    } else {
      recipeData.forEach((ele, id) => {
        ele.id = id;
        let recipe = this.store.createRecord('recipe-detail', ele);
        recipe.save();
      });
    }
    let userData = this.store.findAll('user-detail');
    userData.forEach((user) => {
      let userData = this.store.createRecord('user-detail', user);
      userData.save();
    });
  }
}
