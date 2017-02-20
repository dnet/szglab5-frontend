import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: 'lab1',
  evaluate: '',
  didReceiveAttrs: function() {
    this.set('evaluate', '');
    return this.set('currentView', 'lab1');
  },
  subMenu: [{
    key: 'lab1',
    description: 'Oracle labor'
  }, {
    key: 'lab2',
    description: 'SQL labor'
  }, {
    key: 'lab3',
    description: 'Java labor'
  }, {
    key: 'lab4',
    description: 'XSQL labor'
  }, {
    key: 'lab5',
    description: 'SOA labor'
  }],
  actions: {
    goToView: function(key) {
      this.set('evaluate', '');
      this.set('currentView', key);
      return false;
    },
    cancel: function() {
      this.set('evaluate', '');
      return false;
    },
    evaluateStudent: function(student) {
      this.set('evaluate', 'student');
      return false;
    }
  }
});
