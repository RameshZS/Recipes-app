import EmberRouter from '@ember/routing/router';
import config from 'receipe-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //this.route('recipesapp');
  this.route('recipesapp');
  this.route('recipe-preview', {
    path: '/recipe-preview/:recipe_id',
  });
  this.route('addnew-recipe');
  this.route('recipes-page');
  this.route('login-page');
  this.route('signup-page');
  this.route('edit-recipe', { path: '/edit-recipe/:recipe_id' });
  this.route('delete-page', { path: '/delete-recipe/:recipe_id' });
});
