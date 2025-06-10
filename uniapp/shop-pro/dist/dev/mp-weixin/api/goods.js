"use strict";
const common_http = require("../common/http.js");
const categoryApi = (parm) => {
  return common_http.http.get("/api/category/getSelectList", parm);
};
const releaseApi = (parm) => {
  return common_http.http.post("/api/goods/release", parm);
};
const getCateListApi = () => {
  return common_http.http.get("/api/category/getCateList");
};
const getUsedListApi = (parm) => {
  return common_http.http.get("/api/goods/getUsedList", parm);
};
const getBuyListApi = (parm) => {
  return common_http.http.get("/api/goods/getBuyList", parm);
};
const getMyUnusedListApi = (parm) => {
  return common_http.http.get("/api/goods/getMyUnusedList", parm);
};
const editApi = (parm) => {
  return common_http.http.post("/api/goods/edit", parm);
};
const upanddownpi = (parm) => {
  return common_http.http.post("/api/goods/upanddown", parm);
};
const deleteApi = (parm) => {
  return common_http.http.post("/api/goods/delete", parm);
};
const getMyCollectApi = (parm) => {
  return common_http.http.get("/api/collect/getMyCollect", parm);
};
const cancelCollectApi = (parm) => {
  console.log(parm);
  return common_http.http.post("/api/collect/cancel", parm);
};
exports.cancelCollectApi = cancelCollectApi;
exports.categoryApi = categoryApi;
exports.deleteApi = deleteApi;
exports.editApi = editApi;
exports.getBuyListApi = getBuyListApi;
exports.getCateListApi = getCateListApi;
exports.getMyCollectApi = getMyCollectApi;
exports.getMyUnusedListApi = getMyUnusedListApi;
exports.getUsedListApi = getUsedListApi;
exports.releaseApi = releaseApi;
exports.upanddownpi = upanddownpi;
