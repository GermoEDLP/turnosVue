<template>
  <v-app>
    <toolbar></toolbar>
    <sidebar drawer="drawer"></sidebar>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import sidebar from './components/Sidebar'
import toolbar from './components/Toolbar.vue'


export default {
  name: "App",
  components: {
    toolbar,
    sidebar
  },
  data: () => ({
    drawer: false
  }),
};
</script>
