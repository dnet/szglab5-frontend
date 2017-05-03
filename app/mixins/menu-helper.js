import Ember from 'ember';

export default Ember.Mixin.create({
  studentMenu: [
    {
      key: 'student',
      value: 'Laborok',
      icon: 'graduation-cap'
    }
  ],
  adminMenu: [
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
  demonstratorMenu: [
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
  evaluatorMenu: [
    {
      key: 'evaluator',
      value: "Javító",
      icon: 'book'
    }
  ]
});
