import Ember from 'ember';
import AdminAuthenticatedRouteMixin from 'szglab5-frontend/mixins/admin-authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | admin authenticated route');

// Replace this with your real tests.
test('it works', function(assert) {
  let AdminAuthenticatedRouteObject = Ember.Object.extend(AdminAuthenticatedRouteMixin);
  let subject = AdminAuthenticatedRouteObject.create();
  assert.ok(subject);
});
