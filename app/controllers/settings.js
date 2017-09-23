import Ember from 'ember';

export default Ember.Controller.extend({
  currentView: 'email',
  subMenu: [{
    key: 'email',
    description: 'E-mail'
  }, {
    key: 'password',
    description: 'Password'
  }],
  mailList: true,
  notification: false,
  error: null,
  message: null,
  init() {
    this._super(...arguments);
    this.set('error', null);
    this.set('message', null);
  },
  resetFields() {
    this.set('error', null);
    this.set('message', null);
    this.set('currentView', 'email');
    this.resetPWFields();
  },
  resetPWFields() {
    this.set('model.oldpwd', null);
    this.set('model.newpwd', null);
    this.set('model.newpwdagain', null);
  },
  actions: {
    goToView: function (key) {
      this.get("model").rollbackAttributes();
      this.resetPWFields();
      this.set('currentView', key);
      this.set('error', null);
      this.set('message', null);
      return false;
    },
    toggleMailList: function () {
      this.toggleProperty('model.subscribedToMailList');
      return false;
    },
    toggleNotifications: function () {
      this.toggleProperty('model.subscribedToEmailNotify');
      return false;
    },
    save: function () {
      const cw = this.get('currentView');
      this.set('error', null);
      this.set('message', null);
      if (cw === 'password') {
        if (this.get('model.newpwd') === null || this.get('model.newpwd') === '' || this.get('model.newpwdagain') === null || this.get('model.newpwdagain') === '' || this.get('model.oldpwd') === null || this.get('model.oldpwd') === '') {
          this.set('error', 'Üres mező található.');
          return false;
        }
        else if (this.get('model.newpwd') !== this.get('model.newpwdagain')) {
          this.set('error', 'A két jelszó nem egyezik.');
          return false;
        }
      }
      else if (cw === 'email') {
        const re =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(this.get('model.email'))) {
          this.set('error', 'Az email hibás.');
          return false;
        }
      }
      this.get('model').save().then(() => {
        this.set('message', 'Saved succesfully!');
        this.resetPWFields();
      }).catch((res) => {
        if (res && res.errors && res.errors[0] && res.errors[0].title) {
          this.set('error', res.errors[0].title);
        }
        else {
          this.set('error', "Ismeretlen hiba.");
        }
      });
      return false;
    }
  }
});
