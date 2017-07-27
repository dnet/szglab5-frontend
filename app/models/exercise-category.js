import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  ExerciseSheets: DS.hasMany('exerciseSheet', {inverse: 'ExerciseCategories'}),
  Questions: DS.hasMany('question', {inverse: 'ExerciseCategories'}),
  // Courses: DS.belongsTo('courses')
});
