"use strict";
const common_vendor = require("../../common/vendor.js");
const api_order = require("../../api/order.js");
require("../../common/http.js");
if (!Array) {
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  _easycom_u_loadmore2();
}
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  _easycom_u_loadmore();
}
const _sfc_main = {
  __name: "sell_order",
  setup(__props) {
    const list = common_vendor.ref([]);
    const parm = common_vendor.reactive({
      userId: common_vendor.index.getStorageSync("userId"),
      currentPage: 1,
      pageSize: 10
    });
    const pages = common_vendor.ref(0);
    const getMyCollect = async () => {
      let res = await api_order.getSellOrderApi(parm);
      if (res && res.code == 200) {
        if (res.data.records.length == 0) {
          status.value = "nomore";
        }
        pages.value = res.data.pages;
        list.value = list.value.concat(res.data.records);
      }
    };
    const status = common_vendor.ref("loadmore");
    const loadmore = () => {
      console.log("点击加载更多");
      if (parm.currentPage >= pages.value) {
        status.value = "nomore";
        return;
      }
      status.value = "loading";
      parm.currentPage = ++parm.currentPage;
      getMyCollect();
    };
    common_vendor.onReachBottom(() => {
      console.log("触底加载");
      if (parm.currentPage >= pages.value) {
        status.value = "nomore";
        return;
      }
      status.value = "loading";
      parm.currentPage = ++parm.currentPage;
      getMyCollect();
    });
    const toLook = (item) => {
      if (item.type == "0") {
        common_vendor.index.navigateTo({
          url: "../look_unused/look_unused?goods=" + JSON.stringify(item)
        });
      } else {
        common_vendor.index.navigateTo({
          url: "../look_buy/look_buy?goods=" + JSON.stringify(item)
        });
      }
    };
    common_vendor.onReady(() => {
      getMyCollect();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.goodsName),
            b: item.type == "0"
          }, item.type == "0" ? {} : {}, {
            c: item.type == "1"
          }, item.type == "1" ? {} : {}, {
            d: item.image.split(",")[0],
            e: common_vendor.t(item.goodsDesc),
            f: common_vendor.t(item.createTime),
            g: common_vendor.t(item.goodsPrice),
            h: common_vendor.o(($event) => toLook(item), item.goodsId),
            i: item.goodsId
          });
        }),
        b: common_vendor.o(loadmore),
        c: common_vendor.p({
          status: status.value,
          bgColor: "#f2f2f2"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/旧物新缘/uniapp/shop-pro/src/pages/sell_order/sell_order.vue"]]);
wx.createPage(MiniProgramPage);
