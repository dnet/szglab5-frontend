import Ember from 'ember';

export default Ember.Service.extend({
  selected: null,
  selectable: null,
  init() {
    this._super(...arguments);
    this.set('selectable', []);
    this.get('selectable').push('blue');
    this.get('selectable').push('pink');
    this.get('selectable').push('gray');
    this.get('selectable').push('green');
    this.get('selectable').push('red');
    this.get('selectable').push('yellow');
    this.get('selectable').push('blue-gray');
    this.get('selectable').push('pink-gray');
    this.get('selectable').push('green-gray');
    this.get('selectable').push('red-gray');
    this.get('selectable').push('yellow-gray');
    this.set('selected', this.get('selectable')[0]);
  },
  changeStyle(style) {
    this.set('selected', style);
  }
});
