import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },

  actions: {
    save(changeset) {
      changeset.save();
      this.transitionTo('entries');
    },

    rollback(changeset) {
      changeset.rollback();
    }
  }
});
