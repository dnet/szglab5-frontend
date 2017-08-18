import Ember from 'ember';

export default Ember.Component.extend({
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
      if (this.get('event.firstEntryTest.imsc') === '') {
        this.set('event.firstEntryTest.imsc', 0);
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
        }, err => errorHandler(err));
      }, err => errorHandler(err));
      return false;
    },
    cancel() {
      this.get('event').rollbackAttributes();
      return this.sendAction('cancel');
    }
  }
});
