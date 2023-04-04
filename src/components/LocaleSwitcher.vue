<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">
        {{ locale.name }}
      </option>
    </select>

    <!-- <v-select
      v-model="$i18n.locale"
      :items="locales"
      item-text="name"
      item-value="code"
      label="Select language"
      return-object
      color="white"
      solo
      outlined
    ></v-select> -->
  </div>
</template>

<script>
import { getSupportedLocales } from "@/i18n/supported-locales";

export default {
  data: () => ({
    locales: getSupportedLocales(),
  }),
  created() {
    // console.log("===============", this.$i18n.locale);
  },
};
</script>

<style scoped></style>
