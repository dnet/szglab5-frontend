import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      header1: ['Hiány', 'Darab'],
      header2: ['Hiány', 'Darab', 'Feladattípus'],
      body1: [
        ['Teszt Név1', '9'],
        ['Teszt Név2', '14'],
        ['Teszt Név3', '3'],
        ['Teszt Név4', '6'],
        ['Teszt Név5', '5']
      ],
      body2: [
        ['Teszt Név1', '11', '22-AUTO'],
        ['Teszt Név2', '2', '23-TOZSDE'],
        ['Teszt Név3', '7', '24-REPULO'],
        ['Teszt Név4', '4', '25-HALLG']
      ]
    };
  }
});
