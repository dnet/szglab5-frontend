`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'notifications-creator', 'Integration | Component | notifications creator', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{notifications-creator}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#notifications-creator}}
      template block text
    {{/notifications-creator}}
  """

  assert.equal @$().text().trim(), 'template block text'
