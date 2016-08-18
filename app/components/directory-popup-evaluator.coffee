`import Ember from 'ember'`

DirectoryPopupEvaluatorComponent = Ember.Component.extend
    shouldCheckButton: true

    buttonDisabled: Ember.computed 'shouldCheckButton', ->
        for key, type of @get('homeworkTypes')
            if type.checked
                return false
        true

    homeworkTypes: {
        type21: { name: '21-KONYV', checked: false},
        type22: { name: '22-AUTO', checked: false},
        type23: { name: '23-SZORAK', checked: false},
        type24: { name: '24-GYART', checked: false},
        type25: { name: '25-KONF', checked: false},
        type26: { name: '26-SZALL', checked: false},
        type27: { name: '27-HALL ', checked: false},
        type28: { name: '28-REND', checked: false},
        type29: { name: '29-SZAKN', checked: false},
        type30: { name: '30-VASUT', checked: false},
        type30a: { name: '30-VASUT-A', checked: false},
        type31: { name: '31-LEGI1', checked: false},
        type31a: { name: '31-LEGI1-A', checked: false},
        type32: { name: '32-LEGI2', checked: false},
        type32a: { name: '32-LEGI2-A', checked: false},
        type33: { name: '33-VIDEO', checked: false},
        type33a: { name: '33-VIDEO-A', checked: false},
        type34: { name: '34-TOZSDE', checked: false},
        type34a: { name: '34-TOZSDE-A', checked: false},
        type41m: { name: '41-M-LEGI1', checked: false},
        type42m: { name: '42-M-AUTO', checked: false},
        type43m: { name: '43-M-VIDEO', checked: false},
        type44m: { name: '44-M-SZAKN', checked: false},
        type45m: { name: '45-M-KONYV', checked: false},
        type46m: { name: '46-M-VASUT', checked: false},
        type47m: { name: '47-M-KONF', checked: false},
        type48m: { name: '48-M-TOZSD', checked: false}
    }

    actions:
        checkType: (key) ->
            propertystring = 'homeworkTypes.' + key + '.checked'
            @set(propertystring, !@get(propertystring))
            @toggleProperty('shouldCheckButton')
            @rerender()

`export default DirectoryPopupEvaluatorComponent`
