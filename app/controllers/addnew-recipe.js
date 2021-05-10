import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AddnewRecipeController extends Controller {
  value = {
    categoryType: '1',
    level: 'Easy',
    rating: '⭐⭐⭐',
  };
  @action
  addNew() {
    let instance = this.model;
    let category = this.store.peekRecord('category', this.value.categoryType);
    if (
      instance.recipe_name != undefined &&
      instance.time != undefined &&
      instance.image != undefined &&
      this.ingredients != undefined &&
      this.preptime != undefined &&
      this.cooktime != undefined
    ) {
      console.log(this.value.categoryType);
      instance.ingredients = this.ingredients.split(',');
      instance.type = category;
      instance.level = this.value.level;
      instance.Rating = this.value.rating;
      instance.timeManageMent = [
        {
          prep: this.preptime,
          cook: this.cooktime,
          readyin: this.model.time,
        },
      ];
      let user = this.store.peekAll('user-detail');
      let currentUser;
      user.forEach((loginUser) => {
        if (loginUser.state == true) {
          currentUser = loginUser;
        }
      });
      instance.userData = currentUser;
      this.model.save();
      //this.transitionToRoute('recipes-page');
    } else {
      alert('Please give all proper value');
    }
  }

  get selectTagData() {
    let selectTagObject = {
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
    return selectTagObject;
  }
}
