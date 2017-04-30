import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';

export default Ember.Route.extend(UnauthenticatedRouteMixin, ErrorRouteMixin);
