<script setup lang="ts">
import configPageVue from './components/configPage.vue';
</script>

<template>
  <div class="app">
    <configPageVue>
          <router-view style="height: 100vh"></router-view>
    </configPageVue>
  </div>
</template>
<style>
.app{
  
}
</style>
