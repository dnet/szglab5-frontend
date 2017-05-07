import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';
import StudentAuthenticatedRouteMixin from '../mixins/student-authenticated-route';
import jwt_decode from 'npm:jwt-decode';

export default Ember.Route.extend(AuthenticatedRouteMixin, ErrorRouteMixin, StudentAuthenticatedRouteMixin, {
  model() {
    var token = this.get('session.data.authenticated.token');
    var userData = jwt_decode(token);
    return this.get('store').find('user', userData.userId);
  }
});
