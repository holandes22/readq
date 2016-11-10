import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error(error) {
      Ember.Logger.info('Handling error event with error: ', error);

      let errors = error.errors;

      if (errors[0].code === 401) {
        this.replaceWith('login');
      } else if (errors[0].code === 404 ) {
        this.transitionTo('not-found', 'not-found');
      } else {
        this.intermediateTransitionTo('error', error);
      }
    }
  }
});
