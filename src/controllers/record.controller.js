import Record from '../models/Record'
import Sale from '../models/Sale'

export const createRecord = async(req, res) => {
    try {
        const { fecha_recepcion, hora_recepcion, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente } = req.body;

        const nuevoInmatriculado = new Record({ fecha_recepcion, hora_recepcion, fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente });

        //Sales
        const expediente = await Sale.find({ nro_comprobante: { $in: sales } });

        nuevoInmatriculado.sales = expediente.map(sales => sales._id);

        const recordSaved = await nuevoInmatriculado.save();
        if (recordSaved) {
            res.json({ message: 'Inmatriculado creado con éxito' });
        } else {
            res.status(201).json({ message: 'Ya existe el inmatriculado' })
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const getRecords = async(req, res) => {
    const filtro1 = { path: 'sales', populate: { path: 'auto vendedor  cliente' } };

    try {
        const expedientes = await Record.find()
            .populate(filtro1)

        if (expedientes.length > 0) {
            res.json(expedientes);
        } else {
            return res.status(201).json({ message: 'No existen Inmatriculados' })
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const getRecordById = async(req, res) => {
    const filtro1 = { path: 'sales', populate: { path: 'auto vendedor  cliente' } };

    try {
        const { recordId } = req.params;
        const expediente = await Record.findById(recordId)
            .populate(filtro1);

        if (expediente) {
            res.json(expediente);
        } else {
            res.status(201).json({ message: 'No existe el inmatriculado' });
        }


    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const updateRecordById = async(req, res) => {

    try {

        const { recordId } = req.params;

        const { fecha_recepcion, hora_recepcion, sales, fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente } = req.body;

        //Expediente
        const foundExpediente = await Sale.find({ nro_comprobante: { $in: sales } });

        const objetoActualizado = await Record.findByIdAndUpdate(recordId, { fecha_recepcion, hora_recepcion, sales: foundExpediente.map(expediente => expediente._id), fecha_ingreso_file, hora_ingreso_file, num_titulo, status_tarjeta, num_placa, fecha_entrega_file, fecha_tramite_placa, status_placa, fecha_entrega_placa, fecha_entrega_cliente }, { new: true });

        if (objetoActualizado) {
            res.json({ message: 'Inmatriculado actualizado con éxito' });
        } else {
            return res.status(201).json({ message: 'Ya existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'Error Interno' });
    }
}

export const deleteRecordById = async(req, res) => {
    try {
        const { recordId } = req.params;
        const deleteRecord = await Record.findByIdAndDelete(recordId);

        if (deleteRecord) {
            res.json({ message: 'Expediente Eliminado con éxito' });
        } else {
            return res.status(201).json({ message: 'Expediente no existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'Error Interno' });
    }
}