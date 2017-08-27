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
              events.forEach((event) => {
                subMenuKeys.push({
                  key: event.get('id'),
                  description: event.get('EventTemplate.name') + ((event.get('finalized')) ? `(${event.get('grade')})` : ''),
                  event: event
                });
              });
            }, err => {
              console.error(err);
              reject(err);
            });
            promises.push(promise);
          });
          RSVP.Promise.all(promises).then(() => resolve(subMenuKeys.sort((lhs, rhs) => {
            return lhs.event.get('date') - rhs.event.get('date');
          })), err => {
            console.error(err);
            reject(err);
          });
        }, err => {
          console.error(err);
          reject(err);
        });
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
