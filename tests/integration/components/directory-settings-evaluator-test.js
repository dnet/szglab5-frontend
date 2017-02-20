import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('directory-settings-evaluator', 'Integration | Component | directory settings evaluator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{directory-settings-evaluator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#directory-settings-evaluator}}
      template block text
    {{/directory-settings-evaluator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
