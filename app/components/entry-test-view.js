import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('body', []);
  },
  header: ['Cím', 'Típus', 'Kérdések száma'],
  rowIndecies: ['title', 'languagename', 'questionsNumber'],
  showSettings: false,
  getBody: Ember.computed('model.tests.[]', 'model.tests.@each.title', 'model.tests.@each.questions.[]', function() {
    var body = [];
    this.get('model.tests').map(
      x => {
        body.push({
          id: x.get('id'),
          title: x.get('title'),
          questionsNumber: x.get('questions.length'),
          languagename: x.get('language.name'),
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
    delete: function(entry) {
      entry.test.destroyRecord();
      return false;
    }
  }
});
