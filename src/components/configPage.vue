<template>
  <div>
    <n-config-provider
      :theme="theme"
      :locale="locale"
      :date-locale="dateLocale"
    >
      <slot></slot>
    </n-config-provider>
    <div class="type-btn">
      <div class="btns-one" @click="ClickType">主题</div>
      <div class="btns-two" @click="ClickLocale">语言</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import type { GlobalTheme } from "naive-ui";
let theme: any = ref(null);
let locale: any = ref(null);
let dateLocale: any = ref(null);
const ClickType = () => {
  if (theme.value == null) {
    theme.value = darkTheme;
  } else {
    theme.value = null;
  }
};
const ClickLocale = () => {
  if (locale.value == null) {
    locale.value = zhCN;
    dateLocale.value = dateZhCN;
  } else {
    locale.value = null;
    dateLocale.value = null;
  }
};
</script>

<style lang="scss" scoped>
.type-btn {
  position: absolute;
  top: 50%;
  right: -50px;
  transition: right 500ms;
  display: flex;
}
.type-btn:hover {
  right: 0px;
}
.btns-one {
  width: 40px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background-color: rgb(24, 160, 88);
  font-size: 15px;
  font-weight: 600;
  color: white;
  border-radius: 50px 0 0 50px;
  border-right: 0.5px solid white;
}
.btns-two {
  width: 40px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background-color: rgb(24, 160, 88);
  font-size: 15px;
  font-weight: 600;
  color: white;
  border-radius: 0 50px 50px 0;
  border-left: 0.5px solid white;
}
</style>
