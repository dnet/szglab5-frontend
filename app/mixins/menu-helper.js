import Ember from 'ember';

export default Ember.Mixin.create({
  menu: {
    STUDENT: [
      {
        key: 'student',
        value: 'Laborok',
        icon: 'graduation-cap'
      },
      {
        key: 'news',
        value: 'Hírek',
        icon: 'bell-o'
      }
    ],
    ADMIN: [
      {
        key: 'statistics',
        value: "Statisztikák",
        icon: 'bar-chart'
      }, {
        key: 'directory',
        value: "Felhasználók",
        icon: 'users'
      }, {
        key: 'notification',
        value: "Hirdetmények",
        icon: 'bell-o'
      }, {
        key: 'dashboard',
        value: "Mérések",
        icon: 'dashboard'
      }, {
        key: 'entry-test',
        value: "Beugrók",
        icon: 'pencil'
      }, {
        key: 'sql',
        value: "SQL",
        icon: 'terminal'
      }
    ],
    DEMONSTRATOR: [
      {
        key: 'demonstrator',
        value: "Demonstrátor",
        icon: 'tasks'
      }, {
        key: 'entry-test',
        value: "Beugrók",
        icon: 'pencil'
      }
    ],
    CORRECTOR: [
      {
        key: 'evaluator',
        value: "Javító",
        icon: 'book'
      }
    ]
  }
});
