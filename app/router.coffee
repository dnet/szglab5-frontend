`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
    location: config.locationType


Router.map ->

  @route 'student', ->
    @route 'lab'
  @route 'settings'

`export default Router`
