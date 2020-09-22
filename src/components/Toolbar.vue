<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <v-app-bar-nav-icon
        @click="toggleSidebar"
        class="d-md-none d-lg-flex"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>person</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-subheader>Usuario</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in items" :key="i" color="primary">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "toolbar",
  methods: {
    ...mapMutations(["toggleSidebar"])
  },
  data() {
    return {
      item: 1,
      items: [
        { text: "Turnos", icon: "receipt" },
        { text: "Historial", icon: "assignment" },
        { text: "Perfil", icon: "account_box" },
        { text: "Cerrar Sesión", icon: "cancel" }
      ]
    };
  }
};
</script>
