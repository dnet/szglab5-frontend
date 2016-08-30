`import Ember from 'ember'`

StudentController = Ember.Controller.extend

    labKey: Ember.computed.alias 'model.currentLab'

    actions:
      goToLab: (key) ->
        @set 'labKey', key
        false
      selectCommit: (newcommit) ->
        console.log "Todo save new commit"
        false

`export default StudentController`
