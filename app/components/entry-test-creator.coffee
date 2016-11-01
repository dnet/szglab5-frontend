`import Ember from 'ember'`

EntryTestCreatorComponent = Ember.Component.extend
  selectedLab: Ember.computed ->
    if @get('entryTest')
      lab = @get('entryTest.lab')
      for labItem in @get('labs')
        if labItem.description == lab
          return labItem

  labs: [
    {
      key: 'A1',
      description: 'Oracle'
    },
    {
      key: 'A2',
      description: 'SQL'
    },
    {
      key: 'A3',
      description: 'Java'
    },
    {
      key: 'A4',
      description: 'SOA'
    },
    {
      key: 'A5',
      description: 'XSQL'
    }
  ]

  selectedLab: {
    key: 'A1',
    description: 'Oracle'
  },

  actions:
    selectLab: (lab) ->
      @set 'selectedLab', lab
      false
    closeSettings: ->
      @sendAction('closeSettings')

`export default EntryTestCreatorComponent`
