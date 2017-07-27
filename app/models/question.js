import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    checked: DS.attr('boolean'),
    ExerciseCategories: DS.belongsTo('exerciseCategory', {inverse: 'Questions'}),
    Languages: DS.belongsTo('language', {inverse: 'Questions'})
});
