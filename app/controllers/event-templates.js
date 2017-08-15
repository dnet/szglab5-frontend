import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  selectedEventTemplate: null,
  subMenu: Ember.computed('model.eventTemplates', 'model.eventTemplates.[]', function () {
    this.get('model.eventTemplates').forEach(x => console.log(x));
    return this.get('model.eventTemplates').map(x => ({
      key: x,
      description: x.get('name')
    }));
  }),
  actions: {
    selectEventTemplate(key) {
      this.set('selectedEventTemplate', key);
      return false;
    },
    generateDeliverables() {
      let errorMessage = (xhr) => {
        this.set('error', xhr.responseJSON.errors[0].title);
      };
      this.set('error', '');
      this.set('success', false);
      Ember.$.ajax({
        type: "GET",
        url: `${config.backendUrl}/event-templates/${this.get('selectedEventTemplate.id')}/generate`,
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: (data) => {
          this.set('success', true);
        },
        failure: errorMessage,
        statusCode: {
          500: errorMessage,
          404: errorMessage,
          403: errorMessage,
        }
      });
      return false;
    }
  }
});
