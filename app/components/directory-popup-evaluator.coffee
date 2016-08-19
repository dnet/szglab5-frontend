`import Ember from 'ember'`

DirectoryPopupEvaluatorComponent = Ember.Component.extend
    shouldCheckButton: true

    buttonDisabled: Ember.computed 'shouldCheckButton', ->
        for key, type of @get('homeworkTypes')
            if type.checked
                return false
        true



    actions:
        checkType: (key) ->
            propertystring = 'homeworkTypes.' + key + '.checked'
            @set(propertystring, !@get(propertystring))
            @toggleProperty('shouldCheckButton')
            @rerender()

`export default DirectoryPopupEvaluatorComponent`
