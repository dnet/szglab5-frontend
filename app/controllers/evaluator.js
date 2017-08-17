import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: null,
  evaluate: null,
  didReceiveAttrs() {
    this.set('evaluate', null);
    return this.set('currentView', null);
  },
  subMenu: Ember.computed('model.user', 'model.user.ExerciseTypes.[]', 'model.exerciseTypes', function () {
    return this.get('model.user.ExerciseTypes').reduce((olds, n) => {
      if (olds.indexOf(n) === -1) {
        return [...olds, n];
      }
      return olds;
    }, []).map(exerciseType => ({
      key: exerciseType,
      description: exerciseType.get('name')
    }));
  }),
  actions: {
    goToView(key) {
      this.set('evaluate', null);
      this.set('currentView', key);
      return false;
    },
    cancel() {
      this.set('evaluate', null);
      return false;
    },
    evaluateStudent(student) {
      this.set('evaluate', student);
      return false;
    }
  }
});
