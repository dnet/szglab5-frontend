import Ember from 'ember';
import MenuHelper from '../mixins/menu-helper';

export default Ember.Component.extend(MenuHelper, {
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
