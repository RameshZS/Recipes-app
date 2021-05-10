import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LoginPageController extends Controller {
  /*Check the user for login operation */
  @action
  checkUserExists() {
    let user = this.store.peekAll('user-detail');
    user.forEach((element) => {
      if (element.userNum == this.userNum && element.password == this.pwd) {
        element.state = true;
        user.save();
        this.transitionToRoute('recipesapp');
      }
    });
    let getRecord = this.store.peekAll('user-detail').filter((ele) => {
      return ele.userNum == this.userNum && ele.password == this.pwd;
    });
    if (getRecord.length == 0) {
      alert('Please your one of the input is wrong,Try again');
    }
  }
}
