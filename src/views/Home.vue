<template>
  <div>
    <h1>Home</h1>
    <p>{{username}}</p>
     <n-date-picker />
  </div>
</template>

<script setup lang="ts">
import { userStore } from '../store/user';
import { ref } from "vue";
let username:any = ref(userStore().username);
</script>

<style></style>
