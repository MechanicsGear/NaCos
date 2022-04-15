<template>
  <div class="Header">
    <div class="header-top">
      <div class="img_btn" @click="test">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 18h12"></path>
          </g>
        </svg>
      </div>
      <div class="header_breadcrumb">
        <n-breadcrumb>
          <n-breadcrumb-item
            href="#"
            v-for="(item, index) in routerList"
            :key="index"
          >
            {{ item }}
          </n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <div class="header_user_name">
        <img src="@/assets/1.jpeg" class="header_user" />
        <div class="header_name">{{ user.username }}</div>
        <div class="header-ul">
          <ul>
            <li>切换账号</li>
            <li>退出账号</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-tags">
      <router-link
        :to="item.path"
        v-for="(item, index) in routerTags"
        :key="index"
        @contextmenu.prevent="clickContext($event, item)"
      >
        <n-tag :type="item.ischang ? 'success' : ''" closable>{{
          item.name
        }}</n-tag>
      </router-link>
      <ul
        class="tags-ul"
        :style="{ left: left + 'px', top: top + 'px' }"
        v-show="visible"
      >
        <li @click="DelTagName">删除</li>
        <li @click="DalAllTag">删除全部</li>
        <li @click="DelTagByName">删除其余</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { baseStore } from "../../store/base";
import { userStore } from "../../store/user";
import { ref, reactive, watch } from "vue";
import { storeToRefs } from "pinia";
import { RouteLocationRaw, useRouter } from "vue-router";
let collStore = reactive(baseStore());
let router = reactive(useRouter());
let user = reactive(userStore());
let left = ref(0);
let top = ref(0);
let changData = reactive({});
const test = () => {
  collStore.NotMenuSelect();
};
let { routerList, routerTags } = storeToRefs(collStore);

const clickContext = (e: any, data: any) => {
  changData = data;
  visible.value = true;
  left.value = e.clientX - 240;
  top.value = e.clientY + 20;
};

let visible = ref(false);

watch(visible, (data) => {
  if (data) {
    window.addEventListener("click", closeMenu);
  } else {
    window.removeEventListener("click", closeMenu);
  }
});
const closeMenu = () => {
  visible.value = false;
};

const DalAllTag = () => {
  collStore.DelAllTag();
  changData = {};
};

const DelTagName = () => {
  collStore.DelTagName(changData);
  PathFun(routerTags.value[0].path);
  changData = {};
};

const DelTagByName = () => {
  collStore.DelTagByName(changData);
  PathFun(routerTags.value[0].path);
};

const PathFun = (data: RouteLocationRaw) => {
  router.push(data);
};

watch(router, (newval) => {
  let routerlist = newval.currentRoute.matched.map((data) => {
    return data.meta.title;
  });
  let path = newval.currentRoute.path;
  let naem = newval.currentRoute.meta.title;
  let obj = { name: naem, path: path, ischang: true };
  collStore.setTagsData(obj);
  collStore.setRouterList(routerlist);
});
</script>

<style scoped lang="scss">
.Header {
  height: 100px;
  width: 100%;
  .header-top {
    height: 60px;
    width: 100%;
    // line-height: 60px;
    border-bottom: 1px solid rgb(218, 214, 214);
    display: flex;
    align-items: center;
    .img_btn {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      //   margin-top: 10px;
    }
    .img_btn:hover {
      width: 35px;
      height: 35px;
    }
    .header_breadcrumb {
      margin-left: 10px;
      width: 83%;
    }
    .header_user_name {
      display: flex;
      align-items: center;
      .header_user {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-right: 20px;
      }
      .header_name {
        font-weight: 800;
      }
    }
    .header_user_name:hover {
      .header-ul {
        display: block;
      }
    }
  }
  .header-tags {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    div {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}
.header-ul {
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 99;
  background-color: rgb(14, 14, 14);
  display: none;
  ul {
    border: 1px solid rgb(218, 214, 214);
    width: 100px;
    text-align: center;
    color: rgb(160, 150, 150);
    background-color: white;
    li {
      padding: 10px 10px;
    }
    li:hover {
      background-color: rgb(96, 89, 89);
    }
  }
}

.tags-ul {
  z-index: 99;
  border: 1px solid rgb(211, 207, 207);
  position: absolute;
  width: 80px;
  text-align: center;
  background-color: white;
  color: rgb(160, 150, 150);
  li:hover {
    background-color: rgb(96, 89, 89);
  }
}
</style>
