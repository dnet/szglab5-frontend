import Ember from 'ember';

export default Ember.Component.extend({
  header: ['Név', 'Neptun', 'Feladat', 'Mérés ideje', 'Mérés helye', 'Beugró', 'Jk. jegy', 'Labor jegy'],
  body: [
    ['Hallg1', 'Neptun1', '22-AUTO', '2016. okt. 8. 16:45', 'L', '5', '4', ''],
    ['Hallg2', 'Neptun2', '22-AUTO', '2016. okt. 8. 16:45', 'L', '5', '4', ''],
    ['Hallg3', 'Neptun3', '22-AUTO', '2016. okt. 8. 16:45', 'L', '5', '4', ''],
    ['Hallg4', 'Neptun4', '22-AUTO', '2016. okt. 8. 16:45', 'L', '5', '4', ''],
    ['Hallg5', 'Neptun5', '22-AUTO', '2016. okt. 8. 16:45', 'L', '5', '4', '']
  ],
  actions: {
    evaluateStudent: function(student) {
      return this.sendAction('evaluateStudent', student);
    }
  }
});
