`import Ember from 'ember'`
`import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component'`

DirectoryPopupComponent = Ember.Component.extend KeyboardShortcuts,
    keyboardShortcuts:
        'esc': 'closeDialog'

    body: Ember.computed ->
        [@get('userDetails')]

    actions:
      closeDialog: ->
        @sendAction @get 'onCloseAction'

`export default DirectoryPopupComponent`
