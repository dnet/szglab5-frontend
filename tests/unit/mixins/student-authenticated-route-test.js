import Ember from 'ember';
import StudentAuthenticatedRouteMixin from 'szglab5-frontend/mixins/student-authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | student authenticated route');

// Replace this with your real tests.
test('it works', function(assert) {
  let StudentAuthenticatedRouteObject = Ember.Object.extend(StudentAuthenticatedRouteMixin);
  let subject = StudentAuthenticatedRouteObject.create();
  assert.ok(subject);
});
