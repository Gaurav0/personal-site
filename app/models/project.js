import DS from 'ember-data';
const { Model, attr } = DS;

export default class ProjectModel extends Model {
  slug = attr('string')
  title = attr('string')
  thumb = attr('string')
  image = attr('string')
  desc = attr('string')
  url = attr('string')
  urltext = attr('string')
  src = attr('string')
}
