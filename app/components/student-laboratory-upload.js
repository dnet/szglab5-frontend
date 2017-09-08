import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  success: false,
  classNames: ['file-upload'],
  uploadUrl: Ember.computed('Deliverable', function () {
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
    },
    download() {
      const form = document.createElement('form');
      form.setAttribute('target', '_blank');
      form.setAttribute('method', 'post');
      form.setAttribute('action', `${config.backendUrl}/deliverables/${this.get('Deliverable.id')}/download`);
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'token');
      hiddenInput.setAttribute('value', this.get('session.data.authenticated.token'));
      form.appendChild(hiddenInput);
      document.body.appendChild(form);
      form.submit();
      form.remove();
    }
  }
});
