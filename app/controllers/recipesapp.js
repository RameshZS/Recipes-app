import Controller from '@ember/controller';

export default class RecipesappController extends Controller {
 get categoryData(){
    let category_model = this.store.peekAll('category');
    return category_model;
  }
}
