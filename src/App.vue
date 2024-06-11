<script setup lang="ts">
import { isTMA } from '@tma.js/sdk';
import { RouterView } from 'vue-router';

console.log(await isTMA());
</script>

<template>
  <div class="app">
    <header>
      <div></div>
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  min-height: 100vh;
  background: #1e1e1e;
}
</style>
