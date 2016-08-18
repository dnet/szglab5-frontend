`import Ember from 'ember'`

DirectoryController = Ember.Controller.extend
    header: ['ID', 'Nev', 'Login', 'Neptun', 'E-mail']

    body: [
        ['12', 'Nev1', 'Login1', 'Neptun1', 'E-teszt@teszt.hu'],
        ['23', 'Nev2', 'Login2', 'Neptun2', 'E-teszt@teszt.hu'],
        ['45', 'Nev3', 'Login3', '', 'E-teszt@teszt.hu'],
        ['63', 'Nev4', 'Login4', '', 'E-teszt@teszt.hu'],
        ['4674', 'Nev5', 'Login5', 'Neptun14', 'teszt@teszt.hu'],
        ['14564', 'Nev6', 'Login6', 'Neptun11', 'teszt@teszt.hu']
    ]

    userDetails: {}

    # showTable: false
    showTable: true
    showPopUp: false
    actions:
        showUserDetails: (user) ->
            @set 'userDetails', user
            @toggleProperty('showPopUp')
            false

        destroyUserDetails: ->
            @set 'userDetails', {}
            @toggleProperty('showPopUp')
            false

        showTable: ->
            # @set 'showTable', true
            @toggleProperty('showTable')
            false

`export default DirectoryController`
