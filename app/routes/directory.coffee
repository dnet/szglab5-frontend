`import Ember from 'ember'`

DirectoryRoute = Ember.Route.extend
  model: ->
    return {
      header: ['ID', 'Nev', 'Login', 'Neptun', 'E-mail']

      body: [
          ['1', 'Nev1', 'Login1', 'Neptun1', 'E-teszt@teszt.hu'],
          ['2', 'Nev2', 'Login2', 'Neptun2', 'E-teszt@teszt.hu'],
          ['3', 'Nev3', 'Login3', '', 'E-teszt@teszt.hu'],
          ['63', 'Nev4', 'Login4', '', 'E-teszt@teszt.hu'],
          ['4674', 'Nev5', 'Login5', 'Neptun14', 'teszt@teszt.hu'],
          ['14564', 'Nev6', 'Login6', 'Neptun11', 'teszt@teszt.hu']
      ]

      userDetails: {}
    }

`export default DirectoryRoute`
