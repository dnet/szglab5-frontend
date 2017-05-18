import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';
import jwt_decode from 'npm:jwt-decode';

export default Ember.Route.extend(AuthenticatedRouteMixin, ErrorRouteMixin, {
  session: Ember.inject.service('session'),
  afterModel() {
    this.set('model.oldpwd', null);
    this.set('model.newpwd', null);
  },
  model() {
    var token = this.get('session.data.authenticated.token');
    var userData = jwt_decode(token);
    return this.get('store').find('user', userData.userId);
  },
  actions: {
    willTransition() {
      this.controller.resetFields();
    }
  }
});
