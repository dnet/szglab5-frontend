import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  success: false,
  url: Ember.computed('Deliverable', function () {
    return `${config.backendUrl}/deliverables/${this.get('Deliverable.id')}/upload`;
  }),
  error: '',
  actions: {
    uploadStarted() {
      this.set('success', false);
      this.set('error', '');
      return false;
    },
    uploadSuccess() {
      this.set('success', true);
      this.get('Deliverable').reload();
      return false;
    },
    uploadFailed(data) {
      if (data && data.body && data.body.errors && data.body.errors[0]) {
        this.set('error', data.errors[0]);
      }
      else {
        this.set('error', 'Unknown error.');
      }
      return false;
    }
  }
});
