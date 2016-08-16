`import Ember from 'ember'`

MenuBarComponent = Ember.Component.extend
    menuItems : {
        settings: "Beállítások",
        student: "Student",
        statistics: "Statisztikák"
        # logout: "Kijelentkezés"
    }

`export default MenuBarComponent`
