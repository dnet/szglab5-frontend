import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, ErrorRouteMixin,  {
  session: Ember.inject.service('session'),
  beforeModel() {
    this._super(...arguments);
    var session = this.get('session');
    if (session.isAuthenticated) {
      session.invalidate().then(() => {
        this.transitionTo('login');
      });
    }
  }
});
