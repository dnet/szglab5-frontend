import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.get('event.firstEntryTest').save().then();
      this.get('event').save().then();
      return false;
    },
    cancel() {
      this.get('event').rollbackAttributes();
      return this.sendAction('cancel');
    }
  }
});
