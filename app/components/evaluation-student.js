import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel: function() {
      return this.sendAction('cancel');
    }
  }
});
