`import Ember from 'ember'`

# This function receives the params `params, hash`
add = (params) ->
    return params[0] + 1

AddHelper = Ember.Helper.helper add

`export { add }`

`export default AddHelper`
