import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demonstrator-group', 'Integration | Component | demonstrator group', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demonstrator-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demonstrator-group}}
      template block text
    {{/demonstrator-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
