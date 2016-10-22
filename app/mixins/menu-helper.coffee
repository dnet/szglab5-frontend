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
      key: 'entry-test',
      value:"Beugrók",
      icon: 'pencil'
    },
    {
      key: 'sql',
      value:"SQL"
      icon: 'terminal'
    }
  ]

  demonstratorMenu: [
    {
      key: 'demonstrator',
      value:"Demonstrátor",
      icon: 'graduation-cap'
    },
    {
      key: 'entry-test',
      value:"Beugrók",
      icon: 'pencil'
    }
  ]
  evaluatorMenu: [
    {
      key: 'evaluator',
      value:"Javító",
      icon: 'book'
    }
  ]

`export default MenuHelperMixin`
