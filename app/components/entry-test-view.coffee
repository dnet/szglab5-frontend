`import Ember from 'ember'`

EntryTestViewComponent = Ember.Component.extend
  header: ['Lab', 'Text']

  body: [
    ['Oracle','Text2asdasd'],
    ['Java','asdfjaosdhflakjsdfa']
  ]
  showSettings: false
  actions:
    openSettings: (entry) ->
      entryTest = {}
      entryTest.lab=entry[0]
      entryTest.text=entry[1]
      @set 'entryTest', entryTest
      @toggleProperty('showSettings')
      false

    closeSettings: ->
      @set 'entryTest', {}
      @toggleProperty('showSettings')
      false

`export default EntryTestViewComponent`
