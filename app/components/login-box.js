import Ember from 'ember';

export default Ember.Component.extend({
    username: '',
    password: '',
    error: '',
    hasError: false,
    init() {
        this._super(...arguments);
    },
    actions: {
        login() {
            this.set('hasError', false);
            if (this.get('username').trim() === "" || this.get('username').trim() === "") {
                this.set('hasError', true);
                this.set('error', "Üres felhasználó/jelszó mező.");
                return false;
            }
            // TODO: login
            return false;
        },
        loginBMERedirect() {
            // TODO: redirect to BME login
            return false;
        }
    }
});
