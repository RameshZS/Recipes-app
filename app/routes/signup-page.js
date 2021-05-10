import Route from '@ember/routing/route';

export default class SignupPageRoute extends Route {
  model() {
    let userData = this.store.createRecord('user-detail');
    return userData;
  }
}
