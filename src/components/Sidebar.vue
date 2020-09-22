<template>
  <v-navigation-drawer v-model="$store.state.drawer" temporary absolute>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>avatar</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Hola mundo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "sidebar",
  computed: {
    ...mapState(["drawer"])
  }
};
</script>
