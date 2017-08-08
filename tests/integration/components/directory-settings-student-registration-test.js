import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('directory-settings-student-registration', 'Integration | Component | directory settings student registration', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{directory-settings-student-registration}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#directory-settings-student-registration}}
      template block text
    {{/directory-settings-student-registration}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
