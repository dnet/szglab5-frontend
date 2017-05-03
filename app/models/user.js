import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  loginName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  sshPublicKey: DS.attr('string'),
  neptun: DS.attr('string'),
  university: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  StudentRegistrations: DS.hasMany('studentRegistration', {inverse: 'UserId'}),
  Deliverables: DS.hasMany('deliverable', {inverse: 'Users'})
});
