import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: "http://localhost:4000",
  namespace: "api",
  authorizer: 'authorizer:oauth2'
});
