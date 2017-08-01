import Ember from 'ember';

export default Ember.Component.extend({
  isEvaluator: Ember.computed(function () {
    return this.get('user.role') === 'CORRECTOR';
  }),
  isStudent: Ember.computed(function () {
    return this.get('user.role') === 'STUDENT';
  }),
  successfullPwd: false,
  successfullEmail: false,
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
    setNewPwd() {
      this.set('successfullPwd', false);
      this.get('user').set('newpwd', this.get('newPwd'));
      this.get('user').save().then(() => {
        this.set('successfullPwd', true);
        this.set('newPwd', undefined);
        this.get('user').set('newpwd', undefined);
      });
      return false;
    },
    setNewEmail() {
      this.set('successfullEmail', false);
      this.get('user').set('email', this.get('newEmail'));
      this.get('user').save().then(() => {
        this.set('successfullEmail', true);
        this.set('newEmail', undefined);
      });
      return false;
    },
    closeSettings() {
      return this.sendAction('closeSettings');
    },
    impersonateUser() {
      return this.sendAction('impersonateUser');
    }
  }
});
