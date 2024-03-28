<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Blog</v-toolbar-title>
      <router-link :to="{ name: 'admin' }">
        <v-toolbar-title> Admin </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2021 My Blog</span>
    </v-footer>
  </v-app>
</template>
