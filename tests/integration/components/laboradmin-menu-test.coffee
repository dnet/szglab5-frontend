`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'laboradmin-menu', 'Integration | Component | laboradmin menu', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{laboradmin-menu}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#laboradmin-menu}}
      template block text
    {{/laboradmin-menu}}
  """

  assert.equal @$().text().trim(), 'template block text'
