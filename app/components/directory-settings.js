import Ember from 'ember';

export default Ember.Component.extend({
  body: Ember.computed(function() {
    return [this.get('userDetails')];
  }),
  isEvaluator: Ember.computed(function() {
    if ((this.get('userDetails')[0] % 3) === 0) {
      return true;
    } else {
      return false;
    }
  }),
  isStudent: Ember.computed(function() {
    if ((this.get('userDetails')[0] % 3) === 1) {
      return true;
    } else {
      return false;
    }
  }),
  studentLabs: {
    lab1: {
      description: '1. Labor',
      isReportFinal: true,
      isEntrytestFinal: true,
      isLaboratoryFinal: true
    },
    lab2: {
      description: '2. Labor',
      isReportFinal: false,
      isEntrytestFinal: true,
      isLaboratoryFinal: false
    },
    lab3: {
      description: '3. Labor',
      isReportFinal: false,
      isEntrytestFinal: false,
      isLaboratoryFinal: false
    }
  },
  actions: {
    closeSettings: function() {
      return this.sendAction('closeSettings');
    }
  }
});
