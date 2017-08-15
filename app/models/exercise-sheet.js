import DS from 'ember-data';

export default DS.Model.extend({
  Events: DS.hasMany('event', { inverse: 'ExerciseSheet' }),
  ExerciseCategory: DS.belongsTo('exerciseCategory', { async: false, inverse: 'ExerciseSheet' }),
  ExerciseTypes: DS.belongsTo('exerciseType', { inverse: 'ExerciseSheet' })
});
