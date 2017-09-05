import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sqlText: '',
  error: '',
  data: [],
  actions: {
    goToView(key) {
      this.set('currentView', key);
      return false;
    },
    runQuery() {
      let errorMessage = (xhr) => {
        this.set('error', xhr.responseJSON.errors[0].title);
      };
      this.set('error','');
      this.set('data','');
      Ember.$.ajax({
        type: "POST",
        url: config.backendUrl + "/sql",
        data: JSON.stringify({ sqlText: this.get('sqlText') }),
        beforeSend: (xhr) => { xhr.setRequestHeader('Authorization', `Bearer ${this.get('session.data.authenticated.token')}`); },
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: (data) => {
          this.set('data', data[0]);
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
