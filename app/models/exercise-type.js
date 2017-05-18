import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  shortName: DS.attr('string'),
  language: DS.attr('string'),
  ExerciseSheets: DS.hasMany('exerciseSheet', {inverse: 'ExerciseTypes'}),
  OwnedExerciseId: DS.belongsTo('user')
});
