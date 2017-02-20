import Ember from 'ember';

export default Ember.Component.extend({
  userRightLabels: [{
    value: 'Admin',
    key: 'admin'
  }, {
    value: 'Hallgató',
    key: 'student'
  }, {
    value: 'Javító',
    key: 'evaluator'
  }, {
    value: 'Demonstrátor',
    key: 'demonstrator'
  }],
  currentRight: {
    value: 'Admin',
    key: 'admin'
  },
  userRights: ['admin', 'student'],
  actions: {
    changeUserRight: function(right) {
      this.set('currentRight', right);
      return false;
    }
  }
});
