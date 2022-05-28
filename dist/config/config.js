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
  mongodbURL: process.env.MONGO_URI_PUBLIC,
  API_PORT: process.env.PORT,
  //ENVIO CORREOS
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT_SMTP: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS
};
exports.default = _default;
//# sourceMappingURL=config.js.map