`import Ember from 'ember'`

TableComponentComponent = Ember.Component.extend
  actions:
    onRowClick: (rowData) ->
      if @get 'clickable'
        @sendAction(@get('onClickRowAction'), rowData)
      else
        false
    openSettings: (rowData)->
      @sendAction('openSettings', rowData)
    impersonate: (rowData)->
      @sendAction('impersonate', rowData)

`export default TableComponentComponent`
