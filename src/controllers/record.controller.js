import Record from "../models/Record";
import Sale from "../models/Sale";
import User from "../models/User";

export const createRecord = async (req, res) => {
  const {
    fecha_recepcion,
    hora_recepcion,
    fecha_recepcion_vendedor,
    fecha_devolucion_vendedor,
    sales,
    fecha_ingreso_file,
    hora_ingreso_file,
    num_titulo,
    codigo_verificacion,
    observaciones,
    status_tarjeta,
    num_placa,
    fecha_entrega_file_recepcion,
    fecha_tramite_placa,
    status_placa,
    fecha_entrega_placa_recepcion,
    fecha_entrega_cliente,
    empleado,
  } = req.body;

  try {
    const nuevoInmatriculado = new Record({
      fecha_recepcion,
      hora_recepcion,
      fecha_recepcion_vendedor,
      fecha_devolucion_vendedor,
      fecha_ingreso_file,
      hora_ingreso_file,
      num_titulo,
      codigo_verificacion,
      observaciones,
      status_tarjeta,
      num_placa,
      fecha_entrega_file_recepcion,
      fecha_tramite_placa,
      status_placa,
      fecha_entrega_placa_recepcion,
      fecha_entrega_cliente,
    });

    //Sales
    const expediente = await Sale.find({ nro_comprobante: { $in: sales } });
    const cod_exp = expediente[0]._id;
    const act = await Sale.findByIdAndUpdate(cod_exp, { pasoaTramite: 1 });
    //console.log(act);
    nuevoInmatriculado.sales = expediente.map((sales) => sales._id);

    //Empleado
    const foundEmployee = await User.find({ name: { $in: empleado } });
    nuevoInmatriculado.empleado = foundEmployee.map((em) => em._id);

    const recordSaved = await nuevoInmatriculado.save();

    if (recordSaved) {
      res.json({ message: "Inmatriculado creado con éxito" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  const filtro1 = {
    path: "sales",
    populate: { path: "auto vendedor cliente" },
  };

  try {
    const expedientes = await Record.find().populate(filtro1).populate('empleado');

    if (expedientes.length > 0) {
      res.json(expedientes);
    } else {
      return res.status(404).json({ message: "No existen Inmatriculados" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const getRecordById = async (req, res) => {
  const { recordId } = req.params;

  const filtro1 = {
    path: "sales",
    populate: { path: "auto vendedor cliente" },
  };

  try {
    const expediente = await Record.findById(recordId)
      .populate(filtro1)
      .populate("empleado");

    if (expediente) {
      res.json(expediente);
    } else {
      return res.status(404).json({ message: "No existe el Inmatriculado" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const getRecordByStatus = async (req, res) => {
  const { tarjeta, placa, entrega } = req.body;

  const filtro = { path: "sales", populate: { path: "auto vendedor cliente" } };

  try {
    const objeto = await Record.find({}).populate(filtro)
      .where("status_tarjeta").equals(tarjeta)
      .where("status_placa").equals(placa);
      /* .where('pasoaEntrega').equals(entrega); */

    //console.log(req.body);

    if (objeto.length > 0) {
      res.json(objeto);
    } else {
      return res.status(404).json({ message: "No existen expedientes Ready" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const updateRecordById = async (req, res) => {
  const { recordId } = req.params;

  const {
    fecha_recepcion,
    hora_recepcion,
    fecha_recepcion_vendedor,
    fecha_devolucion_vendedor,
    sales,
    fecha_ingreso_file,
    hora_ingreso_file,
    num_titulo,
    codigo_verificacion,
    observaciones,
    status_tarjeta,
    num_placa,
    fecha_entrega_file_recepcion,
    fecha_tramite_placa,
    status_placa,
    fecha_entrega_placa_recepcion,
    fecha_entrega_cliente,
  } = req.body;

  try {
    //Expediente
    const foundExpediente = await Sale.find({
      nro_comprobante: { $in: sales },
    });

    const objetoActualizado = await Record.findByIdAndUpdate(recordId, {
      fecha_recepcion,
      hora_recepcion,
      fecha_recepcion_vendedor,
      fecha_devolucion_vendedor,
      sales: foundExpediente.map((expediente) => expediente._id),
      fecha_ingreso_file,
      hora_ingreso_file,
      num_titulo,
      codigo_verificacion,
      observaciones,
      status_tarjeta,
      num_placa,
      fecha_entrega_file_recepcion,
      fecha_tramite_placa,
      status_placa,
      fecha_entrega_placa_recepcion,
      fecha_entrega_cliente,
    });

    if (objetoActualizado) {
      res.json({ message: "Inmatriculado actualizado con éxito" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe Inmatriculado a actualizar" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const deleteRecordById = async (req, res) => {
  const { recordId } = req.params;

  try {
    const deleteRecord = await Record.findByIdAndDelete(recordId);

    if (deleteRecord) {
      res.json({ message: "Inmatriculado eliminado con éxito" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe Inmatriculado a eliminar" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};
