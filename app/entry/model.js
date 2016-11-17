import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  selection: Ember.inject.service(),

  link: DS.attr('string'),
  archived: DS.attr('boolean', { defaultValue: false }),
  notes: DS.attr('string'),
  insertedAt: DS.attr('date'),
  tags: DS.attr({ defaultValue: [] }),

  didCreate() {
    this.get('selection').refreshAllTags();
  },

  didDelete() {
    this.get('selection').refreshAllTags();
  },

  didUpdate() {
    this.get('selection').refreshAllTags();
  }
});
