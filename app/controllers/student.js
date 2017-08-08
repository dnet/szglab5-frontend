import Ember from 'ember';
import Promise from 'rsvp';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.studentEvents', function () {
    return this.get('model.studentEvents').then((studentEvents) => {
      let subMenuKeys = [];
      let promises = [];
      studentEvents.forEach((array) => { // as of mapBy
        array.forEach((studentEvent) => {
          const promise = studentEvent.get('EventTemplate').then((EventTemplate) => {
            subMenuKeys.push({
              key: studentEvent.get('id'),
              description: EventTemplate.get('number') + ". " + EventTemplate.get('title'),
              event: studentEvent
            });
          });
          promises.push(promise);
          studentEvent.get('Demonstrator'); // preload Demonstrator for better UX
        });
      });
      return Promise.all(promises).then(() => subMenuKeys);
    });
  }),
  actions: {
    goToView(key) {
      this.get('subMenu').then((subMenu) => {
        subMenu.forEach((se) => {
          if (key === se.key) {
            this.set('currentView', se);
            return false;
          }
        });
      });
      return false;
    },
    selectCommit(newcommit) {
      console.log("Todo save new commit: " + newcommit);
      return false;
    }
  }
});
