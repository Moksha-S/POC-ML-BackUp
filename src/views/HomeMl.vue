<template>
  <div class="home">
    <h1 class="main-title">
      <textHover fieldName="title"></textHover>
    </h1>
    <h2 v-hoverCar>{{ $t("welcomeString") }}</h2>
    <div style="margin: 4% 10%">
      <CarCards />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CarCards from "@/components/CarCards.vue";
import textHover from "@/components/textHover.vue";

export default {
  name: "HomeView",
  components: {
    CarCards,
    textHover,
  },
  data() {
    return {};
  },

  created() {
    axios
      .get(`http://localhost:3000/${this.$i18n.locale}`)
      .then((response) => {
        console.log("current locale string", response.data);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {},
};
</script>

<style scoped>
.field {
  margin: 20px;
}
.main-title {
  display: flex;
  justify-content: center;
}
</style>
