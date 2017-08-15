import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-laboratory-upload', 'Integration | Component | student laboratory upload', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-laboratory-upload}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-laboratory-upload}}
      template block text
    {{/student-laboratory-upload}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
