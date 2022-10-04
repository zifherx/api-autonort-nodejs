"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Tasacion = _interopRequireDefault(require("../models/Tasacion"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _User = _interopRequireDefault(require("../models/User"));

var _Tecnico = _interopRequireDefault(require("../models/Tecnico"));

var _AServicios = _interopRequireDefault(require("../models/AServicios"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _ModeloTasaciones = _interopRequireDefault(require("../models/ModeloTasaciones"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _OrigenConcesionario = _interopRequireDefault(require("../models/OrigenConcesionario"));

var _MetodoAtencion = _interopRequireDefault(require("../models/MetodoAtencion"));

var _StatusTasacion = _interopRequireDefault(require("../models/StatusTasacion"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var tasacionCtrl = {};

tasacionCtrl.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tasacion.default.find().sort({
              fecha_operacion: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: "No existen Tasaciones"
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

tasacionCtrl.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var tasacionId, query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tasacion.default.findById(tasacionId).sort({
              fecha_operacion: -1
            }).populate({
              path: "cliente",
              select: "name document typeDocument email cellphone representanteLegal"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "auto",
              select: "name avatar marca",
              populate: {
                path: "marca",
                select: "avatar name"
              }
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 4:
            query = _context2.sent;

            if (!query) {
              _context2.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existe la Tasación"
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

tasacionCtrl.getAllByTasador = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, status_tasacion, createdBy, userFound, query;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, status_tasacion = _req$body.status_tasacion, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            _context3.next = 4;
            return _User.default.findOne({
              username: createdBy
            });

          case 4:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 7:
            _context3.next = 9;
            return _Tasacion.default.find({
              status_tasacion: {
                $regex: ".*" + status_tasacion + ".*"
              },
              createdBy: userFound._id
            }).sort({
              name: 1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 9:
            query = _context3.sent;

            if (!(query.length >= 0)) {
              _context3.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context3.next = 15;
            break;

          case 14:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existen Tasaciones de ".concat(createdBy)
            }));

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 17]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

tasacionCtrl.getAllByDatesyEstado = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, estado, pendienteUsado, start, end, query;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, estado = _req$body2.estado, pendienteUsado = _req$body2.pendienteUsado, start = _req$body2.start, end = _req$body2.end;
            query = null;
            _context4.prev = 2;

            if (!(start == "" || start == undefined || start == null)) {
              _context4.next = 9;
              break;
            }

            _context4.next = 6;
            return _Tasacion.default.find({
              status_tasacion: estado,
              pasoUsados: pendienteUsado // fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },

            }).sort({
              fecha_operacion: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: 'auto',
              select: 'marca avatar name',
              populate: {
                path: 'marca',
                select: 'name avatar'
              }
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 6:
            query = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.next = 11;
            return _Tasacion.default.find({
              status_tasacion: estado,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fecha_operacion: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: 'auto',
              select: 'marca avatar name',
              populate: {
                path: 'marca',
                select: 'name avatar'
              }
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 11:
            query = _context4.sent;

          case 12:
            if (!(query.length > 0)) {
              _context4.next = 16;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context4.next = 17;
            break;

          case 16:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existen Tasaciones ".concat(estado)
            }));

          case 17:
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](2);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 19]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

tasacionCtrl.createOne = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body3, codigo_interno, cliente, marca, modelo, version, auto, placa, colorE, anioF, kilometraje, tipo_transmision, num_propietarios, precio, observacion, empresa, sucursal, sucursalE, origenTasacion, metodoTasacion, fecha_operacion, fechaIngresado, comentario, status_tasacion, estadoTasacionE, ingresoPor, asesor_venta, asesor_servicio, inspeccion_tecnica, tecnico_inspector, createdBy, obj, customerFound, colorFound, anioFound, autoFound, sucursalFound, origenFound, metodoFound, estadoFound, sellerFound, servicesFound, tecnicoFound, userFound, query;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, codigo_interno = _req$body3.codigo_interno, cliente = _req$body3.cliente, marca = _req$body3.marca, modelo = _req$body3.modelo, version = _req$body3.version, auto = _req$body3.auto, placa = _req$body3.placa, colorE = _req$body3.colorE, anioF = _req$body3.anioF, kilometraje = _req$body3.kilometraje, tipo_transmision = _req$body3.tipo_transmision, num_propietarios = _req$body3.num_propietarios, precio = _req$body3.precio, observacion = _req$body3.observacion, empresa = _req$body3.empresa, sucursal = _req$body3.sucursal, sucursalE = _req$body3.sucursalE, origenTasacion = _req$body3.origenTasacion, metodoTasacion = _req$body3.metodoTasacion, fecha_operacion = _req$body3.fecha_operacion, fechaIngresado = _req$body3.fechaIngresado, comentario = _req$body3.comentario, status_tasacion = _req$body3.status_tasacion, estadoTasacionE = _req$body3.estadoTasacionE, ingresoPor = _req$body3.ingresoPor, asesor_venta = _req$body3.asesor_venta, asesor_servicio = _req$body3.asesor_servicio, inspeccion_tecnica = _req$body3.inspeccion_tecnica, tecnico_inspector = _req$body3.tecnico_inspector, createdBy = _req$body3.createdBy;
            _context5.prev = 1;
            obj = new _Tasacion.default({
              codigo_interno: codigo_interno,
              marca: marca,
              modelo: modelo,
              version: version,
              placa: placa,
              kilometraje: kilometraje,
              tipo_transmision: tipo_transmision,
              num_propietarios: num_propietarios,
              precio: precio,
              observacion: observacion,
              empresa: empresa,
              sucursal: sucursal,
              fecha_operacion: fecha_operacion,
              fechaIngresado: fechaIngresado,
              comentario: comentario,
              status_tasacion: status_tasacion,
              ingresoPor: ingresoPor,
              inspeccion_tecnica: inspeccion_tecnica
            });
            _context5.next = 5;
            return _Customer.default.findOne({
              name: cliente
            });

          case 5:
            customerFound = _context5.sent;

            if (customerFound) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 8:
            obj.cliente = customerFound._id;
            _context5.next = 11;
            return _Colores.default.findOne({
              name: colorE
            });

          case 11:
            colorFound = _context5.sent;

            if (colorFound) {
              _context5.next = 14;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 14:
            obj.colorE = colorFound._id;
            _context5.next = 17;
            return _Anio.default.findOne({
              name: anioF
            });

          case 17:
            anioFound = _context5.sent;

            if (anioFound) {
              _context5.next = 20;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioF, " no encontrado")
            }));

          case 20:
            obj.anioF = anioFound._id;
            _context5.next = 23;
            return _ModeloTasaciones.default.findOne({
              name: auto
            });

          case 23:
            autoFound = _context5.sent;

            if (autoFound) {
              _context5.next = 26;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Modelo ".concat(auto, " no encontrado")
            }));

          case 26:
            obj.auto = autoFound._id;
            _context5.next = 29;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 29:
            sucursalFound = _context5.sent;

            if (sucursalFound) {
              _context5.next = 32;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 32:
            obj.sucursalE = sucursalFound._id;
            _context5.next = 35;
            return _OrigenConcesionario.default.findOne({
              name: origenTasacion
            });

          case 35:
            origenFound = _context5.sent;

            if (origenFound) {
              _context5.next = 38;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Origen ".concat(origenTasacion, " no encontrado")
            }));

          case 38:
            obj.origenTasacion = origenFound._id;
            _context5.next = 41;
            return _MetodoAtencion.default.findOne({
              name: metodoTasacion
            });

          case 41:
            metodoFound = _context5.sent;

            if (metodoFound) {
              _context5.next = 44;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "M\xE9todo ".concat(metodoTasacion, " no encontrado")
            }));

          case 44:
            obj.metodoTasacion = metodoFound._id;
            _context5.next = 47;
            return _StatusTasacion.default.findOne({
              name: estadoTasacionE
            });

          case 47:
            estadoFound = _context5.sent;

            if (estadoFound) {
              _context5.next = 50;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoTasacionE, " no encontrado")
            }));

          case 50:
            obj.estadoTasacionE = estadoFound._id;

            if (!asesor_venta) {
              _context5.next = 60;
              break;
            }

            _context5.next = 54;
            return _Seller.default.findOne({
              name: asesor_venta
            });

          case 54:
            sellerFound = _context5.sent;

            if (sellerFound) {
              _context5.next = 57;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Asesor venta ".concat(asesor_venta, " no encontrado")
            }));

          case 57:
            obj.asesor_venta = sellerFound._id;
            _context5.next = 61;
            break;

          case 60:
            obj.asesor_venta = null;

          case 61:
            if (!asesor_servicio) {
              _context5.next = 70;
              break;
            }

            _context5.next = 64;
            return _AServicios.default.findOne({
              name: asesor_servicio
            });

          case 64:
            servicesFound = _context5.sent;

            if (servicesFound) {
              _context5.next = 67;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Asesor servicio ".concat(asesor_servicio, " no encontrado")
            }));

          case 67:
            obj.asesor_servicio = servicesFound._id;
            _context5.next = 71;
            break;

          case 70:
            obj.asesor_servicio = null;

          case 71:
            if (!tecnico_inspector) {
              _context5.next = 80;
              break;
            }

            _context5.next = 74;
            return _Tecnico.default.findOne({
              name: tecnico_inspector
            });

          case 74:
            tecnicoFound = _context5.sent;

            if (tecnicoFound) {
              _context5.next = 77;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "T\xE9cnico ".concat(tecnico_inspector, " no encontrado")
            }));

          case 77:
            obj.tecnico_inspector = tecnicoFound._id;
            _context5.next = 81;
            break;

          case 80:
            obj.tecnico_inspector = null;

          case 81:
            _context5.next = 83;
            return _User.default.findOne({
              username: createdBy
            });

          case 83:
            userFound = _context5.sent;

            if (userFound) {
              _context5.next = 86;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 86:
            obj.createdBy = userFound._id;
            _context5.next = 89;
            return obj.save();

          case 89:
            query = _context5.sent;
            if (query) res.json({
              message: "Tasación creada con éxito"
            });
            _context5.next = 97;
            break;

          case 93:
            _context5.prev = 93;
            _context5.t0 = _context5["catch"](1);
            console.error(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 97:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 93]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

tasacionCtrl.updatedOneById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var tasacionId, _req$body4, status_tasacion, estadoTasacionE, IsProceso, fechaProceso, isHot, fechaHot, IsRechazado, fechaRechazado, IsCerrado, fechaCerrado, comentario, motivo, nro_serie_nuevo_vehiculo, modelo_nuevo_vehiculo, query, estadoFound;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _req$body4 = req.body, status_tasacion = _req$body4.status_tasacion, estadoTasacionE = _req$body4.estadoTasacionE, IsProceso = _req$body4.IsProceso, fechaProceso = _req$body4.fechaProceso, isHot = _req$body4.isHot, fechaHot = _req$body4.fechaHot, IsRechazado = _req$body4.IsRechazado, fechaRechazado = _req$body4.fechaRechazado, IsCerrado = _req$body4.IsCerrado, fechaCerrado = _req$body4.fechaCerrado, comentario = _req$body4.comentario, motivo = _req$body4.motivo, nro_serie_nuevo_vehiculo = _req$body4.nro_serie_nuevo_vehiculo, modelo_nuevo_vehiculo = _req$body4.modelo_nuevo_vehiculo;
            query = null;
            _context6.prev = 3;
            _context6.next = 6;
            return _StatusTasacion.default.findOne({
              name: estadoTasacionE
            });

          case 6:
            estadoFound = _context6.sent;

            if (estadoFound) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoTasacionE, " no encontrado")
            }));

          case 9:
            if (!(estadoTasacionE == "EN PROCESO")) {
              _context6.next = 15;
              break;
            }

            _context6.next = 12;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              status_tasacion: status_tasacion,
              estadoTasacionE: estadoFound._id,
              IsProceso: IsProceso,
              fechaProceso: fechaProceso,
              comentario: comentario
            });

          case 12:
            query = _context6.sent;
            _context6.next = 31;
            break;

          case 15:
            if (!(estadoTasacionE == "HOT")) {
              _context6.next = 21;
              break;
            }

            _context6.next = 18;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              status_tasacion: status_tasacion,
              estadoTasacionE: estadoFound._id,
              isHot: isHot,
              fechaHot: fechaHot,
              comentario: comentario
            });

          case 18:
            query = _context6.sent;
            _context6.next = 31;
            break;

          case 21:
            if (!(estadoTasacionE == "RECHAZADO")) {
              _context6.next = 27;
              break;
            }

            _context6.next = 24;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              status_tasacion: status_tasacion,
              estadoTasacionE: estadoFound._id,
              IsRechazado: IsRechazado,
              fechaRechazado: fechaRechazado,
              motivo: motivo
            });

          case 24:
            query = _context6.sent;
            _context6.next = 31;
            break;

          case 27:
            if (!(estadoTasacionE == "CERRADO")) {
              _context6.next = 31;
              break;
            }

            _context6.next = 30;
            return _Tasacion.default.findByIdAndUpdate(tasacionId, {
              status_tasacion: status_tasacion,
              estadoTasacionE: estadoFound._id,
              IsCerrado: IsCerrado,
              fechaCerrado: fechaCerrado,
              comentario: comentario,
              nro_serie_nuevo_vehiculo: nro_serie_nuevo_vehiculo,
              modelo_nuevo_vehiculo: modelo_nuevo_vehiculo
            });

          case 30:
            query = _context6.sent;

          case 31:
            if (!query) {
              _context6.next = 35;
              break;
            }

            res.json({
              message: "Tasación actualizada con éxito"
            });
            _context6.next = 36;
            break;

          case 35:
            return _context6.abrupt("return", res.status(404).json({
              messsage: "No existe tasación a actualizar"
            }));

          case 36:
            _context6.next = 41;
            break;

          case 38:
            _context6.prev = 38;
            _context6.t0 = _context6["catch"](3);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 41:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 38]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

tasacionCtrl.deleteOneById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var tasacionId, query;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            tasacionId = req.params.tasacionId;
            _context7.prev = 1;
            _context7.next = 4;
            return _Tasacion.default.findByIdAndDelete(tasacionId);

          case 4:
            query = _context7.sent;

            if (!query) {
              _context7.next = 9;
              break;
            }

            res.json({
              message: "Tasación eliminada con éxito"
            });
            _context7.next = 10;
            break;

          case 9:
            return _context7.abrupt("return", res.status(404).json({
              message: "No existe la tasación a eliminar"
            }));

          case 10:
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 12]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

tasacionCtrl.getBySucursalFecha = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, sucursal, start, end, query;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, sucursal = _req$body5.sucursal, start = _req$body5.start, end = _req$body5.end; // console.log(req.body);

            _context8.prev = 1;
            _context8.next = 4;
            return _Tasacion.default.find({
              sucursal: {
                $regex: ".*" + sucursal + ".*"
              },
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fecha_operacion: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioF",
              select: "name"
            }).populate({
              path: "estadoTasacionE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "origenTasacion",
              select: "name"
            }).populate({
              path: "metodoTasacion",
              select: "name"
            }).populate({
              path: "asesor_venta",
              select: "name"
            }).populate({
              path: "asesor_servicio",
              select: "name"
            }).populate({
              path: "tecnico_inspector",
              select: "name"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 4:
            query = _context8.sent;

            if (query.length >= 0) {
              res.json({
                total: query.length,
                all: query
              });
            }

            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByStatus = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, sucursal = _req$body6.sucursal, start = _req$body6.start, end = _req$body6.end;
            _context9.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context9.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$status_tasacion",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context9.sent;

            if (!(query.length > 0)) {
              _context9.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context9.next = 11;
            break;

          case 10:
            return _context9.abrupt("return", res.status(201).json({
              message: "No existen Tasaciones aún"
            }));

          case 11:
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

tasacionCtrl.getCountByMetodo = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body7 = req.body, sucursal = _req$body7.sucursal, start = _req$body7.start, end = _req$body7.end;
            _context10.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context10.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$metodo",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context10.sent;

            if (!(query.length > 0)) {
              _context10.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context10.next = 11;
            break;

          case 10:
            return _context10.abrupt("return", res.status(201).json({
              message: "No existen Tasaciones aún"
            }));

          case 11:
            _context10.next = 17;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 13]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

tasacionCtrl.getCountByOrigen = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body8, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body8 = req.body, sucursal = _req$body8.sucursal, start = _req$body8.start, end = _req$body8.end;
            _context11.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context11.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$origen_operacion",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context11.sent;

            if (!(query.length > 0)) {
              _context11.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context11.next = 11;
            break;

          case 10:
            return _context11.abrupt("return", res.status(201).json({
              message: "No existen Tasaciones aún"
            }));

          case 11:
            _context11.next = 17;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 13]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByIngreso = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body9, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body9 = req.body, sucursal = _req$body9.sucursal, start = _req$body9.start, end = _req$body9.end;
            _context12.prev = 1;
            filtro = {
              sucursal: sucursal,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context12.next = 5;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$ingresoPor",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 5:
            query = _context12.sent;

            if (!(query.length > 0)) {
              _context12.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context12.next = 11;
            break;

          case 10:
            return _context12.abrupt("return", res.status(201).json({
              message: "No existen Tasaciones aún"
            }));

          case 11:
            _context12.next = 17;
            break;

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 13]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

tasacionCtrl.getRankingByVendedor = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body10, sucursal, estado, ingreso, start, end, query, filtro;

    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body10 = req.body, sucursal = _req$body10.sucursal, estado = _req$body10.estado, ingreso = _req$body10.ingreso, start = _req$body10.start, end = _req$body10.end;
            query = null;
            _context13.prev = 2;
            filtro = {
              sucursal: sucursal,
              ingresoPor: ingreso,
              status_tasacion: estado,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };

            if (!(filtro.ingresoPor == "VENTAS")) {
              _context13.next = 10;
              break;
            }

            _context13.next = 7;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$asesor_venta",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 7:
            query = _context13.sent;
            _context13.next = 13;
            break;

          case 10:
            _context13.next = 12;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$asesor_servicio",
                num_tasaciones: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_tasaciones: -1
              }
            }]);

          case 12:
            query = _context13.sent;

          case 13:
            if (!(query.length > 0)) {
              _context13.next = 17;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context13.next = 18;
            break;

          case 17:
            return _context13.abrupt("return", res.status(201).json({
              message: "No existen Tasaciones aún"
            }));

          case 18:
            _context13.next = 24;
            break;

          case 20:
            _context13.prev = 20;
            _context13.t0 = _context13["catch"](2);
            console.log(_context13.t0);
            return _context13.abrupt("return", res.status(503).json({
              message: _context13.t0.message
            }));

          case 24:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[2, 20]]);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

tasacionCtrl.getTasacionesBySeller = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body11, vendedor, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body11 = req.body, vendedor = _req$body11.vendedor, start = _req$body11.start, end = _req$body11.end;
            _context14.prev = 1;
            _context14.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context14.sent;

            if (sellerFound) {
              _context14.next = 7;
              break;
            }

            return _context14.abrupt("return", res.status(404).json({
              message: "No existe el vendedor"
            }));

          case 7:
            filtro = {
              asesor_venta: sellerFound._id,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context14.next = 10;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$status_tasacion",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context14.sent;

            if (!(query.length > 0)) {
              _context14.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context14.next = 16;
            break;

          case 15:
            return _context14.abrupt("return", res.status(201).json({
              message: "Vendedor no ingresó ninguna tasación"
            }));

          case 16:
            _context14.next = 22;
            break;

          case 18:
            _context14.prev = 18;
            _context14.t0 = _context14["catch"](1);
            console.log(err.message);
            return _context14.abrupt("return", res.status(503).json({
              message: err.message
            }));

          case 22:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 18]]);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

tasacionCtrl.getTasacionesByAdvisor = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body12, servicios, start, end, advisorFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body12 = req.body, servicios = _req$body12.servicios, start = _req$body12.start, end = _req$body12.end;
            _context15.prev = 1;
            _context15.next = 4;
            return _AServicios.default.findOne({
              name: servicios
            });

          case 4:
            advisorFound = _context15.sent;

            if (advisorFound) {
              _context15.next = 7;
              break;
            }

            return _context15.abrupt("return", res.status(404).json({
              message: "No existe el asesor de servicios"
            }));

          case 7:
            filtro = {
              asesor_servicio: advisorFound._id,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context15.next = 10;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$status_tasacion",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context15.sent;

            if (!(query.length > 0)) {
              _context15.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context15.next = 16;
            break;

          case 15:
            return _context15.abrupt("return", res.status(201).json({
              message: "Vendedor no ingresó ninguna tasación"
            }));

          case 16:
            _context15.next = 22;
            break;

          case 18:
            _context15.prev = 18;
            _context15.t0 = _context15["catch"](1);
            console.log(err.message);
            return _context15.abrupt("return", res.status(503).json({
              message: err.message
            }));

          case 22:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 18]]);
  }));

  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

tasacionCtrl.getVehiclesByVentas = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var _req$body13, asesor, estado, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$body13 = req.body, asesor = _req$body13.asesor, estado = _req$body13.estado, start = _req$body13.start, end = _req$body13.end;
            _context16.prev = 1;
            _context16.next = 4;
            return _Seller.default.findOne({
              name: asesor
            });

          case 4:
            sellerFound = _context16.sent;

            if (sellerFound) {
              _context16.next = 7;
              break;
            }

            return _context16.abrupt("return", res.status(404).json({
              message: "No existe el vendedor"
            }));

          case 7:
            filtro = {
              asesor_venta: sellerFound._id,
              status_tasacion: estado,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context16.next = 10;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$modelo",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context16.sent;

            if (!(query.length > 0)) {
              _context16.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context16.next = 16;
            break;

          case 15:
            return _context16.abrupt("return", res.status(201).json({
              message: "Vendedor no ingresó ninguna solicitud"
            }));

          case 16:
            _context16.next = 22;
            break;

          case 18:
            _context16.prev = 18;
            _context16.t0 = _context16["catch"](1);
            console.log(_context16.t0.message);
            return _context16.abrupt("return", res.status(503).json({
              message: _context16.t0.message
            }));

          case 22:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[1, 18]]);
  }));

  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

tasacionCtrl.getVehiclesByServicios = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$body14, asesor, estado, start, end, advisorFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$body14 = req.body, asesor = _req$body14.asesor, estado = _req$body14.estado, start = _req$body14.start, end = _req$body14.end;
            _context17.prev = 1;
            _context17.next = 4;
            return _AServicios.default.findOne({
              name: asesor
            });

          case 4:
            advisorFound = _context17.sent;

            if (advisorFound) {
              _context17.next = 7;
              break;
            }

            return _context17.abrupt("return", res.status(404).json({
              message: "No existe el asesor de servicios"
            }));

          case 7:
            filtro = {
              asesor_servicio: advisorFound._id,
              status_tasacion: estado,
              fecha_operacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context17.next = 10;
            return _Tasacion.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$modelo",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context17.sent;

            if (!(query.length > 0)) {
              _context17.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context17.next = 16;
            break;

          case 15:
            return _context17.abrupt("return", res.status(201).json({
              message: "Vendedor no ingresó ninguna solicitud"
            }));

          case 16:
            _context17.next = 22;
            break;

          case 18:
            _context17.prev = 18;
            _context17.t0 = _context17["catch"](1);
            console.log(_context17.t0.message);
            return _context17.abrupt("return", res.status(503).json({
              message: _context17.t0.message
            }));

          case 22:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 18]]);
  }));

  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}(); //Nuevos


tasacionCtrl.getCounterByEstado = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var estado, query;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            estado = req.body.estado;
            _context18.prev = 1;
            _context18.next = 4;
            return _Tasacion.default.find({
              status_tasacion: estado
            }).countDocuments();

          case 4:
            query = _context18.sent;
            if (query >= 0) res.json({
              total: query
            });
            _context18.next = 12;
            break;

          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](1);
            console.log(_context18.t0.message);
            return _context18.abrupt("return", res.status(503).json({
              message: _context18.t0.message
            }));

          case 12:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 8]]);
  }));

  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

var _default = tasacionCtrl;
exports.default = _default;
//# sourceMappingURL=tasacion.controller.js.map