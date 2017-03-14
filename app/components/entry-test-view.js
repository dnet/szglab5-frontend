import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init(){
    this._super(...arguments);
    this.set('body',[]);
    this.get('model.tests').map(
      x=> {
        this.get('body').push({
          title:x.get('title'),
          questionsNumber:x.get('questions').length,
          test: x
        });
      }
    );
  },
  header: ['Cím', 'Kérdések száma'],
  rowIndecies: ['title','questionsNumber'],
  showSettings: false,
  actions: {
    openSettings: function(entry) {
      var entryTest = entry.test;
      if (entryTest) {
        this.set('entryTest', entryTest);
        this.toggleProperty('showSettings');
      }
      return false;
    },
    closeSettings: function() {
      this.set('entryTest', {});
      this.toggleProperty('showSettings');
      return false;
    }
  }
});
