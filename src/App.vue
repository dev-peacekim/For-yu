<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style scoped>
    #app {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  
    body {
      overflow: hidden;
      /* 스크롤 안 생기게 */
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
</style>
