import Ember from 'ember';
import RSVP from 'rsvp';
import { dateformat } from '../helpers/dateformat';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service('session'),
  header: [
    'Neptun',
    'Név',
    'Feltöltés ideje',
    'Határidő',
    'Feladattípus',
    'Labor kód',
    'Beadandó'
  ],
  rowIndecies: [
    'Event.StudentRegistration.User.neptun',
    'Event.StudentRegistration.User.displayName',
    'uploadedAt',
    'deadlineFormatted',
    'Event.ExerciseSheet.ExerciseType.shortName',
    'DeliverableTemplate.EventTemplate.ExerciseCategory.type',
    'DeliverableTemplate.description'
  ],
  filteredDeliverablesSelect: [],
  headerGrading: [
    'Neptun',
    'Név',
    'Feltöltés ideje',
    'Határidő',
    'Javító',
    'Feladatkód',
    'Labor kód',
    'Beadandó típusa',
    'Kijavítva',
    'Érdemjegy',
    'IMSc'
  ],
  rowIndeciesGrading: [
    'Event.StudentRegistration.User.neptun',
    'Event.StudentRegistration.User.displayName',
    'uploadedAt',
    'deadlineFormatted',
    'CorrectorName',
    'Event.ExerciseSheet.ExerciseType.shortName',
    'DeliverableTemplate.EventTemplate.ExerciseCategory.type',
    'DeliverableTemplate.description',
    'finalized',
    'grade',
    'imsc'
  ],
  subMenu: [
    {
      key: 'select',
      description: 'Javítandó kiválasztása'
    }, {
      key: 'grading',
      description: 'Javítás és kijavított feladatok'
    }
  ],
  deliverableFilters: [
    {
      filter: {
        isCorrector: true,
        isFile: true,
        finalized: false
      },
      value: 'Javításra vár'
    },
    {
      filter: {
        isAttached: true,
        isFile: true,
        finalized: true
      },
      value: 'Feladattípusaimhoz tartozó kijavított feladatok'
    }
  ],
  page: 0,
  filteredDeliverables: [],
  myExerciseTypes: Ember.computed('model.user.ExerciseTypes', 'model.user.ExerciseTypes.[]', 'model.user.ExerciseTypes.@each', function () {
    return this.get('model.user.ExerciseTypes');
  }),
  actions: {
    // changes view
    goToView(key) {
      // if stayed in the same menu
      if (this.get('currentView') === key) {
        switch (key) {
          case 'select':
            this.actions.back.apply(this);
            break;
          case 'grading':
            this.actions.backFromGrading.apply(this);
            break;
        }
      }
      this.set('currentView', key);
      this.set('selectedExerciseType', null);
      this.set('selectedEventTemplate', null);
      this.set('selectedDeliverableTemplate', null);
      this.set('selectedDeliverableFilter', this.deliverableFilters[0]);
      this.set('success', false);
      this.set('error', '');
      this.actions.resetPage.apply(this);
      return false;
    },
    // changes deliverable template in the filter
    changeExerciseType(eT) {
      this.set('selectedExerciseType', eT);
      this.actions.resetPage.apply(this);
      return false;
    },
    // changes event template in the filter
    changeEventTemplate(eT) {
      this.set('selectedEventTemplate', eT);
      this.set('selectedDeliverableTemplate', '');
      this.actions.resetPage.apply(this);
      return false;
    },
    // changes deliverable template in the filter
    changeDeliverableTemplate(dT) {
      this.set('selectedDeliverableTemplate', dT);
      this.actions.resetPage.apply(this);
      return false;
    },
    // load deliverables by filter
    loadFilteredDeliverablesForSelect() {
      const filter = {
        isFree: true,
        isAttached: true,
        isOver: true,
        isFile: true,
        isUploaded: true
      };
      if (this.get('selectedExerciseType')) {
        filter.exerciseTypeId = this.get('selectedExerciseType.id');
      }
      if (this.get('selectedEventTemplate')) {
        filter.eventTemplateId = this.get('selectedEventTemplate.id');
      }
      if (this.get('selectedDeliverableTemplate')) {
        filter.deliverableTemplateId = this.get('selectedDeliverableTemplate.id');
      }
      const pageSize = 50;
      this.get('store').query('deliverable', {
        filter: filter,
        offset: pageSize * this.get('page'),
        limit: pageSize
      }).then(deliverables => {
        deliverables.forEach(x => {
          x.set('uploadedAt', x.get('uploaded') ? dateformat([x.get('lastSubmittedDate')]) : 'No');
          x.set('deadlineFormatted', dateformat([x.get('deadline')]));
        });
        this.set('filteredDeliverablesSelect', [
          ...this.get('filteredDeliverablesSelect'),
          ...deliverables.map(x => x)
        ]);
        this.set('page', this.get('page') + 1);
      });
      return false;
    },
    // resetPage
    resetPage(noNeedReload) {
      this.set('page', 0);
      this.set('filteredDeliverablesSelect', []);
      this.set('filteredDeliverables', []);
      if (!noNeedReload) {
        switch (this.get('currentView')) {
          case 'select':
            this.actions.loadFilteredDeliverablesForSelect.apply(this);
            break;
          case 'grading':
            this.actions.loadFilteredDeliverablesForGrading.apply(this);
            break;
        }
      }
      return false;
    },
    changeDeliverable(deliverable) {
      this.set('success', false);
      this.set('error', '');
      deliverable.get('Event').then(event => {
        this.set('selectedEvent', event);
        this.set('selectedEventUser', deliverable.get('Event.StudentRegistration.User'));
        this.set('selectedEventDemonstrator', deliverable.get('Event.Demonstrator'));
        this.set('success', false);
        this.set('error', '');
        this.set('selectedDeliverable', deliverable);
        this.set('selectedDeliverable.gradingCache', this.get('selectedDeliverable.grading'));
      });
      return false;
    },
    book() {
      this.set('success', false);
      this.set('error', '');
      this.set('selectedDeliverable.Corrector', this.get('model.user'));
      this.set('selectedDeliverable.grading', true);
      this.get('selectedDeliverable').save().then(() => {
        this.set('success', true);
      }, (t) => {
        if (t.errors && t.errors.length > 0 && t.errors[0].title) {
          this.set('error', t.errors[0].title);
        }
      });
      return false;
    },
    unbook() {
      this.set('success', false);
      this.set('error', '');
      this.set('selectedDeliverable.Corrector', null);
      this.set('selectedDeliverable.grading', false);
      this.get('selectedDeliverable').save().then(() => {
        this.set('success', true);
      }, (t) => {
        if (t.errors && t.errors.length > 0 && t.errors[0].title) {
          this.set('error', t.errors[0].title);
        }
      });
      return false;
    },
    save(finalized = true) {
      this.set('success', false);
      this.set('error', '');
      if (this.get('selectedDeliverable.comment') === '') {
        this.set('selectedDeliverable.comment', null);
      }
      if (this.get('selectedDeliverable.grade') === '') {
        this.set('selectedDeliverable.grade', null);
      }
      if (this.get('selectedDeliverable.imsc') === '') {
        this.set('selectedDeliverable.imsc', null);
      }
      if (this.get('selectedDeliverable.grade') === null) {
        if (finalized) {
          this.set('error', 'No grade provided.');
          return;
        }
      }
      if (this.get('selectedDeliverable.comment') === null) {
        if (finalized) {
          this.set('error', 'No comment provided.');
          return;
        }
      }
      this.set('selectedDeliverable.finalized', finalized);
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
        const selectedDeliverable = this.get('selectedDeliverable');
        selectedDeliverable.rollbackAttributes();
        const selectedDeliverableId = selectedDeliverable.get('id');
        if (selectedDeliverable.get('grading')) {
          this.set('filteredDeliverablesSelect', this.get('filteredDeliverablesSelect').filter(x => (x.get('id') !== selectedDeliverableId)));
        }
        return this.set('selectedDeliverable', null);
      }
      this.set('success', false);
      this.set('error', '');
      return false;
    },
    changeDeliverableFilter(selected) {
      // reset page if the filter is changed
      this.set('selectedDeliverableFilter', selected);
      this.actions.resetPage.apply(this);
    },
    loadFilteredDeliverablesForGrading() {
      const filter = this.get('selectedDeliverableFilter.filter');
      // filter for event template
      if (this.get('selectedEventTemplate')) {
        filter.eventTemplateId = this.get('selectedEventTemplate.id');
      }
      const pageSize = 50;
      this.get('store').query('deliverable', {
        filter: filter,
        offset: pageSize * this.get('page'),
        limit: pageSize
      }).then(deliverables => {
        deliverables.forEach(x => {
          x.set('uploadedAt', x.get('uploaded') ? dateformat([x.get('lastSubmittedDate')]) : 'No');
          x.set('deadlineFormatted', dateformat([x.get('deadline')]));
        });
        this.set('filteredDeliverables', [
          ...this.get('filteredDeliverables'),
          ...deliverables.map(x => x)
        ]);
        this.set('page', this.get('page') + 1);
      });
      return false;
    },
    backFromGrading() {
      this.set('selectedEvent', null);
      this.set('selectedEventUser', null);
      this.set('selectedEventDemonstrator', null);
      const selectedDeliverable = this.get('selectedDeliverable');
      if (selectedDeliverable) {
        selectedDeliverable.rollbackAttributes();
        const selectedDeliverableId = selectedDeliverable.get('id');
        this.set('filteredDeliverablesSelect', this.get('filteredDeliverablesSelect').map(x => (
          (x.get('id') === selectedDeliverableId) ? selectedDeliverable : x
        )));
      }
      this.set('selectedDeliverable', null);
      this.set('success', false);
      this.set('error', '');
      return false;
    },
    download() {
      const form = document.createElement('form');
      form.setAttribute('target', '_blank');
      form.setAttribute('method', 'post');
      form.setAttribute('action', this.get('selectedDeliverable.downloadLink'));
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'token');
      hiddenInput.setAttribute('value', this.get('session.data.authenticated.token'));
      form.appendChild(hiddenInput);
      document.body.appendChild(form);
      form.submit();
      form.remove();
      return false;
    }
  }
});
