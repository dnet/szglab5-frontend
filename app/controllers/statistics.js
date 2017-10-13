import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentView: 'correctors',
  selectedMenu: {
    key: 'correctors',
    description: 'Javítók terheltsége'
  },
  init() {
    this._super(...arguments);
    this.loadData({});
  },
  subMenu: [
    {
      key: 'correctors',
      description: 'Javítók terheltsége'
    },
    {
      key: 'events',
      description: 'Csoportok',
      eventTemplateNeeded: true
    },
    {
      key: 'deliverables',
      description: 'Beadandók',
      eventTemplateNeeded: true,
      exerciseTypeNeeded: true
    }
  ],

  loadData: function(params){
    this.set('data', {});
    let errorMessage = (xhr) => {
      this.set('error', xhr.responseJSON.errors[0].title);
    };
    this.set('error', '');

    Ember.$.ajax({
      type: "GET",
      url: `${config.backendUrl}/statistics/${this.get('currentView')}?${Ember.$.param(params)}`,
      beforeSend: (xhr) => { xhr.setRequestHeader('Authorization', `Bearer ${this.get('session.data.authenticated.token')}`); },
      contentType: "application/json; charset=utf-8",
      crossDomain: true,
      dataType: "json",
      success: (data) => {
        this.set('data', data);
      },
      failure: errorMessage,
      statusCode: {
        500: errorMessage,
        404: errorMessage,
        403: errorMessage,
      }
    });
  },
  actions: {
    goToView(key) {
      this.set('currentView', key);
      this.set('data', {});
      this.actions.load.apply(this);
      return false;
    },
    changeEventTemplate(eT) {
      this.set('selectedEventTemplate', eT);
      this.actions.load.apply(this);
      return false;
    },
    changeExerciseType(eT) {
      this.set('selectedExerciseType', eT);
      this.actions.load.apply(this);
      return false;
    },
    load() {
      const selectedMenu = this.get('subMenu').find(x => x.key === this.get('currentView'));
      this.set('selectedMenu', selectedMenu);
      this.set('data', {});

      const params = {};
      if (selectedMenu.eventTemplateNeeded) {
        const etid = this.get('selectedEventTemplate.id');
        if (etid) {
          params.eventTemplateId = etid;
        } else {
          return false;
        }
      }
      if (selectedMenu.exerciseTypeNeeded) {
        const etid = this.get('selectedExerciseType.id');
        if (etid) {
          params.exerciseTypeId = etid;
        } else {
          return false;
        }
      }
      this.loadData(params);
      return false;
    }
  }
});
