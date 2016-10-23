`import Ember from 'ember'`

DashboardController = Ember.Controller.extend
  currentView: 'list'

  subMenu: [
      {
        key: 'creator',
        description: 'Létrehozás'
      },
      {
        key: 'list',
        description: 'Lista nézet'
      }
    ]

  actions:
    goToView: (key) ->
      @set 'currentView', key
      false

`export default DashboardController`
