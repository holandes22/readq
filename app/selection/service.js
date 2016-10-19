import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  allTags: [],

  refreshAllTags() {
    this.set('allTags', this.getAllTags());
  },

  flatten(arr) {
    return [].concat(...arr);
  },

  removeDups(arr) {
    return [...new Set(arr)];
  },

  getAllTags() {
    let tags = [];
    return this.get('store').findAll('entry').then((entries) => {
      tags = entries.map((entry) => {
        return entry.get('tags');
      });
      return this.removeDups(this.flatten(tags));
    });

  }
});
