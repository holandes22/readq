import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
  selection: Ember.inject.service(),
  entryToDelete: null,

  afterModel() {
    this.get('selection').refreshAllTags();
  },

  model() {
    return this.store.findAll('entry').then((entries) => {
      return entries;
    });
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
