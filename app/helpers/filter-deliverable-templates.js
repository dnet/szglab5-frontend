import Ember from 'ember';

export function filterDeliverableTemplates([dTs]) {
  return dTs.filter(dT => dT.get('type') === 'FILE');
}

export default Ember.Helper.helper(filterDeliverableTemplates);
