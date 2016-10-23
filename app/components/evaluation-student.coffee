`import Ember from 'ember'`

EvaluationStudentComponent = Ember.Component.extend
  actions:
    cancel: ->
      @sendAction('cancel')

`export default EvaluationStudentComponent`
