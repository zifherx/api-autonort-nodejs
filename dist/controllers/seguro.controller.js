"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Customer = _interopRequireDefault(require("../models/Customer"));

var _Seller = _interopRequireDefault(require("../models/Seller"));

var _Seguro = _interopRequireDefault(require("../models/Seguro"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _User = _interopRequireDefault(require("../models/User"));

var _EstadoSeguro = _interopRequireDefault(require("../models/EstadoSeguro"));

var _Vehicle = _interopRequireDefault(require("../models/Vehicle"));

var _Anio = _interopRequireDefault(require("../models/Anio"));

var _Conexos = _interopRequireDefault(require("../models/Conexos"));

var _Aseguradora = _interopRequireDefault(require("../models/Aseguradora"));

var _TipoUso = _interopRequireDefault(require("../models/TipoUso"));

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var seguroController = {};

seguroController.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var query;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Seguro.default.find().sort({
              fechaRegistro: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "vendedor",
              select: "name document avatar sucursalE marcaE",
              populate: [{
                path: "sucursalE",
                select: "name"
              }, {
                path: "marcaE",
                select: "name avatar"
              }]
            }).populate({
              path: "createdBy",
              select: "name"
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
              message: "No existen Seguros"
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
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

seguroController.getOneById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var seguroId, query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context2.prev = 1;
            _context2.next = 4;
            return _Seguro.default.findById(seguroId).populate({
              path: "cliente",
              select: "name document cellphone email typeDocument"
            }).populate({
              path: "vendedor",
              select: "name document avatar sucursalE",
              populate: {
                path: 'sucursalE',
                select: 'name'
              }
            }).populate({
              path: "vehicleE",
              select: "model version cod_tdp",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: 'marca',
                  select: 'name avatar'
                }
              }
            }).populate({
              path: "anioE",
              select: "name"
            }).populate({
              path: "sucursalE",
              select: "name"
            }).populate({
              path: "aseguradoraE",
              select: "name"
            }).populate({
              path: "estadoSeguroE",
              select: "name"
            }).populate({
              path: "asesorConexosE",
              select: "name encargadoDe areaE",
              populate: {
                path: 'areaE',
                select: 'name'
              }
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
              message: "No existe el Seguro"
            }));

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
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

seguroController.createOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, codigo_interno, cliente, company, sucursal, sucursalE, status, estadoSeguroE, tipo_venta, area_venta, fecha_registro, fechaRegistro, forma_pago, cuotas, poliza, vendedor, marca, modelo, version, vehicleE, anioE, placa, uso, tipoUsoE, chasis, motor, asesorConexosE, endoso, entidad, inicio_vigencia, fin_vigencia, aseguradoraE, suma_asegurada, createdBy, newObj, foundSucursal, foundEstado, foundCliente, foundSeller, foundVehicle, foundTUso, foundAnio, foundConexos, foundAseguradora, foundEmployee, query;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, codigo_interno = _req$body.codigo_interno, cliente = _req$body.cliente, company = _req$body.company, sucursal = _req$body.sucursal, sucursalE = _req$body.sucursalE, status = _req$body.status, estadoSeguroE = _req$body.estadoSeguroE, tipo_venta = _req$body.tipo_venta, area_venta = _req$body.area_venta, fecha_registro = _req$body.fecha_registro, fechaRegistro = _req$body.fechaRegistro, forma_pago = _req$body.forma_pago, cuotas = _req$body.cuotas, poliza = _req$body.poliza, vendedor = _req$body.vendedor, marca = _req$body.marca, modelo = _req$body.modelo, version = _req$body.version, vehicleE = _req$body.vehicleE, anioE = _req$body.anioE, placa = _req$body.placa, uso = _req$body.uso, tipoUsoE = _req$body.tipoUsoE, chasis = _req$body.chasis, motor = _req$body.motor, asesorConexosE = _req$body.asesorConexosE, endoso = _req$body.endoso, entidad = _req$body.entidad, inicio_vigencia = _req$body.inicio_vigencia, fin_vigencia = _req$body.fin_vigencia, aseguradoraE = _req$body.aseguradoraE, suma_asegurada = _req$body.suma_asegurada, createdBy = _req$body.createdBy;
            _context3.prev = 1;
            newObj = new _Seguro.default({
              codigo_interno: codigo_interno,
              company: company,
              sucursal: sucursal,
              status: status,
              forma_pago: forma_pago,
              cuotas: cuotas,
              fecha_registro: fecha_registro,
              fechaRegistro: fechaRegistro,
              tipo_venta: tipo_venta,
              area_venta: area_venta,
              poliza: poliza,
              placa: placa,
              chasis: chasis,
              motor: motor,
              marca: marca,
              modelo: modelo,
              version: version,
              uso: uso,
              endoso: endoso,
              entidad: entidad,
              inicio_vigencia: inicio_vigencia,
              fin_vigencia: fin_vigencia,
              suma_asegurada: suma_asegurada
            });
            _context3.next = 5;
            return _Sucursal.default.findOne({
              name: sucursalE
            });

          case 5:
            foundSucursal = _context3.sent;

            if (foundSucursal) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Sucursal ".concat(sucursalE, " no encontrado")
            }));

          case 8:
            newObj.sucursalE = foundSucursal._id;
            _context3.next = 11;
            return _EstadoSeguro.default.findOne({
              name: estadoSeguroE
            });

          case 11:
            foundEstado = _context3.sent;

            if (foundEstado) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoSeguroE, " no encontrado")
            }));

          case 14:
            newObj.estadoSeguroE = foundEstado._id;
            _context3.next = 17;
            return _Customer.default.findOne({
              name: cliente
            });

          case 17:
            foundCliente = _context3.sent;

            if (foundCliente) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Cliente ".concat(cliente, " no encontrado")
            }));

          case 20:
            newObj.cliente = foundCliente._id;
            _context3.next = 23;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 23:
            foundSeller = _context3.sent;

            if (foundSeller) {
              _context3.next = 26;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Vendedor ".concat(vendedor, " no encontrado")
            }));

          case 26:
            newObj.vendedor = foundSeller._id;
            _context3.next = 29;
            return _Vehicle.default.findOne({
              cod_tdp: vehicleE
            });

          case 29:
            foundVehicle = _context3.sent;

            if (foundVehicle) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Veh\xEDculo ".concat(vehicleE, " no encontrado")
            }));

          case 32:
            newObj.vehicleE = foundVehicle._id;
            _context3.next = 35;
            return _TipoUso.default.findOne({
              name: tipoUsoE
            });

          case 35:
            foundTUso = _context3.sent;

            if (foundTUso) {
              _context3.next = 38;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Tipo uso ".concat(tipoUsoE, " no encontrado")
            }));

          case 38:
            newObj.tipoUsoE = foundTUso._id;
            _context3.next = 41;
            return _Anio.default.findOne({
              name: anioE
            });

          case 41:
            foundAnio = _context3.sent;

            if (foundAnio) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "A\xF1o ".concat(anioE, " no encontrado")
            }));

          case 44:
            newObj.anioE = foundAnio._id;
            _context3.next = 47;
            return _Conexos.default.findOne({
              name: asesorConexosE
            });

          case 47:
            foundConexos = _context3.sent;

            if (foundConexos) {
              _context3.next = 50;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Asesor conexos ".concat(asesorConexosE, " no encontrado")
            }));

          case 50:
            newObj.asesorConexosE = foundConexos._id;
            _context3.next = 53;
            return _Aseguradora.default.findOne({
              name: aseguradoraE
            });

          case 53:
            foundAseguradora = _context3.sent;

            if (foundAseguradora) {
              _context3.next = 56;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Aseguradora ".concat(aseguradoraE, " no encontrado")
            }));

          case 56:
            newObj.aseguradoraE = foundAseguradora._id;
            _context3.next = 59;
            return _User.default.findOne({
              username: createdBy
            });

          case 59:
            foundEmployee = _context3.sent;

            if (foundEmployee) {
              _context3.next = 62;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 62:
            newObj.createdBy = foundEmployee._id;
            _context3.next = 65;
            return newObj.save();

          case 65:
            query = _context3.sent;

            if (query) {
              res.json({
                message: "Seguro creado con éxito"
              });
            }

            _context3.next = 73;
            break;

          case 69:
            _context3.prev = 69;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(503).json({
              message: _context3.t0.message
            }));

          case 73:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 69]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

seguroController.updateOneById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var seguroId, _req$body2, status, estadoSeguroE, isProceso, fechaProceso, isEmitido, fechaEmision, query, foundEstado;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            seguroId = req.params.seguroId;
            _req$body2 = req.body, status = _req$body2.status, estadoSeguroE = _req$body2.estadoSeguroE, isProceso = _req$body2.isProceso, fechaProceso = _req$body2.fechaProceso, isEmitido = _req$body2.isEmitido, fechaEmision = _req$body2.fechaEmision;
            query = null;
            _context4.prev = 3;
            _context4.next = 6;
            return _EstadoSeguro.default.findOne({
              name: estadoSeguroE
            });

          case 6:
            foundEstado = _context4.sent;

            if (foundEstado) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estadoSeguroE, " no encontrado")
            }));

          case 9:
            if (!(estadoSeguroE == 'EN PROCESO')) {
              _context4.next = 15;
              break;
            }

            _context4.next = 12;
            return _Seguro.default.findByIdAndUpdate(seguroId, {
              status: status,
              estadoSeguroE: foundEstado._id,
              isProceso: isProceso,
              fechaProceso: fechaProceso
            });

          case 12:
            query = _context4.sent;
            _context4.next = 19;
            break;

          case 15:
            if (!(estadoSeguroE == 'EMITIDO')) {
              _context4.next = 19;
              break;
            }

            _context4.next = 18;
            return _Seguro.default.findByIdAndUpdate(seguroId, {
              status: status,
              estadoSeguroE: foundEstado._id,
              isEmitido: isEmitido,
              fechaEmision: fechaEmision
            });

          case 18:
            query = _context4.sent;

          case 19:
            if (!query) {
              _context4.next = 23;
              break;
            }

            res.json({
              message: "Seguro actualizado con éxito"
            });
            _context4.next = 24;
            break;

          case 23:
            return _context4.abrupt("return", res.status(404).json({
              message: "No existe seguro a actualizar"
            }));

          case 24:
            _context4.next = 30;
            break;

          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](3);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(503).json({
              message: _context4.t0.message
            }));

          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 26]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

seguroController.deleteOneById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var seguroId, query;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            seguroId = req.params.seguroId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Seguro.default.findByIdAndDelete(seguroId);

          case 4:
            query = _context5.sent;

            if (!query) {
              _context5.next = 9;
              break;
            }

            res.json({
              message: "Seguro eliminado con éxito"
            });
            _context5.next = 10;
            break;

          case 9:
            return _context5.abrupt("return", res.status(404).json({
              message: "No existe seguro a eliminar"
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

seguroController.getRankingByStatus = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, sucursal = _req$body3.sucursal, start = _req$body3.start, end = _req$body3.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context6.prev = 2;
            _context6.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$status",
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context6.next = 11;
            break;

          case 10:
            return _context6.abrupt("return", res.status(201).json({
              message: "No existen solicitudes"
            }));

          case 11:
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            return _context6.abrupt("return", res.status(503).json({
              message: _context6.t0.message
            }));

          case 16:
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

seguroController.getRankingByTipo = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body4 = req.body, sucursal = _req$body4.sucursal, start = _req$body4.start, end = _req$body4.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context7.prev = 2;
            _context7.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$tipo_venta",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context7.sent;

            if (!(query.length > 0)) {
              _context7.next = 10;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context7.next = 11;
            break;

          case 10:
            return _context7.abrupt("return", res.status(201).json({
              message: "No existen solicitudes"
            }));

          case 11:
            _context7.next = 16;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            return _context7.abrupt("return", res.status(503).json({
              message: _context7.t0.message
            }));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 13]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

seguroController.getRankingByVehicle = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body5 = req.body, sucursal = _req$body5.sucursal, start = _req$body5.start, end = _req$body5.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context8.prev = 2;
            _context8.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$modelo",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 5:
            query = _context8.sent;

            if (!(query.length > 0)) {
              _context8.next = 10;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context8.next = 11;
            break;

          case 10:
            return _context8.abrupt("return", res.status(201).json({
              message: "No existen solicitudes"
            }));

          case 11:
            _context8.next = 16;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            return _context8.abrupt("return", res.status(503).json({
              message: _context8.t0.message
            }));

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

seguroController.getRankingBySeller = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, sucursal, status, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body6 = req.body, sucursal = _req$body6.sucursal, status = _req$body6.status, start = _req$body6.start, end = _req$body6.end;
            filtro = {
              sucursal: sucursal,
              status: status,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context9.prev = 2;
            _context9.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$vendedor",
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context9.next = 11;
            break;

          case 10:
            return _context9.abrupt("return", res.status(201).json({
              message: "No existen solicitudes"
            }));

          case 11:
            _context9.next = 16;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](2);
            return _context9.abrupt("return", res.status(503).json({
              message: _context9.t0.message
            }));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 13]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

seguroController.getRankingByAseguradora = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, sucursal, start, end, filtro, query;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body7 = req.body, sucursal = _req$body7.sucursal, start = _req$body7.start, end = _req$body7.end;
            filtro = {
              sucursal: sucursal,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context10.prev = 2;
            _context10.next = 5;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$aseguradora",
                qty: {
                  $sum: 1
                }
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
              deploy: query
            });
            _context10.next = 11;
            break;

          case 10:
            return _context10.abrupt("return", res.status(201).json({
              message: "No existen solicitudes"
            }));

          case 11:
            _context10.next = 16;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](2);
            return _context10.abrupt("return", res.status(503).json({
              message: _context10.t0.message
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 13]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

seguroController.getSegurosByVendedor = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body8, vendedor, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body8 = req.body, vendedor = _req$body8.vendedor, start = _req$body8.start, end = _req$body8.end;
            _context11.prev = 1;
            _context11.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context11.sent;

            if (sellerFound) {
              _context11.next = 7;
              break;
            }

            return _context11.abrupt("return", res.status(404).json({
              message: "No existe el vendedor"
            }));

          case 7:
            filtro = {
              vendedor: sellerFound._id,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context11.next = 10;
            return _Seguro.default.aggregate([{
              $match: filtro
            }, {
              $group: {
                _id: "$status",
                qty: {
                  $sum: 1
                }
              }
            }]);

          case 10:
            query = _context11.sent;

            if (!(query.length > 0)) {
              _context11.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context11.next = 16;
            break;

          case 15:
            return _context11.abrupt("return", res.status(201).json({
              message: "Vendedor no cuenta con seguros"
            }));

          case 16:
            _context11.next = 22;
            break;

          case 18:
            _context11.prev = 18;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0.response);
            return _context11.abrupt("return", res.status(503).json({
              message: _context11.t0.message
            }));

          case 22:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 18]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

seguroController.getSegurosByModelo = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body9, vendedor, estado, start, end, sellerFound, filtro, query;

    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _req$body9 = req.body, vendedor = _req$body9.vendedor, estado = _req$body9.estado, start = _req$body9.start, end = _req$body9.end;
            _context12.prev = 1;
            _context12.next = 4;
            return _Seller.default.findOne({
              name: vendedor
            });

          case 4:
            sellerFound = _context12.sent;

            if (sellerFound) {
              _context12.next = 7;
              break;
            }

            return _context12.abrupt("return", res.status(404).json({
              message: "No existe el vendedor"
            }));

          case 7:
            filtro = {
              vendedor: sellerFound._id,
              status: estado,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            };
            _context12.next = 10;
            return _Seguro.default.aggregate([{
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
            query = _context12.sent;

            if (!(query.length > 0)) {
              _context12.next = 15;
              break;
            }

            res.json({
              total: query.length,
              deploy: query
            });
            _context12.next = 16;
            break;

          case 15:
            return _context12.abrupt("return", res.status(201).json({
              message: "Vendedor no cuenta con solicitudes"
            }));

          case 16:
            _context12.next = 22;
            break;

          case 18:
            _context12.prev = 18;
            _context12.t0 = _context12["catch"](1);
            console.log(_context12.t0.message);
            return _context12.abrupt("return", res.status(503).json({
              message: _context12.t0.message
            }));

          case 22:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 18]]);
  }));

  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

seguroController.getBySucursalFecha = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body10, sucursal, start, end, query;

    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _req$body10 = req.body, sucursal = _req$body10.sucursal, start = _req$body10.start, end = _req$body10.end;
            _context13.prev = 1;
            _context13.next = 4;
            return _Seguro.default.find({
              sucursal: {
                $regex: ".*" + sucursal + ".*"
              },
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fechaRegistro: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "estadoSeguroE",
              select: "name"
            }).populate({
              path: "vendedor",
              select: "name document"
            }).populate({
              path: "asesorConexosE",
              select: "name email"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 4:
            query = _context13.sent;

            if (query.length >= 0) {
              res.json({
                total: query.length,
                all: query
              });
            }

            _context13.next = 12;
            break;

          case 8:
            _context13.prev = 8;
            _context13.t0 = _context13["catch"](1);
            console.log(_context13.t0.message);
            return _context13.abrupt("return", res.status(503).json({
              message: _context13.t0.message
            }));

          case 12:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 8]]);
  }));

  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

seguroController.getSegurosByCreator = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body11, status, createdBy, userFound, query;

    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$body11 = req.body, status = _req$body11.status, createdBy = _req$body11.createdBy;
            _context14.prev = 1;
            _context14.next = 4;
            return _User.default.findOne({
              username: createdBy
            });

          case 4:
            userFound = _context14.sent;

            if (userFound) {
              _context14.next = 7;
              break;
            }

            return _context14.abrupt("return", res.status(404).json({
              message: "Usuario ".concat(createdBy, " no encontrado")
            }));

          case 7:
            _context14.next = 9;
            return _Seguro.default.find({
              status: {
                $regex: '.*' + status + '.*'
              },
              createdBy: userFound._id
            }).sort({
              fechaRegistro: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "estadoSeguroE",
              select: "name"
            }).populate({
              path: "vendedor",
              select: "name document"
            }).populate({
              path: "asesorConexosE",
              select: "name email"
            }).populate({
              path: "aseguradoraE",
              select: "name"
            }).populate({
              path: "vehicleE",
              select: "model",
              populate: {
                path: "model",
                select: "name avatar marca",
                populate: {
                  path: 'marca',
                  select: 'name avatar'
                }
              }
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 9:
            query = _context14.sent;

            if (!(query.length >= 0)) {
              _context14.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context14.next = 15;
            break;

          case 14:
            return _context14.abrupt("return", res.status(404).json({
              message: "No existen seguros ".concat(status, " de ").concat(createdBy)
            }));

          case 15:
            _context14.next = 21;
            break;

          case 17:
            _context14.prev = 17;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0.message);
            return _context14.abrupt("return", res.status(503).json({
              message: _context14.t0.message
            }));

          case 21:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 17]]);
  }));

  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

seguroController.getSegurosByEstado = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body12, estado, start, end, estadoFound, query;

    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body12 = req.body, estado = _req$body12.estado, start = _req$body12.start, end = _req$body12.end; // console.log(req.body);

            _context15.prev = 1;
            _context15.next = 4;
            return _EstadoSeguro.default.findOne({
              name: estado
            });

          case 4:
            estadoFound = _context15.sent;

            if (estadoFound) {
              _context15.next = 7;
              break;
            }

            return _context15.abrupt("return", res.status(404).json({
              message: "Estado ".concat(estado, " no encontrado")
            }));

          case 7:
            _context15.next = 9;
            return _Seguro.default.find({
              estadoSeguroE: estadoFound._id,
              fechaRegistro: {
                $gte: new Date(start),
                $lte: new Date(end)
              }
            }).sort({
              fechaRegistro: -1
            }).populate({
              path: "cliente",
              select: "name document"
            }).populate({
              path: "estadoSeguroE",
              select: "name"
            }).populate({
              path: "vendedor",
              select: "name document"
            }).populate({
              path: "asesorConexosE",
              select: "name email"
            }).populate({
              path: "createdBy",
              select: "name username"
            });

          case 9:
            query = _context15.sent;

            if (!(query.length > 0)) {
              _context15.next = 14;
              break;
            }

            res.json({
              total: query.length,
              all: query
            });
            _context15.next = 15;
            break;

          case 14:
            return _context15.abrupt("return", res.status(404).json({
              message: "No existen seguros"
            }));

          case 15:
            _context15.next = 21;
            break;

          case 17:
            _context15.prev = 17;
            _context15.t0 = _context15["catch"](1);
            console.log(_context15.t0.message);
            return _context15.abrupt("return", res.status(503).json({
              message: _context15.t0.message
            }));

          case 21:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 17]]);
  }));

  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

var _default = seguroController;
exports.default = _default;
//# sourceMappingURL=seguro.controller.js.map