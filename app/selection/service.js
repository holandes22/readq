import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  showArchived: false,
  filterTags: [],

  allTags: Ember.computed('showArchived', {
    get() {
      return this.getAllTags();
    },
    set(key, value) {
     return value;
    }
  }),

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
    let entries = this.get('store').peekAll('entry');
    let showArchived = this.get('showArchived');
    let tags = entries.map((entry) => {
      if (entry.get('archived') && !showArchived) {
        return [];
      }
      return entry.get('tags') || [];
    });
    return this.removeDups(this.flatten(tags));
  }
});
