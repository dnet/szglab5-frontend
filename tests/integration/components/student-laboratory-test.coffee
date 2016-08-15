`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'student-laboratory', 'Integration | Component | student laboratory', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{student-laboratory}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#student-laboratory}}
      template block text
    {{/student-laboratory}}
  """

  assert.equal @$().text().trim(), 'template block text'
