import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import jwt_decode from 'npm:jwt-decode';
import RSVP from 'rsvp';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  account: {},
  model() {
    return new RSVP.Promise((resolve, reject) => {
      var token = this.get('session.data.authenticated.token');
      var userData = jwt_decode(token);
      if (!Ember.isEmpty(userData)) {
        return this.get('store').findRecord('user', userData.userId).then((user) => {
          this.set('account', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
