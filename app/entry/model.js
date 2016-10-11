import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
  archived: DS.attr('boolean'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date'),
  tags: DS.attr()
});
