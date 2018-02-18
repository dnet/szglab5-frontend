import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),

  authenticate() {
    return this.get('ajax').request(config['ember-simple-auth-token'].serverTokenShibbolethEndpoint);
  },

  restore(data) {
    const dataObject = Ember.Object.create(data);

    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(dataObject.get('token'))) {
        resolve(data);
      } else {
        reject();
      }
    });
  }
});
