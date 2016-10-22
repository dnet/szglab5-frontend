`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'evaluation-student', 'Integration | Component | evaluation student', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{evaluation-student}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#evaluation-student}}
      template block text
    {{/evaluation-student}}
  """

  assert.equal @$().text().trim(), 'template block text'
