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

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var saleController = {};

saleController.createOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, vendedor, cliente, auto, serie_tdp, colorE, precio, anioFabricacionE, anioModeloE, ubicacionVehiculoE, estadoVehiculoE, fecha_ciguena, fecha_entrega, financiamientoE, bancoE, solicitudMAF, adelantosE, campaniasTDPE, ofertaTDPE, campaniasMafE, ofertaMafE, isToyotaValue, arrayToyotaValues, descuento_autonort, acuerdoTDP, observacion_adv, accesoriosE, condicionAccesorioE, condicion_accesorios, tipoOperacionE, tipoComprobanteE, nro_comprobante, fecha_comprobante, sucursal_venta, sucursalE, estadoVentaE, fecha_cancelacion, fecha_facturacion_tdp, estadoFacturacionE, monto_facturado, createdBy, fechaCreacionS, newSale, sellerFound, carFound, customerFound, colorFound, anioFFound, anioMFound, ubicacionFound, estadoVehicularFound, financiamientoFound, bancoFound, mafFound, campaniaTDPFound, campaniaMAFFound, operacionFound, userFound, comprobanteFound, condicionFound, sucursalFound, situacionFound, facturacionFound, accesorioFound, query;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, vendedor = _req$body.vendedor, cliente = _req$body.cliente, auto = _req$body.auto, serie_tdp = _req$body.serie_tdp, colorE = _req$body.colorE, precio = _req$body.precio, anioFabricacionE = _req$body.anioFabricacionE, anioModeloE = _req$body.anioModeloE, ubicacionVehiculoE = _req$body.ubicacionVehiculoE, estadoVehiculoE = _req$body.estadoVehiculoE, fecha_ciguena = _req$body.fecha_ciguena, fecha_entrega = _req$body.fecha_entrega, financiamientoE = _req$body.financiamientoE, bancoE = _req$body.bancoE, solicitudMAF = _req$body.solicitudMAF, adelantosE = _req$body.adelantosE, campaniasTDPE = _req$body.campaniasTDPE, ofertaTDPE = _req$body.ofertaTDPE, campaniasMafE = _req$body.campaniasMafE, ofertaMafE = _req$body.ofertaMafE, isToyotaValue = _req$body.isToyotaValue, arrayToyotaValues = _req$body.arrayToyotaValues, descuento_autonort = _req$body.descuento_autonort, acuerdoTDP = _req$body.acuerdoTDP, observacion_adv = _req$body.observacion_adv, accesoriosE = _req$body.accesoriosE, condicionAccesorioE = _req$body.condicionAccesorioE, condicion_accesorios = _req$body.condicion_accesorios, tipoOperacionE = _req$body.tipoOperacionE, tipoComprobanteE = _req$body.tipoComprobanteE, nro_comprobante = _req$body.nro_comprobante, fecha_comprobante = _req$body.fecha_comprobante, sucursal_venta = _req$body.sucursal_venta, sucursalE = _req$body.sucursalE, estadoVentaE = _req$body.estadoVentaE, fecha_cancelacion = _req$body.fecha_cancelacion, fecha_facturacion_tdp = _req$body.fecha_facturacion_tdp, estadoFacturacionE = _req$body.estadoFacturacionE, monto_facturado = _req$body.monto_facturado, createdBy = _req$body.createdBy, fechaCreacionS = _req$body.fechaCreacionS;
            _context.prev = 1;
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
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              fecha_cancelacion: fecha_cancelacion,
              sucursal_venta: sucursal_venta,
              fechaCreacionS: fechaCreacionS
            }); //Seller Obligado

            _context.next = 5;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 5:
            sellerFound = _context.sent;

            if (sellerFound) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(vendedor, " no encontrado")
            }));

          case 8:
            newSale.vendedor = sellerFound._id; //Vehicle Obligado

            _context.next = 11;
            return _Vehicle.default.findOne({
              cod_tdp: auto
            });

          case 11:
            carFound = _context.sent;

            if (carFound) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(auto, " no encontrado")
            }));

          case 14:
            newSale.auto = carFound._id; //Customer Obligado

            _context.next = 17;
            return _Customer.default.findOne({
              document: cliente
            });

          case 17:
            customerFound = _context.sent;

            if (customerFound) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 20:
            newSale.cliente = customerFound._id; //Item Null

            if (!(colorE == null || colorE == undefined || colorE == "")) {
              _context.next = 25;
              break;
            }

            newSale.colorE = null;
            _context.next = 31;
            break;

          case 25:
            _context.next = 27;
            return _Colores.default.findOne({
              name: colorE
            });

          case 27:
            colorFound = _context.sent;

            if (colorFound) {
              _context.next = 30;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(colorE, " no encontrado")
            }));

          case 30:
            newSale.colorE = colorFound._id;

          case 31:
            if (!(anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "")) {
              _context.next = 35;
              break;
            }

            newSale.anioFabricacionE = null;
            _context.next = 41;
            break;

          case 35:
            _context.next = 37;
            return _Anio.default.findOne({
              name: anioFabricacionE
            });

          case 37:
            anioFFound = _context.sent;

            if (anioFFound) {
              _context.next = 40;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "A\xF1o Fabricaci\xF3n ".concat(anioFabricacionE, " no encontrado")
            }));

          case 40:
            newSale.anioFabricacionE = anioFFound._id;

          case 41:
            if (!(anioModeloE == null || anioModeloE == undefined || anioModeloE == "")) {
              _context.next = 45;
              break;
            }

            newSale.anioModeloE = null;
            _context.next = 51;
            break;

          case 45:
            _context.next = 47;
            return _Anio.default.findOne({
              name: anioModeloE
            });

          case 47:
            anioMFound = _context.sent;

            if (anioMFound) {
              _context.next = 50;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "A\xF1o Modelo ".concat(anioModeloE, " no encontrado")
            }));

          case 50:
            newSale.anioModeloE = anioMFound._id;

          case 51:
            if (!(ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "")) {
              _context.next = 55;
              break;
            }

            newSale.ubicacionVehiculoE = null;
            _context.next = 61;
            break;

          case 55:
            _context.next = 57;
            return _Ubicacion.default.findOne({
              name: ubicacionVehiculoE
            });

          case 57:
            ubicacionFound = _context.sent;

            if (ubicacionFound) {
              _context.next = 60;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Ubicaci\xF3n ".concat(ubicacionVehiculoE, " no encontrado")
            }));

          case 60:
            newSale.ubicacionVehiculoE = ubicacionFound._id;

          case 61:
            _context.next = 63;
            return _Condicion.default.findOne({
              name: estadoVehiculoE
            });

          case 63:
            estadoVehicularFound = _context.sent;

            if (estadoVehicularFound) {
              _context.next = 66;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado vehicular ".concat(estadoVehiculoE, " no encontrado")
            }));

          case 66:
            newSale.estadoVehiculoE = estadoVehicularFound._id; //Item Null

            if (!(financiamientoE == null || financiamientoE == undefined || financiamientoE == "")) {
              _context.next = 71;
              break;
            }

            newSale.financiamientoE = null;
            _context.next = 77;
            break;

          case 71:
            _context.next = 73;
            return _Financiamiento.default.findOne({
              name: financiamientoE
            });

          case 73:
            financiamientoFound = _context.sent;

            if (financiamientoFound) {
              _context.next = 76;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Financiamiento ".concat(financiamientoE, " no encontrado")
            }));

          case 76:
            newSale.financiamientoE = financiamientoFound._id;

          case 77:
            if (!(bancoE == null || bancoE == undefined || bancoE == "")) {
              _context.next = 81;
              break;
            }

            newSale.bancoE = null;
            _context.next = 87;
            break;

          case 81:
            _context.next = 83;
            return _Banco.default.findOne({
              name: bancoE
            });

          case 83:
            bancoFound = _context.sent;

            if (bancoFound) {
              _context.next = 86;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Banco ".concat(bancoE, " no encontrado")
            }));

          case 86:
            newSale.bancoE = bancoFound._id;

          case 87:
            if (!(solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "")) {
              _context.next = 91;
              break;
            }

            newSale.solicitudMAF = null;
            _context.next = 97;
            break;

          case 91:
            _context.next = 93;
            return _Maf.default.findOne({
              nro_solicitud: solicitudMAF
            });

          case 93:
            mafFound = _context.sent;

            if (mafFound) {
              _context.next = 96;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Solicitud ".concat(solicitudMAF, " no encontrada")
            }));

          case 96:
            newSale.solicitudMAF = mafFound._id;

          case 97:
            _context.next = 99;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasTDPE
              }
            });

          case 99:
            campaniaTDPFound = _context.sent;

            if (campaniaTDPFound) {
              _context.next = 102;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasTDPE, " no encontrada")
            }));

          case 102:
            newSale.campaniasTDPE = campaniaTDPFound.map(function (a) {
              return a._id;
            });
            _context.next = 105;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasMafE
              }
            });

          case 105:
            campaniaMAFFound = _context.sent;

            if (campaniaMAFFound) {
              _context.next = 108;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Campa\xF1a MAF ".concat(campaniasMafE, " no encontrada")
            }));

          case 108:
            newSale.campaniasMafE = campaniaMAFFound.map(function (a) {
              return a._id;
            }); //Operacion obligada

            _context.next = 111;
            return _Operacion.default.findOne({
              name: tipoOperacionE
            });

          case 111:
            operacionFound = _context.sent;

            if (operacionFound) {
              _context.next = 114;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Tipo operaci\xF3n ".concat(tipoOperacionE, " no encontrada")
            }));

          case 114:
            newSale.tipoOperacionE = operacionFound._id; //User Obligado

            _context.next = 117;
            return _User.default.findOne({
              username: createdBy
            });

          case 117:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 120;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Colaborador ".concat(createdBy, " no encontrado")
            }));

          case 120:
            newSale.createdBy = userFound._id; //Item Null

            if (!(tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "")) {
              _context.next = 125;
              break;
            }

            newSale.tipoComprobanteE = null;
            _context.next = 131;
            break;

          case 125:
            _context.next = 127;
            return _TipoComprobante.default.findOne({
              name: tipoComprobanteE
            });

          case 127:
            comprobanteFound = _context.sent;

            if (comprobanteFound) {
              _context.next = 130;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Tipo comprobante ".concat(tipoComprobanteE, " no encontrado")
            }));

          case 130:
            newSale.tipoComprobanteE = comprobanteFound._id;

          case 131:
            if (!(condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "")) {
              _context.next = 135;
              break;
            }

            newSale.condicionAccesorioE = null;
            _context.next = 141;
            break;

          case 135:
            _context.next = 137;
            return _CondicionAccesorio.default.findOne({
              name: condicionAccesorioE
            });

          case 137:
            condicionFound = _context.sent;

            if (condicionFound) {
              _context.next = 140;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Condici\xF3n accesorio ".concat(condicionAccesorioE, " no encontrada")
            }));

          case 140:
            newSale.condicionAccesorioE = condicionFound._id;

          case 141:
            _context.next = 143;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 143:
            sucursalFound = _context.sent;

            if (sucursalFound) {
              _context.next = 146;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 146:
            newSale.sucursalE = sucursalFound._id; //Situacion Obligado

            _context.next = 149;
            return _Situacion.default.findOne({
              name: estadoVentaE
            });

          case 149:
            situacionFound = _context.sent;

            if (situacionFound) {
              _context.next = 152;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado de Venta ".concat(estadoVentaE, " no encontrado")
            }));

          case 152:
            newSale.estadoVentaE = situacionFound._id; //Item Null

            if (!(estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "")) {
              _context.next = 157;
              break;
            }

            newSale.estadoFacturacionE = null;
            _context.next = 163;
            break;

          case 157:
            _context.next = 159;
            return _StatusFacturacion.default.findOne({
              name: estadoFacturacionE
            });

          case 159:
            facturacionFound = _context.sent;

            if (facturacionFound) {
              _context.next = 162;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Estado de Venta ".concat(estadoFacturacionE, " no encontrado")
            }));

          case 162:
            newSale.estadoFacturacionE = facturacionFound._id;

          case 163:
            _context.next = 165;
            return _AccesorioE.default.find({
              cod_interno: {
                $in: accesoriosE
              }
            });

          case 165:
            accesorioFound = _context.sent;

            if (accesorioFound) {
              _context.next = 168;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Accesorio ".concat(accesoriosE, " no encontrado")
            }));

          case 168:
            newSale.accesoriosE = accesorioFound.map(function (a) {
              return a._id;
            });
            _context.next = 171;
            return newSale.save();

          case 171:
            query = _context.sent;

            if (query) {
              res.json({
                message: "Expediente creado con éxito"
              });
            }

            _context.next = 179;
            break;

          case 175:
            _context.prev = 175;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 179:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 175]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

saleController.getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Sale.default.find().sort({
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
            }).populate({
              path: "createdBy",
              select: "name username",
              strictPopulate: true
            });

          case 3:
            query = _context2.sent;

            if (!(query.length > 0)) {
              _context2.next = 8;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).json({
              message: "No Existen Expedientes"
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(503).json({
              message: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

saleController.getOneById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var filesId, query;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filesId = req.params.filesId;
            _context3.prev = 1;
            _context3.next = 4;
            return _Sale.default.findById(filesId).populate({
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
            query = _context3.sent;

            if (!query) {
              _context3.next = 9;
              break;
            }

            res.json({
              one: query
            });
            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", res.status(404).json({
              message: "No existe el Expediente"
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

saleController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var salesId, _req$body2, vendedor, cliente, auto, serie_tdp, colorE, precio, anioFabricacionE, anioModeloE, ubicacionVehiculoE, ubicacion_vehiculo, estadoVehiculoE, estatus_vehiculo, fecha_ciguena, fecha_entrega, financiamientoE, bancoE, solicitudMAF, adelantosE, campaniasTDPE, ofertaTDPE, campaniasMafE, ofertaMafE, isToyotaValue, arrayToyotaValues, descuento_autonort, acuerdoTDP, observacion_adv, accesoriosE, condicion_accesorios, condicionAccesorioE, tipoOperacionE, tipoComprobanteE, nro_comprobante, fecha_comprobante, sucursal_venta, sucursalE, estadoVentaE, fecha_cancelacion, estatus_venta, fecha_facturacion_tdp, estadoFacturacionE, monto_facturado, colorNull, anioFNull, anioMNull, ubicacionNull, financiamientoNull, bancoNull, solicitudNull, condicionAccNull, comprobanteNull, facturacionNull, sellerFound, customerFound, autoFound, estadoVehicularFound, operacionFound, sucursalFound, situacionFound, colorFound, anioFound, _anioFound, ubicacionFound, financiamientoFound, bancoFound, mafFound, campaniaTDPFound, campaniaMAFFound, accesoriosFound, condicionFound, comprobanteFound, facturacionFound, query;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            salesId = req.params.salesId;
            _req$body2 = req.body, vendedor = _req$body2.vendedor, cliente = _req$body2.cliente, auto = _req$body2.auto, serie_tdp = _req$body2.serie_tdp, colorE = _req$body2.colorE, precio = _req$body2.precio, anioFabricacionE = _req$body2.anioFabricacionE, anioModeloE = _req$body2.anioModeloE, ubicacionVehiculoE = _req$body2.ubicacionVehiculoE, ubicacion_vehiculo = _req$body2.ubicacion_vehiculo, estadoVehiculoE = _req$body2.estadoVehiculoE, estatus_vehiculo = _req$body2.estatus_vehiculo, fecha_ciguena = _req$body2.fecha_ciguena, fecha_entrega = _req$body2.fecha_entrega, financiamientoE = _req$body2.financiamientoE, bancoE = _req$body2.bancoE, solicitudMAF = _req$body2.solicitudMAF, adelantosE = _req$body2.adelantosE, campaniasTDPE = _req$body2.campaniasTDPE, ofertaTDPE = _req$body2.ofertaTDPE, campaniasMafE = _req$body2.campaniasMafE, ofertaMafE = _req$body2.ofertaMafE, isToyotaValue = _req$body2.isToyotaValue, arrayToyotaValues = _req$body2.arrayToyotaValues, descuento_autonort = _req$body2.descuento_autonort, acuerdoTDP = _req$body2.acuerdoTDP, observacion_adv = _req$body2.observacion_adv, accesoriosE = _req$body2.accesoriosE, condicion_accesorios = _req$body2.condicion_accesorios, condicionAccesorioE = _req$body2.condicionAccesorioE, tipoOperacionE = _req$body2.tipoOperacionE, tipoComprobanteE = _req$body2.tipoComprobanteE, nro_comprobante = _req$body2.nro_comprobante, fecha_comprobante = _req$body2.fecha_comprobante, sucursal_venta = _req$body2.sucursal_venta, sucursalE = _req$body2.sucursalE, estadoVentaE = _req$body2.estadoVentaE, fecha_cancelacion = _req$body2.fecha_cancelacion, estatus_venta = _req$body2.estatus_venta, fecha_facturacion_tdp = _req$body2.fecha_facturacion_tdp, estadoFacturacionE = _req$body2.estadoFacturacionE, monto_facturado = _req$body2.monto_facturado; // Opcionales

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
            _context4.prev = 12;
            _context4.next = 15;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 15:
            sellerFound = _context4.sent;

            if (sellerFound) {
              _context4.next = 18;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(vendedor, " no encontrado")
            }));

          case 18:
            _context4.next = 20;
            return _Customer.default.findOne({
              document: cliente
            });

          case 20:
            customerFound = _context4.sent;

            if (customerFound) {
              _context4.next = 23;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 23:
            _context4.next = 25;
            return _Vehicle.default.findOne({
              cod_tdp: auto
            });

          case 25:
            autoFound = _context4.sent;

            if (autoFound) {
              _context4.next = 28;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(auto, " no encontrado")
            }));

          case 28:
            _context4.next = 30;
            return _Condicion.default.findOne({
              name: estadoVehiculoE
            });

          case 30:
            estadoVehicularFound = _context4.sent;

            if (estadoVehicularFound) {
              _context4.next = 33;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Condici\xF3n ".concat(estadoVehiculoE, " no encontrado")
            }));

          case 33:
            _context4.next = 35;
            return _Operacion.default.findOne({
              name: tipoOperacionE
            });

          case 35:
            operacionFound = _context4.sent;

            if (operacionFound) {
              _context4.next = 38;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Operaci\xF3n ".concat(tipoOperacionE, " no encontrado")
            }));

          case 38:
            _context4.next = 40;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 40:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 43;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 43:
            _context4.next = 45;
            return _Situacion.default.findOne({
              name: estadoVentaE
            });

          case 45:
            situacionFound = _context4.sent;

            if (situacionFound) {
              _context4.next = 48;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Estado de venta ".concat(estadoVentaE, " no encontrado")
            }));

          case 48:
            if (!(colorE == null || colorE == undefined || colorE == "")) {
              _context4.next = 52;
              break;
            }

            colorNull = null;
            _context4.next = 58;
            break;

          case 52:
            _context4.next = 54;
            return _Colores.default.findOne({
              name: colorE
            });

          case 54:
            colorFound = _context4.sent;

            if (colorFound) {
              _context4.next = 57;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 57:
            colorNull = colorFound._id;

          case 58:
            if (!(anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "")) {
              _context4.next = 62;
              break;
            }

            anioFNull = null;
            _context4.next = 68;
            break;

          case 62:
            _context4.next = 64;
            return _Anio.default.findOne({
              name: anioFabricacionE
            });

          case 64:
            anioFound = _context4.sent;

            if (anioFound) {
              _context4.next = 67;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioFabricacionE, " no encontrado")
            }));

          case 67:
            anioFNull = anioFound._id;

          case 68:
            if (!(anioModeloE == null || anioModeloE == undefined || anioModeloE == "")) {
              _context4.next = 72;
              break;
            }

            anioMNull = null;
            _context4.next = 78;
            break;

          case 72:
            _context4.next = 74;
            return _Anio.default.findOne({
              name: anioModeloE
            });

          case 74:
            _anioFound = _context4.sent;

            if (_anioFound) {
              _context4.next = 77;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioModeloE, " no encontrado")
            }));

          case 77:
            anioMNull = _anioFound._id;

          case 78:
            if (!(ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "")) {
              _context4.next = 82;
              break;
            }

            ubicacionNull = null;
            _context4.next = 88;
            break;

          case 82:
            _context4.next = 84;
            return _Ubicacion.default.findOne({
              name: ubicacionVehiculoE
            });

          case 84:
            ubicacionFound = _context4.sent;

            if (ubicacionFound) {
              _context4.next = 87;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Ubicaci\xF3n ".concat(ubicacionVehiculoE, " no encontrada")
            }));

          case 87:
            ubicacionNull = ubicacionFound._id;

          case 88:
            if (!(financiamientoE == null || financiamientoE == undefined || financiamientoE == "")) {
              _context4.next = 92;
              break;
            }

            financiamientoNull = null;
            _context4.next = 98;
            break;

          case 92:
            _context4.next = 94;
            return _Financiamiento.default.findOne({
              name: financiamientoE
            });

          case 94:
            financiamientoFound = _context4.sent;

            if (financiamientoFound) {
              _context4.next = 97;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Financiamiento ".concat(financiamientoE, " no encontrado")
            }));

          case 97:
            financiamientoNull = financiamientoFound._id;

          case 98:
            if (!(bancoE == null || bancoE == undefined || bancoE == "")) {
              _context4.next = 102;
              break;
            }

            bancoNull = null;
            _context4.next = 108;
            break;

          case 102:
            _context4.next = 104;
            return _Banco.default.findOne({
              name: bancoE
            });

          case 104:
            bancoFound = _context4.sent;

            if (bancoFound) {
              _context4.next = 107;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Banco ".concat(bancoE, " no encontrado")
            }));

          case 107:
            bancoNull = bancoFound._id;

          case 108:
            if (!(solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "")) {
              _context4.next = 112;
              break;
            }

            solicitudNull = null;
            _context4.next = 118;
            break;

          case 112:
            _context4.next = 114;
            return _Maf.default.findOne({
              nro_solicitud: solicitudMAF
            });

          case 114:
            mafFound = _context4.sent;

            if (mafFound) {
              _context4.next = 117;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Solicitud ".concat(solicitudMAF, " no encontrada")
            }));

          case 117:
            solicitudNull = mafFound._id;

          case 118:
            _context4.next = 120;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasTDPE
              }
            });

          case 120:
            campaniaTDPFound = _context4.sent;

            if (campaniaTDPFound) {
              _context4.next = 123;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasTDPE, " no encontrada")
            }));

          case 123:
            _context4.next = 125;
            return _Campania.default.find({
              cod_interno: {
                $in: campaniasMafE
              }
            });

          case 125:
            campaniaMAFFound = _context4.sent;

            if (campaniaMAFFound) {
              _context4.next = 128;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Campa\xF1a TDP ".concat(campaniasMafE, " no encontrada")
            }));

          case 128:
            _context4.next = 130;
            return _AccesorioE.default.find({
              cod_interno: {
                $in: accesoriosE
              }
            });

          case 130:
            accesoriosFound = _context4.sent;

            if (accesoriosFound) {
              _context4.next = 133;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Accesorio ".concat(accesoriosE, " no encontrado")
            }));

          case 133:
            if (!(condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "")) {
              _context4.next = 137;
              break;
            }

            condicionAccNull = null;
            _context4.next = 143;
            break;

          case 137:
            _context4.next = 139;
            return _CondicionAccesorio.default.findOne({
              name: condicionAccesorioE
            });

          case 139:
            condicionFound = _context4.sent;

            if (condicionFound) {
              _context4.next = 142;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Condici\xF3n accesorio ".concat(condicionAccesorioE, " no encontrada")
            }));

          case 142:
            condicionAccNull = condicionFound._id;

          case 143:
            if (!(tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "")) {
              _context4.next = 147;
              break;
            }

            comprobanteNull = null;
            _context4.next = 153;
            break;

          case 147:
            _context4.next = 149;
            return _TipoComprobante.default.findOne({
              name: tipoComprobanteE
            });

          case 149:
            comprobanteFound = _context4.sent;

            if (comprobanteFound) {
              _context4.next = 152;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Tipo comprobante ".concat(tipoComprobanteE, " no encontrado")
            }));

          case 152:
            comprobanteNull = comprobanteFound._id;

          case 153:
            if (!(estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "")) {
              _context4.next = 157;
              break;
            }

            facturacionNull = null;
            _context4.next = 163;
            break;

          case 157:
            _context4.next = 159;
            return _StatusFacturacion.default.findOne({
              name: estadoFacturacionE
            });

          case 159:
            facturacionFound = _context4.sent;

            if (facturacionFound) {
              _context4.next = 162;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Facturaci\xF3n ".concat(estadoFacturacionE, " no encontrado")
            }));

          case 162:
            facturacionNull = facturacionFound._id;

          case 163:
            _context4.next = 165;
            return _Sale.default.findByIdAndUpdate(salesId, {
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
              observacion_adv: observacion_adv,
              condicion_accesorios: condicion_accesorios,
              nro_comprobante: nro_comprobante,
              fecha_comprobante: fecha_comprobante,
              sucursal_venta: sucursal_venta,
              fecha_cancelacion: fecha_cancelacion,
              estatus_venta: estatus_venta,
              fecha_facturacion_tdp: fecha_facturacion_tdp,
              monto_facturado: monto_facturado,
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
            });

          case 165:
            query = _context4.sent;

            if (!query) {
              _context4.next = 170;
              break;
            }

            res.json({
              message: "Expediente actualizado con éxito"
            });
            _context4.next = 171;
            break;

          case 170:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existe expediente a actualizar"
            }));

          case 171:
            _context4.next = 177;
            break;

          case 173:
            _context4.prev = 173;
            _context4.t0 = _context4["catch"](12);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 177:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[12, 173]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/* saleController.updateSaleById = async (req, res) => {
     const { salesId } = req.params;

     const {
          vendedor,
          cliente,
          auto,
          serie_tdp,
          color,
          precio,
          anio_fabricacion,
          anio_modelo,
          ubicacion_vehiculo,
          fecha_ciguena,
          fecha_entrega,
          estatus_vehiculo,
          tipo_financiamiento,
          entidad_bancaria,
          sustento,
          fecha_sustento,
          monto_aprobado,
          oficina,
          ejecutivo,
          montoAdelanto1,
          fechaAdelanto1,
          montoAdelanto2,
          fechaAdelanto2,
          montoAdelanto3,
          fechaAdelanto3,
          montoAdelanto4,
          fechaAdelanto4,
          montoAdelanto5,
          fechaAdelanto5,
          montoAdelanto6,
          fechaAdelanto6,
          montoAdelanto7,
          fechaAdelanto7,
          montoAdelanto8,
          fechaAdelanto8,
          campanias,
          adicional,
          descuento_autonort,
          observacion_adv,
          accesorios,
          condicion_accesorios,
          fecha_facturacion_tdp,
          estatus_facturacion,
          monto_facturado,
          tipo_operacion,
          fecha_inicio_reserva,
          fecha_fin_reserva,
          tipo_comprobante,
          nro_comprobante,
          fecha_comprobante,
          estatus_venta,
          sucursal_venta,
          fecha_cancelacion,
     } = req.body;

     try {
          //Seller
          const foundSeller = await Seller.find({
               name: {
                    $in: vendedor,
               },
          });

          //Vehicle
          const foundVehicle = await Vehicle.find({
               cod_tdp: {
                    $in: auto,
               },
          });

          //Customer
          const foundCustomer = await Customer.find({
               document: {
                    $in: cliente,
               },
          });

          //Campaign
          const foundCampaign = await Campaign.find({
               name: {
                    $in: campanias,
               },
          });

          //Adicional
          const foundAdicional = await Adicional.find({
               name: {
                    $in: adicional,
               },
          });

          //Props
          const foundProps = await Props.find({
               name: {
                    $in: accesorios,
               },
          });

          const ventaActualizada = await Sale.findByIdAndUpdate(salesId, {
               vendedor: foundSeller.map((seller) => seller._id),
               cliente: foundCustomer.map((customer) => customer._id),
               auto: foundVehicle.map((vehicle) => vehicle._id),
               serie_tdp,
               color,
               precio,
               anio_fabricacion,
               anio_modelo,
               ubicacion_vehiculo,
               fecha_ciguena,
               fecha_entrega,
               estatus_vehiculo,
               tipo_financiamiento,
               entidad_bancaria,
               sustento,
               fecha_sustento,
               monto_aprobado,
               oficina,
               ejecutivo,
               montoAdelanto1,
               fechaAdelanto1,
               montoAdelanto2,
               fechaAdelanto2,
               montoAdelanto3,
               fechaAdelanto3,
               montoAdelanto4,
               fechaAdelanto4,
               montoAdelanto5,
               fechaAdelanto5,
               montoAdelanto6,
               fechaAdelanto6,
               montoAdelanto7,
               fechaAdelanto7,
               montoAdelanto8,
               fechaAdelanto8,
               campanias: foundCampaign.map((campaign) => campaign._id),
               adicional: foundAdicional.map((adicional) => adicional._id),
               descuento_autonort,
               observacion_adv,
               accesorios: foundProps.map((props) => props._id),
               condicion_accesorios,
               fecha_facturacion_tdp,
               estatus_facturacion,
               monto_facturado,
               tipo_operacion,
               fecha_inicio_reserva,
               fecha_fin_reserva,
               tipo_comprobante,
               nro_comprobante,
               fecha_comprobante,
               estatus_venta,
               sucursal_venta,
               fecha_cancelacion,
          });

          if (ventaActualizada) {
               res.json({
                    message: "Expediente actualizado con éxito",
               });
          } else {
               return res.status(404).json({
                    message: "No existe Expediente a actualizar",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
}; */


saleController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var salesId, query;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            salesId = req.params.salesId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Sale.default.findByIdAndDelete(salesId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Expediente eliminado con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe Expediente a eliminar"
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(503).json({
              message: _context5.t0.message
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Verificar hacía abajo


saleController.getUnidadesBySucursalFecha = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, sucursalE, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, sucursalE = _req$body3.sucursalE, start = _req$body3.start, end = _req$body3.end;
            filtro = {
              sucursal_venta: sucursalE,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context6.prev = 2;
            _context6.next = 5;
            return _Sale.default.aggregate([{
              $match: filtro
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

          case 5:
            query = _context6.sent;

            if (!(query.length > 0)) {
              _context6.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context6.next = 11;
            break;

          case 10:
            return _context6.abrupt("return", res.status(404).json({
              message: "No existen ventas aún"
            }));

          case 11:
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

saleController.getConteoUnidadesByEstado = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, estado, ubicacion, isEntregado, start, end, query;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body4 = req.body, estado = _req$body4.estado, ubicacion = _req$body4.ubicacion, isEntregado = _req$body4.isEntregado, start = _req$body4.start, end = _req$body4.end;
            query = null;
            _context7.prev = 2;

            if (!isEntregado) {
              _context7.next = 9;
              break;
            }

            _context7.next = 6;
            return _Sale.default.find({
              ubicacion_vehiculo: {
                $regex: ".*" + ubicacion + ".*"
              },
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 6:
            query = _context7.sent;
            _context7.next = 12;
            break;

          case 9:
            _context7.next = 11;
            return _Sale.default.find({
              estatus_venta: {
                $regex: ".*" + estado + ".*"
              },
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 11:
            query = _context7.sent;

          case 12:
            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context7.next = 19;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 15]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

saleController.getRankingUnidadesByUbicacion = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, ubicacion, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, ubicacion = _req$body5.ubicacion, start = _req$body5.start, end = _req$body5.end;
            _context8.prev = 1;
            filtro = {
              ubicacion_vehiculo: ubicacion,
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context8.next = 5;
            return _Sale.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$sucursal_venta",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context8.sent;

            if (query.length > 0) {
              res.json({
                total: query.length,
                ranking: query
              });
            }

            _context8.next = 13;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 9]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

saleController.UnidadesLibres = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, estado, tramite, query;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, estado = _req$body6.estado, tramite = _req$body6.tramite;
            _context9.prev = 1;
            _context9.next = 4;
            return _Sale.default.find({
              estatus_venta: estado,
              pasoaTramite: tramite
            }).populate("vendedor").populate("auto").populate("cliente").populate("campanias").populate("adicional").populate("accesorios").populate("empleado");

          case 4:
            query = _context9.sent;

            if (!(query.length > 0)) {
              _context9.next = 9;
              break;
            }

            res.json({
              total: query.length,
              files: query
            });
            _context9.next = 10;
            break;

          case 9:
            return _context9.abrupt("return", res.status(404).json({
              message: "No existen Unidades ".concat(estado)
            }));

          case 10:
            _context9.next = 16;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 12]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

saleController.UnidadesByStatus = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, estado, tramite, sucursal, query;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body7 = req.body, estado = _req$body7.estado, tramite = _req$body7.tramite, sucursal = _req$body7.sucursal;
            _context10.prev = 1;
            _context10.next = 4;
            return _Sale.default.find({
              estatus_venta: estado,
              pasoaTramite: tramite,
              sucursal_venta: sucursal
            }).sort({
              fecha_cancelacion: "desc"
            }).populate("vendedor").populate("auto").populate("cliente").populate("campanias").populate("adicional").populate("accesorios").populate("empleado");

          case 4:
            query = _context10.sent;

            if (!(query.length > 0)) {
              _context10.next = 9;
              break;
            }

            res.json({
              total: query.length,
              files: query
            });
            _context10.next = 10;
            break;

          case 9:
            return _context10.abrupt("return", res.status(404).json({
              message: "No existen Unidades ".concat(estado)
            }));

          case 10:
            _context10.next = 16;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 12]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

saleController.UnidadesBySucursalyFecha = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body8, sucursal, start, end, query;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body8 = req.body, sucursal = _req$body8.sucursal, start = _req$body8.start, end = _req$body8.end;
            _context11.prev = 1;
            _context11.next = 4;
            return _Sale.default.find({
              sucursal_venta: {
                $regex: ".*" + sucursal + ".*"
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

          case 4:
            query = _context11.sent;

            if (!(query.length > 0)) {
              _context11.next = 9;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context11.next = 10;
            break;

          case 9:
            return _context11.abrupt("return", res.status(404).json({
              message: "No Existen Unidades"
            }));

          case 10:
            _context11.next = 16;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 12]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

saleController.conteoUnidadesByStatus = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body9, estado, start, end, query;

    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body9 = req.body, estado = _req$body9.estado, start = _req$body9.start, end = _req$body9.end;
            _context12.prev = 1;
            _context12.next = 4;
            return _Sale.default.where({
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context12.sent;

            //console.log(consulta)
            if (query >= 0) {
              res.json({
                count: query
              });
            }

            _context12.next = 12;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 8]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

saleController.conteoUnidadesBySucursalFecha = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body10, sucursal, start, end, query;

    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body10 = req.body, sucursal = _req$body10.sucursal, start = _req$body10.start, end = _req$body10.end;
            _context13.prev = 1;
            _context13.next = 4;
            return _Sale.default.find({
              sucursal_venta: sucursal,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context13.sent;

            if (!(query >= 0)) {
              _context13.next = 9;
              break;
            }

            res.json({
              count: query
            });
            _context13.next = 10;
            break;

          case 9:
            return _context13.abrupt("return", res.status(404).json({
              message: "No existen unidades"
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

saleController.conteoUnidadesBySucursalStatusFecha = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body11, sucursal, status, start, end, query;

    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body11 = req.body, sucursal = _req$body11.sucursal, status = _req$body11.status, start = _req$body11.start, end = _req$body11.end; //console.log(start, end);

            _context14.prev = 1;
            _context14.next = 4;
            return _Sale.default.find({
              sucursal_venta: sucursal,
              estatus_venta: status,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).countDocuments();

          case 4:
            query = _context14.sent;

            if (!(query >= 0)) {
              _context14.next = 9;
              break;
            }

            res.json({
              count: query
            });
            _context14.next = 10;
            break;

          case 9:
            return _context14.abrupt("return", res.status(404).json({
              message: "No existen Unidades ".concat(status, " en ").concat(sucursal)
            }));

          case 10:
            _context14.next = 16;
            break;

          case 12:
            _context14.prev = 12;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0);
            return _context14.abrupt("return", res.status(503).json({
              message: _context14.t0.message
            }));

          case 16:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 12]]);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

saleController.conteoVentasByVendedor = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body12, sucursal, estatus, start, end, filter, consulta;

    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body12 = req.body, sucursal = _req$body12.sucursal, estatus = _req$body12.estatus, start = _req$body12.start, end = _req$body12.end; // console.log(req.body)

            _context15.prev = 1;
            filter = {
              sucursal_venta: sucursal,
              estatus_venta: estatus,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context15.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
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

          case 5:
            consulta = _context15.sent;

            if (!(consulta.length > 0)) {
              _context15.next = 10;
              break;
            }

            res.json(consulta);
            _context15.next = 11;
            break;

          case 10:
            return _context15.abrupt("return", res.status(201).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context15.next = 17;
            break;

          case 13:
            _context15.prev = 13;
            _context15.t0 = _context15["catch"](1);
            console.log(_context15.t0);
            return _context15.abrupt("return", res.status(503).json({
              message: _context15.t0.message
            }));

          case 17:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 13]]);
  }));

  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

saleController.totalAccesoriosBySucursalMes = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$body13, sucursal, estado, start, end, filter, query, arrNoVacios, arr, total;

    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$body13 = req.body, sucursal = _req$body13.sucursal, estado = _req$body13.estado, start = _req$body13.start, end = _req$body13.end;
            _context17.prev = 1;
            filter = {
              sucursal_venta: sucursal,
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context17.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, // {$unwind: {path: '$accesorios'}},
            {
              $group: {
                _id: "$accesorios",
                qty: {
                  $sum: 1
                } // totalProps: {$sum: '$accesorios.precio'}

              }
            } // {$addFields: {totalProps: {$sum: '$accesorios.precio'}}}
            ]);

          case 5:
            query = _context17.sent;
            arrNoVacios = query.filter(function (element) {
              return element._id.length > 0;
            }); // console.log(arrNoVacios);

            arr = [];
            _context17.next = 10;
            return arrNoVacios.forEach( /*#__PURE__*/function () {
              var _ref17 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(element) {
                var abc, query;
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        abc = {};
                        _context16.next = 3;
                        return Props.findById(element._id);

                      case 3:
                        query = _context16.sent;
                        abc.precio = query.precio;
                        abc.qty = element.qty;
                        arr.push(abc);

                      case 7:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16);
              }));

              return function (_x33) {
                return _ref17.apply(this, arguments);
              };
            }());

          case 10:
            // await console.log(arr);
            total = arrNoVacios.reduce(function (acc, curVal) {
              return acc + curVal.qty; // let prop = await Props.findById(curVal._id);
              // let valor = prop.precio * curVal.qty;
              // let sumatoria = acc + valor;
              // console.log(sumatoria);
              // return sumatoria;
            }, 0); // let total = query.map( async (elemento) => {
            //     try {
            //         if(elemento._id.length > 0){
            //             // console.log('Elemento:',elemento);
            //             let id = elemento._id;
            //             let prop = await Props.findById(id);
            //             // console.log(prop);
            //             let sumatoria = 0;
            //             let valor = elemento.qty * prop.precio;
            //             sumatoria += valor;
            //             // console.log('suma:',sumatoria);
            //             return {...sumatoria};
            //         }
            //     } catch (err) {
            //         console.log(err);
            //     }
            // });

            if (!(query.length >= 0)) {
              _context17.next = 15;
              break;
            }

            res.json({
              total: total,
              deploy: arrNoVacios
            });
            _context17.next = 16;
            break;

          case 15:
            return _context17.abrupt("return", res.status(201).json({
              message: "No existe Importe"
            }));

          case 16:
            _context17.next = 21;
            break;

          case 18:
            _context17.prev = 18;
            _context17.t0 = _context17["catch"](1);
            console.log(_context17.t0);

          case 21:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[1, 18]]);
  }));

  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

saleController.conteoVentasByModelo = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var _req$body14, sucursal, estatus, start, end, filter, query;

    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _req$body14 = req.body, sucursal = _req$body14.sucursal, estatus = _req$body14.estatus, start = _req$body14.start, end = _req$body14.end;
            _context18.prev = 1;
            filter = {
              sucursal_venta: sucursal,
              estatus_venta: estatus,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context18.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, {
              $group: {
                _id: "$auto",
                num_ventas: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context18.sent;

            if (!(query.length > 0)) {
              _context18.next = 10;
              break;
            }

            res.json({
              ranking: query
            });
            _context18.next = 11;
            break;

          case 10:
            return _context18.abrupt("return", res.status(404).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context18.next = 17;
            break;

          case 13:
            _context18.prev = 13;
            _context18.t0 = _context18["catch"](1);
            console.log(_context18.t0);
            return _context18.abrupt("return", res.status(503).json({
              message: _context18.t0.message
            }));

          case 17:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 13]]);
  }));

  return function (_x34, _x35) {
    return _ref18.apply(this, arguments);
  };
}();

saleController.rankingVentasByModelo = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body15, estado, start, end, filter, query;

    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _req$body15 = req.body, estado = _req$body15.estado, start = _req$body15.start, end = _req$body15.end;
            _context19.prev = 1;
            filter = {
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context19.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
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

          case 5:
            query = _context19.sent;

            if (!(query.length > 0)) {
              _context19.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context19.next = 11;
            break;

          case 10:
            return _context19.abrupt("return", res.status(404).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context19.next = 17;
            break;

          case 13:
            _context19.prev = 13;
            _context19.t0 = _context19["catch"](1);
            console.log(_context19.t0);
            return _context19.abrupt("return", res.status(503).json({
              message: _context19.t0.message
            }));

          case 17:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[1, 13]]);
  }));

  return function (_x36, _x37) {
    return _ref19.apply(this, arguments);
  };
}();

saleController.conteoUnidadesEntregadasBySucursal = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var _req$body16, sucursal, start, end, query;

    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _req$body16 = req.body, sucursal = _req$body16.sucursal, start = _req$body16.start, end = _req$body16.end;
            _context20.prev = 1;
            _context20.next = 4;
            return _Sale.default.where({
              sucursal_venta: {
                $regex: ".*" + sucursal + ".*"
              },
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).find().countDocuments();

          case 4:
            query = _context20.sent;

            if (!(query >= 0)) {
              _context20.next = 9;
              break;
            }

            res.json({
              total: query
            });
            _context20.next = 10;
            break;

          case 9:
            return _context20.abrupt("return", res.status(404).json({
              message: "No existen Unidades entregadas en ".concat(sucursal)
            }));

          case 10:
            _context20.next = 16;
            break;

          case 12:
            _context20.prev = 12;
            _context20.t0 = _context20["catch"](1);
            console.log(_context20.t0);
            return _context20.abrupt("return", res.status(503).json({
              message: _context20.t0.message
            }));

          case 16:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[1, 12]]);
  }));

  return function (_x38, _x39) {
    return _ref20.apply(this, arguments);
  };
}();

saleController.conteoVehiculosEntregadosByFecha = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var _req$body17, ubicacion, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _req$body17 = req.body, ubicacion = _req$body17.ubicacion, start = _req$body17.start, end = _req$body17.end;
            _context21.prev = 1;
            filtro = {
              ubicacion_vehiculo: ubicacion,
              fecha_entrega: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context21.next = 5;
            return _Sale.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$sucursal_venta",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context21.sent;

            if (query.length > 0) {
              res.json({
                total: query.length,
                deploy: query
              });
            }

            _context21.next = 13;
            break;

          case 9:
            _context21.prev = 9;
            _context21.t0 = _context21["catch"](1);
            console.log(_context21.t0);
            return _context21.abrupt("return", res.status(503).json({
              message: _context21.t0.message
            }));

          case 13:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[1, 9]]);
  }));

  return function (_x40, _x41) {
    return _ref21.apply(this, arguments);
  };
}();

saleController.obtenerToyotaValues = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _req$body18, sucursal, statusVenta, start, end, objetos, query;

    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _req$body18 = req.body, sucursal = _req$body18.sucursal, statusVenta = _req$body18.statusVenta, start = _req$body18.start, end = _req$body18.end;
            objetos = [];
            _context22.prev = 2;
            _context22.next = 5;
            return _Sale.default.where({
              sucursal_venta: sucursal,
              estatus_venta: statusVenta,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).find().populate("adicional vendedor auto");

          case 5:
            query = _context22.sent;
            // const values = await query.adicional
            // console.log(query)
            query.forEach(function (element) {
              console.log(element);

              if (element.adicional.length > 0) {
                var perra = {};
                perra.sucursal = element.sucursal_venta;
                perra.serie = element.serie_tdp;
                perra.adicional = element.adicional;
                perra.vendedor = element.vendedor;
                perra.vehiculo = element.auto;
                objetos.push(perra);
              }
            });

            if (!(query >= 0)) {
              _context22.next = 11;
              break;
            }

            res.json({
              nro_adicionales: objetos.length,
              toyota_values: objetos
            });
            _context22.next = 12;
            break;

          case 11:
            return _context22.abrupt("return", res.status(404).json({
              message: "No existen Unidades ".concat(statusVenta, " en ").concat(sucursal, " con Toyota Value en ese rango de fechas")
            }));

          case 12:
            _context22.next = 18;
            break;

          case 14:
            _context22.prev = 14;
            _context22.t0 = _context22["catch"](2);
            console.log(_context22.t0.message);
            return _context22.abrupt("return", res.status(503).json({
              message: _context22.t0.message
            }));

          case 18:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[2, 14]]);
  }));

  return function (_x42, _x43) {
    return _ref22.apply(this, arguments);
  };
}();

saleController.getVehiclesySeller = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var _req$body19, vendedor, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _req$body19 = req.body, vendedor = _req$body19.vendedor, start = _req$body19.start, end = _req$body19.end;
            _context23.prev = 1;
            _context23.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context23.sent;
            filtro = {
              vendedor: sellerFound._id,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context23.next = 8;
            return _Sale.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$auto",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 8:
            query = _context23.sent;

            if (!(query.length > 0)) {
              _context23.next = 13;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context23.next = 14;
            break;

          case 13:
            return _context23.abrupt("return", res.staus(201).json({
              message: "No existen Ventas en este Vendedor"
            }));

          case 14:
            _context23.next = 20;
            break;

          case 16:
            _context23.prev = 16;
            _context23.t0 = _context23["catch"](1);
            console.log(_context23.t0.message);
            return _context23.abrupt("return", res.status(503).json({
              message: _context23.t0.message
            }));

          case 20:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 16]]);
  }));

  return function (_x44, _x45) {
    return _ref23.apply(this, arguments);
  };
}();

saleController.getSalesBySeller = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var _req$body20, vendedor, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _req$body20 = req.body, vendedor = _req$body20.vendedor, start = _req$body20.start, end = _req$body20.end;
            _context24.prev = 1;
            _context24.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context24.sent;
            filtro = {
              vendedor: sellerFound._id,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context24.next = 8;
            return _Sale.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$estatus_venta",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 8:
            query = _context24.sent;

            if (!(query.length > 0)) {
              _context24.next = 13;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context24.next = 14;
            break;

          case 13:
            return _context24.abrupt("return", res.staus(201).json({
              message: "No existen Ventas en este Vendedor"
            }));

          case 14:
            _context24.next = 20;
            break;

          case 16:
            _context24.prev = 16;
            _context24.t0 = _context24["catch"](1);
            console.log(_context24.t0);
            return _context24.abrupt("return", res.status(503).json({
              message: _context24.t0.message
            }));

          case 20:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[1, 16]]);
  }));

  return function (_x46, _x47) {
    return _ref24.apply(this, arguments);
  };
}();

saleController.getRankingByStatusyFecha = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var _req$body21, sucursal, start, end, filter, consulta;

    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _req$body21 = req.body, sucursal = _req$body21.sucursal, start = _req$body21.start, end = _req$body21.end;
            _context25.prev = 1;
            filter = {
              sucursal_venta: sucursal,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context25.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, {
              $group: {
                _id: "$estatus_venta",
                num_ventas: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                num_ventas: -1
              }
            }]);

          case 5:
            consulta = _context25.sent;

            if (!(consulta.length > 0)) {
              _context25.next = 10;
              break;
            }

            res.json({
              total: consulta.length,
              ranking: consulta
            });
            _context25.next = 11;
            break;

          case 10:
            return _context25.abrupt("return", res.status(404).json({
              message: "No existen ventas aún"
            }));

          case 11:
            _context25.next = 17;
            break;

          case 13:
            _context25.prev = 13;
            _context25.t0 = _context25["catch"](1);
            console.log(_context25.t0);
            return _context25.abrupt("return", res.status(503).json({
              message: _context25.t0.message
            }));

          case 17:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[1, 13]]);
  }));

  return function (_x48, _x49) {
    return _ref25.apply(this, arguments);
  };
}();

saleController.probandoRanking = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var _req$body22, sucursal, estado, start, end, filter, query;

    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _req$body22 = req.body, sucursal = _req$body22.sucursal, estado = _req$body22.estado, start = _req$body22.start, end = _req$body22.end;
            _context26.prev = 1;
            filter = {
              sucursal_venta: sucursal,
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context26.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, {
              $group: {
                _id: {
                  seller: "$vendedor",
                  month: {
                    $month: "$fecha_cancelacion"
                  }
                },
                count: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                _id: 1
              }
            }]);

          case 5:
            query = _context26.sent;

            if (!(query.length > 0)) {
              _context26.next = 10;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context26.next = 11;
            break;

          case 10:
            return _context26.abrupt("return", res.status(201).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context26.next = 16;
            break;

          case 13:
            _context26.prev = 13;
            _context26.t0 = _context26["catch"](1);
            console.log(_context26.t0);

          case 16:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[1, 13]]);
  }));

  return function (_x50, _x51) {
    return _ref26.apply(this, arguments);
  };
}();

saleController.conteoVentasBySucursalyEstadoyMarca = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var _req$body23, sucursal, estado, marca, start, end, query, obj;

    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _req$body23 = req.body, sucursal = _req$body23.sucursal, estado = _req$body23.estado, marca = _req$body23.marca, start = _req$body23.start, end = _req$body23.end;
            _context27.prev = 1;
            _context27.next = 4;
            return _Sale.default.find({
              sucursal_venta: sucursal,
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).populate({
              path: "auto",
              select: "cod_tdp model version",
              populate: {
                path: "model",
                select: "avatar name marca",
                populate: {
                  path: "marca",
                  select: "avatar name",
                  match: {
                    name: marca
                  }
                }
              }
            });

          case 4:
            query = _context27.sent;
            // console.log(query.length);
            obj = query.filter(function (b) {
              return b.auto.model.marca;
            });

            if (obj.length > 0) {
              // console.log(obj);
              res.json({
                total: obj.length,
                deploy: obj
              });
            }

            _context27.next = 13;
            break;

          case 9:
            _context27.prev = 9;
            _context27.t0 = _context27["catch"](1);
            console.log(_context27.t0);
            return _context27.abrupt("return", res.status(503).json({
              message: _context27.t0.message
            }));

          case 13:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[1, 9]]);
  }));

  return function (_x52, _x53) {
    return _ref27.apply(this, arguments);
  };
}();

saleController.rankingVentasByFinanciamiento = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var _req$body24, sucursal, estado, start, end, filter, query;

    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _req$body24 = req.body, sucursal = _req$body24.sucursal, estado = _req$body24.estado, start = _req$body24.start, end = _req$body24.end;
            _context28.prev = 1;
            filter = {
              sucursal_venta: {
                $regex: ".*" + sucursal + ".*"
              },
              estatus_venta: estado,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context28.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, {
              $group: {
                _id: "$tipo_financiamiento",
                qty: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                qty: -1
              }
            }]);

          case 5:
            query = _context28.sent;

            if (!(query.length > 0)) {
              _context28.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context28.next = 11;
            break;

          case 10:
            return _context28.abrupt("return", res.status(404).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context28.next = 17;
            break;

          case 13:
            _context28.prev = 13;
            _context28.t0 = _context28["catch"](1);
            console.log(_context28.t0);
            return _context28.abrupt("return", res.status(503).json({
              message: _context28.t0.message
            }));

          case 17:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[1, 13]]);
  }));

  return function (_x54, _x55) {
    return _ref28.apply(this, arguments);
  };
}();

saleController.rankingVentasByEntidad = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var _req$body25, sucursal, estado, financiamiento, start, end, filter, query;

    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _req$body25 = req.body, sucursal = _req$body25.sucursal, estado = _req$body25.estado, financiamiento = _req$body25.financiamiento, start = _req$body25.start, end = _req$body25.end;
            _context29.prev = 1;
            filter = {
              sucursal_venta: {
                $regex: ".*" + sucursal + ".*"
              },
              estatus_venta: estado,
              tipo_financiamiento: financiamiento,
              fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context29.next = 5;
            return _Sale.default.aggregate([{
              $match: filter
            }, {
              $group: {
                _id: "$entidad_bancaria",
                qty: {
                  $sum: 1
                }
              }
            }, {
              $sort: {
                qty: -1
              }
            }]);

          case 5:
            query = _context29.sent;

            if (!(query.length > 0)) {
              _context29.next = 10;
              break;
            }

            res.json({
              total: query.length,
              ranking: query
            });
            _context29.next = 11;
            break;

          case 10:
            return _context29.abrupt("return", res.status(404).json({
              message: "No existen Ventas aún"
            }));

          case 11:
            _context29.next = 17;
            break;

          case 13:
            _context29.prev = 13;
            _context29.t0 = _context29["catch"](1);
            console.log(_context29.t0);
            return _context29.abrupt("return", res.status(503).json({
              message: _context29.t0.message
            }));

          case 17:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[1, 13]]);
  }));

  return function (_x56, _x57) {
    return _ref29.apply(this, arguments);
  };
}();

var _default = saleController;
exports.default = _default;
//# sourceMappingURL=sale.controller.js.map