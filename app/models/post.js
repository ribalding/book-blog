import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  category: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
