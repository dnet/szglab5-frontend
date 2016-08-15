`import Ember from 'ember'`

# This function receives the params `params, hash`
eq = (params) ->
  return params[0] == params[1]

EqHelper = Ember.Helper.helper eq

`export { eq }`

`export default EqHelper`
