<template>
  <div class="card">
    <div class="car-title" style="padding: 12px">
      <textHover fieldName="carName" :textData="car"></textHover>
      <!-- <h3>{{ car }}</h3> -->
    </div>
    <div>
      <img :src="img" />
    </div>

    <div class="card__footer">
      <textHover fieldName="carPrice" :textData="priceValue"></textHover>
      <textHover fieldName="carModel" :textData="car_model"></textHover>
      <textHover fieldName="carColor" :textData="car_color"></textHover>
    </div>
    <div>
      <v-btn class="ma-2" outlined color="#008080" @click="gotoViewDetails()">
        {{ $t("viewDetails") }}
      </v-btn>
    </div>
  </div>
</template>

<script src="https://global.localizecdn.com/localize.js"></script>
<script>
import textHover from "./textHover";

export default {
  props: {
    id: Number,
    car: String,
    car_model: String,
    car_color: String,
    car_model_year: Number,
    car_vin: String,
    price: String,
    availability: Boolean,
    img: String,
  },
  components: {
    // onHover,
    textHover,
  },

  data() {
    return {
      priceValue: 0,
      currencyCode: {
        en: "USD",
        es: "EUR",
        fr: "EUR",
      },
    };
  },

  created() {
    this.currencyConvert();
    // axios.get(`http://localhost:3000/${this.$i18n.locale}`).then(() => {});
  },
 
  methods: {
    gotoViewDetails() {
      window.open("https://www.cars24.com/", "_blank");
    },

    async currencyConvert() {
      let code = this.currencyCode[Localize.getLanguage()];
      let currencyValue = parseFloat(this.price.substring(1));
      let refThis = this;

      await Localize.currency(
        currencyValue,
        { originalCurrency: "USD", targetCurrency: code },
        function (err, value) {
          refThis.priceValue = value;
        }
      );
    },
  },
};
</script>

<style scoped>
.card {
  width: 30%;
  margin-bottom: 2rem;
  border: 1px solid #008080;
  border-radius: 4px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  margin: 0;
  padding: 0.5em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  width: 100%;
}

.card__footer {
  text-align: center;
  margin: 0;
  padding: 0.5em;
}

.car-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

p {
  margin: 0;
  font-size: 14px;
}

.car-card-text {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.likes {
  text-align: end;
  margin-top: 0.5rem;
}
</style>
