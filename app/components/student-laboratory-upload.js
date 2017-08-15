import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  success: false,
  error: '',
  actions: {
    upload(file) {
      this.set('success', false);
      this.set('error', '');
      file.upload(`${config.backendUrl}/deliverables/${this.get('Deliverable.id')}/upload`).then(() => {
        this.set('success', true);
      }, data => {
        if (data && data.body && data.body.errors && data.body.errors[0]) {
          this.set('error', data.errors[0]);
        }
        else {
          this.set('error', 'Unknown error.');
        }
      });
    },
    ondrop(event) {
      alert("A drop meg nem mukodik.");
    }
  }
});
