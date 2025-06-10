"use strict";
const common_http = require("../common/http.js");
const getIndexListApi = (parm) => {
  return common_http.http.get("/api/goods/getIndexList", parm);
};
exports.getIndexListApi = getIndexListApi;
