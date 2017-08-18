import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  header: ['Neptun', 'Name', 'Finalized', 'Grade'],
  rowIndecies: ['neptun', 'name', 'finalized', 'grade'],
  headerGrading: ['Type', 'Neptun', 'Name', 'Finalized', 'Grade'],
  rowIndeciesGrading: ['DeliverableTemplate.description', 'Student.neptun', 'Student.displayName', 'finalized', 'grade'],
  didReceiveAttrs() {
    this.set('selectedSheet', null);
    this.set('selectedEvent', null);
    return this.set('currentView', null);
  },
  subMenu: [
    {
      key: 'select',
      description: 'Select for grading'
    }, {
      key: 'grading',
      description: 'Grading'
    }
  ],
  deliverableFilters: [
    {
      filter: {
        isCorrector: true,
        finalized: false,
        hasGrade: false
      },
      value: 'Does not started'
    },
    {
      filter: {
        isCorrector: true,
        finalized: false,
        hasGrade: true
      },
      value: 'Has grade'
    },
    {
      filter: {
        isCorrector: true,
        finalized: true,
        hasGrade: true
      },
      value: 'Finalized'
    }
  ],
  ExerciseTypes: Ember.computed('model.user', 'model.user.ExerciseTypes.[]', 'model.exerciseTypes', function () {
    const r = this.get('model.user.ExerciseTypes').reduce((olds, n) => {
      if (olds.indexOf(n) === -1) {
        return [...olds, n];
      }
      return olds;
    }, []);
    if (r.length === 1) {
      this.actions.changeType.apply(this, [r[0]]);
    }
    return r;
  }),
  actions: {
    goToView(key) {
      this.set('currentView', key);
      return false;
    },
    changeType(type) {
      this.set('selectedType', type);
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
          const deliverables = this.get('selectedEvent.correctableDeliverables');
          if (deliverables.length === 1) {
            this.actions.changeDeliverable.apply(this, [deliverables[0]]);
          }
        });
      });
      return false;
    },
    changeDeliverable(deliverable) {
      this.set('success', false);
      this.set('error', '');
      this.set('selectedDeliverable', deliverable);
      this.set('selectedDeliverable.gradingCache', this.get('selectedDeliverable.grading'));
      return false;
    },
    changeDeliverableFromGrading(deliverable) {
      deliverable.get('Event').then(event => {
        this.set('selectedEvent', event);
        this.set('selectedEventUser', deliverable.get('Student'));
        this.actions.changeDeliverable.apply(this, [deliverable]);
      });
      return false;
    },
    toggleFinalized() {
      this.toggleProperty('selectedDeliverable.finalized');
      return false;
    },
    toggleGrading() {
      this.toggleProperty('selectedDeliverable.gradingCache');
      return false;
    },
    save() {
      this.set('success', false);
      this.set('error', '');
      if (this.get('selectedDeliverable.gradingCache')) {
        this.set('selectedDeliverable.Corrector', this.get('model.user'));
      } else {
        this.set('selectedDeliverable.Corrector', null);
      }
      if (this.get('selectedDeliverable.comment') === '') {
        this.set('selectedDeliverable.comment', null);
      }
      if (this.get('selectedDeliverable.grade') === '') {
        this.set('selectedDeliverable.grade', null);
      }
      if (this.get('selectedDeliverable.imsc') === '') {
        this.set('selectedDeliverable.imsc', 0);
      }
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
      if (this.get('selectedType')) {
        return this.set('selectedType', null);
      }
    },
    changeDeliverableFilter(selected) {
      this.set('selectedDeliverableFilter', selected);
      this.get('store').query('deliverable', {
        filter: selected.filter
      }).then(deliverables => {
        this.set('filteredDeliverables', deliverables);
      });
      return false;
    },
    backFromGrading() {
      this.set('selectedEvent', null);
      this.set('selectedEventUser', null);
      this.set('selectedDeliverable', null);
      return false;
    },
    download() {
      window.open(this.get('selectedDeliverable.donwloadLink'), '_blank');
      return false;
    }
  }
});
