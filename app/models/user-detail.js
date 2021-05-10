import Model, { attr, hasMany } from '@ember-data/model';

export default class UserDetailModel extends Model {
  @hasMany('recipe-detail') recipeDetail;
  @attr('string') userName;
  @attr('string') userNum;
  @attr('string') password;
  @attr('boolean') state;
}
