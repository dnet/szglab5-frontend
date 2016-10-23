`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'directory-settings-student', 'Integration | Component | directory settings student', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{directory-settings-student}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#directory-settings-student}}
      template block text
    {{/directory-settings-student}}
  """

  assert.equal @$().text().trim(), 'template block text'
