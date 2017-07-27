import Ember from 'ember';
import ErrorRouteMixin from '../mixins/error-route';

export default Ember.Route.extend(ErrorRouteMixin, {
  model() {
    return this.get('store').findAll('news');
  }
});
