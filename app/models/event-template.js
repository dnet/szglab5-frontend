import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  type: DS.attr('string'),
  seqNumber: DS.attr('number'),
  ExerciseCategory: DS.belongsTo('exerciseCategory', { async: false, inverse: 'EventTemplates' }),
  DeliverableTemplates: DS.hasMany('deliverableTemplate', { async: false, inverse: 'EventTemplate' }),
  Events: DS.hasMany('event', { inverse: 'EventTemplate' }),
  name: Ember.computed('type', 'seqNumber', 'ExerciseCategory.type', function () {
    return `${this.get('seqNumber')}. ${this.get('ExerciseCategory.type')} ${this.get('type')}`;
  })
});
