`import Ember from 'ember'`

MenuHelperMixin = Ember.Mixin.create
  studentMenu: [
    {
      key: 'student'
      value: 'Hallgató'
    }
  ]

  adminMenu: [
    {
      key: 'statistics',
      value:"Statisztikák"
    },
    {
      key: 'directory',
      value:"Felhasználók"
    }
  ]

  demonstratorMenu: []
  evaluatorMenu: []

`export default MenuHelperMixin`
