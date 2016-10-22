`import Ember from 'ember'`

NotificationsCreatorComponent = Ember.Component.extend
  admins: false
  students: true
  demonstators: false
  evaluators: false

  didReceiveAttrs: ->
    @set 'minDate', new Date(Date.now())
  actions:
    toggleAdmins: ->
      @toggleProperty('admins')
      false
    toggleStudents: ->
      @toggleProperty('students')
      false
    toggleDemonstrators: ->
      @toggleProperty('demonstators')
      false
    toggleEvaluators: ->
      @toggleProperty('evaluators')
      false

`export default NotificationsCreatorComponent`
