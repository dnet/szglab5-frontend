`import Ember from 'ember'`

MenuBarComponent = Ember.Component.extend
    studentMenu: {
        student: "Hallgató"
        # logout: "Kijelentkezés"
    }

    adminMenu: {
        statistics: "Statisztikák",
        directory: "Felhasználók"
    }
    demonstratorMenu: {
    }
    evaluatorMenu: {
    }

    # userRightLabels: ['student', 'evaluator', 'demonstrator', 'admin']
    userRightLabels: ['student', 'admin']

    userRights: ['admin']

    actions:
        changeUserRight: (right) ->
            @set 'userRights', [right]


`export default MenuBarComponent`
