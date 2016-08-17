`import Ember from 'ember'`

TableComponentComponent = Ember.Component.extend
    actions:
        onRowClick: (rowData) ->
            if @get 'clickable'
                console.log @get 'onClickRowAction'
                @sendAction(@get('onClickRowAction'), rowData)
            else
                false

`export default TableComponentComponent`
