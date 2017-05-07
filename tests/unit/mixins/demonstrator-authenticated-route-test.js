import Ember from 'ember';
import DemonstratorAuthenticatedRouteMixin from 'szglab5-frontend/mixins/demonstrator-authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | demonstrator authenticated route');

// Replace this with your real tests.
test('it works', function(assert) {
  let DemonstratorAuthenticatedRouteObject = Ember.Object.extend(DemonstratorAuthenticatedRouteMixin);
  let subject = DemonstratorAuthenticatedRouteObject.create();
  assert.ok(subject);
});
