"use strict";
const common_http = require("../common/http.js");
const replaceOrderApi = (parm) => {
  return common_http.http.post("/api/goodsOrder/replaceOrder", parm);
};
const getMyOrderApi = (parm) => {
  return common_http.http.get("/api/goodsOrder/getMyOrder", parm);
};
const getSellOrderApi = (parm) => {
  return common_http.http.get("/api/goodsOrder/getSellOrder", parm);
};
const deleteOrderApi = (parm) => {
  return common_http.http.post("/api/goodsOrder/deleteOrder", parm);
};
exports.deleteOrderApi = deleteOrderApi;
exports.getMyOrderApi = getMyOrderApi;
exports.getSellOrderApi = getSellOrderApi;
exports.replaceOrderApi = replaceOrderApi;
