import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments);
    if (!(this.get('entryTest'))) {
      this.set('entryTest', this.get('store').createRecord('test', {
        title: ''
      }));
    }
    // TODO: Set isNotEditing (How to iterate thru hasmany array?)
    var questions = this.get('entryTest.questions');
    this.set('entryTest.question', questions.filter((question, index) => {
      question.set('isNotEditing', true);
      return true;
    }))
    /*for (var i = 0; i < questions.length; i++) {
      questions.get(i).set('isNotEditing', true);
    }*/
  },
  selectedLab: Ember.computed(function () {
    if (this.get('entryTest.language')) {
      return this.get('entryTest.language');
    }
  }),
  actions: {
    selectLab(language) {
      this.set('entryTest.language', language);
      return false;
    },
    addQuestion() {
      this.get('entryTest.questions').pushObject(this.get('store').createRecord('question', {
        test: this.get('entryTest'),
        text: ''
      }));
      return false;
    },
    editQuestion(question) {
      question.set('isNotEditing', false);
      return false;
    },
    saveQuestion(question) {
      console.log(question.get('text'));
      question.save().then(
        () =>
        { question.set('isNotEditing', true); }
      );
      return false;
    },
    removeQuestion(question) {
      question.destroyRecord();
      return false;
    },
    saveSettings() {
      var canexit = true;
      // TODO:
      // console.log(this.get('entryTest.questions').length);
      // this.get('entryTest.questions').filter((question, index) => {
      //   if (!Ember.isEmptyObject(question.changedAttributes())) {
      //     console.log(question.changedAttributes());
      //     canexit = false;
      //   }
      // });
      // if (canexit) {
        this.get('entryTest').save().then(() => {
          if (this.get('goToView')) {
            return this.sendAction('goToView', 'list');
          }
          else {
            return this.sendAction('closeSettings');
          }
        });
      // }
      // else {
      //   alert("Nincs minden kerdes meg elmentve. (mentes implementalva lesz)");
      // }
      return false;
    },
    closeSettings() {
      return this.sendAction('closeSettings');
    }
  },
  willDestroyElement() {
    this._super(...arguments);
    this.get('entryTest').rollbackAttributes();
  }
});
