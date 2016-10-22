`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'demonstrator-group', 'Integration | Component | demonstrator group', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{demonstrator-group}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#demonstrator-group}}
      template block text
    {{/demonstrator-group}}
  """

  assert.equal @$().text().trim(), 'template block text'
