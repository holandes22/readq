import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import EntryValidations from 'readq/validations/entry';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model() {
    return {
      link: '',
      archived: false,
      notes: '',
      insertedAt: '',
      tags: []
    };
  },

  setupController(controller, model) {
    let changeset = new Changeset(model, lookupValidator(EntryValidations), EntryValidations);
    controller.set('changeset', changeset);
  },

  actions: {
    save(changeset) {
      let attrs = ['link', 'archived', 'notes', 'insertedAt', 'tags'];
      let hash = changeset.getProperties(attrs);

      this.store.createRecord('entry', hash).save().then(() => {
        this.get('flashMessages').positive('Entry created successfully');
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
