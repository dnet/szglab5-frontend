import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    error(error) {
      if (error) {
        console.error(error);
        return this.transitionTo('error');
      }
    }
  }
});
