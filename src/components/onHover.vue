<template>
  <div class="cards">
    <v-hover v-slot="{ hover }">
      <div class="car-title">
        <h3>{{ $t(fieldName) }}</h3>
        <v-btn v-if="hover" icon @click="dialog = !dialog">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" persistent max-width="390">
          <v-card>
            <v-card-title class="text-h5">
              Edit {{ $t(fieldName) }}
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="editedData"
                label="Enter new string"
                :placeholder="`${$t(fieldName)}`"
                outlined
              ></v-text-field
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false"> cancle </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="saveEditedData(`${fieldName}`, `${editedData}`)"
              >
                save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-hover>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    fieldName: String,
  },
  data() {
    return {
      dialog: false,
      editedData: "",
      localeMessage: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/${this.$i18n.locale}`)
      .then((response) => {
        this.localeMessage = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async saveEditedData(key, editedData) {
      if (this.$i18n.locale == "en") {
        await axios.get(`http://localhost:3000/en`).then((res) => {
          this.localeMessage = res.data;
        });
      } else if (this.$i18n.locale == "ar") {
        await axios.get(`http://localhost:3000/ar`).then((res) => {
          this.localeMessage = res.data;
        });
      }else if (this.$i18n.locale == "es") {
        await axios.get(`http://localhost:3000/es`).then((res) => {
          this.localeMessage = res.data;
        });
      }

      this.dialog = false;
      const value = {};
      value[key] = editedData;
      this.localeMessage = Object.assign(this.localeMessage, value);
      this.editedData = "";
      axios
        .post(`http://localhost:3000/${this.$i18n.locale}`, this.localeMessage)
        .then((response) => {
          this.$i18n.setLocaleMessage(this.$i18n.locale, response.data);
          const data = JSON.stringify(response.data);
          window.localStorage.setItem(this.$i18n.locale, data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
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
</style>
