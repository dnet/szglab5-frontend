import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  language: DS.attr('string'),
  StudentRegistrations: DS.hasMany('studentRegistration', {inverse: 'StudentGroup'}),
  Appointments: DS.hasMany('appointment', {inverse: 'StudentGroups'}),
  User: DS.belongsTo('user', {inverse: 'StudentGroup'}),
  Semester: DS.belongsTo('semester', {inverse: 'StudentGroups'}),
});
