"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-steps",
  props: {
    // 步骤条的类型，dot|number
    mode: {
      type: String,
      default: "dot"
    },
    // 步骤条的数据
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    // 主题类型, primary|success|info|warning|error
    type: {
      type: String,
      default: "primary"
    },
    // 当前哪一步是激活的
    current: {
      type: [Number, String],
      default: 0
    },
    // 激活步骤的颜色
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 未激活的颜色
    unActiveColor: {
      type: String,
      default: "#909399"
    },
    // 自定义图标
    icon: {
      type: String,
      default: "checkmark"
    },
    // step的排列方向，row-横向，column-竖向
    direction: {
      type: String,
      default: "row"
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  (_easycom_u_icon2 + _easycom_u_line2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_line = () => "../u-line/u-line.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e($props.mode == "number" ? common_vendor.e({
        a: $props.current < index
      }, $props.current < index ? {
        b: common_vendor.t(index + 1),
        c: $props.current < index ? $props.unActiveColor : $props.activeColor
      } : {
        d: "fc58d786-0-" + i0,
        e: common_vendor.p({
          size: "22",
          color: "#ffffff",
          name: $props.icon
        })
      }, {
        f: $props.current < index ? "transparent" : $props.activeColor,
        g: $props.current < index ? $props.unActiveColor : $props.activeColor
      }) : {}, $props.mode == "dot" ? {
        h: index <= $props.current ? $props.activeColor : $props.unActiveColor
      } : {}, {
        i: common_vendor.t(item.name),
        j: index <= $props.current ? $props.activeColor : $props.unActiveColor,
        k: index < $props.list.length - 1
      }, index < $props.list.length - 1 ? {
        l: "fc58d786-1-" + i0,
        m: common_vendor.p({
          direction: $props.direction,
          length: "100%",
          ["hair-line"]: false,
          color: $props.unActiveColor
        }),
        n: common_vendor.n("u-steps__item__line--" + $props.mode)
      } : {}, {
        o: index
      });
    }),
    b: $props.mode == "number",
    c: $props.mode == "dot",
    d: common_vendor.n("u-steps__item__text--" + $props.direction),
    e: common_vendor.n("u-steps__item--" + $props.direction),
    f: $props.direction
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc58d786"], ["__file", "D:/旧物新缘/uniapp/shop-pro/src/uni_modules/vk-uview-ui/components/u-steps/u-steps.vue"]]);
wx.createComponent(Component);
