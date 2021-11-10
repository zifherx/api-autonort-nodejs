import Record from "../models/Record";
import Sale from "../models/Sale";
import User from "../models/User";

export const createRecord = async(req, res) => {
    const {
        sucursal_tramite,
        fecha_recepcion,
        hora_recepcion,
        statusFile,
        observaciones_file,
        sales,
        fecha_ingreso_file,
        hora_ingreso_file,
        num_titulo,
        codigo_verificacion,
        observaciones_registros,
        status_tarjeta,
        num_placa,
        fecha_entrega_file_recepcion,
        fecha_tramite_placa,
        status_placa,
        fecha_entrega_placa_recepcion,
        empleado,
    } = req.body;

    try {
        const nuevoInmatriculado = new Record({
            sucursal_tramite,
            fecha_recepcion,
            hora_recepcion,
            statusFile,
            observaciones_file,
            fecha_ingreso_file,
            hora_ingreso_file,
            num_titulo,
            codigo_verificacion,
            observaciones_registros,
            status_tarjeta,
            num_placa,
            fecha_entrega_file_recepcion,
            fecha_tramite_placa,
            status_placa,
            fecha_entrega_placa_recepcion,
        });

        //Sales
        const expediente = await Sale.find({ nro_comprobante: { $in: sales } });
        const cod_exp = expediente[0]._id;
        const act = await Sale.findByIdAndUpdate(cod_exp, { pasoaTramite: 1 });
        //console.log(act);
        nuevoInmatriculado.sales = expediente.map((sales) => sales._id);

        //Empleado
        const foundEmployee = await User.find({ username: { $in: empleado } });
        nuevoInmatriculado.empleado = foundEmployee.map((em) => em._id);

        const recordSaved = await nuevoInmatriculado.save();

        if (recordSaved) {
            res.json({ message: "Inmatriculación creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const getRecords = async(req, res) => {
    const filtro1 = {
        path: "sales",
        populate: { path: "auto vendedor cliente" },
    };

    try {
        const expedientes = await Record.find().populate(filtro1).populate("empleado").sort({ fecha_recepcion: 'desc' });

        if (expedientes.length > 0) {
            res.json(expedientes);
        } else {
            return res.status(404).json({ message: "No existen Trámites" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const getRecordById = async(req, res) => {
    const { recordId } = req.params;

    const filtro1 = {
        path: "sales",
        populate: { path: "auto vendedor cliente" },
    };

    try {
        const expediente = await Record.findById(recordId).populate(filtro1).populate("empleado");

        if (expediente) {
            res.json(expediente);
        } else {
            return res.status(404).json({ message: "No existe el Trámite" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const getRecordBySucursal = async(req, res) => {
    const { sucursal } = req.body;

    try {
        const query = await Record.find({ sucursal_tramite: sucursal })
            .populate({ path: 'sales' })
            .populate({ path: 'empleado', select: 'name username roles' });

        if (query.length > 0) {
            res.json({ total: query.length, files: query });
        } else {
            return res.status(404).json({ message: "No existen Trámites" });
        }

    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getRecordByTarjetayPlaca = async(req, res) => {
    const { tarjeta, placa, entrega } = req.body;

    const filtro = { path: "sales", populate: { path: "auto vendedor cliente" } };

    try {
        const objeto = await Record.find({}).populate(filtro).where("status_tarjeta").equals(tarjeta).where("status_placa").equals(placa);
        /* .where('pasoaEntrega').equals(entrega); */

        //console.log(req.body);

        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: "No existen expedientes Ready" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const updateRecordById = async(req, res) => {
    const { recordId } = req.params;

    const {
        statusFile,
        observaciones_file,
        isPendienteFirma,
        fechaPendienteFirma,
        isFirmado,
        fechaFirmado,
        isLegalizado,
        fechaLegalizado,
        isFinalizado,
        fechaFinalizado,
        fecha_ingreso_file,
        hora_ingreso_file,
        num_titulo,
        codigo_verificacion,
        observaciones_registros,
        motivo_observacion,
        status_tarjeta,
        num_placa,
        fecha_entrega_file_recepcion,
        fecha_tramite_placa,
        status_placa,
        fecha_entrega_placa_recepcion,
    } = req.body;

    try {

        const objetoActualizado = await Record.findByIdAndUpdate(recordId, {
            statusFile,
            observaciones_file,
            isPendienteFirma,
            fechaPendienteFirma,
            isFirmado,
            fechaFirmado,
            isLegalizado,
            fechaLegalizado,
            isFinalizado,
            fechaFinalizado,
            fecha_ingreso_file,
            hora_ingreso_file,
            num_titulo,
            codigo_verificacion,
            observaciones_registros,
            motivo_observacion,
            status_tarjeta,
            num_placa,
            fecha_entrega_file_recepcion,
            fecha_tramite_placa,
            status_placa,
            fecha_entrega_placa_recepcion,
        });

        if (objetoActualizado) {
            res.json({ message: "Inmatriculación actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Inmatriculación a actualizar" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const deleteRecordById = async(req, res) => {
    const { recordId } = req.params;

    try {
        const deleteRecord = await Record.findByIdAndDelete(recordId);

        if (deleteRecord) {
            res.json({ message: "Inmatriculación eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Inmatriculación a eliminar" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};