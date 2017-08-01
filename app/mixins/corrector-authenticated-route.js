import Ember from 'ember';
import jwt_decode from 'npm:jwt-decode';

export default Ember.Mixin.create({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      var token = this.get('session.data.authenticated.token');
      if (!Ember.isEmpty(token)) {
        var decoded = jwt_decode(token);
        if (!decoded.roles || decoded.roles.indexOf("CORRECTOR") === -1) {
          return this.transitionTo('permission-denied');
        }
      }
    } else {
      return this._super(...arguments);
    }
  }
});
