import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    }
  }
});
