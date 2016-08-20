`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  model: ->
    return {
      
    }
  afterModel: ->
    # TODO get model first!
    # page 127 in book
    @transitionTo('settings')


`export default IndexRoute`
