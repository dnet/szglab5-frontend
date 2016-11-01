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

  currentRight: {
    value: 'Admin',
    key: 'admin'
  }

  userRights: ['admin', 'student']
  changeUser: (key) ->
    for right in @get('userRightLabels')
      if right.key == key
        set 'currentRight', right
        return


  actions:
    changeUserRight: (right) ->
      @changeUser(right)
      false


`export default MenuBarComponent`
