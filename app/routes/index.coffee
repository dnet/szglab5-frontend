`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  beforeModel: ->
    # TODO get model first!
    # page 127 in book
    @transitionTo('student')


`export default IndexRoute`
