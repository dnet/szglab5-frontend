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
        description: 'Oracle labor'
      },
      {
        key: 'lab2',
        description: 'SQL labor'
      },
      {
        key: 'lab3',
        description: 'Java labor'
      },
      {
        key: 'lab4',
        description: 'XSQL labor'
      },
      {
        key: 'lab5',
        description: 'SOA labor'
      }
    ]

  actions:
    goToView: (key) ->
      @set 'evaluate', ''
      @set 'currentView', key
      false
      
    cancel: () ->
      @set 'evaluate', ''
      false
      
    evaluateStudent: (student) ->
      @set 'evaluate', 'student'
      false


`export default DemonstratorController`
