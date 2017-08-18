import Ember from 'ember';
import RSVP from 'rsvp';
import { dateformat } from '../helpers/dateformat';

export default Ember.Component.extend({
  header: ['Név', 'Neptun', 'Feladat', 'Mérés ideje', 'Mérés helye', 'Beugró', 'Jk. jegy', 'Labor jegy'],
  rowIndecies: ['userName', 'userNeptun', 'exerciseShortName', 'formattedDate', 'location', 'entryTestGrade', 'correctorGrade', 'grade'],
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
            }, reject)
          );
        });
        console.log(promises);
        RSVP.Promise.all(promises).then(() => resolve(body), reject);
      }, reject);
    });
  }),
  actions: {
    evaluateEvent(event) {
      return this.sendAction('evaluateEvent', event);
    }
  }
});
