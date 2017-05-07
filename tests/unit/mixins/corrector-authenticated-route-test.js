import Ember from 'ember';
import CorrectorAuthenticatedRouteMixin from 'szglab5-frontend/mixins/corrector-authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | corrector authenticated route');

// Replace this with your real tests.
test('it works', function(assert) {
  let CorrectorAuthenticatedRouteObject = Ember.Object.extend(CorrectorAuthenticatedRouteMixin);
  let subject = CorrectorAuthenticatedRouteObject.create();
  assert.ok(subject);
});
