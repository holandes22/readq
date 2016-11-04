import Ember from 'ember';
import GitHubOauth2Provider from 'torii/providers/github-oauth2';

export default GitHubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),

  fetch(data) {
    return data;
  },

  open() {
    return this._super().then(toriiData => {
      const authCode = toriiData.authorizationCode;
      const serverUrl =  `http://localhost:4000/auth/github/callback?code=${authCode}`;

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
