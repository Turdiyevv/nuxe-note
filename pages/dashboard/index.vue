<template>
  <div>
    <v-layout>

      <v-navigation-drawer
        v-model="drawer"
      >
        <v-list>
          list items
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        color="primary"
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-main style="background-color: chocolate; min-height: 100vh">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
const drawer = ref(false);
</script>
<style scoped>
</style>
