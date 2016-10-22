`import Ember from 'ember'`

NotificationsViewComponent = Ember.Component.extend
  header: ['Date','Sender', 'Title', 'Deadline','Where','Message']

  body: [
    ['2016. okt. 15.','User1', 'Title1', '2017. jan. 1.','A','Message1'],
    ['2016. okt. 17.','User3', 'Title2', '2017. jan. 1.','AS','Message2'],
    ['2016. okt. 20.','User2342', 'Title3', '2017. jan. 1.','ASD','Message3']
  ]

`export default NotificationsViewComponent`
