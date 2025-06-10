"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../common/http.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_lazy_load2 = common_vendor.resolveComponent("u-lazy-load");
  const _easycom_u_waterfall2 = common_vendor.resolveComponent("u-waterfall");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_search2 + _easycom_u_lazy_load2 + _easycom_u_waterfall2 + _easycom_u_loadmore2)();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_lazy_load = () => "../../uni_modules/vk-uview-ui/components/u-lazy-load/u-lazy-load.js";
const _easycom_u_waterfall = () => "../../uni_modules/vk-uview-ui/components/u-waterfall/u-waterfall.js";
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_lazy_load + _easycom_u_waterfall + _easycom_u_loadmore)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const indicatorDots = common_vendor.ref(true);
    const indicatorColor = common_vendor.ref("#00ff00");
    const autoplay = common_vendor.ref(true);
    const interval = common_vendor.ref(2e3);
    const duration = common_vendor.ref(500);
    const uWaterfall1 = common_vendor.ref();
    const swipperList = common_vendor.ref([{
      image: "/static/33.jpg"
    }, {
      image: "/static/44.jpg"
    }, {
      image: "/static/66.jpg"
    }]);
    const flowList = common_vendor.ref([]);
    const loadStatus = common_vendor.ref("loadmore");
    const currentPage = common_vendor.ref(1);
    const pageSize = common_vendor.ref(10);
    const pages = common_vendor.ref(0);
    const keywords = common_vendor.ref("");
    const getIndexList = async () => {
      let res = await api_index.getIndexListApi({
        currentPage: currentPage.value,
        pageSize: pageSize.value,
        keywords: keywords.value
      });
      if (res && res.code == 200) {
        console.log(res);
        pages.value = res.data.pages;
        flowList.value = flowList.value.concat(res.data.records);
        loadStatus.value = "loadmore";
      }
    };
    const searchBtn = () => {
      currentPage.value = 1;
      uWaterfall1.value.clear();
      getIndexList();
    };
    const loadMore = () => {
      console.log("加载更多");
      if (currentPage.value >= pages.value) {
        loadStatus.value = "nomore";
        return;
      }
      loadStatus.value = "loading";
      currentPage.value = ++currentPage.value;
      getIndexList();
    };
    const toDetail = (item) => {
      if (item.type == "0") {
        common_vendor.index.navigateTo({
          url: "../unused_detail/unused_detail?goods=" + JSON.stringify(item)
        });
      } else {
        common_vendor.index.navigateTo({
          url: "../buy_detail/buy_detail?goods=" + JSON.stringify(item)
        });
      }
    };
    common_vendor.onReady(() => {
      getIndexList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swipperList.value, (item, index, i0) => {
          return {
            a: item.image,
            b: index
          };
        }),
        b: indicatorColor.value,
        c: indicatorDots.value,
        d: autoplay.value,
        e: interval.value,
        f: duration.value,
        g: common_vendor.o(searchBtn),
        h: common_vendor.o(($event) => keywords.value = $event),
        i: common_vendor.p({
          margin: "8px",
          ["show-action"]: true,
          ["action-text"]: "搜索",
          animation: true,
          modelValue: keywords.value
        }),
        j: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return common_vendor.e({
                a: common_vendor.o(($event) => toDetail(item), index),
                b: "2ab8894c-2-" + i0 + "-" + i1 + ",2ab8894c-1",
                c: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.image,
                  index
                }),
                d: common_vendor.t(item.goodsName),
                e: common_vendor.t(item.goodsPrice),
                f: item.type == "0"
              }, item.type == "0" ? {} : {}, {
                g: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "j",
          vueId: "2ab8894c-1"
        }),
        k: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return common_vendor.e({
                a: common_vendor.o(($event) => toDetail(item), index),
                b: "2ab8894c-3-" + i0 + "-" + i1 + ",2ab8894c-1",
                c: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.image,
                  index
                }),
                d: common_vendor.t(item.goodsName),
                e: common_vendor.t(item.goodsPrice),
                f: item.type == "0"
              }, item.type == "0" ? {} : {}, {
                g: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "k",
          vueId: "2ab8894c-1"
        }),
        l: common_vendor.sr(uWaterfall1, "2ab8894c-1", {
          "k": "uWaterfall1"
        }),
        m: common_vendor.o(($event) => flowList.value = $event),
        n: common_vendor.p({
          modelValue: flowList.value
        }),
        o: common_vendor.o(loadMore),
        p: common_vendor.p({
          ["bg-color"]: "rgb(240, 240, 240)",
          status: loadStatus.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/旧物新缘/uniapp/shop-pro/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
