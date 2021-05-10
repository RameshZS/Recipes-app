import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SelectTagContainerComponent extends Component {
  @action
  selectCategory(element) {
    if (
      element.target.value == 'Easy' ||
      element.target.value == 'Average' ||
      element.target.value == 'Difficult'
    ) {
      console.log(element.target.value);
      this.args.value.level = element.target.value;
    } else {
      this.args.value.rating = element.target.value;
    }
    return this.args.value;
  }
}
