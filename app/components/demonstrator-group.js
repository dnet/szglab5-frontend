import Ember from 'ember';
import RSVP from 'rsvp';
import { dateformat } from '../helpers/dateformat';

export default Ember.Component.extend({
  header: ['Name', 'Neptun', 'Exercise', 'Date', 'Place', 'Entry grade', 'Exercise Grade', 'Event grade'],
  rowIndecies: ['userName', 'userNeptun', 'exerciseShortName', 'formattedDate', 'location', 'firstEntryTest.grade', 'firstCorrectableDeliverable.grade', 'grade'],
  body: Ember.computed('currentEventTemplate', function () {
    return new RSVP.Promise((resolve, reject) => {
      this.get('currentEventTemplate.Events').then(events => {
        const body = [];
        const promises = [];
        events.forEach(event => {
          promises.push(
            RSVP.Promise.all(
              [
                event.get('ExerciseSheet.ExerciseType'),
                event.get('User')
              ]
            ).then(([exerciseType, user]) => {
              event.set('exerciseShortName', exerciseType.get('shortName'));
              event.set('userNeptun', user.get('neptun'));
              event.set('userName', user.get('displayName'));
              event.set('formattedDate', dateformat([event.get('date')]));
              body.push(event);
              return true;
            }, err => {
              console.error(err);
              reject(err);
            })
          );
        });
        RSVP.Promise.all(promises).then(() => resolve(body), err => {
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
    evaluateEvent(event) {
      return this.sendAction('evaluateEvent', event);
    }
  }
});
