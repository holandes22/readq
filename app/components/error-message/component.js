import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  info: Ember.computed('error', function() {
    let error = this.get('error');
    let errors = error.errors;

    if (error instanceof DS.AdapterError && errors && errors[0].status === "0") {
      return {
        detail: "Backend server appears to be down",
        status: null,
      };
    } else {
      return {
        status: errors[0].code,
        detail: errors[0].title,
      };

    }

  })
});
