import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: 'list',
  subMenu: [{
    key: 'creator',
    description: 'Create'
  }, {
    key: 'list',
    description: 'List'
  }],
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    }
  }
});
