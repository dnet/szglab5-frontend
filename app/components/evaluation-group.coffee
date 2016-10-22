`import Ember from 'ember'`

EvaluationGroupComponent = Ember.Component.extend
  header: ['Név','Neptun','Feladat','Határidő', 'Jegy']
  header2: ['Név','Neptun','Feladat','Határidő', 'Javító', 'Jegy']
  body1: [
    ['Hallg1','Neptun1','22-AUTO','2016. okt. 8. 16:45', ''],
    ['Hallg2','Neptun2','22-AUTO','2016. okt. 8. 16:45', ''],
    ['Hallg3','Neptun3','22-AUTO','2016. okt. 8. 16:45', ''],
    ['Hallg4','Neptun4','22-AUTO','2016. okt. 8. 16:45', ''],
    ['Hallg5','Neptun5','22-AUTO','2016. okt. 8. 16:45', '']
  ]
  body2: [
    ['Rózsavölgyi Botond István','Neptun6','22-AUTO','2016. okt. 8. 16:45', ''],
    ['José Ignacio Algarín Rodríguez','Neptun7','22-AUTO','2016. okt. 8. 16:45', ''],
  ]
  body3: [
    ['José Ignacio Algarín Rodríguez','Neptun8','22-AUTO','2016. okt. 8. 16:45', '4'],
    ['Győri-Molnár Bence Soma','Neptun9','22-AUTO','2016. okt. 8. 16:45', '5'],
  ]
  body4: [
    ['Zseleznov Jaroszlav Jurjevics','Neptun10','22-AUTO','2016. okt. 8. 16:45', 'Teacher1', '4'],
    ['Schmelhaus Norbert László','Neptun11','22-AUTO','2016. okt. 8. 16:45', 'Teacher1', '5'],
  ]


  actions:
    evaluateStudent: (student)->
      @sendAction('evaluateStudent', student)


`export default EvaluationGroupComponent`
