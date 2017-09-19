import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
  deadline: DS.attr('date'),
  lastSubmittedDate: DS.attr('date'),
  grade: DS.attr('number'),
  grading: DS.attr('boolean'),
  imsc: DS.attr('number'),
  comment: DS.attr('string'),
  finalized: DS.attr('boolean'),
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
  isUploadable: Ember.computed(function () {
    return !this.get('isOver') || // this deadline is not over OR
      (this.get('isOver') && // the deadline is over, 
        (this.get('lastSubmittedDate') < this.get('deadline')) && // but the last upload time is before the deadline and
        !this.get('uploaded') // hasn't been uploaded yet
      );
  }),
  isDelayed: Ember.computed('deadline', 'uploaded', function () {
    return !(this.get('lastSubmittedDate') &&
      ((this.get('deadline') - this.get('lastSubmittedDate')) > 0));
  }),
  downloadLink: Ember.computed('id', function () {
    return `${config.backendUrl}/deliverables/${this.get('id')}/download`;
  }),
  uploadUrl: Ember.computed('id', function () {
    return `${config.backendUrl}/deliverables/${this.get('id')}/upload`;
  }),
  CorrectorName: Ember.computed('Corrector', 'Corrector.name', function () {
    return this.get('Corrector').then(corrector => {
      return corrector.get('displayName');
    });
  }),
  commits: ['commit1', 'commit4']
});
