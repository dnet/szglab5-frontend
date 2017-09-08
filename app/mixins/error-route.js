import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    error(error, transition) {
      if (error.status === '403') {
        this.replaceWith('login');
      } else {
        console.error(error);
        return this.transitionTo('error');
      }
    }
  }
});
