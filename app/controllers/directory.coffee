`import Ember from 'ember'`

DirectoryController = Ember.Controller.extend


    # showTable: false
    showTable: true
    showPopUp: false
    actions:
        showUserDetails: (user) ->
            @set 'model.userDetails', user
            @toggleProperty('showPopUp')
            false

        destroyUserDetails: ->
            @set 'model.userDetails', {}
            @toggleProperty('showPopUp')
            false

        showTable: ->
            # @set 'showTable', true
            @toggleProperty('showTable')
            false

`export default DirectoryController`
