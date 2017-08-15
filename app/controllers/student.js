import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.StudentRegistrations', function () {
    return new RSVP.Promise((resolve, reject) => {
      this.get('model.StudentRegistrations')
        .then((StudentRegistrations) => {
          let subMenuKeys = [];
          let promises = [];
          StudentRegistrations.forEach((studentRegistration) => { // as of mapBy
            const promise = studentRegistration.get('Events').then((events) => {
              console.log('asd');
              events.forEach((event) => {
                subMenuKeys.push({
                  key: event.get('id'),
                  description: event.get('ExerciseSheet.id') + ". " + event.get('Demonstrator.displayName'),
                  event: event
                });
              });
            }, err => reject(err));
            promises.push(promise);
          });
          RSVP.Promise.all(promises).then(() => resolve(subMenuKeys), err => reject(err));
        }, err => reject(err));
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
