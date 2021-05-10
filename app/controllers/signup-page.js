import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupPageController extends Controller {
  @service store;
  @action
  addUser() {
    this.model.state = false;
    this.model.save();
  }

  @action
  userExists() {
    let nameCheck = /[a-zA-z]{3,25}/.test(this.userName);
    let passwordCheck = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
      this.model.password
    );
    if (
      (this.model.userName != undefined &&
      this.model.userNum != undefined &&
      this.model.password != undefined) &&
      (nameCheck &&
      this.model.userNum.length > 9 &&
      passwordCheck)
    ) {
      let data = this.store.peekAll('user-detail').filter((element) => {
        if (element.isSaving) {
          return element.userNum.includes(this.model.userNum);
        }
      });
      if (data.length == 0) {
        this.addUser();
        this.transitionToRoute('login-page');
      } else {
        alert('User is already exists');
      }
    } else {
      alert(
        '⭐Please give the User name must above 3 letter(alphbet only),' +
          '\n⭐Please provide the number above 10 digit numbers' +
          '\n⭐Password length must about 8,' +
          '\n*use 1&above uppercase' +
          '\n*use 1&above lowercase' +
          '\n*use 1&above numbers'
      );
    }
  }
}
