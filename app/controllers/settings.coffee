`import Ember from 'ember'`

SettingsController = Ember.Controller.extend
    mailList: true
    notification: false

    actions:
        goToView: (key) ->
          @set 'currentView', key
          false
        toggleMailList: ->
            @toggleProperty('mailList')
            false

        toggleNotifications: ->
            @toggleProperty('notification')
            false



`export default SettingsController`
