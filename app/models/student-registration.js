import DS from 'ember-data';

export default DS.Model.extend({
  neptunSubjectCode: DS.attr('string'),
  neptunCourseCode: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  Events: DS.hasMany('event', {inverse: 'StudentRegistrations'}),
  UserId: DS.belongsTo('user', {inverse: 'StudentRegistrations'})
});
