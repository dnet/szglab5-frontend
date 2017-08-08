import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: 'list',
  subMenu: [{
    key: 'creator',
    description: 'Létrehozás'
  }, {
    key: 'list',
    description: 'Lista nézet'
  }],
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    }
  }
});
