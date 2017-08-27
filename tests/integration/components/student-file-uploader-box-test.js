import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-file-uploader-box', 'Integration | Component | student file uploader box', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-file-uploader-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-file-uploader-box}}
      template block text
    {{/student-file-uploader-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
