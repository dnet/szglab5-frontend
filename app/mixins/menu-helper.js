import Ember from 'ember';

export default Ember.Mixin.create({
  menu: {
    STUDENT: [
      {
        key: 'student',
        value: 'Laboratories',
        icon: 'graduation-cap'
      },
      {
        key: 'news',
        value: 'News',
        icon: 'bell-o'
      }
    ],
    ADMIN: [
      {
        key: 'statistics',
        value: "Stats",
        icon: 'bar-chart'
      }, {
        key: 'directory',
        value: "Users",
        icon: 'users'
      }, {
        key: 'notification',
        value: "News",
        icon: 'bell-o'
      }, /*{
        key: 'semester',
        value: "Semesters",
        icon: 'dashboard'
      },*/ {
        key: 'entry-test',
        value: "Entry Questions",
        icon: 'pencil'
      }, /*{
        key: 'event-templates',
        value: "Event Templates",
        icon: 'pencil'
      },*/ {
        key: 'sql',
        value: "SQL",
        icon: 'terminal'
      }
    ],
    DEMONSTRATOR: [
      {
        key: 'demonstrator',
        value: "Demonstrator",
        icon: 'tasks'
      }, {
        key: 'entry-test',
        value: "Entry Questions",
        icon: 'pencil'
      }
    ],
    CORRECTOR: [
      {
        key: 'evaluator',
        value: "Evaluator",
        icon: 'book'
      }
    ]
  }
});
