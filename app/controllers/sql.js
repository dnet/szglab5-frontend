import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  sqlText: '',
  actions: {
    goToView(key) {
      this.set('currentView', key);
      return false;
    },
    runQuery() {
      Ember.$.ajax({
        type: "POST",
        url: config.backendUrl + "/sql",
        data: JSON.stringify({ sqlText: this.get('sqlText') }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert(data); },
        failure: function (errMsg) {
          alert(errMsg);
        }
      });
      return false;
    }
  }
});
