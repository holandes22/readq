import Ember from 'ember';

export default Ember.Component.extend({

  csvToArray(value) {
    if (value === '') {
      value = [];
    }

    if(!Array.isArray(value)) {
      value = value.split(',');
    }
    return value;
  },

  actions: {
    save() {
      let changeset = this.get('changeset');
      let tags = changeset.get('tags');

      // remove empty strings
      changeset.set('tags', tags.filter(v => v !== ''));

      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          this.attrs.save(changeset);
        }
      });
    }
  }
});
