import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },

  actions: {
    save(changeset) {
      changeset.save();
    },

    rollback(changeset) {
      changeset.rollback();
    }
  }
});
