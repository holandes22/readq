import Ember from 'ember';

export default Ember.Route.extend({
  entryToDelete: null,

  model() {
    return this.store.findAll('entry');
  },

  actions: {
    openModal(name, entry) {
      Ember.$(`.ui.${name}.basic.modal`).modal('show');
      this.set('entryToDelete', entry);
    },

    approveModal() {
      return this.get('entryToDelete').destroyRecord().finally(() => {
        this.set('entryToDelete', null);
        return true;
      });
    },

    denyModal() {
      this.set('entryToDelete', null);
      return true;
    }
  }
});
