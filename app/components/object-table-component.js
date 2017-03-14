import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onRowClick: function(rowData) {
      if (this.get('clickable')) {
        return this.sendAction(this.get('onClickRowAction'), rowData);
      } else {
        return false;
      }
    },
    openSettings: function(rowData) {
      return this.sendAction('openSettings', rowData);
    },
    impersonate: function(rowData) {
      return this.sendAction('impersonate', rowData);
    },
    "delete": function(rowData) {
      return this.sendAction('delete', rowData);
    }
  }
});
