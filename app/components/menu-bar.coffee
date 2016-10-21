`import Ember from 'ember'`
`import MenuHelper from '../mixins/menu-helper'`

MenuBarComponent = Ember.Component.extend MenuHelper,

  userRightLabels: [
    {
      value: 'Hallgató',
      key: 'student'
    },
    {
      value: 'Javító',
      key: 'evaluator'
    },
    {
      value: 'Demonstrátor',
      key: 'demonstrator'
    },
    {
      value: 'Admin',
      key: 'admin'
    }
  ]
  # userRightLabels: ['student', 'admin']

  currentRight: {
    value: 'Admin',
    key: 'admin'
  }

  userRights: ['admin', 'student']

  actions:
    changeUserRight: (right) ->
      @set 'currentRight', right
      # @set 'userRights', [right]


`export default MenuBarComponent`
