import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class CategorySelectTagContainerComponent extends Component {
  @action
  selectCategory(element) {
    if (
      element.target.value == '1' ||
      element.target.value == '2' ||
      element.target.value == '3' ||
      element.target.value == '4'
    ) {
      this.args.value.categoryType = element.target.value;
    }
    return this.args.value;
  }
}
