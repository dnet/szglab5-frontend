`import Ember from 'ember'`

SqlController = Ember.Controller.extend
  actions:
    goToView: (key) ->
      @set 'currentView', key
      false

`export default SqlController`
