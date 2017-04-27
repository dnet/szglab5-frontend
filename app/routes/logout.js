import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  beforeModel(model, transition) {
    this._super(...arguments)
    var session = this.get('session');
    if (session.isAuthenticated) {
      session.invalidate().then(() => this.transitionTo('login'));
    }
  }
});
