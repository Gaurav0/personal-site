import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  slug: DS.attr('string'),
  title: DS.attr('string'),
  thumb: DS.attr('string'),
  image: DS.attr('string'),
  desc: DS.attr('string'),
  url: DS.attr('string'),
  urltext: DS.attr('string'),
  src: DS.attr('string')
});
