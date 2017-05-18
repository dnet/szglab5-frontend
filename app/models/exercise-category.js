import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  ExerciseSheets: DS.hasMany('exerciseSheet', {inverse: 'ExerciseCategories'}),
  // Courses: DS.belongsTo('courses')
});
