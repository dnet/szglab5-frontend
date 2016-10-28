`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'left-menu', 'Integration | Component | left menu', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{left-menu}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#left-menu}}
      template block text
    {{/left-menu}}
  """

  assert.equal @$().text().trim(), 'template block text'
