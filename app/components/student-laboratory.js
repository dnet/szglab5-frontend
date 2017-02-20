import Ember from 'ember';
import moment from 'ember-moment';

export default Ember.Component.extend({
  init: function() {
    this._super();
    return this.tick();
  },
  tick: function() {
    this.toggleProperty("toggleTime");
    return setTimeout(((function(_this) {
      return function() {
        return _this.tick();
      };
    })(this)), 1000 * 60 * 15);
  },
  toggleTime: true,
  timeLeft: Ember.computed('toggleTime', function() {
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
    selectCommit: function(newcommit) {
      this.set('result.finalcommit', newcommit);
      return this.sendAction('selectCommit', newcommit);
    }
  }
});
