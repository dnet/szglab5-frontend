`import Ember from 'ember'`

LeftMenuComponent = Ember.Component.extend
  actions:
    goToView: (key) ->
      @sendAction('goToView', key)

`export default LeftMenuComponent`
