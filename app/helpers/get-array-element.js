import Ember from 'ember';

export function getArrayElement(params/*, hash*/) {
  if (params[0].get) {
    const parameter = params[0].get(params[1]);
    if (typeof parameter === "boolean") {
      return (parameter) ? 'Yes' : 'No';
    }
    return parameter;
  }
  return params[0][params[1]];
}

export default Ember.Helper.helper(getArrayElement);
