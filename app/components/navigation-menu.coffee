`import Ember from 'ember'`

NavigationMenuComponent = Ember.Component.extend
  actions:
    goToLab: (key) ->
      @sendAction('goToLab', key)

`export default NavigationMenuComponent`
