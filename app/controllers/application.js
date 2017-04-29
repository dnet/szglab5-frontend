import Ember from 'ember';

export default Ember.Controller.extend({
  style: 'blue',
  actions: {
    changeStyle(newStyle) {
      this.set('style',newStyle);
    }
  }
});
