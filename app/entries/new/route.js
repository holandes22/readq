import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import EntryValidations from 'readq/validations/entry';

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

  setupController(controller, model) {
    let changeset = new Changeset(model, lookupValidator(EntryValidations));
    controller.set('changeset', changeset);
  },

  actions: {
    save(changeset) {
      let attrs = ['link', 'archived', 'notes', 'createdAt', 'tags'];
      let hash = changeset.getProperties(attrs);

      this.store.createRecord('entry', hash).save().then(() => {
        this.transitionTo('entries');
      }).catch(error => {
        this.send('error', error);
      });
    },

    rollback(changeset) {
      changeset.rollback();
    },

    cancel() {
      this.transitionTo('entries');
    }
  }
});
