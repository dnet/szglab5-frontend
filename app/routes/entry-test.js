import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ErrorRouteMixin from '../mixins/error-route';
import DemonstratorOrAdminAuthenticatedRouteMixin from '../mixins/demonstrator-or-admin-authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, ErrorRouteMixin, DemonstratorOrAdminAuthenticatedRouteMixin, {
    model() {
        return RSVP.hash({
            exerciseCategories: this.get('store').findAll('ExerciseCategory'),
            // TODO: languages: this.get('store').findAll('language'),
            questions: this.get('store').findAll('question')
        });
    },
    setupController(controller) {
      this._super(...arguments);
      controller.actions.goToView.apply(controller, null);
    }
});
