import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    filesDidChange(files) {
      // TODO: upload
      /*const uploader = EmberUploader.Uploader.create({
        url: this.get('url')
      });

      if (!Ember.isEmpty(files)) {
        this.sendAction('started');
        uploader.upload(files[0]).then(() => {
          this.sendAction('success');
        }, data => {
          this.sendAction('falied', data);
        });
      }*/
    }
  }
});
