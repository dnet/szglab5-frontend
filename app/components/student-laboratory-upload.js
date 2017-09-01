import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  success: false,
  classNames: ['file-upload'],
  uploadUrl: Ember.computed('Deliverable', function () {
    return `${config.backendUrl}/deliverables/${this.get('Deliverable.id')}/upload`;
  }),
  downloadUrl: Ember.computed('Deliverable', function () {
    return `${config.backendUrl}/deliverables/${this.get('Deliverable.id')}/download`;
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
