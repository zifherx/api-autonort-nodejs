"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  SECRET: 'ADV_API',
  // mongodbURL: process.env.MONGO_URI
  mongodbURL: process.env.MONGO_URI_PUBLIC
};
exports.default = _default;
//# sourceMappingURL=config.js.map