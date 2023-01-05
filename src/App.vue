<script setup>
import useSessionStore from "@/stores/session.js";

import NavBar from "@/components/elements/NavBar.vue";

const sessionStore = useSessionStore();
</script>

<template>
  <NavBar/>
  <main :data-nav-bar-active="sessionStore.NavBarState">
    <RouterView/>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

html {
  overflow: hidden;
}

main {
  width: calc(100% + 40px);
  height: calc(100vh + 40px);
  padding-top: 20px;
  transform: translate(-20px, -20px);
  filter: blur(0);
  -webkit-filter: blur(0);

  &[data-nav-bar-active=true] {
    filter: blur(10px);
    -webkit-filter: blur(10px);
    transition: .4s all ease;
  }

  transition: .4s all ease;
}
</style>