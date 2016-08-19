`import Ember from 'ember'`

DirectoryRoute = Ember.Route.extend
  model: ->
    return {
      header: ['ID', 'Név', 'Login', 'Neptun', 'E-mail']

      body: [
          ['1', 'Név1', 'Login1', 'Neptun1', 'E-teszt@teszt.hu'],
          ['2', 'Név2', 'Login2', 'Neptun2', 'E-teszt@teszt.hu'],
          ['3', 'Név3', 'Login3', '', 'E-teszt@teszt.hu'],
          ['63', 'Név4', 'Login4', '', 'E-teszt@teszt.hu'],
          ['4674', 'Név5', 'Login5', 'Neptun14', 'teszt@teszt.hu'],
          ['14564', 'Név6', 'Login6', 'Neptun11', 'teszt@teszt.hu']
      ]

      userDetails: {}

      homeworkTypes: {
          type21: { name: '21-KONYV', checked: false},
          type22: { name: '22-AUTO', checked: false},
          type23: { name: '23-SZORAK', checked: false},
          type24: { name: '24-GYART', checked: false},
          type25: { name: '25-KONF', checked: false},
          type26: { name: '26-SZALL', checked: false},
          type27: { name: '27-HALL ', checked: false},
          type28: { name: '28-REND', checked: false},
          type29: { name: '29-SZAKN', checked: false},
          type30: { name: '30-VASUT', checked: false},
          type30a: { name: '30-VASUT-A', checked: false},
          type31: { name: '31-LEGI1', checked: false},
          type31a: { name: '31-LEGI1-A', checked: false},
          type32: { name: '32-LEGI2', checked: false},
          type32a: { name: '32-LEGI2-A', checked: false},
          type33: { name: '33-VIDEO', checked: false},
          type33a: { name: '33-VIDEO-A', checked: false},
          type34: { name: '34-TOZSDE', checked: false},
          type34a: { name: '34-TOZSDE-A', checked: false},
          type41m: { name: '41-M-LEGI1', checked: false},
          type42m: { name: '42-M-AUTO', checked: false},
          type43m: { name: '43-M-VIDEO', checked: false},
          type44m: { name: '44-M-SZAKN', checked: false},
          type45m: { name: '45-M-KONYV', checked: false},
          type46m: { name: '46-M-VASUT', checked: false},
          type47m: { name: '47-M-KONF', checked: false},
          type48m: { name: '48-M-TOZSD', checked: false}
      }
    }

`export default DirectoryRoute`
