`import Ember from 'ember'`
`import MenuHelper from '../mixins/menu-helper'`

MenuBarComponent = Ember.Component.extend MenuHelper,

  userRightLabels: [
    {
      value: 'Admin',
      key: 'admin'
    },
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
    }
  ]

  currentRight: 'admin'

  userRights: ['admin', 'student']

  actions:
    changeUserRight: (right) ->
      @set 'currentRight', right
      # @set 'userRights', [right]


`export default MenuBarComponent`
