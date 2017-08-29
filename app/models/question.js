import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    checked: DS.attr('boolean'),
    ExerciseCategory: DS.belongsTo('exerciseCategory', {inverse: 'Questions'}),
    Language: DS.belongsTo('language', {inverse: 'Questions'})
});
