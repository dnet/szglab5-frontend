import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import jwt_decode from 'npm:jwt-decode';
import RSVP from 'rsvp';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  model() {
    var token = this.get('session.data.authenticated.token');
    var userData = jwt_decode(token);
    return this.get('store').find('user', userData.userId);
  }
});
