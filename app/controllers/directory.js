import Ember from 'ember';

export default Ember.Controller.extend({
  showTable: true,
  showSettings: false,
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    },
    openSettings: function(user) {
      this.set('model.userDetails', user);
      this.toggleProperty('showSettings');
      return false;
    },
    closeSettings: function() {
      this.set('model.userDetails', {});
      this.toggleProperty('showSettings');
      return false;
    },
    showTable: function() {
      this.toggleProperty('showTable');
      return false;
    }
  }
});
