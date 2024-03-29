/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'readq',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    torii: {
      providers: {
        'github-oauth2': {
          apiKey: '1e5545bfcbdcba6e49df',
          scope: 'user:email',
        }
      }
    },

    flashMessageDefaults: {
      timeout: 4000,
      types: ['positive', 'negative', 'info']
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      host: 'http://localhost:4000'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'https://hidden-chamber-40537.herokuapp.com';

  }

  return ENV;
};
