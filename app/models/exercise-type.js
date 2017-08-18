import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  shortName: DS.attr('string'),
  language: DS.attr('string'),
  ExerciseSheets: DS.hasMany('exerciseSheet', {inverse: 'ExerciseType'}),
  Users: DS.hasMany('user', {inverse: 'ExerciseTypes'}),
  Guru: DS.belongsTo('user'),
  ExerciseCategoriesSelect: Ember.computed('ExerciseSheets.[]', function() {
    return this.get('ExerciseSheets').then(exerciseSheets => {
      return exerciseSheets.map(exerciseSheet => ({
        key: exerciseSheet,
        value: exerciseSheet.get('ExerciseCategory.type')
      }));
    });
  }),
});
