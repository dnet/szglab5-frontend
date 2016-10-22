`import Ember from 'ember'`

StudentController = Ember.Controller.extend
  currentView: Ember.computed.alias 'model.currentLab'

  subMenu: Ember.computed 'model.results', ->
    keys = []
    for lab of @get 'model.results'
      descriptionString = 'model.results.' + lab + '.description'
      description = @get descriptionString
      keys.push {key: lab, description: description}
    keys

  actions:
    goToView: (key) ->
      @set 'currentView', key
      false
    selectCommit: (newcommit) ->
      console.log "Todo save new commit"
      false

`export default StudentController`
