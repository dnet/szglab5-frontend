import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  deadline: DS.attr('date'),
  lastSubmittedDate: DS.attr('date'),
  uploaded: DS.attr('boolean'),
  grade: DS.attr('number'),
  comment: DS.attr('string'),
  url: DS.attr('string'),
  commit: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  Events: DS.hasMany('event', {inverse: 'Deliverables'}),
  DeliverableTemplate: DS.belongsTo('deliverableTemplate', { async: false, inverse: 'Deliverables'}),
  Users: DS.hasMany('deliverableTemplate', {inverse: 'Deliverables'}),
  isOver: Ember.computed('deadline', function() {
    return (this.get('deadline') - (new Date())) < 0;
  }),
  commits: ['commit1', 'commit4']
});
