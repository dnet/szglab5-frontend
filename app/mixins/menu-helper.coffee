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
      key: 'entry-test',
      value:"Beugrók",
      icon: 'pencil'
    },
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

  demonstratorMenu: [
    {
      key: 'entry-test',
      value:"Beugrók",
      icon: 'pencil'
    }
  ]
  evaluatorMenu: []

`export default MenuHelperMixin`
