import Ember from 'ember';
import MenuHelper from '../mixins/menu-helper';
import jwt_decode from 'npm:jwt-decode';


export default Ember.Component.extend(MenuHelper, {
  session: Ember.inject.service('session'),
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
  userData: [],
  init() {
    this._super(...arguments);
    this.set('isMenuNotOpen', true);
    this.loadUserData();
    this.get('session').on('authenticationSucceeded', function() { //TODO: not working
      this.loadUserData();
    });
  },
  loadUserData() {
    var token = this.get('session.data.authenticated.token');
    if (!Ember.isEmpty(token)) {
      this.set('userData', jwt_decode(token));
    }
  },
  actions: {
    changeUserRight: function (right) {
      this.set('currentRight', right);
      return false;
    },
    toggleMenu() {
      this.set('isMenuNotOpen', !this.get('isMenuNotOpen'));
      return false;
    }
  }
});
