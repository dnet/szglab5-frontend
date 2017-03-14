import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            tests: this.get('store').findAll('test'),
            //languages: this.get('store').findAll('language')
        });
    }
});
