"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ListaEspera = _interopRequireDefault(require("../models/ListaEspera"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Colores = _interopRequireDefault(require("../models/Colores"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Mes = _interopRequireDefault(require("../models/Mes"));

var _Financiamiento = _interopRequireDefault(require("../models/Financiamiento"));

var _Banco = _interopRequireDefault(require("../models/Banco"));

var _PlanMAF = _interopRequireDefault(require("../models/PlanMAF"));

var _Maf = _interopRequireDefault(require("../models/Maf"));

var _User = _interopRequireDefault(require("../models/User"));

var _EstadoListaEspera = _interopRequireDefault(require("../models/EstadoListaEspera"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var listaEsperaController = {};

listaEsperaController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ListaEspera.default.find().sort({
              mes_primer_abono: -1
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "vehiculo",
              select: "chasis model cod_tdp version",
              populate: [{
                path: "chasis",
                select: "name"
              }, {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }]
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document cellphone email"
            }).populate({
              path: "anio_primer_abono",
              select: "name"
            }).populate({
              path: "mes_primer_abono",
              select: "name"
            }).populate({
              path: "tipo_venta",
              select: "name"
            }).populate({
              path: "financiera",
              select: "name avatar"
            }).populate({
              path: "plan_maf",
              select: "name"
            }).populate({
              path: "solicitudMAF",
              select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
              populate: [{
                path: "sucursalE",
                select: "name"
              }, {
                path: "customer",
                select: "name document cellphone email"
              }, {
                path: "seller",
                select: "name document sucursalE marcaE",
                populate: [{
                  path: "sucursalE",
                  select: "name"
                }, {
                  path: "marcaE",
                  select: "name avatar"
                }]
              }, {
                path: "car",
                select: "chasis model cod_tdp version",
                populate: [{
                  path: "chasis",
                  select: "name"
                }, {
                  path: "model",
                  select: "name avatar marca",
                  populate: {
                    path: "marca",
                    select: "name avatar"
                  }
                }]
              }, {
                path: "estadoSolicitudMAF",
                select: "name"
              }]
            }).populate({
              path: "createdBy",
              select: "name username"
            }).populate({
              path: "updatedBy",
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
              message: "No existen clientes en espera"
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

listaEsperaController.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var itemId, query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            itemId = req.params.itemId;
            _context2.prev = 1;
            _context2.next = 4;
            return _ListaEspera.default.findById(itemId).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "vehiculo",
              select: "chasis model cod_tdp version",
              populate: [{
                path: "chasis",
                select: "name"
              }, {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: "marca",
                  select: "name avatar"
                }
              }]
            }).populate({
              path: "colorE",
              select: "name"
            }).populate({
              path: "cliente",
              select: "name document cellphone email"
            }).populate({
              path: "anio_primer_abono",
              select: "name"
            }).populate({
              path: "mes_primer_abono",
              select: "name"
            }).populate({
              path: "tipo_venta",
              select: "name"
            }).populate({
              path: "financiera",
              select: "name avatar"
            }).populate({
              path: "plan_maf",
              select: "name"
            }).populate({
              path: "solicitudMAF",
              select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
              populate: [{
                path: "sucursalE",
                select: "name"
              }, {
                path: "customer",
                select: "name document cellphone email"
              }, {
                path: "seller",
                select: "name document sucursalE marcaE",
                populate: [{
                  path: "sucursalE",
                  select: "name"
                }, {
                  path: "marcaE",
                  select: "name avatar"
                }]
              }, {
                path: "car",
                select: "chasis model cod_tdp version",
                populate: [{
                  path: "chasis",
                  select: "name"
                }, {
                  path: "model",
                  select: "name avatar marca",
                  populate: {
                    path: "marca",
                    select: "name avatar"
                  }
                }]
              }, {
                path: "estadoSolicitudMAF",
                select: "name"
              }]
            }).populate({
              path: "createdBy",
              select: "name username"
            }).populate({
              path: "updatedBy",
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
              message: "No se encontró el cliente en la lista de espera"
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

listaEsperaController.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, cod_interno, sucursal, sucursalE, vehiculo, colorE, cantidad, orden, cliente, anio_primer_abono, mes_primer_abono, grupo_abonos, precio_venta_final, tipo_venta, financiera, plan_maf, fecha_carta_aprobacion, inicial, solicitudMAF, cuenta_epdp, avance_pago_contado, avance_pago_credito, cumple_politica, createdBy, obj, sucursalFound, vehiculoFound, colorFound, customerFound, anioFound, mesFound, tipoVentaFound, financieraFound, planMAFFound, solicitudMAFFound, userFound, query;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cod_interno = _req$body.cod_interno, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, vehiculo = _req$body.vehiculo, colorE = _req$body.colorE, cantidad = _req$body.cantidad, orden = _req$body.orden, cliente = _req$body.cliente, anio_primer_abono = _req$body.anio_primer_abono, mes_primer_abono = _req$body.mes_primer_abono, grupo_abonos = _req$body.grupo_abonos, precio_venta_final = _req$body.precio_venta_final, tipo_venta = _req$body.tipo_venta, financiera = _req$body.financiera, plan_maf = _req$body.plan_maf, fecha_carta_aprobacion = _req$body.fecha_carta_aprobacion, inicial = _req$body.inicial, solicitudMAF = _req$body.solicitudMAF, cuenta_epdp = _req$body.cuenta_epdp, avance_pago_contado = _req$body.avance_pago_contado, avance_pago_credito = _req$body.avance_pago_credito, cumple_politica = _req$body.cumple_politica, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            // const codTdpFound = Vehicle.findOne({cod_tdp: vehiculo});
            // const countOrder = ListaEspera.find({vehicle: codTdpFound._id}).countDocuments();
            obj = new _ListaEspera.default({
              cod_interno: cod_interno,
              sucursal: sucursal,
              cantidad: cantidad,
              orden: orden,
              grupo_abonos: grupo_abonos,
              precio_venta_final: precio_venta_final,
              fecha_carta_aprobacion: fecha_carta_aprobacion,
              inicial: inicial,
              cuenta_epdp: cuenta_epdp,
              avance_pago_contado: avance_pago_contado,
              avance_pago_credito: avance_pago_credito,
              cumple_politica: cumple_politica
            });
            _context3.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            sucursalFound = _context3.sent;

            if (sucursalFound) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 8:
            obj.sucursalE = sucursalFound._id;
            _context3.next = 11;
            return _Vehicle.default.findOne({
              cod_tdp: vehiculo
            });

          case 11:
            vehiculoFound = _context3.sent;

            if (vehiculoFound) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(vehiculo, " no encontrado")
            }));

          case 14:
            obj.vehiculo = vehiculoFound._id;
            _context3.next = 17;
            return _Colores.default.find({
              name: {
                $in: colorE
              }
            });

          case 17:
            colorFound = _context3.sent;

            if (colorFound) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 20:
            obj.colorE = colorFound.map(function (a) {
              return a._id;
            });
            _context3.next = 23;
            return _Customer.default.findOne({
              name: cliente
            });

          case 23:
            customerFound = _context3.sent;

            if (customerFound) {
              _context3.next = 26;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 26:
            obj.cliente = customerFound._id;
            _context3.next = 29;
            return _Anio.default.findOne({
              name: anio_primer_abono
            });

          case 29:
            anioFound = _context3.sent;

            if (anioFound) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Anio ".concat(anio_primer_abono, " no encontrado")
            }));

          case 32:
            obj.anio_primer_abono = anioFound._id;
            _context3.next = 35;
            return _Mes.default.findOne({
              name: mes_primer_abono
            });

          case 35:
            mesFound = _context3.sent;

            if (mesFound) {
              _context3.next = 38;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Mes ".concat(mes_primer_abono, " no encontrado")
            }));

          case 38:
            obj.mes_primer_abono = mesFound._id;
            _context3.next = 41;
            return _Financiamiento.default.findOne({
              name: tipo_venta
            });

          case 41:
            tipoVentaFound = _context3.sent;

            if (tipoVentaFound) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo Venta ".concat(tipo_venta, " no encontrado")
            }));

          case 44:
            obj.tipo_venta = tipoVentaFound._id;

            if (!(financiera == null || financiera == undefined)) {
              _context3.next = 49;
              break;
            }

            obj.financiera = null;
            _context3.next = 55;
            break;

          case 49:
            _context3.next = 51;
            return _Banco.default.findOne({
              name: financiera
            });

          case 51:
            financieraFound = _context3.sent;

            if (financieraFound) {
              _context3.next = 54;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Financiera ".concat(financiera, " no encontrada")
            }));

          case 54:
            obj.financiera = financieraFound._id;

          case 55:
            if (!(plan_maf == null || plan_maf == undefined)) {
              _context3.next = 59;
              break;
            }

            obj.plan_maf = null;
            _context3.next = 65;
            break;

          case 59:
            _context3.next = 61;
            return _PlanMAF.default.findOne({
              name: plan_maf
            });

          case 61:
            planMAFFound = _context3.sent;

            if (planMAFFound) {
              _context3.next = 64;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Plan MAF ".concat(plan_maf, " no encontrado")
            }));

          case 64:
            obj.plan_maf = planMAFFound._id;

          case 65:
            if (!(solicitudMAF == null || solicitudMAF == undefined)) {
              _context3.next = 69;
              break;
            }

            obj.solicitudMAF = null;
            _context3.next = 75;
            break;

          case 69:
            _context3.next = 71;
            return _Maf.default.findOne({
              name: solicitudMAF
            });

          case 71:
            solicitudMAFFound = _context3.sent;

            if (solicitudMAFFound) {
              _context3.next = 74;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Solicitud MAF ".concat(solicitudMAF, " no encontrada")
            }));

          case 74:
            obj.solicitudMAF = solicitudMAFFound._id;

          case 75:
            _context3.next = 77;
            return _User.default.findOne({
              username: createdBy
            });

          case 77:
            userFound = _context3.sent;

            if (userFound) {
              _context3.next = 80;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 80:
            obj.createdBy = userFound._id;
            _context3.next = 83;
            return obj.save();

          case 83:
            query = _context3.sent;

            if (query) {
              res.json({
                message: "Cliente agregado a lista de espera con éxito"
              });
            }

            _context3.next = 91;
            break;

          case 87:
            _context3.prev = 87;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 91:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 87]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

listaEsperaController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, sucursal, sucursalE, orden, cliente, vehiculo, cantidad, colorE, precio_venta_final, tipo_venta, financiera, plan_maf, fecha_carta_aprobacion, inicial, grupo_abonos, cuenta_epdp, avance_pago_contado, avance_pago_credito, cumple_politica, itemId, itemNullF, itemNullPM, sucursalFound, vehiculoFound, customerFound, tipoVentaFound, colorFound, financieraFound, planMAFFound, query;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, sucursal = _req$body2.sucursal, sucursalE = _req$body2.sucursalE, orden = _req$body2.orden, cliente = _req$body2.cliente, vehiculo = _req$body2.vehiculo, cantidad = _req$body2.cantidad, colorE = _req$body2.colorE, precio_venta_final = _req$body2.precio_venta_final, tipo_venta = _req$body2.tipo_venta, financiera = _req$body2.financiera, plan_maf = _req$body2.plan_maf, fecha_carta_aprobacion = _req$body2.fecha_carta_aprobacion, inicial = _req$body2.inicial, grupo_abonos = _req$body2.grupo_abonos, cuenta_epdp = _req$body2.cuenta_epdp, avance_pago_contado = _req$body2.avance_pago_contado, avance_pago_credito = _req$body2.avance_pago_credito, cumple_politica = _req$body2.cumple_politica;
            itemId = req.params.itemId;
            itemNullF = null;
            itemNullPM = null;
            console.log(req.body);
            _context4.prev = 5;
            _context4.next = 8;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 8:
            sucursalFound = _context4.sent;

            if (sucursalFound) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrada")
            }));

          case 11:
            _context4.next = 13;
            return _Vehicle.default.findOne({
              cod_tdp: vehiculo
            });

          case 13:
            vehiculoFound = _context4.sent;

            if (vehiculoFound) {
              _context4.next = 16;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(vehiculo, " no encontrado")
            }));

          case 16:
            _context4.next = 18;
            return _Customer.default.findOne({
              name: cliente
            });

          case 18:
            customerFound = _context4.sent;

            if (customerFound) {
              _context4.next = 21;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 21:
            _context4.next = 23;
            return _Financiamiento.default.findOne({
              name: tipo_venta
            });

          case 23:
            tipoVentaFound = _context4.sent;

            if (tipoVentaFound) {
              _context4.next = 26;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Tipo Venta ".concat(tipo_venta, " no encontrado")
            }));

          case 26:
            _context4.next = 28;
            return _Colores.default.find({
              name: {
                $in: colorE
              }
            });

          case 28:
            colorFound = _context4.sent;

            if (colorFound) {
              _context4.next = 31;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Color ".concat(colorE, " no encontrado")
            }));

          case 31:
            if (!(financiera == null || financiera == undefined)) {
              _context4.next = 35;
              break;
            }

            itemNullF = null;
            _context4.next = 41;
            break;

          case 35:
            _context4.next = 37;
            return _Banco.default.findOne({
              name: financiera
            });

          case 37:
            financieraFound = _context4.sent;

            if (financieraFound) {
              _context4.next = 40;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Financiera ".concat(financiera, " no encontrada")
            }));

          case 40:
            itemNullF = financieraFound._id;

          case 41:
            if (!(plan_maf == null || plan_maf == undefined)) {
              _context4.next = 45;
              break;
            }

            itemNullPM = null;
            _context4.next = 51;
            break;

          case 45:
            _context4.next = 47;
            return _PlanMAF.default.findOne({
              name: plan_maf
            });

          case 47:
            planMAFFound = _context4.sent;

            if (planMAFFound) {
              _context4.next = 50;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Plan MAF ".concat(plan_maf, " no encontrado")
            }));

          case 50:
            itemNullPM = planMAFFound._id;

          case 51:
            _context4.next = 53;
            return _ListaEspera.default.findByIdAndUpdate(itemId, {
              sucursal: sucursal,
              sucursalE: sucursalFound._id,
              orden: orden,
              cliente: customerFound._id,
              vehiculo: vehiculoFound._id,
              cantidad: cantidad,
              colorE: colorFound.map(function (a) {
                return a._id;
              }),
              precio_venta_final: precio_venta_final,
              tipo_venta: tipoVentaFound._id,
              financiera: itemNullF,
              fecha_carta_aprobacion: fecha_carta_aprobacion,
              inicial: inicial,
              plan_maf: itemNullPM,
              grupo_abonos: grupo_abonos,
              cuenta_epdp: cuenta_epdp,
              avance_pago_contado: avance_pago_contado,
              avance_pago_credito: avance_pago_credito,
              cumple_politica: cumple_politica
            });

          case 53:
            query = _context4.sent;

            if (query) {
              res.json({
                message: "Cliente actualizado!"
              });
            } else {
              res.status(404).json({
                message: "No se encontró el cliente a actualizar"
              });
            }

            _context4.next = 61;
            break;

          case 57:
            _context4.prev = 57;
            _context4.t0 = _context4["catch"](5);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 61:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 57]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

listaEsperaController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var itemId, query;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            itemId = req.params.itemId;
            _context5.prev = 1;
            _context5.next = 4;
            return _ListaEspera.default.findByIdAndDelete(itemId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Cliente eliminado de la lista de espera con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No se encuentra cliente a eliminar"
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
}();

listaEsperaController.getCountByEstado = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var estadoE, estadoFound, query;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            estadoE = req.body.estadoE;
            _context6.prev = 1;
            _context6.next = 4;
            return _EstadoListaEspera.default.findOne({
              name: estadoE
            });

          case 4:
            estadoFound = _context6.sent;

            if (estadoFound) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoE, " no encontrado")
            }));

          case 7:
            _context6.next = 9;
            return _ListaEspera.default.find({
              estadoE: estadoFound._id
            }).countDocuments();

          case 9:
            query = _context6.sent;

            if (query >= 0) {
              res.json({
                total: query
              });
            }

            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 13]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

listaEsperaController.getCountClientByVehicle = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var cod_tdp, vehicleFound, clientsFound;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            cod_tdp = req.body.cod_tdp;
            _context7.prev = 1;
            _context7.next = 4;
            return _Vehicle.default.findOne({
              cod_tdp: cod_tdp
            });

          case 4:
            vehicleFound = _context7.sent;

            if (vehicleFound) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(404).json({
              message: "C\xF3digo ".concat(cod_tdp, " no encontrado")
            }));

          case 7:
            _context7.next = 9;
            return _ListaEspera.default.find({
              vehiculo: vehicleFound._id,
              orden: {
                $ne: 0
              }
            }).countDocuments();

          case 9:
            clientsFound = _context7.sent;

            if (clientsFound >= 0) {
              res.json({
                total: clientsFound
              });
            }

            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 13]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = listaEsperaController;
exports.default = _default;
//# sourceMappingURL=listaEspera.controller.js.map