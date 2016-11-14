import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import EntryValidations from 'readq/validations/entry';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('entry', params.entry_id);
  },

  setupController(controller, model) {
    let changeset = new Changeset(model, lookupValidator(EntryValidations), EntryValidations);
    controller.set('changeset', changeset);
  },

  actions: {
    save(changeset) {
      changeset.save().then(() => {
        this.get('flashMessages').positive('Entry updated successfully');
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
