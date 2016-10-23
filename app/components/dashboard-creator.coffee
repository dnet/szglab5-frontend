`import Ember from 'ember'`

DashboardCreatorComponent = Ember.Component.extend
  selectedLab: Ember.computed ->
    if @get('entryTest')
      lab = @get('entryTest.lab')
      for labItem in @get('labs')
        if labItem.description == lab
          return labItem

  didReceiveAttrs: ->
    @set 'minDate', new Date(Date.now())

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
    selectTime: (time) ->
      console.log time
      false
    closeSettings: ->
      @sendAction('closeSettings')

`export default DashboardCreatorComponent`
