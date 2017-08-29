import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  ExerciseSheets: DS.hasMany('exerciseSheet', {inverse: 'ExerciseCategory'}),
  EventTemplates: DS.hasMany('eventTemplate', {inverse: 'ExerciseCategory'}),
  Questions: DS.hasMany('question', {inverse: 'ExerciseCategory'}),
  // Courses: DS.belongsTo('courses')
});
