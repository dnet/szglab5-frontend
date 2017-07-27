import Ember from 'ember';
import config from '../config/environment';

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
  getBody: Ember.computed('exerciseCategory', 'exerciseCategory.Questions.@each.text', 'exerciseCategory.Questions.@each.checked', function () {
    return this.get('exerciseCategory.Questions').map(
      x => ({
        text: x.get('text'),
        language: 'TODO',
        // TODO: language: x.get('language.name'),
        checked: x.get('checked'),
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
    },
    print() {
      const ids = this.get('exerciseCategory.Questions').filter(x => x.get('checked')).map(
        x => x.get('id')
      );
      window.open(config.backendUrl + '/generatePDF?' + Ember.$.param({questionId: ids}), '_blank');
      return false;
    }
  }
});
