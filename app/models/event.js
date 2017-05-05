import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.Model.extend({
  date: DS.attr('date'),
  location: DS.attr('string'),
  attempt: DS.attr('number'),
  comment: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  Deliverables: DS.hasMany('deliverable', {inverse: 'Events'}),
  StudentRegistrations: DS.belongsTo('studentRegistration', {inverse: 'Events'}),
  Demonstrator: DS.belongsTo('user')
});
