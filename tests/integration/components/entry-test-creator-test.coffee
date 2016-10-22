`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'entry-test-creator', 'Integration | Component | entry test creator', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{entry-test-creator}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#entry-test-creator}}
      template block text
    {{/entry-test-creator}}
  """

  assert.equal @$().text().trim(), 'template block text'
