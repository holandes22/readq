import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'readq/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: "api",
  authorizer: 'authorizer:oauth2'
});
