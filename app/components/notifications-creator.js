import Ember from 'ember';

export default Ember.Component.extend({
  startingDate: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.date');
    }
    return this.get('minDate').toISOString().slice(0, 10);
  }),
  sender: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.user');
    }
    return 'Teszt Felhasznalo';
  }),
  admins: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.where').indexOf('A') >= 0;
    }
    return false;
  }),
  students: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.where').indexOf('S') >= 0;
    }
    return false;
  }),
  demonstators: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.where').indexOf('D') >= 0;
    }
    return false;
  }),
  evaluators: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.where').indexOf('E') >= 0;
    }
    return false;
  }),
  onLogin: Ember.computed(function() {
    if (this.get('notification')) {
      return this.get('notification.where').indexOf('L') >= 0;
    }
    return false;
  }),
  didReceiveAttrs: function() {
    return this.set('minDate', new Date(Date.now()));
  },
  actions: {
    toggleAdmins: function() {
      this.toggleProperty('admins');
      return false;
    },
    toggleStudents: function() {
      this.toggleProperty('students');
      return false;
    },
    toggleDemonstrators: function() {
      this.toggleProperty('demonstators');
      return false;
    },
    toggleEvaluators: function() {
      this.toggleProperty('evaluators');
      return false;
    },
    toggleLogin: function() {
      this.toggleProperty('onLogin');
      return false;
    },
    closeSettings: function() {
      return this.sendAction('closeSettings');
    }
  }
});
