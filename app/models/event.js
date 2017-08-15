import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  location: DS.attr('string'),
  attempt: DS.attr('number'),
  comment: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  Deliverables: DS.hasMany('deliverable', { async: false, inverse: 'Events' }),
  ExerciseSheet: DS.belongsTo('exerciseSheet', { async: false, inverse: 'Events' }),
  StudentRegistrations: DS.belongsTo('studentRegistration', { inverse: 'Events' }),
  Demonstrator: DS.belongsTo('user', { async: false, inverse: 'Event' })
});
