import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  transform(value) {
    return value;
  },

  actions: {
    update(value) {
      let propertyName = this.get('propertyName');
      this.set(`changeset.${propertyName}`, this.transform(value));
    }
  }
});
