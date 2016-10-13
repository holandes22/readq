import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      link: '',
      archived: false,
      notes: '',
      createdAt: '',
      tags: []
    };
  },

  actions: {
    save(changeset) {
      let attrs = ['link', 'archived', 'notes', 'createdAt', 'tags'];
      let hash = changeset.getProperties(attrs);

      this.store.createRecord('entry', hash).save();
    },

    rollback(changeset) {
      changeset.rollback();
      this.transitionTo('entries');
    }
  }
});
