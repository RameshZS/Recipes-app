import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class DeletePageController extends Controller {
  /*Delete the particular record*/
  @action
  deleteRecipe() {
    this.model.deleteRecord();
    this.model.get('isDeleted');
    this.model.save();
    this.transitionToRoute('recipesapp');
  }
  /*Delete operation cancel method */
  @action
  cancelDeleteOperation() {
    this.transitionToRoute('recipes-page');
  }
}
