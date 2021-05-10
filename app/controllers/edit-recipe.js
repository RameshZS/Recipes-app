import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class EditRecipeController extends Controller {
  value = {
    categoryType: null,
    level: null,
    rating: null,
  };
  @tracked result= this.model.ingredients;
  @action
  editRecipe() {
    if (this.value.categoryType != null) {
      let category = this.store.peekRecord('category', this.value.categoryType);
      this.model.type = category;
      this.model.recipeData.save();
    } else if (this.value.level != null) {
      this.model.level = this.value.level;
      this.model.save();
    } else if (this.value.rating != null) {
      this.model.Rating = this.value.rating;
      this.model.save();
    } else {
      console.log();
      if (!Array.isArray(this.model.ingredients)) {
        this.model.ingredients = this.model.ingredients.split(',');
      }
      this.model.save();
      this.model.timeManageMent[0].readyin = this.model.time;
      this.model.save();
    }
    this.transitionToRoute('/recipe-preview/' + this.model.id);
  }
  get selectTagData(){
    let selectTagData = {
      categoryType: [
        {
          id: '1',
          categoryName: 'BreakFast',
        },
        { id: '2', categoryName: 'Lunch' },
        {
          id: '3',
          categoryName: 'Dinner',
        },
        {
          id: '4',
          categoryName: 'Snacks',
        },
      ],
      level: ['Easy', 'Average', 'Difficult'],
      Rating: ['⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
    };
    return selectTagData;
  }
}
