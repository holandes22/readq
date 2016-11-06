import Ember from 'ember';

export default Ember.Controller.extend({
  selection: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    invalidateSession() {
      let session = this.get('session');
      session.invalidate().then(() => {
        session.set('data.currentUser', null);
        this.transitionToRoute('login');
      });
    }
  }
});
