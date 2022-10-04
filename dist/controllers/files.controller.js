"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Sale = _interopRequireDefault(require("../models/Sale"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Ubicacion = _interopRequireDefault(require("../models/Ubicacion"));

var _Financiamiento = _interopRequireDefault(require("../models/Financiamiento"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var _Campania = _interopRequireDefault(require("../models/Campania"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _Operacion = _interopRequireDefault(require("../models/Operacion"));

var _TipoComprobante = _interopRequireDefault(require("../models/TipoComprobante"));

var _Situacion = _interopRequireDefault(require("../models/Situacion"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _StatusFacturacion = _interopRequireDefault(require("../models/StatusFacturacion"));

var _User = _interopRequireDefault(require("../models/User"));

var _AccesorioE = _interopRequireDefault(require("../models/AccesorioE"));

var _CondicionAccesorio = _interopRequireDefault(require("../models/CondicionAccesorio"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Condicion = _interopRequireDefault(require("../models/Condicion"));

var _LogFile = _interopRequireDefault(require("../models/LogFile"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var fileController = {};

fileController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Sale.default.find().sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal avatar sucursalE",
              populate: {
                path: "sucursalE",
                select: "name"
              }
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            }).populate({
              path: "createdBy",
              select: "name username",
              strictPopulate: true
            });

          case 3:
            query = _context.sent;

            if (!(query.length > 0)) {
              _context.next = 8;
              break;
            }

            res.json({
              total: query,
              all: query
            });
            _context.next = 9;
            break;

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: "No existen expedientes"
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 15:
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

fileController.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var itemId, query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            itemId = req.params.itemId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Sale.default.findById(itemId).populate({
              path: "vendedor",
              select: "name sucursal"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "solicitudMAF",
              select: "nro_solicitud fecha_ingreso customer",
              populate: {
                path: "customer",
                select: "name document"
              }
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "campaniasTDPE",
              select: "cod_interno descripcion tipo oferta",
              populate: {
                path: "tipo",
                select: "name"
              }
            }).populate({
              path: "campaniasMafE",
              select: "cod_interno descripcion tipo oferta",
              populate: {
                path: "tipo",
                select: "name"
              }
            }).populate({
              path: "accesoriosE",
              select: "cod_interno name model precio",
              populate: {
                path: "model",
                select: "name"
              }
            }).populate({
              path: "condicionAccesorioE",
              select: "name"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            }).populate({
              path: "createdBy",
              select: "name username",
              strictPopulate: false
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
              message: err.message
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 16:
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

fileController.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, vendedor, cliente, auto, serie_tdp, colorE, precio, anioFabricacionE, anioModeloE, ubicacionVehiculoE, estadoVehiculoE, fecha_ciguena, fecha_entrega, financiamientoE, bancoE, solicitudMAF, adelantosE, campaniasTDPE, ofertaTDPE, campaniasMafE, ofertaMafE, isToyotaValue, arrayToyotaValues, descuento_autonort, acuerdoTDP, herramientas_tdp, herramientas_maf, observacion_adv, accesoriosE, condicionAccesorioE, condicion_accesorios, tipoOperacionE, tipoComprobanteE, nro_comprobante, fecha_comprobante, sucursal_venta, sucursalE, estadoVentaE, estatus_venta, fecha_cancelacion, fecha_facturacion_tdp, estadoFacturacionE, monto_facturado, isReportado, fechaReporte, mesReportado, createdBy, fechaCreacionS, newSale, sellerFound, carFound, customerFound, colorFound, anioFFound, anioMFound, ubicacionFound, estadoVehicularFound, financiamientoFound, bancoFound, mafFound, campaniaTDPFound, campaniaMAFFound, operacionFound, userFound, comprobanteFound, condicionFound, sucursalFound, situacionFound, facturacionFound, accesorioFound, query, newLog, logQuery;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, vendedor = _req$body.vendedor, cliente = _req$body.cliente, auto = _req$body.auto, serie_tdp = _req$body.serie_tdp, colorE = _req$body.colorE, precio = _req$body.precio, anioFabricacionE = _req$body.anioFabricacionE, anioModeloE = _req$body.anioModeloE, ubicacionVehiculoE = _req$body.ubicacionVehiculoE, estadoVehiculoE = _req$body.estadoVehiculoE, fecha_ciguena = _req$body.fecha_ciguena, fecha_entrega = _req$body.fecha_entrega, financiamientoE = _req$body.financiamientoE, bancoE = _req$body.bancoE, solicitudMAF = _req$body.solicitudMAF, adelantosE = _req$body.adelantosE, campaniasTDPE = _req$body.campaniasTDPE, ofertaTDPE = _req$body.ofertaTDPE, campaniasMafE = _req$body.campaniasMafE, ofertaMafE = _req$body.ofertaMafE, isToyotaValue = _req$body.isToyotaValue, arrayToyotaValues = _req$body.arrayToyotaValues, descuento_autonort = _req$body.descuento_autonort, acuerdoTDP = _req$body.acuerdoTDP, herramientas_tdp = _req$body.herramientas_tdp, herramientas_maf = _req$body.herramientas_maf, observacion_adv = _req$body.observacion_adv, accesoriosE = _req$body.accesoriosE, condicionAccesorioE = _req$body.condicionAccesorioE, condicion_accesorios = _req$body.condicion_accesorios, tipoOperacionE = _req$body.tipoOperacionE, tipoComprobanteE = _req$body.tipoComprobanteE, nro_comprobante = _req$body.nro_comprobante, fecha_comprobante = _req$body.fecha_comprobante, sucursal_venta = _req$body.sucursal_venta, sucursalE = _req$body.sucursalE, estadoVentaE = _req$body.estadoVentaE, estatus_venta = _req$body.estatus_venta, fecha_cancelacion = _req$body.fecha_cancelacion, fecha_facturacion_tdp = _req$body.fecha_facturacion_tdp, estadoFacturacionE = _req$body.estadoFacturacionE, monto_facturado = _req$body.monto_facturado, isReportado = _req$body.isReportado, fechaReporte = _req$body.fechaReporte, mesReportado = _req$body.mesReportado, createdBy = _req$body.createdBy, fechaCreacionS = _req$body.fechaCreacionS;
            _context3.prev = 1;
            newSale = new _Sale.default({
              serie_tdp: serie_tdp,
              precio: precio,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              sucursal_venta: sucursal_venta,
              fechaCreacionS: fechaCreacionS
            }); //Seller Obligado

            _context3.next = 5;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 5:
            sellerFound = _context3.sent;

            if (sellerFound) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(vendedor, " no encontrado")
            }));

          case 8:
            newSale.vendedor = sellerFound._id; //Vehicle Obligado

            _context3.next = 11;
            return _Vehicle.default.findOne({
              cod_tdp: auto
            });

          case 11:
            carFound = _context3.sent;

            if (carFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(auto, " no encontrado")
            }));

          case 14:
            newSale.auto = carFound._id; //Customer Obligado

            _context3.next = 17;
            return _Customer.default.findOne({
              document: cliente
            });

          case 17:
            customerFound = _context3.sent;

            if (customerFound) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 20:
            newSale.cliente = customerFound._id; //Item Null

            if (!(colorE == null || colorE == undefined || colorE == "")) {
              _context3.next = 25;
              break;
            }

            newSale.colorE = null;
            _context3.next = 31;
            break;

          case 25:
            _context3.next = 27;
            return _Colores.default.findOne({
              name: colorE
            });

          case 27:
            colorFound = _context3.sent;

            if (colorFound) {
              _context3.next = 30;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(colorE, " no encontrado")
            }));

          case 30:
            newSale.colorE = colorFound._id;

          case 31:
            if (!(anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "")) {
              _context3.next = 35;
              break;
            }

            newSale.anioFabricacionE = null;
            _context3.next = 41;
            break;

          case 35:
            _context3.next = 37;
            return _Anio.default.findOne({
              name: anioFabricacionE
            });

          case 37:
            anioFFound = _context3.sent;

            if (anioFFound) {
              _context3.next = 40;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "A\xF1o Fabricaci\xF3n ".concat(anioFabricacionE, " no encontrado")
            }));

          case 40:
            newSale.anioFabricacionE = anioFFound._id;

          case 41:
            if (!(anioModeloE == null || anioModeloE == undefined || anioModeloE == "")) {
              _context3.next = 45;
              break;
            }

            newSale.anioModeloE = null;
            _context3.next = 51;
            break;

          case 45:
            _context3.next = 47;
            return _Anio.default.findOne({
              name: anioModeloE
            });

          case 47:
            anioMFound = _context3.sent;

            if (anioMFound) {
              _context3.next = 50;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "A\xF1o Modelo ".concat(anioModeloE, " no encontrado")
            }));

          case 50:
            newSale.anioModeloE = anioMFound._id;

          case 51:
            if (!(ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "")) {
              _context3.next = 55;
              break;
            }

            newSale.ubicacionVehiculoE = null;
            _context3.next = 61;
            break;

          case 55:
            _context3.next = 57;
            return _Ubicacion.default.findOne({
              name: ubicacionVehiculoE
            });

          case 57:
            ubicacionFound = _context3.sent;

            if (ubicacionFound) {
              _context3.next = 60;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Ubicaci\xF3n ".concat(ubicacionVehiculoE, " no encontrado")
            }));

          case 60:
            newSale.ubicacionVehiculoE = ubicacionFound._id;

          case 61:
            _context3.next = 63;
            return _Condicion.default.findOne({
              name: estadoVehiculoE
            });

          case 63:
            estadoVehicularFound = _context3.sent;

            if (estadoVehicularFound) {
              _context3.next = 66;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Estado vehicular ".concat(estadoVehiculoE, " no encontrado")
            }));

          case 66:
            newSale.estadoVehiculoE = estadoVehicularFound._id; //Item Null

            if (!(financiamientoE == null || financiamientoE == undefined || financiamientoE == "")) {
              _context3.next = 71;
              break;
            }

            newSale.financiamientoE = null;
            _context3.next = 77;
            break;

          case 71:
            _context3.next = 73;
            return _Financiamiento.default.findOne({
              name: financiamientoE
            });

          case 73:
            financiamientoFound = _context3.sent;

            if (financiamientoFound) {
              _context3.next = 76;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Financiamiento ".concat(financiamientoE, " no encontrado")
            }));

          case 76:
            newSale.financiamientoE = financiamientoFound._id;

          case 77:
            if (!(bancoE == null || bancoE == undefined || bancoE == "")) {
              _context3.next = 81;
              break;
            }

            newSale.bancoE = null;
            _context3.next = 87;
            break;

          case 81:
            _context3.next = 83;
            return _Banco.default.findOne({
              name: bancoE
            });

          case 83:
            bancoFound = _context3.sent;

            if (bancoFound) {
              _context3.next = 86;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Banco ".concat(bancoE, " no encontrado")
            }));

          case 86:
            newSale.bancoE = bancoFound._id;

          case 87:
            if (!(solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "")) {
              _context3.next = 91;
              break;
            }

            newSale.solicitudMAF = null;
            _context3.next = 97;
            break;

          case 91:
            _context3.next = 93;
            return _Maf.default.findOne({
              nro_solicitud: solicitudMAF
            });

          case 93:
            mafFound = _context3.sent;

            if (mafFound) {
              _context3.next = 96;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Solicitud ".concat(solicitudMAF, " no encontrada")
            }));

          case 96:
            newSale.solicitudMAF = mafFound._id;

          case 97:
            _context3.next = 99;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasTDPE
              }
            });

          case 99:
            campaniaTDPFound = _context3.sent;

            if (campaniaTDPFound) {
              _context3.next = 102;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasTDPE, " no encontrada")
            }));

          case 102:
            newSale.campaniasTDPE = campaniaTDPFound.map(function (a) {
              return a._id;
            });
            _context3.next = 105;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasMafE
              }
            });

          case 105:
            campaniaMAFFound = _context3.sent;

            if (campaniaMAFFound) {
              _context3.next = 108;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Campa\xF1a MAF ".concat(campaniasMafE, " no encontrada")
            }));

          case 108:
            newSale.campaniasMafE = campaniaMAFFound.map(function (a) {
              return a._id;
            }); //Operacion obligada

            _context3.next = 111;
            return _Operacion.default.findOne({
              name: tipoOperacionE
            });

          case 111:
            operacionFound = _context3.sent;

            if (operacionFound) {
              _context3.next = 114;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo operaci\xF3n ".concat(tipoOperacionE, " no encontrada")
            }));

          case 114:
            newSale.tipoOperacionE = operacionFound._id; //User Obligado

            _context3.next = 117;
            return _User.default.findOne({
              username: createdBy
            });

          case 117:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 120;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Colaborador ".concat(createdBy, " no encontrado")
            }));

          case 120:
            newSale.createdBy = userFound._id; //Item Null

            if (!(tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "")) {
              _context3.next = 125;
              break;
            }

            newSale.tipoComprobanteE = null;
            _context3.next = 131;
            break;

          case 125:
            _context3.next = 127;
            return _TipoComprobante.default.findOne({
              name: tipoComprobanteE
            });

          case 127:
            comprobanteFound = _context3.sent;

            if (comprobanteFound) {
              _context3.next = 130;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo comprobante ".concat(tipoComprobanteE, " no encontrado")
            }));

          case 130:
            newSale.tipoComprobanteE = comprobanteFound._id;

          case 131:
            if (!(condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "")) {
              _context3.next = 135;
              break;
            }

            newSale.condicionAccesorioE = null;
            _context3.next = 141;
            break;

          case 135:
            _context3.next = 137;
            return _CondicionAccesorio.default.findOne({
              name: condicionAccesorioE
            });

          case 137:
            condicionFound = _context3.sent;

            if (condicionFound) {
              _context3.next = 140;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Condici\xF3n accesorio ".concat(condicionAccesorioE, " no encontrada")
            }));

          case 140:
            newSale.condicionAccesorioE = condicionFound._id;

          case 141:
            _context3.next = 143;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 143:
            sucursalFound = _context3.sent;

            if (sucursalFound) {
              _context3.next = 146;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 146:
            newSale.sucursalE = sucursalFound._id; //Situacion Obligado

            _context3.next = 149;
            return _Situacion.default.findOne({
              name: estadoVentaE
            });

          case 149:
            situacionFound = _context3.sent;

            if (situacionFound) {
              _context3.next = 152;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Estado de Venta ".concat(estadoVentaE, " no encontrado")
            }));

          case 152:
            newSale.estadoVentaE = situacionFound._id; //Item Null

            if (!(estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "")) {
              _context3.next = 157;
              break;
            }

            newSale.estadoFacturacionE = null;
            _context3.next = 163;
            break;

          case 157:
            _context3.next = 159;
            return _StatusFacturacion.default.findOne({
              name: estadoFacturacionE
            });

          case 159:
            facturacionFound = _context3.sent;

            if (facturacionFound) {
              _context3.next = 162;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Estado de Venta ".concat(estadoFacturacionE, " no encontrado")
            }));

          case 162:
            newSale.estadoFacturacionE = facturacionFound._id;

          case 163:
            _context3.next = 165;
            return _AccesorioE.default.find({
              cod_interno: {
                $in: accesoriosE
              }
            });

          case 165:
            accesorioFound = _context3.sent;

            if (accesorioFound) {
              _context3.next = 168;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Accesorio ".concat(accesoriosE, " no encontrado")
            }));

          case 168:
            newSale.accesoriosE = accesorioFound.map(function (a) {
              return a._id;
            });
            _context3.next = 171;
            return newSale.save();

          case 171:
            query = _context3.sent;

            if (!query) {
              _context3.next = 180;
              break;
            }

            _context3.next = 175;
            return (0, _LogFile.default)({
              cod_interno: new Date().getTime(),
              file_id: query._id,
              modifiedBy: query.createdBy,
              action: "Usuario ".concat(createdBy, " ha creado nuevo expediente"),
              timeAt: query.fechaCreacionS
            });

          case 175:
            newLog = _context3.sent;
            _context3.next = 178;
            return newLog.save();

          case 178:
            logQuery = _context3.sent;
            res.json({
              message: "Expediente creado con éxito"
            });

          case 180:
            _context3.next = 186;
            break;

          case 182:
            _context3.prev = 182;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 186:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 182]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

fileController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var itemId, _req$body2, vendedor, cliente, auto, serie_tdp, colorE, precio, anioFabricacionE, anioModeloE, ubicacionVehiculoE, ubicacion_vehiculo, estadoVehiculoE, estatus_vehiculo, fecha_ciguena, fecha_entrega, financiamientoE, bancoE, solicitudMAF, adelantosE, campaniasTDPE, ofertaTDPE, campaniasMafE, ofertaMafE, isToyotaValue, arrayToyotaValues, descuento_autonort, acuerdoTDP, herramientas_tdp, herramientas_maf, observacion_adv, accesoriosE, condicion_accesorios, condicionAccesorioE, tipoOperacionE, tipoComprobanteE, nro_comprobante, fecha_comprobante, sucursal_venta, sucursalE, estadoVentaE, fecha_cancelacion, estatus_venta, fecha_facturacion_tdp, estadoFacturacionE, monto_facturado, isReportado, fechaReporte, mesReportado, updatedBy, isLibreS, fechaLibreS, isDevolucionS, fechaDevolucionS, isCreditoS, fechaCreditoS, isTestDrive, fechaTestDriveS, isBloqueadoS, fechaBloqueadoS, isStandByS, fechaStandByS, isReservadoS, fechaReservadoS, isReservadoCS, fechaReservadoCS, isReservadoLS, fechaReservadoLS, isEsperaS, fechaEsperaS, isFacturadoS, fechaFacturadoS, isAnticipoS, fechaAnticipoS, isDesembolsarS, fechaDesembolsarS, isExhibicionS, fechaExhibicionS, isCanceladoS, fechaCanceladoS, isCanceladoPTS, fechaCanceladoPTS, isEPDPS, fechaEPDPS, colorNull, anioFNull, anioMNull, ubicacionNull, financiamientoNull, bancoNull, solicitudNull, condicionAccNull, comprobanteNull, facturacionNull, query, sellerFound, customerFound, autoFound, estadoVehicularFound, operacionFound, sucursalFound, situacionFound, userFound, colorFound, anioFound, _anioFound, ubicacionFound, financiamientoFound, bancoFound, mafFound, campaniaTDPFound, campaniaMAFFound, accesoriosFound, condicionFound, comprobanteFound, facturacionFound, newLog, logQuery;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            itemId = req.params.itemId;
            _req$body2 = req.body, vendedor = _req$body2.vendedor, cliente = _req$body2.cliente, auto = _req$body2.auto, serie_tdp = _req$body2.serie_tdp, colorE = _req$body2.colorE, precio = _req$body2.precio, anioFabricacionE = _req$body2.anioFabricacionE, anioModeloE = _req$body2.anioModeloE, ubicacionVehiculoE = _req$body2.ubicacionVehiculoE, ubicacion_vehiculo = _req$body2.ubicacion_vehiculo, estadoVehiculoE = _req$body2.estadoVehiculoE, estatus_vehiculo = _req$body2.estatus_vehiculo, fecha_ciguena = _req$body2.fecha_ciguena, fecha_entrega = _req$body2.fecha_entrega, financiamientoE = _req$body2.financiamientoE, bancoE = _req$body2.bancoE, solicitudMAF = _req$body2.solicitudMAF, adelantosE = _req$body2.adelantosE, campaniasTDPE = _req$body2.campaniasTDPE, ofertaTDPE = _req$body2.ofertaTDPE, campaniasMafE = _req$body2.campaniasMafE, ofertaMafE = _req$body2.ofertaMafE, isToyotaValue = _req$body2.isToyotaValue, arrayToyotaValues = _req$body2.arrayToyotaValues, descuento_autonort = _req$body2.descuento_autonort, acuerdoTDP = _req$body2.acuerdoTDP, herramientas_tdp = _req$body2.herramientas_tdp, herramientas_maf = _req$body2.herramientas_maf, observacion_adv = _req$body2.observacion_adv, accesoriosE = _req$body2.accesoriosE, condicion_accesorios = _req$body2.condicion_accesorios, condicionAccesorioE = _req$body2.condicionAccesorioE, tipoOperacionE = _req$body2.tipoOperacionE, tipoComprobanteE = _req$body2.tipoComprobanteE, nro_comprobante = _req$body2.nro_comprobante, fecha_comprobante = _req$body2.fecha_comprobante, sucursal_venta = _req$body2.sucursal_venta, sucursalE = _req$body2.sucursalE, estadoVentaE = _req$body2.estadoVentaE, fecha_cancelacion = _req$body2.fecha_cancelacion, estatus_venta = _req$body2.estatus_venta, fecha_facturacion_tdp = _req$body2.fecha_facturacion_tdp, estadoFacturacionE = _req$body2.estadoFacturacionE, monto_facturado = _req$body2.monto_facturado, isReportado = _req$body2.isReportado, fechaReporte = _req$body2.fechaReporte, mesReportado = _req$body2.mesReportado, updatedBy = _req$body2.updatedBy, isLibreS = _req$body2.isLibreS, fechaLibreS = _req$body2.fechaLibreS, isDevolucionS = _req$body2.isDevolucionS, fechaDevolucionS = _req$body2.fechaDevolucionS, isCreditoS = _req$body2.isCreditoS, fechaCreditoS = _req$body2.fechaCreditoS, isTestDrive = _req$body2.isTestDrive, fechaTestDriveS = _req$body2.fechaTestDriveS, isBloqueadoS = _req$body2.isBloqueadoS, fechaBloqueadoS = _req$body2.fechaBloqueadoS, isStandByS = _req$body2.isStandByS, fechaStandByS = _req$body2.fechaStandByS, isReservadoS = _req$body2.isReservadoS, fechaReservadoS = _req$body2.fechaReservadoS, isReservadoCS = _req$body2.isReservadoCS, fechaReservadoCS = _req$body2.fechaReservadoCS, isReservadoLS = _req$body2.isReservadoLS, fechaReservadoLS = _req$body2.fechaReservadoLS, isEsperaS = _req$body2.isEsperaS, fechaEsperaS = _req$body2.fechaEsperaS, isFacturadoS = _req$body2.isFacturadoS, fechaFacturadoS = _req$body2.fechaFacturadoS, isAnticipoS = _req$body2.isAnticipoS, fechaAnticipoS = _req$body2.fechaAnticipoS, isDesembolsarS = _req$body2.isDesembolsarS, fechaDesembolsarS = _req$body2.fechaDesembolsarS, isExhibicionS = _req$body2.isExhibicionS, fechaExhibicionS = _req$body2.fechaExhibicionS, isCanceladoS = _req$body2.isCanceladoS, fechaCanceladoS = _req$body2.fechaCanceladoS, isCanceladoPTS = _req$body2.isCanceladoPTS, fechaCanceladoPTS = _req$body2.fechaCanceladoPTS, isEPDPS = _req$body2.isEPDPS, fechaEPDPS = _req$body2.fechaEPDPS; // Opcionales

            colorNull = null;
            anioFNull = null;
            anioMNull = null;
            ubicacionNull = null;
            financiamientoNull = null;
            bancoNull = null;
            solicitudNull = null;
            condicionAccNull = null;
            comprobanteNull = null;
            facturacionNull = null;
            query = null;
            _context4.prev = 13;
            _context4.next = 16;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 16:
            sellerFound = _context4.sent;

            if (sellerFound) {
              _context4.next = 19;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(vendedor, " no encontrado")
            }));

          case 19:
            _context4.next = 21;
            return _Customer.default.findOne({
              document: cliente
            });

          case 21:
            customerFound = _context4.sent;

            if (customerFound) {
              _context4.next = 24;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 24:
            _context4.next = 26;
            return _Vehicle.default.findOne({
              cod_tdp: auto
            });

          case 26:
            autoFound = _context4.sent;

            if (autoFound) {
              _context4.next = 29;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(auto, " no encontrado")
            }));

          case 29:
            _context4.next = 31;
            return _Condicion.default.findOne({
              name: estadoVehiculoE
            });

          case 31:
            estadoVehicularFound = _context4.sent;

            if (estadoVehicularFound) {
              _context4.next = 34;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Condici\xF3n ".concat(estadoVehiculoE, " no encontrado")
            }));

          case 34:
            _context4.next = 36;
            return _Operacion.default.findOne({
              name: tipoOperacionE
            });

          case 36:
            operacionFound = _context4.sent;

            if (operacionFound) {
              _context4.next = 39;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Operaci\xF3n ".concat(tipoOperacionE, " no encontrado")
            }));

          case 39:
            _context4.next = 41;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 41:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 44;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 44:
            _context4.next = 46;
            return _Situacion.default.findOne({
              name: estadoVentaE
            });

          case 46:
            situacionFound = _context4.sent;

            if (situacionFound) {
              _context4.next = 49;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Estado de venta ".concat(estadoVentaE, " no encontrado")
            }));

          case 49:
            _context4.next = 51;
            return _User.default.findOne({
              username: updatedBy
            });

          case 51:
            userFound = _context4.sent;

            if (situacionFound) {
              _context4.next = 54;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(updatedBy, " no encontrado")
            }));

          case 54:
            if (!(colorE == null || colorE == undefined || colorE == "")) {
              _context4.next = 58;
              break;
            }

            colorNull = null;
            _context4.next = 64;
            break;

          case 58:
            _context4.next = 60;
            return _Colores.default.findOne({
              name: colorE
            });

          case 60:
            colorFound = _context4.sent;

            if (colorFound) {
              _context4.next = 63;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 63:
            colorNull = colorFound._id;

          case 64:
            if (!(anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "")) {
              _context4.next = 68;
              break;
            }

            anioFNull = null;
            _context4.next = 74;
            break;

          case 68:
            _context4.next = 70;
            return _Anio.default.findOne({
              name: anioFabricacionE
            });

          case 70:
            anioFound = _context4.sent;

            if (anioFound) {
              _context4.next = 73;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioFabricacionE, " no encontrado")
            }));

          case 73:
            anioFNull = anioFound._id;

          case 74:
            if (!(anioModeloE == null || anioModeloE == undefined || anioModeloE == "")) {
              _context4.next = 78;
              break;
            }

            anioMNull = null;
            _context4.next = 84;
            break;

          case 78:
            _context4.next = 80;
            return _Anio.default.findOne({
              name: anioModeloE
            });

          case 80:
            _anioFound = _context4.sent;

            if (_anioFound) {
              _context4.next = 83;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioModeloE, " no encontrado")
            }));

          case 83:
            anioMNull = _anioFound._id;

          case 84:
            if (!(ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "")) {
              _context4.next = 88;
              break;
            }

            ubicacionNull = null;
            _context4.next = 94;
            break;

          case 88:
            _context4.next = 90;
            return _Ubicacion.default.findOne({
              name: ubicacionVehiculoE
            });

          case 90:
            ubicacionFound = _context4.sent;

            if (ubicacionFound) {
              _context4.next = 93;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Ubicaci\xF3n ".concat(ubicacionVehiculoE, " no encontrada")
            }));

          case 93:
            ubicacionNull = ubicacionFound._id;

          case 94:
            if (!(financiamientoE == null || financiamientoE == undefined || financiamientoE == "")) {
              _context4.next = 98;
              break;
            }

            financiamientoNull = null;
            _context4.next = 104;
            break;

          case 98:
            _context4.next = 100;
            return _Financiamiento.default.findOne({
              name: financiamientoE
            });

          case 100:
            financiamientoFound = _context4.sent;

            if (financiamientoFound) {
              _context4.next = 103;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Financiamiento ".concat(financiamientoE, " no encontrado")
            }));

          case 103:
            financiamientoNull = financiamientoFound._id;

          case 104:
            if (!(bancoE == null || bancoE == undefined || bancoE == "")) {
              _context4.next = 108;
              break;
            }

            bancoNull = null;
            _context4.next = 114;
            break;

          case 108:
            _context4.next = 110;
            return _Banco.default.findOne({
              name: bancoE
            });

          case 110:
            bancoFound = _context4.sent;

            if (bancoFound) {
              _context4.next = 113;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Banco ".concat(bancoE, " no encontrado")
            }));

          case 113:
            bancoNull = bancoFound._id;

          case 114:
            if (!(solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "")) {
              _context4.next = 118;
              break;
            }

            solicitudNull = null;
            _context4.next = 124;
            break;

          case 118:
            _context4.next = 120;
            return _Maf.default.findOne({
              nro_solicitud: solicitudMAF
            });

          case 120:
            mafFound = _context4.sent;

            if (mafFound) {
              _context4.next = 123;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Solicitud ".concat(solicitudMAF, " no encontrada")
            }));

          case 123:
            solicitudNull = mafFound._id;

          case 124:
            _context4.next = 126;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasTDPE
              }
            });

          case 126:
            campaniaTDPFound = _context4.sent;

            if (campaniaTDPFound) {
              _context4.next = 129;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasTDPE, " no encontrada")
            }));

          case 129:
            _context4.next = 131;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasMafE
              }
            });

          case 131:
            campaniaMAFFound = _context4.sent;

            if (campaniaMAFFound) {
              _context4.next = 134;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasMafE, " no encontrada")
            }));

          case 134:
            _context4.next = 136;
            return _AccesorioE.default.find({
              cod_interno: {
                $in: accesoriosE
              }
            });

          case 136:
            accesoriosFound = _context4.sent;

            if (accesoriosFound) {
              _context4.next = 139;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Accesorio ".concat(accesoriosE, " no encontrado")
            }));

          case 139:
            if (!(condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "")) {
              _context4.next = 143;
              break;
            }

            condicionAccNull = null;
            _context4.next = 149;
            break;

          case 143:
            _context4.next = 145;
            return _CondicionAccesorio.default.findOne({
              name: condicionAccesorioE
            });

          case 145:
            condicionFound = _context4.sent;

            if (condicionFound) {
              _context4.next = 148;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Condici\xF3n accesorio ".concat(condicionAccesorioE, " no encontrada")
            }));

          case 148:
            condicionAccNull = condicionFound._id;

          case 149:
            if (!(tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "")) {
              _context4.next = 153;
              break;
            }

            comprobanteNull = null;
            _context4.next = 159;
            break;

          case 153:
            _context4.next = 155;
            return _TipoComprobante.default.findOne({
              name: tipoComprobanteE
            });

          case 155:
            comprobanteFound = _context4.sent;

            if (comprobanteFound) {
              _context4.next = 158;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Tipo comprobante ".concat(tipoComprobanteE, " no encontrado")
            }));

          case 158:
            comprobanteNull = comprobanteFound._id;

          case 159:
            if (!(estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "")) {
              _context4.next = 163;
              break;
            }

            facturacionNull = null;
            _context4.next = 169;
            break;

          case 163:
            _context4.next = 165;
            return _StatusFacturacion.default.findOne({
              name: estadoFacturacionE
            });

          case 165:
            facturacionFound = _context4.sent;

            if (facturacionFound) {
              _context4.next = 168;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Facturaci\xF3n ".concat(estadoFacturacionE, " no encontrado")
            }));

          case 168:
            facturacionNull = facturacionFound._id;

          case 169:
            if (!(estadoVentaE == "Libre")) {
              _context4.next = 175;
              break;
            }

            _context4.next = 172;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isLibreS: isLibreS,
              fechaLibreS: fechaLibreS
            }, {
              new: true
            });

          case 172:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 175:
            if (!(estadoVentaE == "Credito")) {
              _context4.next = 181;
              break;
            }

            _context4.next = 178;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isCreditoS: isCreditoS,
              fechaCreditoS: fechaCreditoS
            }, {
              new: true
            });

          case 178:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 181:
            if (!(estadoVentaE == "Reservado")) {
              _context4.next = 187;
              break;
            }

            _context4.next = 184;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isReservadoS: isReservadoS,
              fechaReservadoS: fechaReservadoS
            }, {
              new: true
            });

          case 184:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 187:
            if (!(estadoVentaE == "Reservado C")) {
              _context4.next = 193;
              break;
            }

            _context4.next = 190;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isReservadoCS: isReservadoCS,
              fechaReservadoCS: fechaReservadoCS
            }, {
              new: true
            });

          case 190:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 193:
            if (!(estadoVentaE == "Reservado L")) {
              _context4.next = 199;
              break;
            }

            _context4.next = 196;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isReservadoLS: isReservadoLS,
              fechaReservadoLS: fechaReservadoLS
            }, {
              new: true
            });

          case 196:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 199:
            if (!(estadoVentaE == "En Espera")) {
              _context4.next = 205;
              break;
            }

            _context4.next = 202;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isEsperaS: isEsperaS,
              fechaEsperaS: fechaEsperaS
            }, {
              new: true
            });

          case 202:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 205:
            if (!(estadoVentaE == "Facturado")) {
              _context4.next = 211;
              break;
            }

            _context4.next = 208;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isFacturadoS: isFacturadoS,
              fechaFacturadoS: fechaFacturadoS
            }, {
              new: true
            });

          case 208:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 211:
            if (!(estadoVentaE == "Anticipo")) {
              _context4.next = 217;
              break;
            }

            _context4.next = 214;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isAnticipoS: isAnticipoS,
              fechaAnticipoS: fechaAnticipoS
            }, {
              new: true
            });

          case 214:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 217:
            if (!(estadoVentaE == "Cancelado")) {
              _context4.next = 223;
              break;
            }

            _context4.next = 220;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isCanceladoS: isCanceladoS,
              fechaCanceladoS: fechaCanceladoS
            }, {
              new: true
            });

          case 220:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 223:
            if (!(estadoVentaE == "Cancelado PT")) {
              _context4.next = 229;
              break;
            }

            _context4.next = 226;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isCanceladoPTS: isCanceladoPTS,
              fechaCanceladoPTS: fechaCanceladoPTS
            }, {
              new: true
            });

          case 226:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 229:
            if (!(estadoVentaE == "EPDP")) {
              _context4.next = 235;
              break;
            }

            _context4.next = 232;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isEPDPS: isEPDPS,
              fechaEPDPS: fechaEPDPS
            }, {
              new: true
            });

          case 232:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 235:
            if (!(estadoVentaE == "Por Desembolsar")) {
              _context4.next = 241;
              break;
            }

            _context4.next = 238;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isDesembolsarS: isDesembolsarS,
              fechaDesembolsarS: fechaDesembolsarS
            }, {
              new: true
            });

          case 238:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 241:
            if (!(estadoVentaE == "EXHIBICIÓN")) {
              _context4.next = 247;
              break;
            }

            _context4.next = 244;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull,
              isExhibicionS: isExhibicionS,
              fechaExhibicionS: fechaExhibicionS
            }, {
              new: true
            });

          case 244:
            query = _context4.sent;
            _context4.next = 250;
            break;

          case 247:
            _context4.next = 249;
            return _Sale.default.findByIdAndUpdate(itemId, {
              serie_tdp: serie_tdp,
              precio: precio,
              ubicacion_vehiculo: ubicacion_vehiculo,
              estatus_vehiculo: estatus_vehiculo,
              fecha_ciguena: fecha_ciguena,
              fecha_entrega: fecha_entrega,
              adelantosE: adelantosE,
              isToyotaValue: isToyotaValue,
              arrayToyotaValues: arrayToyotaValues,
              descuento_autonort: descuento_autonort,
              acuerdoTDP: acuerdoTDP,
              herramientas_tdp: herramientas_tdp,
              herramientas_maf: herramientas_maf,
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              isReportado: isReportado,
              fechaReporte: fechaReporte,
              mesReportado: mesReportado,
              vendedor: sellerFound._id,
              cliente: customerFound._id,
              auto: autoFound._id,
              estadoVehiculoE: estadoVehicularFound._id,
              tipoOperacionE: operacionFound._id,
              sucursalE: sucursalFound._id,
              estadoVentaE: situacionFound._id,
              colorE: colorNull,
              anioFabricacionE: anioFNull,
              anioModeloE: anioMNull,
              ubicacionVehiculoE: ubicacionNull,
              financiamientoE: financiamientoNull,
              bancoE: bancoNull,
              solicitudMAF: solicitudNull,
              campaniasTDPE: campaniaTDPFound.map(function (a) {
                return a.id;
              }),
              campaniasMafE: campaniaMAFFound.map(function (a) {
                return a._id;
              }),
              accesoriosE: accesoriosFound.map(function (a) {
                return a._id;
              }),
              condicionAccesorioE: condicionAccNull,
              tipoComprobanteE: comprobanteNull,
              ofertaTDPE: ofertaTDPE,
              ofertaMafE: ofertaMafE,
              estadoFacturacionE: facturacionNull
            }, {
              new: true
            });

          case 249:
            query = _context4.sent;

          case 250:
            if (!query) {
              _context4.next = 260;
              break;
            }

            _context4.next = 253;
            return (0, _LogFile.default)({
              cod_interno: new Date().getTime(),
              file_id: query._id,
              modifiedBy: userFound._id,
              action: "Usuario ".concat(userFound.username, " ha modificado el expediente"),
              timeAt: query.updatedAt
            });

          case 253:
            newLog = _context4.sent;
            _context4.next = 256;
            return newLog.save();

          case 256:
            logQuery = _context4.sent;
            res.json({
              message: "Expediente actualizado con éxito"
            });
            _context4.next = 261;
            break;

          case 260:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existe expediente a actualizar"
            }));

          case 261:
            _context4.next = 267;
            break;

          case 263:
            _context4.prev = 263;
            _context4.t0 = _context4["catch"](13);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 267:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[13, 263]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

fileController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var itemId, query, newLog, logQuery;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            itemId = req.params.itemId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Sale.default.findByIdAndDelete(itemId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 15;
              break;
            }

            _context5.next = 8;
            return (0, _LogFile.default)({
              cod_interno: new Date().getTime(),
              file_id: query._id,
              modifiedBy: null,
              action: "Usuario admin ha eliminado el expediente ".concat(query.serie_tdp),
              timeAt: query.updatedAt
            });

          case 8:
            newLog = _context5.sent;
            _context5.next = 11;
            return newLog.save();

          case 11:
            logQuery = _context5.sent;
            res.json({
              message: "Expediente eliminado con éxito"
            });
            _context5.next = 16;
            break;

          case 15:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe Expediente a eliminar"
            }));

          case 16:
            _context5.next = 22;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 18]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

fileController.getFilesBySucursalyFecha = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, sucursalE, start, end, entregados, query;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, sucursalE = _req$body3.sucursalE, start = _req$body3.start, end = _req$body3.end, entregados = _req$body3.entregados;
            query = null;
            _context6.prev = 2;

            if (!entregados) {
              _context6.next = 9;
              break;
            }

            _context6.next = 6;
            return _Sale.default.find({
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            });

          case 6:
            query = _context6.sent;
            _context6.next = 12;
            break;

          case 9:
            _context6.next = 11;
            return _Sale.default.find({
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            });

          case 11:
            query = _context6.sent;

          case 12:
            if (!(query.length > 0)) {
              _context6.next = 16;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context6.next = 17;
            break;

          case 16:
            return _context6.abrupt("return", res.status(404).json({
              message: "La sucursal ".concat(sucursalE, " no cuenta con expedientes")
            }));

          case 17:
            _context6.next = 23;
            break;

          case 19:
            _context6.prev = 19;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 19]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

fileController.getFilesByVendedor = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, seller, start, end, query, sellerFound;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body4 = req.body, seller = _req$body4.seller, start = _req$body4.start, end = _req$body4.end;
            query = null;
            _context7.prev = 2;
            _context7.next = 5;
            return _Seller.default.findOne({
              name: seller
            });

          case 5:
            sellerFound = _context7.sent;

            if (sellerFound) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(seller, " no encontrado")
            }));

          case 8:
            if (!(start == undefined || start == null || start == "")) {
              _context7.next = 14;
              break;
            }

            _context7.next = 11;
            return _Sale.default.find({
              vendedor: sellerFound._id
            }).sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            });

          case 11:
            query = _context7.sent;
            _context7.next = 17;
            break;

          case 14:
            _context7.next = 16;
            return _Sale.default.aggregate([{
              $match: {
                vendedor: sellerFound._id,
                fecha_cancelacion: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: "$estatus_venta",
                qty: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                qty: -1
              }
            }]);

          case 16:
            query = _context7.sent;

          case 17:
            if (!(query.length > 0)) {
              _context7.next = 21;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context7.next = 22;
            break;

          case 21:
            return _context7.abrupt("return", res.status(404).json({
              message: "El vendedor ".concat(seller, " no cuenta con expedientes")
            }));

          case 22:
            _context7.next = 28;
            break;

          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 24]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

fileController.groupFilesByEstado = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, sucursalE, start, end, query;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, sucursalE = _req$body5.sucursalE, start = _req$body5.start, end = _req$body5.end;
            _context8.prev = 1;
            _context8.next = 4;
            return _Sale.default.aggregate([{
              $match: {
                sucursal_venta: sucursalE,
                fecha_cancelacion: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: {
                  estado: "$estatus_venta"
                },
                num_ventas: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_ventas: -1
              }
            }]);

          case 4:
            query = _context8.sent;

            if (!(query.length > 0)) {
              _context8.next = 9;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context8.next = 10;
            break;

          case 9:
            return _context8.abrupt("return", res.status(404).json({
              message: "No existen expedientes"
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 12]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

fileController.conteoFilesByEstado = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, estado, ubicacion, isEntregado, sucursalE, start, end, query;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, estado = _req$body6.estado, ubicacion = _req$body6.ubicacion, isEntregado = _req$body6.isEntregado, sucursalE = _req$body6.sucursalE, start = _req$body6.start, end = _req$body6.end;
            query = null;
            _context9.prev = 2;

            if (!isEntregado) {
              _context9.next = 9;
              break;
            }

            _context9.next = 6;
            return _Sale.default.find({
              ubicacion_vehiculo: {
                $regex: ".*" + ubicacion + ".*"
              },
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 6:
            query = _context9.sent;
            _context9.next = 12;
            break;

          case 9:
            _context9.next = 11;
            return _Sale.default.find({
              estatus_venta: {
                $regex: ".*" + estado + ".*"
              },
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 11:
            query = _context9.sent;

          case 12:
            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context9.next = 19;
            break;

          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 15]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

fileController.rankingFilesByUbicacion = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, ubicacion, start, end, query;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body7 = req.body, ubicacion = _req$body7.ubicacion, start = _req$body7.start, end = _req$body7.end;
            _context10.prev = 1;
            _context10.next = 4;
            return _Sale.default.aggregate([{
              $match: {
                ubicacion_vehiculo: ubicacion,
                fecha_entrega: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: "$sucursal_venta",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 4:
            query = _context10.sent;

            if (query.length > 0) {
              res.json({
                total: query.length,
                ranking: query
              });
            }

            _context10.next = 12;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 8]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

fileController.getFilesByEstado = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body8, estado, tramite, sucursalE, query;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body8 = req.body, estado = _req$body8.estado, tramite = _req$body8.tramite, sucursalE = _req$body8.sucursalE;
            query = null;
            _context11.prev = 2;

            if (!(tramite === 0)) {
              _context11.next = 10;
              break;
            }

            console.log("Tramite 0");
            _context11.next = 7;
            return _Sale.default.find({
              estatus_venta: {
                $regex: ".*" + estado + ".*"
              },
              pasoaTramite: tramite,
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              }
            }).sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal avatar"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            });

          case 7:
            query = _context11.sent;
            _context11.next = 14;
            break;

          case 10:
            console.log("Tramite null");
            _context11.next = 13;
            return _Sale.default.find({
              estatus_venta: {
                $regex: ".*" + estado + ".*"
              },
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              }
            }).sort({
              fecha_cancelacion: -1
            }).populate({
              path: "vendedor",
              select: "name sucursal avatar"
            }).populate({
              path: "auto",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "marca name avatar",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "anioFabricacionE",
              select: "name"
            }).populate({
              path: "anioModeloE",
              select: "name"
            }).populate({
              path: "ubicacionVehiculoE",
              select: "name"
            }).populate({
              path: "estadoVehiculoE",
              select: "name"
            }).populate({
              path: "financiamientoE",
              select: "name"
            }).populate({
              path: "bancoE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "tipoOperacionE",
              select: "name document"
            }).populate({
              path: "tipoComprobanteE",
              select: "name document"
            }).populate({
              path: "estadoVentaE",
              select: "name document"
            }).populate({
              path: "estadoFacturacionE",
              select: "name document"
            }).populate("campanias").populate("adicional").populate("accesorios").populate({
              path: "empleado",
              select: "name username"
            });

          case 13:
            query = _context11.sent;

          case 14:
            if (!(query.length > 0)) {
              _context11.next = 18;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context11.next = 19;
            break;

          case 18:
            return _context11.abrupt("return", res.status(404).json({
              message: "Expedientes ".concat(estado, " no existen en ").concat(sucursalE)
            }));

          case 19:
            _context11.next = 25;
            break;

          case 21:
            _context11.prev = 21;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 25:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 21]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

fileController.rankingFilesByModelo = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body9, sucursalE, seller, estado, start, end, query, sellerFound;

    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body9 = req.body, sucursalE = _req$body9.sucursalE, seller = _req$body9.seller, estado = _req$body9.estado, start = _req$body9.start, end = _req$body9.end;
            query = null;
            _context12.prev = 2;

            if (!(seller == null || seller == undefined || seller == "")) {
              _context12.next = 9;
              break;
            }

            _context12.next = 6;
            return _Sale.default.aggregate([{
              $match: {
                sucursal_venta: {
                  $regex: ".*" + sucursalE + ".*"
                },
                estatus_venta: estado,
                fecha_cancelacion: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: "$auto",
                num_ventas: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_ventas: -1
              }
            }]);

          case 6:
            query = _context12.sent;
            _context12.next = 17;
            break;

          case 9:
            _context12.next = 11;
            return _Seller.default.findOne({
              name: seller
            });

          case 11:
            sellerFound = _context12.sent;

            if (sellerFound) {
              _context12.next = 14;
              break;
            }

            return _context12.abrupt("return", res.status(404).json({
              message: "Asesor ".concat(seller, " no encontrado")
            }));

          case 14:
            _context12.next = 16;
            return _Sale.default.aggregate([{
              $match: {
                sucursal_venta: {
                  $regex: ".*" + sucursalE + ".*"
                },
                vendedor: sellerFound._id,
                estatus_venta: {
                  $regex: ".*" + estado + ".*"
                },
                fecha_cancelacion: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: "$auto",
                num_ventas: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_ventas: -1
              }
            }]);

          case 16:
            query = _context12.sent;

          case 17:
            if (query.length > 0) {
              res.json({
                total: query.length,
                ranking: query
              });
            }

            _context12.next = 24;
            break;

          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 24:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 20]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

fileController.rankingFilesBySeller = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body10, sucursalE, estadoE, start, end, query;

    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body10 = req.body, sucursalE = _req$body10.sucursalE, estadoE = _req$body10.estadoE, start = _req$body10.start, end = _req$body10.end; // console.log(req.body);

            _context13.prev = 1;
            _context13.next = 4;
            return _Sale.default.aggregate([{
              $match: {
                sucursal_venta: {
                  $regex: ".*" + sucursalE + ".*"
                },
                estatus_venta: {
                  $regex: ".*" + estadoE + ".*"
                },
                fecha_cancelacion: {
                  $gte: new Date(start),
                  $lte: new Date(end)
                }
              }
            }, {
              $group: {
                _id: "$vendedor",
                num_ventas: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_ventas: -1
              }
            }]);

          case 4:
            query = _context13.sent;

            if (!(query.length > 0)) {
              _context13.next = 9;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context13.next = 10;
            break;

          case 9:
            return _context13.abrupt("return", res.status(201).json({
              message: "No existen ventas"
            }));

          case 10:
            _context13.next = 16;
            break;

          case 12:
            _context13.prev = 12;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0);
            return _context13.abrupt("return", res.status(503).json({
              message: _context13.t0.message
            }));

          case 16:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 12]]);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

fileController.getFilesByToyotaValue = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body11, sucursalE, isToyotaValue, seller, start, end, query, sellerFound;

    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body11 = req.body, sucursalE = _req$body11.sucursalE, isToyotaValue = _req$body11.isToyotaValue, seller = _req$body11.seller, start = _req$body11.start, end = _req$body11.end;
            query = null;
            _context14.prev = 2;

            if (!(seller == undefined || seller == null || seller == "")) {
              _context14.next = 9;
              break;
            }

            _context14.next = 6;
            return _Sale.default.find({
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              isToyotaValue: isToyotaValue,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).select("vendedor cliente auto serie_tdp isToyotaValue arrayToyotaValues sucursalE").populate({
              path: "vendedor",
              select: "name avatar"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "auto",
              select: "model cod_tdp",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            });

          case 6:
            query = _context14.sent;
            _context14.next = 17;
            break;

          case 9:
            _context14.next = 11;
            return _Seller.default.findOne({
              name: seller
            });

          case 11:
            sellerFound = _context14.sent;

            if (sellerFound) {
              _context14.next = 14;
              break;
            }

            return _context14.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(seller, " no encontrado")
            }));

          case 14:
            _context14.next = 16;
            return _Sale.default.find({
              // sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
              vendedor: sellerFound._id,
              isToyotaValue: isToyotaValue,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).select("vendedor cliente auto serie_tdp isToyotaValue arrayToyotaValues sucursalE").populate({
              path: "vendedor",
              select: "name avatar"
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "auto",
              select: "model cod_tdp",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }
            });

          case 16:
            query = _context14.sent;

          case 17:
            if (!(query.length > 0)) {
              _context14.next = 21;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context14.next = 22;
            break;

          case 21:
            return _context14.abrupt("return", res.status(404).json({
              message: "No existen expedientes con toyota value"
            }));

          case 22:
            _context14.next = 28;
            break;

          case 24:
            _context14.prev = 24;
            _context14.t0 = _context14["catch"](2);
            console.log(_context14.t0);
            return _context14.abrupt("return", res.status(503).json({
              message: _context14.t0.message
            }));

          case 28:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[2, 24]]);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

fileController.getFilesByImporteAccesorios = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body12, sucursalE, start, end, query;

    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body12 = req.body, sucursalE = _req$body12.sucursalE, start = _req$body12.start, end = _req$body12.end;
            _context15.prev = 1;
            _context15.next = 4;
            return _Sale.default.find({
              $expr: {
                $gt: [{
                  $size: {
                    $ifNull: ["$accesoriosE", []]
                  }
                }, 0]
              },
              sucursal_venta: {
                $regex: ".*" + sucursalE + ".*"
              },
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).select("accesoriosE vendedor cliente sucursalE sucursal_venta").populate({
              path: "accesoriosE",
              select: "name precio"
            }).populate({
              path: "vendedor",
              select: "name avatar"
            }).populate({
              path: "cliente",
              select: "name document"
            });

          case 4:
            query = _context15.sent;

            if (!(query.length > 0)) {
              _context15.next = 9;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context15.next = 10;
            break;

          case 9:
            return _context15.abrupt("return", res.status(404).json({
              message: "No existe expedientes con accesorios"
            }));

          case 10:
            _context15.next = 16;
            break;

          case 12:
            _context15.prev = 12;
            _context15.t0 = _context15["catch"](1);
            console.log(_context15.t0);
            return _context15.abrupt("return", res.status(503).json({
              message: _context15.t0.message
            }));

          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 12]]);
  }));

  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

fileController.getAllLogs = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return _LogFile.default.find().sort({
              timeAt: -1
            }).populate({
              path: "file_id",
              select: "serie_tdp"
            }).populate({
              path: "modifiedBy",
              select: "name username avatar"
            });

          case 3:
            query = _context16.sent;

            if (!(query.length > 0)) {
              _context16.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context16.next = 9;
            break;

          case 8:
            return _context16.abrupt("return", res.status(404).json({
              message: "No existen logs de expedientes"
            }));

          case 9:
            _context16.next = 14;
            break;

          case 11:
            _context16.prev = 11;
            _context16.t0 = _context16["catch"](0);
            return _context16.abrupt("return", res.status(503).json({
              message: _context16.t0.message
            }));

          case 14:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 11]]);
  }));

  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

var _default = fileController;
exports.default = _default;
//# sourceMappingURL=files.controller.js.map