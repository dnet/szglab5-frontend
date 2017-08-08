import DS from 'ember-data';

export default DS.Model.extend({
  academicyear: DS.attr('string'),
  academicterm: DS.attr('number'),
  description: DS.attr('string'),
  active: DS.attr('boolean'),
  StudentRegistrations: DS.hasMany('studentRegistration', {inverse: 'Semester'}),
  StudentGroups: DS.hasMany('studentGroup', {inverse: 'Semester'}),
});
