`import Ember from 'ember'`

DirectoryController = Ember.Controller.extend


    # showTable: false
    showTable: true
    showSettings: false
    actions:
        openSettings: (user) ->
            @set 'model.userDetails', user
            @toggleProperty('showSettings')
            false

        closeSettings: ->
            @set 'model.userDetails', {}
            @toggleProperty('showSettings')
            false

        showTable: ->
            @toggleProperty('showTable')
            false

`export default DirectoryController`
