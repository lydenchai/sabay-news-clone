<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navigation />
    <div class="px-[18.6%] lg:px-[6%] md:px-0">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
