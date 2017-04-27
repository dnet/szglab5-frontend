import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: 'email',
  subMenu: [{
    key: 'email',
    description: 'E-mail'
  }, {
    key: 'password',
    description: 'Hozzáférés'
  }],
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
    },
    save: function() {
      if (this.get('currentView') === 'email') {
        //TODO: save email
      }
      else {
        //TODO: save password and ssh
      }
    }
  }
});
