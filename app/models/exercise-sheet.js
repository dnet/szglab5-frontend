import DS from 'ember-data';

export default DS.Model.extend({
  Events: DS.hasMany('event', { inverse: 'ExerciseSheet' }),
  ExerciseCategory: DS.belongsTo('exerciseCategory', { async: false, inverse: 'ExerciseSheets' }),
  ExerciseTypes: DS.belongsTo('exerciseType', { inverse: 'ExerciseSheets' })
});
