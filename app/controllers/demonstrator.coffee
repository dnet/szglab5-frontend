`import Ember from 'ember'`

DemonstratorController = Ember.Controller.extend

    currentView: 'lab1'
    evaluate: ''

    didReceiveAttrs: ->
      @set 'evaluate', ''
      @set 'currentView', 'lab1'

    subMenu: [
      {
        key: 'lab1',
        description: '1. Labor'
      },
      {
        key: 'lab2',
        description: '2. Labor'
      },
      {
        key: 'lab3',
        description: '3. Labor'
      },
      {
        key: 'lab4',
        description: '4. Labor'
      },
      {
        key: 'lab5',
        description: '5. Labor'
      }
      ]

    actions:
      goToView: (key) ->
        @set 'evaluate', ''
        @set 'currentView', key
        false
      evaluateStudent: (student) ->
        @set 'currentView', ''
        @set 'evaluate', 'student'
        false

`export default DemonstratorController`
