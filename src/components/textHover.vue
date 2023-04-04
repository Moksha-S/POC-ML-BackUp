<template>
  <!-- <div class="cards"> -->
  <div class="car-title" @mouseover="hover = true" @mouseleave="hover = false">
    <h3>
      {{ $t(fieldName) }}
    </h3>
    <EditBox :hover="hover" :fieldName="fieldName"></EditBox>
    <h3 class="car-card-text">
      <span v-if="textType == 'number'">
        {{ $n(textData, "currency", $i18n.locale) }}
      </span>
      <span v-else>
        {{ textData }}
      </span>
    </h3>
  </div>
  <!-- </div> -->
</template>

<script>
import EditBox from "./EditBox.vue";

export default {
  props: ["fieldName", "textData"],
  data() {
    return {
      hover: false,
      dialog: false,
      editedData: "",
      localeMessage: {},
    };
  },
  computed: {
    textType() {
      return typeof this.textData;
    },
  },

  components: { EditBox },

  methods: {
    mouseover() {
      this.hover = !this.hover;
    },
    mouseleave() {
      this.hover = !this.hover;
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.car-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.car-card-text {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
