`import Ember from 'ember'`

StatisticsController = Ember.Controller.extend
  actions:
    goToView: (key) ->
      @set 'currentView', key
      false


`export default StatisticsController`
