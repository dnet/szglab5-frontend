import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: '',
  subMenu: Ember.computed('model.results', function() {
    var keys = [];
    this.get('model.StudentRegistrations').then(() => {
      this.get('model.StudentRegistrations').forEach((element, key) => {
        this.get('model.StudentReistrations['+key+'].Events').then((events) => {
          events.forEach((event, eventkey) => {
            keys.push({
              key: this.get('model.StudentReistrations['+key+'].Events['+eventkey+'].id'),
              description: eventkey + '. labor'
            });
          });
        });
      });
    });
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
