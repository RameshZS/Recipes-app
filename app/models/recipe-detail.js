import Model, { attr, belongsTo } from '@ember-data/model';

export default class RecipeDetailModel extends Model {
  @belongsTo('user-detail') userData;
  @belongsTo('category') type;
  @attr recipe_name;
  @attr time;
  @attr image;
  @attr Rating;
  @attr ingredients;
  @attr level;
  @attr timeManageMent;
}
