import Ember from 'ember';

export default Ember.Controller.extend({
  mailList: true,
  notification: false,
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    },
    toggleMailList: function() {
      this.toggleProperty('mailList');
      return false;
    },
    toggleNotifications: function() {
      this.toggleProperty('notification');
      return false;
    }
  }
});
