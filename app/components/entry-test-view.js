import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('body',[]);
    this.get('model.tests').map(
      x=> {
        this.get('body').push([x.get('id'),x.get('title'),x.get('questions').length]);
      }
    );
  },
  header: ['id','Cím', 'Kérdések száma'],
  showSettings: false,
  actions: {
    openSettings: function(entry) {
      var entryTest;
      this.get('model.tests').map(
        x=> {
          if (x.get('id') === entry[0]) {
            entryTest = x;
          }
        }
      );
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
