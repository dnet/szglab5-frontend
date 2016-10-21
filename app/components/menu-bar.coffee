`import Ember from 'ember'`
`import MenuHelper from '../mixins/menu-helper'`

MenuBarComponent = Ember.Component.extend MenuHelper,

    userRightLabels: ['Hallgató', 'Javító', 'Demonstrátor', 'Admin']
    # userRightLabels: ['student', 'admin']

    currentRight: 'Demonstrátor'

    userRights: ['admin', 'student']

    actions:
        changeUserRight: (right) ->
            @set 'currentRight', right
            # @set 'userRights', [right]


`export default MenuBarComponent`
