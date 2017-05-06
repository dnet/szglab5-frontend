import Ember from 'ember';

export default Ember.Controller.extend({
  style: Ember.inject.service(),
  currentView: 'email',
  subMenu: [{
    key: 'email',
    description: 'E-mail'
  }, {
    key: 'password',
    description: 'Hozzáférés'
  }, {
    key: 'style',
    description: 'Stílus'
  }],
  mailList: true,
  notification: false,
  styles: null,
  selectedStyle: null,
  init() {
    this._super(...arguments);
    var convert = (v) => ({ key: v, value: v });
    var styles = this.get('style.selectable').map(convert);
    this.set('styles', styles);
    this.set('selectedStyle', convert(this.get('style.selected')));
  },
  actions: {
    goToView: function (key) {
      var cw = this.get('currentView');
      if (cw === 'password') {
        this.set('model.oldpwd', undefined);
        this.set('model.newpwd', undefined);
        this.set('model.newpwdagain', undefined);
      }
      this.set('currentView', key);
      this.get("model").rollbackAttributes();
      return false;
    },
    toggleMailList: function () {
      this.toggleProperty('mailList');
      return false;
    },
    toggleNotifications: function () {
      this.toggleProperty('notification');
      return false;
    },
    save: function () {
      var cw = this.get('currentView');
      if (cw === 'email') {
        this.get('model').save();
        //TODO: save subscription
      }
      else if (cw === 'password') {
        if (this.get('model.newpwd') === this.get('model.newpwdagain')) {
          this.get('model').save();
        }
        else {
          //TODO: error handling
        }
      }
      else if (cw === 'style') {
        var newStyle = this.get('selectedStyle.key');
        this.set('model.style', newStyle);
        this.get('model').save();
        this.get('style').changeStyle(newStyle);
      }
      return false;
    },
    changeStyle(style) {
      this.set('selectedStyle', style);
      return false;
    }
  }
});
