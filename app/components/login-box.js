import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  username: '',
  password: '',
  error: '',
  hasError: false,
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('session'),
  actions: {
    removeError() {
      this.set('hasError', false);
    },
    login() {
      var credentials = this.getProperties('username', 'password'), authenticator = config['ember-simple-auth'].authenticator;

      this.set('hasError', false);
      if (credentials.username.trim() === "" || credentials.password.trim() === "") {
        this.set('hasError', true);
        this.set('error', "Üres felhasználó/jelszó mező.");
        return false;
      }
      credentials.identification = credentials.username;
      credentials.username = undefined;
      this.get('session').authenticate(authenticator, credentials).then(
        () => {
          this.sendAction('goToSettings');
        }
      ).catch((t) => {
        if (t.errors && t.errors.length > 0 && t.errors[0].title) {
          this.set('error', t.errors[0].title);
          this.set('hasError', true);
        }
      });
      return false;
    },
    loginBMERedirect() {
      alert('This has not been implemented yet.');
      return false;
    }
  }
});
