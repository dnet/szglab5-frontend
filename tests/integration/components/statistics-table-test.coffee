`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'statistics-table', 'Integration | Component | statistics table', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{statistics-table}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#statistics-table}}
      template block text
    {{/statistics-table}}
  """

  assert.equal @$().text().trim(), 'template block text'
