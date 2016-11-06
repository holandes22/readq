import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'github').then(() => {
        this.transitionTo('entries');
      });
    }
  }
});
