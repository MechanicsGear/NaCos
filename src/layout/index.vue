<template>
  <n-layout has-sider>
    <sider>
      <n-layout>
        <n-layout-header bordered>
          <!-- <n-button @click="test">123</n-button> -->
          <headers/>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </sider>
  </n-layout>
</template>

<script setup lang="ts">
import sider from "./components/sider.vue";
import headers from './components/header.vue'
import { baseStore } from "../store/base";
import { ref, reactive } from "vue";
let collStore = reactive(baseStore());
const test = () => {
  collStore.NotMenuSelect();
};
</script>

<style></style>
