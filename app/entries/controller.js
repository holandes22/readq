import Ember from 'ember';
import _array from 'lodash/array';

export default Ember.Controller.extend({
  selection: Ember.inject.service(),

  filteredEntries: Ember.computed('selection.filterTags', 'selection.showArchived', function() {
    let filterTags = this.get('selection.filterTags'),
        showArchived = this.get('selection.showArchived');

    return this.get('model').filter((entry) => {
      let result = true;

      if (!showArchived) {
        result = entry.get('archived') === false;
      }

      if (filterTags.length > 0) {
        result = result && _array.intersection(filterTags, entry.get('tags')).length > 0;
      }
      return result;
    });
  })
});
