"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

// mongoose.connect(config.mongodbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(db => console.log(`DB ${db.connection.name} is connected`))
//     .catch(err => console.error(err));W
var connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var con;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose.default.connect(_config.default.mongodbURL, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 3:
            con = _context.sent;
            console.log('DB', con.connection.name, 'is connected on port:', con.connection.port);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

var _default = connectDB;
exports.default = _default;
//# sourceMappingURL=database.js.map