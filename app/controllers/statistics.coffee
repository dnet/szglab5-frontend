`import Ember from 'ember'`

StatisticsController = Ember.Controller.extend
    header1: ['Hiany', 'Darab'],
    header2: ['Hiany', 'Darab', 'Feladattipus']

    body1: [
      ['Teszt Nev1', '9'],
      ['Teszt Nev2', '14'],
      ['Teszt Nev3', '3'],
      ['Teszt Nev4', '6'],
      ['Teszt Nev5', '5']
    ]

    body2: [
      ['Teszt Nev1', '11', '22-AUTO'],
      ['Teszt Nev2', '2', '23-TOZSDE'],
      ['Teszt Nev3', '7', '24-REPULO'],
      ['Teszt Nev4', '4', '25-HALLG']
    ]

`export default StatisticsController`
