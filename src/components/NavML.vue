<template>
  <div class="nav">
    <div class="nav__start">
      <router-link to="/">{{ $t("nav-home") }}</router-link> |
      <router-link to="/about">{{ $t("nav-about") }}</router-link>
    </div>

    <div class="nav__end">
      <p class="user-greeting">{{ $t("user_greeting", { name: "Sam" }) }}</p>
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  components: {
    LocaleSwitcher,
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  color: #fff;
  background-color: #008080;
}

.nav__start,
.nav__end {
  display: flex;
  align-items: normal;
}

.nav img {
  margin-right: 1rem;
}

.nav a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
.user-greeting {
  margin-right: 1rem;
}
</style>
<style>
[dir="rtl"] .user-greeting {
  margin-right: 0;
  margin-left: 1rem;
}
</style>
