import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    shortName: DS.attr('string'),
    Questions: DS.hasMany('question', {inverse: 'Languages'}),
    ExerciseTypes: DS.hasMany('exerciseType', {inverse: 'Languages'}),
    News: DS.hasMany('news', {inverse: 'Languages'})
});
