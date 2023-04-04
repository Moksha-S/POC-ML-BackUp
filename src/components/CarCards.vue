<template>
  <div class="cards">
    <CarCard v-bind="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import CarCard from "./CarCard"
import carData from "../../car.json";

export default {
  data: () => ({
    cards: [],
  }),
  created() {
    this.cards = carData.cars;
  },
  components: { CarCard }
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
