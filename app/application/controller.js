import Ember from 'ember';

export default Ember.Controller.extend({
  selection: Ember.inject.service(),
  torii: Ember.inject.service(),

  actions: {
    login() {
      return this.get('torii').open('github').then(data => {
        window.console.log('DATA', data);
      });
    }
  }
});
