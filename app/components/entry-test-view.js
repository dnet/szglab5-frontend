import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  exerciseCategory: null,
  question: null,
  init() {
    this._super(...arguments);
    this.set('body', []);
  },
  header: ['Text', 'Language'],
  rowIndecies: ['text', 'language'],
  showSettings: false,
  getBody: Ember.computed('exerciseCategory', 'exerciseCategory.Questions.@each.text', function () {
    return this.get('exerciseCategory.Questions').map(
      x => ({
        text: x.get('text'),
        language: 'TODO',
        // TODO: language: x.get('language.name'),
        meta: x
      })
    );
  }),
  actions: {
    openSettings(question) {
      var editQuestion = question.meta;
      if (editQuestion) {
        this.set('question', editQuestion);
      }
      return false;
    },
    closeSettings() {
      this.get('question').rollbackAttributes();
      this.set('question', null);
      return false;
    },
    delete(question) {
      question.meta.destroyRecord();
      return false;
    },
    newQuestion() {
      this.set('question', this.get('store').createRecord('question', {
        ExerciseCategories: this.get('exerciseCategory'),
        text: ''
      }));
      return false;
    }
  }
});
