import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.get('store')
    if (!(this.get('entryTest'))) {
      this.set('entryTest', {
        questions:[]
      });
    }
    if (!(this.get('entryTest').questions)) {
      this.set('entryTest.questions',[]);
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
    selectLab: function (lab) {
      this.set('selectedLab', lab);
      return false;
    },
    addQuestion: function () {
      console.log(this.get('entryTest'));
      this.get('entryTest.questions').pushObject({text:""});
      return false;
    },
    saveSettings: function () {
      return false;
    },
    closeSettings: function () {
      return this.sendAction('closeSettings');
    }
  }
});
