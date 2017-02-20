import Ember from 'ember';

export default Ember.Component.extend({
  header: ['Lab', 'Text'],
  body: [
    ['Oracle', 'Text2asdasd'],
    ['Java', 'asdfjaosdhflakjsdfa']
  ],
  showSettings: false,
  actions: {
    openSettings: function(entry) {
      var entryTest;
      entryTest = {};
      entryTest.lab = entry[0];
      entryTest.text = entry[1];
      this.set('entryTest', entryTest);
      this.toggleProperty('showSettings');
      return false;
    },
    closeSettings: function() {
      this.set('entryTest', {});
      this.toggleProperty('showSettings');
      return false;
    }
  }
});
