`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'menu-bar', 'Integration | Component | menu bar', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{menu-bar}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#menu-bar}}
      template block text
    {{/menu-bar}}
  """

  assert.equal @$().text().trim(), 'template block text'
