`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  beforeModel: ->
    # TODO get model first!
    @transitionTo('student')


`export default IndexRoute`
