import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['student-registration'],
  semesterName: Ember.computed(function() {
    return this.get('StudentRegistration.Semester').then(semester => {
      return `${semester.get('academicyear')}/${semester.get('academicterm')}`;
    });
  })
});
