"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isVendedor = exports.isTasadororChiefEPDP = exports.isTasadorOrChiefEDPDOrAdmin = exports.isTasador = exports.isInmatriculadosAsistantyAdministrador = exports.isInmatriculadosAsistant = exports.isExecutiveMaf = exports.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = exports.isConexosOrADVOrVendedorOrEPDPOrAdmin = exports.isConexosOrADV = exports.isConexosAsistantOrAdmin = exports.isChiefTunning = exports.isChiefSales = exports.isChiefPlaneamientorAdmin = exports.isChiefEPDPorAdmin = exports.isChiefEPDP = exports.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = exports.isChiefAdvorAdminorAsistantADV = exports.isChiefAdvorAdmin = exports.isChiefAdv = exports.isChiefADVOrChiefPlaneamientoOrAdministrador = exports.isCSAsistant = exports.isAdministradorOrAsistantComercial = exports.isAdmin = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: 'Falta Token'
            }));

          case 4:
            decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);
            res.locals.jwtPayload = decoded;
            req.userId = decoded.id;
            _context.next = 9;
            return _User.default.findById(req.userId, {
              password: 0
            });

          case 9:
            user = _context.sent;

            if (user) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'No se encontró usuario'
            }));

          case 12:
            next();
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

            if (!(_context.t0.message == "jwt expired")) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'Token ha expirado'
            }));

          case 22:
            console.log(_context.t0.message);
            return _context.abrupt("return", res.status(403).json({
              message: 'No Autorizado'
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i].name === 'Administrador')) {
              _context2.next = 11;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Administrador'
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isChiefSales = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context3.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Ventas')) {
              _context3.next = 11;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 11:
            i++;
            _context3.next = 7;
            break;

          case 14:
            return _context3.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-Ventas'
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isChiefSales(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isChiefSales = isChiefSales;

var isChiefAdv = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context4.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context4.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV')) {
              _context4.next = 11;
              break;
            }

            next();
            return _context4.abrupt("return");

          case 11:
            i++;
            _context4.next = 7;
            break;

          case 14:
            return _context4.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isChiefAdv(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isChiefAdv = isChiefAdv;

var isChiefAdvorAdmin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context5.sent;
            _context5.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context5.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context5.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador')) {
              _context5.next = 11;
              break;
            }

            next();
            return _context5.abrupt("return");

          case 11:
            i++;
            _context5.next = 7;
            break;

          case 14:
            return _context5.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function isChiefAdvorAdmin(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdmin = isChiefAdvorAdmin;

var isChiefPlaneamientorAdmin = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context6.sent;
            _context6.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context6.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context6.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Planeamiento-Comercial' || roles[i].name === 'Administrador')) {
              _context6.next = 11;
              break;
            }

            next();
            return _context6.abrupt("return");

          case 11:
            i++;
            _context6.next = 7;
            break;

          case 14:
            return _context6.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function isChiefPlaneamientorAdmin(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.isChiefPlaneamientorAdmin = isChiefPlaneamientorAdmin;

var isChiefAdvorAdminorAsistantADV = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context7.sent;
            _context7.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context7.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context7.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador' || roles[i].name === 'Asistente-ADV')) {
              _context7.next = 11;
              break;
            }

            next();
            return _context7.abrupt("return");

          case 11:
            i++;
            _context7.next = 7;
            break;

          case 14:
            return _context7.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function isChiefAdvorAdminorAsistantADV(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdminorAsistantADV = isChiefAdvorAdminorAsistantADV;

var isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context8.sent;
            _context8.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context8.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context8.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Jefe-Planeamiento-Comercial')) {
              _context8.next = 11;
              break;
            }

            next();
            return _context8.abrupt("return");

          case 11:
            i++;
            _context8.next = 7;
            break;

          case 14:
            return _context8.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV'
            }));

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function isChiefAdvorAdminorAsistantADVorChiefPlaneamiento(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento = isChiefAdvorAdminorAsistantADVorChiefPlaneamiento;

var isChiefTunning = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context9.sent;
            _context9.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context9.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context9.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Tunning')) {
              _context9.next = 11;
              break;
            }

            next();
            return _context9.abrupt("return");

          case 11:
            i++;
            _context9.next = 7;
            break;

          case 14:
            return _context9.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-Tunning'
            }));

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function isChiefTunning(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.isChiefTunning = isChiefTunning;

var isInmatriculadosAsistantyAdministrador = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context10.sent;
            _context10.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context10.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context10.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Inmatriculaciones' || roles[i].name === 'Administrador')) {
              _context10.next = 11;
              break;
            }

            next();
            return _context10.abrupt("return");

          case 11:
            i++;
            _context10.next = 7;
            break;

          case 14:
            return _context10.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Inmatriculacion o Administrador'
            }));

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function isInmatriculadosAsistantyAdministrador(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.isInmatriculadosAsistantyAdministrador = isInmatriculadosAsistantyAdministrador;

var isInmatriculadosAsistant = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context11.sent;
            _context11.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context11.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context11.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Inmatriculaciones')) {
              _context11.next = 11;
              break;
            }

            next();
            return _context11.abrupt("return");

          case 11:
            i++;
            _context11.next = 7;
            break;

          case 14:
            return _context11.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Inmatriculacion'
            }));

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function isInmatriculadosAsistant(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.isInmatriculadosAsistant = isInmatriculadosAsistant;

var isCSAsistant = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context12.sent;
            _context12.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context12.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context12.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-CS')) {
              _context12.next = 11;
              break;
            }

            next();
            return _context12.abrupt("return");

          case 11:
            i++;
            _context12.next = 7;
            break;

          case 14:
            return _context12.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-CS'
            }));

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function isCSAsistant(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

exports.isCSAsistant = isCSAsistant;

var isConexosAsistantOrAdmin = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context13.sent;
            _context13.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context13.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context13.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Administrador')) {
              _context13.next = 11;
              break;
            }

            next();
            return _context13.abrupt("return");

          case 11:
            i++;
            _context13.next = 7;
            break;

          case 14:
            return _context13.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos'
            }));

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function isConexosAsistantOrAdmin(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

exports.isConexosAsistantOrAdmin = isConexosAsistantOrAdmin;

var isConexosOrADV = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context14.sent;
            _context14.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context14.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context14.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV')) {
              _context14.next = 11;
              break;
            }

            next();
            return _context14.abrupt("return");

          case 11:
            i++;
            _context14.next = 7;
            break;

          case 14:
            return _context14.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe ADV'
            }));

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function isConexosOrADV(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

exports.isConexosOrADV = isConexosOrADV;

var isConexosOrADVOrVendedorOrEPDPOrAdmin = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context15.sent;
            _context15.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context15.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context15.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Vendedor' || roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP' || roles[i].name === 'Tasador')) {
              _context15.next = 11;
              break;
            }

            next();
            return _context15.abrupt("return");

          case 11:
            i++;
            _context15.next = 7;
            break;

          case 14:
            return _context15.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe-ADV || Vendedor || Administrador || Jefe-EPDP || Tasador'
            }));

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function isConexosOrADVOrVendedorOrEPDPOrAdmin(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

exports.isConexosOrADVOrVendedorOrEPDPOrAdmin = isConexosOrADVOrVendedorOrEPDPOrAdmin;

var isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context16.sent;
            _context16.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context16.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context16.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV' || roles[i].name === 'Asistente-ADV' || roles[i].name === 'Vendedor' || roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP' || roles[i].name === 'Tasador' || roles[i].name === 'Jefe-Planeamiento-Comercial')) {
              _context16.next = 11;
              break;
            }

            next();
            return _context16.abrupt("return");

          case 11:
            i++;
            _context16.next = 7;
            break;

          case 14:
            return _context16.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Asistente-Conexos || Jefe-ADV || Vendedor || Administrador || Jefe-EPDP || Tasador || Jefe-Planeamiento-Comercial'
            }));

          case 15:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

exports.isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin = isConexosOrADVOrVendedorOrEPDPOrPlaneamientoOrAdmin;

var isTasadororChiefEPDP = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context17.sent;
            _context17.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context17.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context17.next = 14;
              break;
            }

            if (!(roles[i].name === 'Tasador' || roles[i].name === 'Jefe-EPDP')) {
              _context17.next = 11;
              break;
            }

            next();
            return _context17.abrupt("return");

          case 11:
            i++;
            _context17.next = 7;
            break;

          case 14:
            return _context17.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Tasador ó Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function isTasadororChiefEPDP(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

exports.isTasadororChiefEPDP = isTasadororChiefEPDP;

var isTasadorOrChiefEDPDOrAdmin = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context18.sent;
            _context18.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context18.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context18.next = 14;
              break;
            }

            if (!(roles[i].name === 'Tasador' || roles[i].name === 'Jefe-EPDP' || roles[i].name === 'Administrador')) {
              _context18.next = 11;
              break;
            }

            next();
            return _context18.abrupt("return");

          case 11:
            i++;
            _context18.next = 7;
            break;

          case 14:
            return _context18.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Tasador ó Jefe-EPDP ó Adminsitrador'
            }));

          case 15:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function isTasadorOrChiefEDPDOrAdmin(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

exports.isTasadorOrChiefEDPDOrAdmin = isTasadorOrChiefEDPDOrAdmin;

var isTasador = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context19.sent;
            _context19.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context19.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context19.next = 14;
              break;
            }

            if (!(roles[i].name === 'Tasador')) {
              _context19.next = 11;
              break;
            }

            next();
            return _context19.abrupt("return");

          case 11:
            i++;
            _context19.next = 7;
            break;

          case 14:
            return _context19.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Tasador'
            }));

          case 15:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function isTasador(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

exports.isTasador = isTasador;

var isChiefEPDP = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context20.sent;
            _context20.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context20.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context20.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-Tasación')) {
              _context20.next = 11;
              break;
            }

            next();
            return _context20.abrupt("return");

          case 11:
            i++;
            _context20.next = 7;
            break;

          case 14:
            return _context20.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function isChiefEPDP(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

exports.isChiefEPDP = isChiefEPDP;

var isChiefEPDPorAdmin = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context21.sent;
            _context21.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context21.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context21.next = 14;
              break;
            }

            if (!(roles[i].name === 'Administrador' || roles[i].name === 'Jefe-EPDP')) {
              _context21.next = 11;
              break;
            }

            next();
            return _context21.abrupt("return");

          case 11:
            i++;
            _context21.next = 7;
            break;

          case 14:
            return _context21.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Jefe-EPDP'
            }));

          case 15:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function isChiefEPDPorAdmin(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

exports.isChiefEPDPorAdmin = isChiefEPDPorAdmin;

var isVendedor = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context22.sent;
            _context22.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context22.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context22.next = 14;
              break;
            }

            if (!(roles[i].name === 'Vendedor')) {
              _context22.next = 11;
              break;
            }

            next();
            return _context22.abrupt("return");

          case 11:
            i++;
            _context22.next = 7;
            break;

          case 14:
            return _context22.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Vendedor'
            }));

          case 15:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function isVendedor(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

exports.isVendedor = isVendedor;

var isExecutiveMaf = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context23.sent;
            _context23.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context23.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context23.next = 14;
              break;
            }

            if (!(roles[i].name === 'Ejecutivo-MAF')) {
              _context23.next = 11;
              break;
            }

            next();
            return _context23.abrupt("return");

          case 11:
            i++;
            _context23.next = 7;
            break;

          case 14:
            return _context23.abrupt("return", res.status(403).json({
              message: 'Requiere permiso del Ejecutivo MAF'
            }));

          case 15:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function isExecutiveMaf(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

exports.isExecutiveMaf = isExecutiveMaf;

var isChiefADVOrChiefPlaneamientoOrAdministrador = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context24.sent;
            _context24.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context24.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context24.next = 14;
              break;
            }

            if (!(roles[i].name === 'Jefe-ADV' || roles[i].name === 'Jefe-Planeamiento-Comercial' || roles[i].name === 'Administrador')) {
              _context24.next = 11;
              break;
            }

            next();
            return _context24.abrupt("return");

          case 11:
            i++;
            _context24.next = 7;
            break;

          case 14:
            return _context24.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Jefe-ADV || Jefe-Planeamiento-Comercial || Administrador'
            }));

          case 15:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function isChiefADVOrChiefPlaneamientoOrAdministrador(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();

exports.isChiefADVOrChiefPlaneamientoOrAdministrador = isChiefADVOrChiefPlaneamientoOrAdministrador;

var isAdministradorOrAsistantComercial = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res, next) {
    var user, roles, i;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return _User.default.findById(req.userId);

          case 2:
            user = _context25.sent;
            _context25.next = 5;
            return _Role.default.find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context25.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context25.next = 14;
              break;
            }

            if (!(roles[i].name === 'Asistente-Comercial' || roles[i].name === 'Administrador')) {
              _context25.next = 11;
              break;
            }

            next();
            return _context25.abrupt("return");

          case 11:
            i++;
            _context25.next = 7;
            break;

          case 14:
            return _context25.abrupt("return", res.status(403).json({
              message: 'Requiere permiso de Asistente Comercial || Administrador'
            }));

          case 15:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function isAdministradorOrAsistantComercial(_x73, _x74, _x75) {
    return _ref25.apply(this, arguments);
  };
}();

exports.isAdministradorOrAsistantComercial = isAdministradorOrAsistantComercial;
//# sourceMappingURL=auth.jwt.js.map