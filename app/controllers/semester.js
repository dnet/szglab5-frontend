import Ember from 'ember';

export default Ember.Controller.extend({
  subMenu: Ember.computed('model.semesters', function () {
    return this.get('model.semesters').map(semester => ({key: semester, description: `${semester.get('academicyear')}/${semester.get('academicterm')}`}));
  }),
  actions: {
    goToView(key) {
      this.set('currentView', key);
      return false;
    }
  }
});
