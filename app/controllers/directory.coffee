`import Ember from 'ember'`

DirectoryController = Ember.Controller.extend
  showTable: true
  showSettings: false

  actions:
    goToView: (key) ->
      @set 'currentView', key
      false

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
