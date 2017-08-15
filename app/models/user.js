import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date: DS.attr('date'),
  classroom: DS.attr('string'),
  colorTheme: DS.attr('string'),
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  email_official: DS.attr('string'),
  excercises: DS.attr('string'), //TODO: valszeg nem kell
  loginName: DS.attr('string'),
  mobile: DS.attr('string'),
  neptun: DS.attr('string'),
  newpwd: DS.attr('string'),
  oldpwd: DS.attr('string'),
  ownedExerciseID: DS.attr('string'),
  printSupport: DS.attr('string'),
  spec: DS.attr('string'),
  sshPublicKey: DS.attr('string'),
  studentgroup_id: DS.attr('string'),
  subscribedToEmailNotify: DS.attr('boolean'),
  subscribedToMailList: DS.attr('boolean'),
  title: DS.attr('string'),
  university: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  StudentRegistrations: DS.hasMany('studentRegistration', {inverse: 'UserId'}),
  Deliverables: DS.hasMany('deliverable', {inverse: 'Users'}),
  Roles: DS.hasMany('role'),
  Event: DS.hasMany('event', {inverse: 'Demonstrator'}), // TODO: maybe useless
  ExerciseTypes: DS.hasMany('exerciseType', {inverse: 'Users'}),
});
