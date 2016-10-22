`import Ember from 'ember'`

MenuHelperMixin = Ember.Mixin.create
  studentMenu: [
    {
      key: 'student'
      value: 'Hallgató',
      icon: 'file'
    }
  ]

  adminMenu: [
    {
      key: 'statistics',
      value:"Statisztikák",
      icon: 'bar-chart'
    },
    {
      key: 'directory',
      value:"Felhasználók"
      icon: 'users'
    },
    {
      key: 'notification',
      value:"Hirdetmények"
      icon: 'bell-o'
    },
    {
      key: 'sql',
      value:"SQL"
      icon: 'terminal'
    }
  ]

  demonstratorMenu: []
  evaluatorMenu: []

`export default MenuHelperMixin`
