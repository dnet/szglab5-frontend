import Ember from 'ember';
import MenuHelperMixin from 'szglab5-frontend/mixins/menu-helper';
import { module, test } from 'qunit';

module('Unit | Mixin | menu helper');

// Replace this with your real tests.
test('it works', function(assert) {
  let MenuHelperObject = Ember.Object.extend(MenuHelperMixin);
  let subject = MenuHelperObject.create();
  assert.ok(subject);
});
