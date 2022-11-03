"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _s = _interopRequireDefault(require("aws-sdk/clients/s3"));

var _path = _interopRequireDefault(require("path"));

var _multerS = _interopRequireDefault(require("multer-s3"));

require("dotenv/config");

var accessClient = {
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY2,
  secretAccessKey: process.env.AWS_SECRET_KEY2
};
var s3 = new _s.default(accessClient);
var storage = (0, _multerS.default)({
  s3: s3,
  bucket: process.env.AWS_BUCKET,
  metadata: function metadata(req, file, cb) {
    cb(null, {
      fieldName: file.fieldname
    });
  },
  key: function key(req, file, cb) {
    var name = file.originalname.split('.')[0];

    var campo = name + _path.default.extname(file.originalname); // let alternativo = new Date().getTime() + path.extname(file.originalname);
    // let campo = nanoid() + path.extname(file.originalname);


    cb(null, campo); // cb(null, alternativo);
  }
});
var upload = (0, _multer.default)({
  storage: storage
});
var _default = upload;
exports.default = _default;
//# sourceMappingURL=multer.js.map