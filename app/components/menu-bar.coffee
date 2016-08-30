`import Ember from 'ember'`
`import MenuHelper from '../mixins/menu-helper'`

MenuBarComponent = Ember.Component.extend MenuHelper,

    # userRightLabels: ['student', 'evaluator', 'demonstrator', 'admin']
    userRightLabels: ['student', 'admin']

    userRights: ['student']

    actions:
        changeUserRight: (right) ->
            @set 'userRights', [right]


`export default MenuBarComponent`
