`import Ember from 'ember'`

NotificationsCreatorComponent = Ember.Component.extend
  startingDate: Ember.computed ->
    if @get('notification')
      return @get('notification.date')
    @get('minDate').toISOString().slice(0, 10)

  sender: Ember.computed ->
    if @get('notification')
      return @get('notification.user')
    'Teszt Felhasznalo'

  admins: Ember.computed ->
    if @get('notification')
      return @get('notification.where').indexOf('A') >= 0
    false
  students: Ember.computed ->
    if @get('notification')
      return @get('notification.where').indexOf('S') >= 0
    false
  demonstators: Ember.computed ->
    if @get('notification')
      return @get('notification.where').indexOf('D') >= 0
    false
  evaluators: Ember.computed ->
    if @get('notification')
      return @get('notification.where').indexOf('E') >= 0
    false
  onLogin: Ember.computed ->
    if @get('notification')
      return @get('notification.where').indexOf('L') >= 0
    false

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
    toggleLogin: ->
      @toggleProperty('onLogin')
      false

    closeSettings: ->
      @sendAction('closeSettings')

`export default NotificationsCreatorComponent`
