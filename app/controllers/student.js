import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.results', function() {
    this.get('model.StudentRegistrations').then((srs) => {
      this.set('StudentRegistrations', srs);
      var sr;
      this.get('model.StudentRegistrations').forEach(function(element) {
        console.log(element);
      }, this);
    });
    var description, descriptionString, keys, lab;
    keys = [];
    for (lab in this.get('model.results')) {
      descriptionString = 'model.results.' + lab + '.description';
      description = this.get(descriptionString);
      keys.push({
        key: lab,
        description: description
      });
    }
    return keys;
  }),
  actions: {
    goToView: function(key) {
      this.set('currentView', key);
      return false;
    },
    selectCommit: function(newcommit) {
      console.log("Todo save new commit");
      return false;
    }
  }
});
