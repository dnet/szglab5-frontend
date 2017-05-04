import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.studentEvents', function() {
    return this.get('model.studentEvents').then(function(studentEvents) {
      var subMenuKeys = [];
      for (var i = 0; i < studentEvents.length; i++) {
        studentEvents[i].forEach((studentEvent, index) => {
          subMenuKeys.push({
            key: studentEvent.get('id'),
            description: (index + 1) + '. labor',
            event: studentEvent
          });
        })
      }
      return subMenuKeys;
    });
  }),
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    },
    selectCommit: function(newcommit) {
      console.log("Todo save new commit");
      return false;
    }
  }
});
