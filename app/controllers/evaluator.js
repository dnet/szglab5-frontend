import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  header: ['Neptun', 'Name', 'Finalized', 'Grade'],
  rowIndecies: ['neptun', 'name', 'finalized', 'grade'],
  didReceiveAttrs() {
    this.set('selectedSheet', null);
    this.set('selectedEvent', null);
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
      this.set('currentView', key);
      this.set('selectedSheet', null);
      this.set('selectedEvent', null);
      this.set('events', null);
      this.set('selectedDeliverable', null);
      return false;
    },
    changeSheet(sheet) {
      this.set('selectedSheet', sheet.key);
      this.set('selectedEvent', null);
      this.set('events', null);
      this.set('selectedDeliverable', null);
      this.get('store').query('event', {
        filter: {
          exerciseSheetId: this.get('selectedSheet.id')
        }
      }).then(events => {
        const promises = events.map(event => event.get('User'));
        RSVP.all(promises).then(([...users]) => {
          this.set('events', events.map((event, index) => {
            return {
              neptun: users[index].get('neptun'),
              name: users[index].get('displayName'),
              finalized: (event.get('finalized')) ? 'Yes' : 'No',
              grade: event.get('grade'),
              meta: event
            };
          }));
        });
      });
      return false;
    },
    changeEvent(row) {
      const id = row.meta.get('id');
      row.meta.unloadRecord();
      this.set('selectedDeliverable', null);
      this.get('store').findRecord('event', id).then(event => {
        event.get('User').then(user => {
          this.set('selectedEventUser', user);
          this.set('selectedEvent', event);
        });
      });
      return false;
    },
    changeDeliverable(deliverable) {
      this.set('success', false);
      this.set('error', '');
      this.set('selectedDeliverable', deliverable);
      return false;
    },
    toggleFinalized() {
      this.toggleProperty('selectedDeliverable.finalized');
      return false;
    },
    save() {
      this.set('success', false);
      this.set('error', '');
      this.get('selectedDeliverable').save().then(() => {
        this.set('success', true);
      }, (t) => {
        if (t.errors && t.errors.length > 0 && t.errors[0].title) {
          this.set('error', t.errors[0].title);
        }
      });
      return false;
    },
    back() {
      if (this.get('selectedDeliverable')) {
        this.get('selectedDeliverable').rollbackAttributes();
        return this.set('selectedDeliverable', null);
      }
      if (this.get('selectedEvent')) {
        return this.set('selectedEvent', null);
      }
      if (this.get('selectedSheet')) {
        this.set('events', null);
        return this.set('selectedSheet', null);
      }
    }
  }
});
