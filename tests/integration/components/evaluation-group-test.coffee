`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'evaluation-group', 'Integration | Component | evaluation group', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{evaluation-group}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#evaluation-group}}
      template block text
    {{/evaluation-group}}
  """

  assert.equal @$().text().trim(), 'template block text'
