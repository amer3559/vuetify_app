<template>
  <div class="home">
    <v-app>
      <!-- Navbar -->
      <v-app-bar app>
        <!-- Navbar content -->
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row>
            <!-- Sidebar -->
            <v-col cols="3">
              <v-sidebar app>
                <!-- Sidebar content -->
              </v-sidebar>
            </v-col>

            <!-- Page content -->
            <v-col cols="9">
              <v-card>
                <!-- Page content -->
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer app>
        <!-- Footer content -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
