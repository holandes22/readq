import Ember from 'ember';

export default Ember.Component.extend({

  csvToArray(value) {
    if(!Array.isArray(value)) {
      value = value.split(',');
    }
    return value;
  },

  actions: {
    save() {
      let changeset = this.get('changeset');

      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          this.attrs.save(changeset);
        }
      });
    },
    rollback() {
      this.attrs.rollback(this.get('changeset'));
    }
  }
});
