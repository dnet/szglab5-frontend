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
      this.set('currentView', key);
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
        //TODO: save email
      }
      else if (cw === 'password') {
        //TODO: save password and ssh
      }
      else if (cw === 'style') {
        //TODO: save style
        this.get('style').changeStyle(this.get('selectedStyle.key'));
        alert('changes now are just local');
      }
      return false;
    },
    changeStyle(style) {
      this.set('selectedStyle', style);
      return false;
    }
  }
});
