`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'directory-popup-evaluator', 'Integration | Component | directory popup evaluator', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{directory-popup-evaluator}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#directory-popup-evaluator}}
      template block text
    {{/directory-popup-evaluator}}
  """

  assert.equal @$().text().trim(), 'template block text'
