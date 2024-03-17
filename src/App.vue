<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>El-Mohandz-Khana</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white">Home</v-btn>
      <v-btn text color="white">About</v-btn>
      <v-btn text color="white">Contact</v-btn>
    </v-app-bar>

    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img :src="item.src" aspect-ratio="2.5"></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Welcome to El-Mohandz-Khana</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email" outlined></v-text-field>
                  <v-text-field label="Password" outlined></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="openDialog">Login</v-btn>
              </v-card-actions>
            </v-card>

            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in faqs" :key="i">
                <v-expansion-panel-header>{{
                  item.question
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>{{
                  item.answer
                }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-dialog v-model="dialog" max-width="400">
              <v-card>
                <v-card-title>Dialog Title</v-card-title>
                <v-card-text>
                  This is the dialog content. You can add any form or
                  information here.
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="primary" dark>
      <span class="white--text">&copy; 2021 El-Mohandz-Khana</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { src: "https://via.placeholder.com/800x400" }, // Add your slider images here
      { src: "https://via.placeholder.com/800x400" },
      { src: "https://via.placeholder.com/800x400" },
    ],
    faqs: [
      {
        question: "What is El-Mohandz-Khana?",
        answer: "El-Mohandz-Khana is a platform for...",
      },
      { question: "How do I sign up?", answer: "You can sign up by..." },
      {
        question: "Is there a mobile app?",
        answer: "Yes, we have a mobile app for...",
      },
    ],
    dialog: false,
  }),
  methods: {
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style>
/* Custom styles go here */
</style>
