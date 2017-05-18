import DS from 'ember-data';

export default DS.Model.extend({
  Events: DS.hasMany('event', {inverse: 'Events'}),
  ExerciseCategories: DS.belongsTo('exerciseCategory', {inverse: 'Events'}),
  ExerciseTypes: DS.belongsTo('exerciseType', {inverse: 'Event'})
});
