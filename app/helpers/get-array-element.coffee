`import Ember from 'ember'`

# This function receives the params `params, hash`
getArrayElement = (params) ->
  return params[0][params[1]]

GetArrayElementHelper = Ember.Helper.helper getArrayElement

`export { getArrayElement }`

`export default GetArrayElementHelper`
