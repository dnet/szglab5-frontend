/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'szglab5-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    backendUrl: 'http://localhost:7000',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    authenticator: 'authenticator:jwt',
    baseURL: ENV.rootURL,
    routeIfAlreadyAuthenticated: 'settings',
    authenticationRoute: 'login',
    routeAfterAuthentication: 'settings'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.backendUrl + '/auth/login',
    identificationField: 'loginName',
    passwordField: 'password',
    tokenPropertyName: 'token',
    refreshTokenPropertyName: 'refresh_token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {},
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: ENV.backendUrl + '/auth/login', //TODO: refresh Url
    tokenExpireName: 'exp',
    refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
      // ENV.location = 'hash';
      ENV.rootURL = '/~szepes'
  }

  return ENV;
};
