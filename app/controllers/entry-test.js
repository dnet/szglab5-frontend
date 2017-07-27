import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: null,
  question: null,
  subMenu: Ember.computed('model.exerciseCategories','model.exerciseCategories.[]',function() {
    return this.get('model.exerciseCategories').map(x => ({
      key: x,
      description: x.get('type')
    }));
  }),
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      this.set('question', null);
      return false;
    }
  }
});
