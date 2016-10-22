`import Ember from 'ember'`

EntryTestCreatorComponent = Ember.Component.extend
  selectedLab: {
    key: 'A2',
    description: 'SQL'
  }
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

  actions:
    selectLab: (lab) ->
      @set 'selectedLab', lab
      false

`export default EntryTestCreatorComponent`
