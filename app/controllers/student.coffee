`import Ember from 'ember'`

StudentController = Ember.Controller.extend

    labKey: Ember.computed.alias 'model.currentLab'

    labKeys: Ember.computed 'model.results', ->
      keys = []
      for lab of @get 'model.results'
        descriptionString = 'model.results.' + lab + '.description'
        description =  @get descriptionString
        keys.push {key: lab, description: description}
      keys

    actions:
      goToLab: (key) ->
        @set 'labKey', key
        false
      selectCommit: (newcommit) ->
        console.log "Todo save new commit"
        false

`export default StudentController`
