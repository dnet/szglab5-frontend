import Ember from 'ember';
import ErrorRouteMixin from 'szglab5-frontend/mixins/error-route';
import { module, test } from 'qunit';

module('Unit | Mixin | error route');

// Replace this with your real tests.
test('it works', function(assert) {
  let ErrorRouteObject = Ember.Object.extend(ErrorRouteMixin);
  let subject = ErrorRouteObject.create();
  assert.ok(subject);
});
