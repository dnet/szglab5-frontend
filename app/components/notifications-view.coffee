`import Ember from 'ember'`

NotificationsViewComponent = Ember.Component.extend
  header: ['Date','Sender', 'Title', 'Deadline','Where','Message']

  body: [
    ['2016-11-23','User1', 'Title1', '2016-11-27','A','Message1'],
    ['2016-11-22','User3', 'Title2', '2016-12-13','AS','Message2'],
    ['2016-11-24','User2342', 'Title3', '2016-12-23','ASD','Message3']
  ]

  showSettings: false
  actions:
    openSettings: (notif) ->
      notification = {}
      notification.date=notif[0]
      notification.user=notif[1]
      notification.title=notif[2]
      notification.deadline=notif[3]
      notification.where=notif[4]
      notification.message=notif[5]
      @set 'notification', notification
      @toggleProperty('showSettings')
      false

    closeSettings: ->
      @set 'notification', {}
      @toggleProperty('showSettings')
      false

`export default NotificationsViewComponent`
