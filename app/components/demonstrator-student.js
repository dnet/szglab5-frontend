import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  classNames: ['evaluation-student'],
  actions: {
    toggleFinalized(obj) {
      obj.toggleProperty('finalized');
      return false;
    },
    save() {
      if (this.get('event.comment') === '') {
        this.set('event.comment', null);
      }
      if (this.get('event.grade') === '') {
        this.set('event.grade', null);
      }
      if (this.get('event.firstEntryTest.grade') === '') {
        this.set('event.firstEntryTest.grade', null);
      }
      if (this.get('event.imsc') === '') {
        this.set('event.imsc', 0);
      }
      // TODO: Show messagebox
      const errorHandler = t => {
        if (t.errors && t.errors.length > 0 && t.errors[0].title) {
          this.set('error', t.errors[0].title);
        }
      };
      this.set('success', false);
      this.set('error', '');
      this.get('event.firstEntryTest').save().then(() => {
        this.get('event').save().then(() => {
          this.set('success', true);
          this.sendAction('cancel'); // go back to the settings of all the students in the group
        }, err => errorHandler(err));
      }, err => errorHandler(err));
      return false;
    },
    cancel() {
      this.get('event').rollbackAttributes();
      return this.sendAction('cancel');
    },
    download(downloadLink) {
      const form = document.createElement('form');
      form.setAttribute('target', '_blank');
      form.setAttribute('method', 'post');
      form.setAttribute('action', downloadLink);
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'token');
      hiddenInput.setAttribute('value', this.get('session.data.authenticated.token'));
      form.appendChild(hiddenInput);
      document.body.appendChild(form);
      form.submit();
      form.remove();
      return false;
    }
  }
});
