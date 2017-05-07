import Ember from 'ember';
import MenuHelper from '../mixins/menu-helper';
import jwt_decode from 'npm:jwt-decode';


export default Ember.Component.extend(MenuHelper, {
  session: Ember.inject.service('session'),
  userData: {},
  init() {
    this._super(...arguments);
    this.set('isMenuNotOpen', true);
    this.loadUserData();
    this.get('session').on('authenticationSucceeded', () => {
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
    toggleMenu() {
      this.set('isMenuNotOpen', !this.get('isMenuNotOpen'));
      return false;
    }
  }
});
