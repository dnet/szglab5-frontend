import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('body', []);
  },
  header: ['Cím', 'Kérdések száma'],
  rowIndecies: ['title', 'questionsNumber'],
  showSettings: false,
  getBody: Ember.computed('model.tests.[]', 'model.tests.@each.title', 'model.tests.@each.questions.[]', function() {
    var body = [];
    this.get('model.tests').map(
      x => {
        body.push({
          id: x.get('id'),
          title: x.get('title'),
          questionsNumber: x.get('questions.length'),
          test: x
        });
      }
    );
    return body;
  }),
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
    },
    delete: function(test) {
      var testsArray = this.get('model.tests').filterBy('id', test.id);
      // this array should contain only one element, because we're filtering on ID
      testsArray[0].destroyRecord();
      return false;
    }
  }
});
