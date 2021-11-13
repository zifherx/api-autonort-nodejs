"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delFiles = delFiles;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function delFiles() {
  var dir = _path.default.resolve('src/uploads');

  var nowDir = _fs.default.readdirSync('src/uploads');

  setTimeout(function () {
    for (var a = 0; a < nowDir.length; a++) {
      var unlinkFiles = _path.default.join(dir + '/' + nowDir[a]);

      console.log(unlinkFiles);

      _fs.default.unlinkSync(unlinkFiles);
    }
  }, 8000);
}
//# sourceMappingURL=deleteFiles.js.map