`import Ember from 'ember'`

MenuBarComponent = Ember.Component.extend
    menuItems : {
        settings: "Beállítások",
        student: "Hallgató"
        # logout: "Kijelentkezés"
    }

    adminMenu: {
      statistics: "Statisztikák",
      directory: "Felhasználók"
    }

`export default MenuBarComponent`
