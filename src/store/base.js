import { defineStore } from "pinia";
export const baseStore = defineStore("base", {
  state() {
    return {
      isMenuSelect: false,
      routerList: ["Nacos"],
      routerTags: [{ name: "首页", path: "/", ischang: true }],
    };
  },
  getters: {},
  actions: {
    NotMenuSelect() {
      this.isMenuSelect = !this.isMenuSelect;
    },
    //获取面包屑数据
    setRouterList(data) {
      this.routerList = [];
      this.routerList = data;
    },
    //添加标签页
    setTagsData(data) {
      //添加的数据存在数组中
      if (this.routerTags.some((x) => x.name == data.name)) {
        this.routerTags = this.routerTags
          .map((vals) => {
            return {
              name: vals.name,
              path: vals.path,
              ischang: false,
            };
          })
          .filter((item) => {
            return item.name != data.name;
          });
      } else {
        this.routerTags[0].ischang = false;
      }

      this.routerTags.unshift(data);
    },
    //删除全部
    DelAllTag() {
      this.routerTags = [];
      this.routerTags.push({ name: "首页", path: "/", ischang: true });
    },
    //删除选择的
    DelTagName(data) {
      let state =0;
      this.routerTags.forEach((x)=>{
        if(x.name == data.name){
          if(x.ischang)
            state=1;
        }
      });
      this.routerTags = this.routerTags.filter((item) => {
        return item.name != data.name;
      });
      if(state){
        this.routerTags[0].ischang=true;
      }


      
      if (this.routerTags.length == 0){
        this.routerTags = [];
        this.routerTags.push({ name: "首页", path: "/", ischang: true });
      }
        
    },
    //删除其他，保留选择的
    DelTagByName(data) {
      this.routerTags = this.routerTags.filter((item) => {
        return data.name == item.name;
      });
      this.routerTags[0].ischang=true;
    },
  },
});
