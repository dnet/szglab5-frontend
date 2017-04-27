import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSettings: function() {
      this.transitionToRoute('settings');
      return false;
    }
  }
});
