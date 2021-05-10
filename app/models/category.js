import Model, { attr, hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('recipe-detail') recipe;
  @attr('string') categoryName;
  @attr('string') image;
  @attr('string') description;
}
