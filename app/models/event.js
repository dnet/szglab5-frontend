import DS from 'ember-data';
import Ember from 'ember';
import RSVP from 'rsvp';

export default DS.Model.extend({
  date: DS.attr('date'),
  location: DS.attr('string'),
  attempt: DS.attr('number'),
  comment: DS.attr('string'),
  createdAt: DS.attr('date'),
  finalized: DS.attr('boolean'),
  grade: DS.attr('number'),
  updatedAt: DS.attr('date'),
  Deliverables: DS.hasMany('deliverable', { async: false, inverse: 'Event' }),
  ExerciseSheet: DS.belongsTo('exerciseSheet', { async: false, inverse: 'Events' }),
  StudentRegistration: DS.belongsTo('studentRegistration', { inverse: 'Events' }),
  EventTemplate: DS.belongsTo('eventTemplate', { async: false, inverse: 'Events' }),
  Demonstrator: DS.belongsTo('user', { async: false, inverse: 'Event' }),
  User: Ember.computed('StudentRegistration', 'StudentRegistration.User', function() {
    return new RSVP.Promise((resolve,reject) => {
      this.get('StudentRegistration').then(studentRegistration => {
        studentRegistration.get('User').then(user => resolve(user), reject);
      });
    });
  }),
  correctableDeliverables: Ember.computed('Deliverables', 'Deliverables.[]', function() {
    return this.get('Deliverables').filter(x => x.get('DeliverableTemplate.type') === 'FILE');
  })
});
