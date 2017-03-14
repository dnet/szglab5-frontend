import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (!(this.get('entryTest'))) {
      this.set('entryTest', this.get('store').createRecord('test', {
        title: ''
      }));
    }
    // TODO: Set isNotEditing (How to iterate thru hasmany array?)
    var questions = this.get('entryTest.questions');
    for (var i = 0; i < questions.length; i++) {
      questions.get(i).set('isNotEditing', true);
    }
  },
  selectedLab: Ember.computed(function () {
    var i, lab, labItem, len, ref;
    if (this.get('entryTest')) {
      lab = this.get('entryTest.lab');
      ref = this.get('labs');
      for (i = 0, len = ref.length; i < len; i++) {
        labItem = ref[i];
        if (labItem.description === lab) {
          return labItem;
        }
      }
    }
    return {
      key: 'A1',
      description: 'Oracle'
    };
  }),
  labs: [{
    key: 'A1',
    description: 'Oracle'
  }, {
    key: 'A2',
    description: 'SQL'
  }, {
    key: 'A3',
    description: 'Java'
  }, {
    key: 'A4',
    description: 'SOA'
  }, {
    key: 'A5',
    description: 'XSQL'
  }],
  actions: {
    selectLab(lab) {
      this.set('selectedLab', lab);
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
      // TODO: save question
      question.save().then(
        () =>
        { question.set('isNotEditing', true); }
      );
      return false;
    },
    removeQuestion(question) {
      // TODO: remove question
      return false;
    },
    saveSettings() {
      // TODO: save model
      this.get('entryTest').save().then(function () {
        if (this.get('goToView')) {
          return this.sendAction('goToView', 'list');
        }
        else {
          return this.sendAction('closeSettings');
        }
      });
      return false;
    },
    closeSettings() {
      if (this.get('entryTest').get('hasDirtyAttributes')) {
        this.get('entryTest').rollbackAttributes();
      }
      if (!this.get('edit')) {
        // TODO: How to rollback creation of entrytest
        this.get('entryTest').remove();
      }
      return this.sendAction('closeSettings');
    }
  }
});
