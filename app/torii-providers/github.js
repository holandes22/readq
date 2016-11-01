import Ember from 'ember';
import GitHubOauth2Provider from 'torii/providers/github-oauth2';

export default GitHubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  open() {
    return this._super().then(toriiData => {
      const authCode = toriiData.authorizationCode;
      const serverUrl =  `http://localhost:4000/auth/github/callback?code=${authCode}`;

      return this.get('ajax').request(serverUrl)
        .then((data) => {
          toriiData.accessToken = data.token;
          toriiData.myUser = data.user;
          return toriiData;
        });
    });
  }
});
