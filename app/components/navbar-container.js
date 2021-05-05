import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavbarContainerComponent extends Component {
  @tracked searchRecipe;
  @tracked lengthOfInput;
  @tracked noResult;
  @service store;
  get userLogin() {
    let data = this.store.peekAll('user-details').filter((ele) => {
      return ele.state == true;
    });
    if (data.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  @action
  logoutUser() {
    let userData = this.store.peekAll('user-details');
    userData.forEach((user) => {
      if (user.state == true) {
        user.state = false;
        user.save();
      }
    });
  }

  @action
  searchTheRecipe(element) {
    let lengthOfObject = this.store.peekAll('recipe-details').length;
    this.searchRecipe = this.store
      .peekAll('recipe-details')
      .filter((recipe) => {
        console.log();
        return (
          recipe.recipe_name.includes(element.target.value.toUpperCase()) ||
          recipe.type.includes(this.toCapitalize(element.target.value))
        );
      });
    this.lengthOfInput = element.target.value.length;
    if (this.searchRecipe.length == 0) {
      console.log(this.searchRecipe.length);
      this.noResult = true;
    } else {
      this.noResult = false;
    }
  }

  toCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
  }
}
