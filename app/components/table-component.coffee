`import Ember from 'ember'`

TableComponentComponent = Ember.Component.extend
    actions:
        onRowClick: (rowData) ->
            if @get 'clickable'
                @sendAction(@get('onClickRowAction'), rowData)
            else
                false

`export default TableComponentComponent`
