<template>
  <v-app>
    <NavML />
    <v-main>
      <div class="container">
        <router-view />
      </div>
    </v-main>
    <FooterML />
  </v-app>
</template>

<script>
import NavML from "./components/NavML.vue";
import FooterML from "./components/FooterML.vue";

export default {
  name: "App",
  components: {
    NavML,
    FooterML,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .container {
  padding: 1rem;
}
</style>
