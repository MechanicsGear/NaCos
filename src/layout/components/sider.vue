<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div :class="{ 'side-title': 0 == 0, 'side-font': collapsed }">
        <h2>NACOS</h2>
      </div>
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
      />
    </n-layout-sider>
    <slot></slot>
  </n-layout>
</template>

<script setup lang="ts">
import { h, ref, reactive, watch, Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";
import { baseStore } from "../../store/base";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
} from "@vicons/ionicons5";
const baseStorex = baseStore();
let { isMenuSelect } = storeToRefs(baseStorex);
let collapsed: any = ref(false);
watch(isMenuSelect, (newval) => {
  collapsed.value = newval;
});

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions: MenuOption[] = reactive([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "首页" }
      ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "test",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "测试" }
      ),
    key: "go-back-about",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "one",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "测试1" }
      ),
    key: "go-back-one",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "two",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "测试2" }
      ),
    key: "go-back-two",
    icon: renderIcon(HomeIcon),
  },
]);

const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === "sheep-man") return true;
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === "food") return null;
  return h(NIcon, null, { default: () => h(BookmarkOutline) });
};
</script>

<style lang="scss" scoped>
.side-title {
  text-align: center;
  height: 70px;
  line-height: 70px;
}
.side-font {
  font-size: 10px;
}
</style>
