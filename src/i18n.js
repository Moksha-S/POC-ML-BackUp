import Vue from "vue";
import VueI18n from "vue-i18n";
import getBrowserLocale from "@/i18n/get-browser-locale";
import { supportedLocalesInclude } from "./i18n/supported-locales";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  if (
    JSON.parse(window.localStorage.getItem(getStartingLocale())) == undefined
  ) {
    return messages;
  } else {
    const temp = {};
    var keys = Object.keys(localStorage);
    keys.map((key) => {
      temp[key] = JSON.parse(window.localStorage.getItem(key));
    });
    return temp;
  }
}

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });
  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en";
  }
}

export default new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
