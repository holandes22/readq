import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('entries', { path: '/' });
  this.route('entries.new', { path: 'entries/new' });
  this.route('entries.entry.edit', { path: 'entries/:entry_id/edit' });
  this.route('login');
  this.route('not-found', { path: '*path' });
});

export default Router;
