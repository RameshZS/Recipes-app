import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import{ computed } from '@ember/object';
export default class RecipePreviewController extends Controller {
  @tracked currentRecipeId;

  @action
  forwardAction() {
    let lastId = this.store.peekAll('recipe-detail').length;
    this.currentRecipeId = Number(this.model.id);
    if (this.currentRecipeId < lastId-1) {
      console.log('hi');
      this.currentRecipeId++;
      console.log(this.model);
      return this.model.id;
      //this.transitionToRoute('/recipe-preview/' + this.currentRecipeId);
    } else {
      alert('This is the final Recipe');
    }
  }

  @action
  previousAction() {
    this.currentRecipeId = Number(this.model.id);
    if (this.currentRecipeId > 0) {
      this.currentRecipeId--;
      this.transitionToRoute('/recipe-preview/' + this.currentRecipeId);
    } else {
      alert('this one is the first recipe.Please click next button and visit');
    }
  }

  get getSmiliarRecipes() {
    console.log(this.model.type.get('id'));
    let category_recipe = this.store.peekRecord(
      'category',
      this.model.type.get('id')
    );
    return category_recipe.recipe;
  }
}
