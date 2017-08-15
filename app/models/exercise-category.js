import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  ExerciseSheet: DS.hasMany('exerciseSheet', {inverse: 'ExerciseCategory'}),
  EventTemplates: DS.hasMany('eventTemplate', {inverse: 'ExerciseCategory'}),
  Questions: DS.hasMany('question', {inverse: 'ExerciseCategories'}),
  // Courses: DS.belongsTo('courses')
});
