import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';
import AdminAuthenticatedRouteMixin from '../mixins/admin-authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, ErrorRouteMixin, AdminAuthenticatedRouteMixin, {
  model() {
      return RSVP.hash({
          eventTemplates: this.get('store').findAll('EventTemplate'),
          exerciseTypes: this.get('store').findAll('ExerciseType')
      });
  }
});
