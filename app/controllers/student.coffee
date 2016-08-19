`import Ember from 'ember'`

StudentController = Ember.Controller.extend
    menu: Ember.computed ->
      menuArray = {}
      for lab of @get('model.results')
          keystring = 'model.results.' + lab + '.description'
          menuArray[lab] = @get(keystring)
      menuArray

    labKey: ""

    actions:
      goToLab: (key) ->
        @set 'labKey', key
        false
      selectCommit: (newcommit) ->
        console.log "Todo save new commit"
        false

`export default StudentController`
