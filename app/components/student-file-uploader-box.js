import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url')
    });

    if (!Ember.isEmpty(files)) {
      this.sendAction('started');
      uploader.upload(files[0]).then(() => {
        this.sendAction('success');
      }, data => {
        this.sendAction('falied', data);
      });
    }
  }
});
