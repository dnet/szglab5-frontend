'use strict'

import m from 'mithril'
import Component from './component'

class Root extends Component {
  view (ctrl) {
    return m('div', 'szglab5')
  }
}

m.mount(document.body, new Root())
