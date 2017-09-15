import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  exerciseShortName: Ember.computed('result', 'result.ExerciseSheet', function () {
    if (this.get('result') && this.get('result.ExerciseSheet')) {
      return this.get('result.ExerciseSheet.ExerciseType').then(exerciseType => {
        return exerciseType.get('shortName');
      });
    }
  }),
  init: function () {
    this._super();
    return this.tick();
  },
  tick: function () {
    this.toggleProperty("toggleTime");
    return setTimeout(((function (_this) {
      return function () {
        return _this.tick();
      };
    })(this)), 1000 * 60 * 15);
  },
  toggleTime: true,
  timeLeft: Ember.computed('toggleTime', function () {
    var deadline, diff;
    deadline = this.get('result.deadline');
    diff = moment(deadline).diff(moment(), 'hours');
    if ((diff <= 0)) {
      diff = moment(deadline).diff(moment(), 'minutes');
      if ((diff <= 0)) {
        diff = 0;
      }
      return diff + " perc";
    }
    return diff + " óra";
  }),
  actions: {
    selectCommit(Deliverable, newcommit) {
      Deliverable.set('success', null);
      Deliverable.set('fail', null);
      Deliverable.set('commit', newcommit);
      Deliverable.save().then(() => {
        Deliverable.set('success', true);
      }).catch(() => {
        Deliverable.set('fail', true);
      });
      return false;
    }
  }
});
