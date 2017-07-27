import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  header: ['ID', 'Név', 'Login', 'Neptun', 'E-mail'],
  rowIndecies: ['id', 'displayName', 'loginName', 'neptun', 'email'],
  showTable: false,
  showSettings: false,
  showNextPage: true,
  search: '',
  users: [],
  page: 0,
  actions: {
    goToView(key) {
      this.set('currentView', key);
      return false;
    },
    openSettings(user) {
      this.set('model.userDetails', user);
      this.toggleProperty('showSettings');
      return false;
    },
    closeSettings() {
      this.set('model.userDetails', {});
      this.toggleProperty('showSettings');
      return false;
    },
    showTable() {
      this.set('page', 0);
      this.set('users', []);
      this.set('showTable', false);
      this.set('showNextPage', true);
      this.loadUsers();
      return false;
    },
    nextPage() {
      this.set('page', this.get('page') + 1);
      this.loadUsers();
      return false;
    }
  },
  loadUsers() {
    const pageSize = 10;
    this.get('store').query('user', {
      filter: {
        search: this.get('search')
      },
      offset: pageSize * this.get('page'),
      limit: pageSize
    }).then(users => {
      this.set('users', [
        ...this.get('users'),
        ...users.map(x => ({
          id: x.get('id'),
          displayName: x.get('displayName'),
          loginName: x.get('loginName'),
          neptun: x.get('neptun'),
          email: x.get('email'),
          meta: x
        }))
      ]);
      this.set('showTable', true);
      this.set('showNextPage', users.length !== 0);
    });
  }
});
