"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerExpressHandlebars = _interopRequireDefault(require("nodemailer-express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../config/config"));

var helperController = {};

helperController.enviarCorreo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var _req$body, to, cc, subject, text, estadoSolicitudMAF, observacion, motivo, ejecutivo_maf, nro_solicitud, titular, documento, estado_civil, centro_laboral, ingreso_promedio, cuota_inicial, cod_tdp, anio_fabricacion, anio_modelo, pvp, plan_solicitud, tipo_uso, vendedor, transporter, optionsTemplate, emailOptions, emailSent, respuesta;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, to = _req$body.to, cc = _req$body.cc, subject = _req$body.subject, text = _req$body.text, estadoSolicitudMAF = _req$body.estadoSolicitudMAF, observacion = _req$body.observacion, motivo = _req$body.motivo, ejecutivo_maf = _req$body.ejecutivo_maf, nro_solicitud = _req$body.nro_solicitud, titular = _req$body.titular, documento = _req$body.documento, estado_civil = _req$body.estado_civil, centro_laboral = _req$body.centro_laboral, ingreso_promedio = _req$body.ingreso_promedio, cuota_inicial = _req$body.cuota_inicial, cod_tdp = _req$body.cod_tdp, anio_fabricacion = _req$body.anio_fabricacion, anio_modelo = _req$body.anio_modelo, pvp = _req$body.pvp, plan_solicitud = _req$body.plan_solicitud, tipo_uso = _req$body.tipo_uso, vendedor = _req$body.vendedor;
            transporter = null;
            optionsTemplate = null;
            emailOptions = null;
            emailSent = null;
            _context.prev = 5;
            transporter = _nodemailer.default.createTransport({
              host: _config.default.EMAIL_HOST,
              port: _config.default.EMAIL_PORT_SMTP,
              secure: true,
              auth: {
                user: _config.default.EMAIL_USER,
                pass: _config.default.EMAIL_PASS
              }
            });

            if (!(estadoSolicitudMAF == 'INGRESADO')) {
              _context.next = 16;
              break;
            }

            optionsTemplate = {
              viewEngine: {
                extname: ".hbs",
                layoutsDir: "src/views",
                defaultLayout: "templateEmailMaf"
              },
              viewPath: "src/views",
              extName: ".hbs"
            };
            transporter.use("compile", (0, _nodemailerExpressHandlebars.default)(optionsTemplate));
            emailOptions = {
              from: "\"Plataforma SCI \uD83D\uDC7B\" <".concat(_config.default.EMAIL_USER, ">"),
              to: to,
              cc: cc,
              subject: subject,
              text: text,
              template: "templateEmailMaf",
              context: {
                ejecutivo_maf: ejecutivo_maf,
                nro_solicitud: nro_solicitud,
                titular: titular,
                documento: documento,
                estado_civil: estado_civil,
                centro_laboral: centro_laboral,
                ingreso_promedio: ingreso_promedio,
                cuota_inicial: cuota_inicial,
                cod_tdp: cod_tdp,
                anio_fabricacion: anio_fabricacion,
                anio_modelo: anio_modelo,
                pvp: pvp,
                plan_solicitud: plan_solicitud,
                tipo_uso: tipo_uso,
                vendedor: vendedor
              }
            };
            _context.next = 13;
            return transporter.sendMail(emailOptions);

          case 13:
            emailSent = _context.sent;
            _context.next = 22;
            break;

          case 16:
            optionsTemplate = {
              viewEngine: {
                extname: ".hbs",
                layoutsDir: "src/views",
                defaultLayout: "templateEmailUpdateMaf"
              },
              viewPath: "src/views",
              extName: ".hbs"
            };
            transporter.use("compile", (0, _nodemailerExpressHandlebars.default)(optionsTemplate));
            emailOptions = {
              from: "\"Plataforma SCI \uD83D\uDC7B\" <".concat(_config.default.EMAIL_USER, ">"),
              to: to,
              cc: [cc, "frojas@autonortnor.com.pe"],
              subject: subject,
              text: text,
              template: "templateEmailUpdateMaf",
              context: {
                nro_solicitud: nro_solicitud,
                estadoSolicitudMAF: estadoSolicitudMAF,
                ejecutivo_maf: ejecutivo_maf,
                titular: titular,
                documento: documento,
                cod_tdp: cod_tdp,
                plan_solicitud: plan_solicitud,
                vendedor: vendedor,
                observacion: observacion,
                motivo: motivo
              }
            };
            _context.next = 21;
            return transporter.sendMail(emailOptions);

          case 21:
            emailSent = _context.sent;

          case 22:
            respuesta = emailSent.response.split(" ");

            if (!(respuesta[1] == "OK")) {
              _context.next = 28;
              break;
            }

            console.log("Preview URL: %s", _nodemailer.default.getTestMessageUrl(emailSent));
            res.json({
              message: "Mensaje enviado",
              info: emailSent.messageId,
              delay: emailSent.envelopeTime,
              response: emailSent.response
            });
            _context.next = 29;
            break;

          case 28:
            return _context.abrupt("return", res.status(500).json({
              message: "Error al enviar correo"
            }));

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](5);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(503).json({
              message: _context.t0.message
            }));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 31]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = helperController;
exports.default = _default;
//# sourceMappingURL=helper.controller.js.map