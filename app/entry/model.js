import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
  archived: DS.attr('boolean', { defaultValue: false }),
  notes: DS.attr('string'),
  insertedAt: DS.attr('date'),
  tags: DS.attr({ defaultValue: [] })
});
