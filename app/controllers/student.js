import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.StudentRegistrations.[]', 'model.StudentRegistrations.@each.Events', function() {
    return this.get('model.StudentRegistrations').then((srs) => {
      var promises = [];
      srs.forEach((sr) => {promises.push(sr.get('Events'));});
      return RSVP.allSettled(promises).then((promises) => {
        var i = 1;
        var keys = [];
        promises.forEach((promstate) => {
          if (promstate.state === "fulfilled") {
            promstate.value.forEach((event, eventkey) => {
              keys.push({
                key: event.get('id'),
                description: i + '. labor',
                event: event
              });
              i++;
            });
          }
        });
        this.set('subMenu', keys);
        return keys;
      });
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
