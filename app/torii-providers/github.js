import Ember from 'ember';
import GitHubOauth2Provider from 'torii/providers/github-oauth2';
import ENV from 'readq/config/environment';

export default GitHubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),

  fetch(data) {
    return data;
  },

  open() {
    return this._super().then(toriiData => {
      const authCode = toriiData.authorizationCode;
      const serverUrl =  `${ENV.APP.host}/auth/github/callback?code=${authCode}`;

      return this.get('ajax').request(serverUrl)
        .then((data) => {
          // This is the key expected by simple-auth OAuth2Bearer authorizer
          toriiData['access_token'] = data.token;
          this.get('session').set('data.currentUser', data.user);
          return toriiData;
        });
    });
  }
});
