import Ember from 'ember';

export default Ember.Component.extend({
  header: ['Type', 'Date', 'Room', 'Teacher', 'Number of students'],
  body: [
    ['Oracle', '2016-10-23 8:45', 'Room 1', 'Teacher 1', '17'],
    ['SQL', '2016-10-23 8:45', 'Room 2', 'Teacher 3', '16'],
    ['SQL', '2016-10-23 8:45', 'Room 5', 'Teacher 34', '16'],
    ['Java', '2016-10-23 8:45', 'Room 3', 'Teacher 4', '15'],
    ['SOA', '2016-10-23 8:45', 'Room 4', 'Teacher 2', '14']
  ],
  showSettings: false,
  actions: {
    openSettings: function(lab) {
      this.set('lab', lab);
      this.toggleProperty('showSettings');
      return false;
    },
    closeSettings: function() {
      this.set('lab', {});
      this.toggleProperty('showSettings');
      return false;
    }
  }
});
