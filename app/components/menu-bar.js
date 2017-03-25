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
  init (){
    this._super(...arguments);
    this.set('isMenuNotOpen', true);
  },
  actions: {
    changeUserRight: function(right) {
      this.set('currentRight', right);
      return false;
    },
    toggleMenu() {
      this.set('isMenuNotOpen', !this.get('isMenuNotOpen'));
      return false;
    }
  }
});
