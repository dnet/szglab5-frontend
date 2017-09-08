import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
  deadline: DS.attr('date'),
  lastSubmittedDate: DS.attr('date'),
  grade: DS.attr('number'),
  grading: DS.attr('boolean'),
  comment: DS.attr('string'),
  finalized: DS.attr('boolean'),
  imsc: DS.attr('number'),
  url: DS.attr('string'),
  commit: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  uploaded: DS.attr('boolean'),
  Event: DS.belongsTo('event', { inverse: 'Deliverables' }),
  DeliverableTemplate: DS.belongsTo('deliverableTemplate', { async: false, inverse: 'Deliverables' }),
  Corrector: DS.belongsTo('user', { inverse: 'Deliverables' }),
  Student: DS.belongsTo('user', { async: false }),
  isOver: Ember.computed('deadline', function () {
    return (this.get('deadline') - (new Date())) < 0;
  }),
  isDelayed: Ember.computed('deadline', 'uploaded', function () {
    return !(this.get('lastSubmittedDate') &&
      ((this.get('deadline') - this.get('lastSubmittedDate')) > 0));
  }),
  downloadLink: Ember.computed('id', function() {
    return `${config.backendUrl}/deliverables/${this.get('id')}/download`;
  }),
  CorrectorName: Ember.computed('Corrector', 'Corrector.name', function() {
    return this.get('Corrector').then(corrector => {
      return corrector.get('displayName');
    });
  }),
  commits: ['commit1', 'commit4']
});
