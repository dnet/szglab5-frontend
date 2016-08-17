`import Ember from 'ember'`

MenuBarComponent = Ember.Component.extend
    menuItems : {
        settings: "Beállítások",
        student: "Student"
        # logout: "Kijelentkezés"
    }

    adminMenu: {
      statistics: "Statisztikák",
      directory: "Felhasznalok"
    }

`export default MenuBarComponent`
