`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
    location: config.locationType,
    rootURL: config.rootURL


Router.map ->

  @route 'student'
  @route 'settings'
  @route 'statistics'
  @route 'directory'
  @route 'student-evaluation'
  @route 'evaluator'
  @route 'demonstrator'
  @route 'notification'
  @route 'sql'

`export default Router`
