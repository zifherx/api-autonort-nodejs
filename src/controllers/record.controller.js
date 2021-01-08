import Record from '../models/Record'
import Sale from '../models/Sale'

export const createRecord = async(req, res) => {
    try {
        const { fecha, estatusContable, sales } = req.body;
        const newRecord = new Record({ fecha, estatusContable });

        //Sales
        const foundSale = await Sale.find({ nroComprobante: { $in: sales } });
        newRecord.sales = foundSale.map(sales => sales._id);

        console.log(newRecord);
        const recordSaved = await newRecord.save();
        res.status(201).json(recordSaved);

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const getRecords = async(req, res) => {
    const filtro1 = { path: 'sales', populate: { path: 'vehicle seller financing customer' } };

    try {
        const expedientes = await Record.find()
            .populate(filtro1)

        res.status(200).json(expedientes);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const getRecordById = async(req, res) => {
    const filtro1 = { path: 'sales', populate: { path: 'vehicle seller financing customer' } };

    try {
        const { recordId } = req.params;
        const expediente = await Record.findById(recordId)
            .populate(filtro1);

        if (expediente) {
            res.status(200).json(expediente);
        } else {
            res.status(201).json({ message: 'No existe el expediente' });
        }


    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const updateRecordById = async(req, res) => {
    try {
        res.status(201).json({ message: 'Not implement Yet' })
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}

export const deleteRecordById = async(req, res) => {
    try {
        const { recordId } = req.params;
        const deleteRecord = await Record.findByIdAndDelete(recordId);

        if (deleteRecord) {
            res.status(200).json({ message: 'Expediente Eliminado' });
        } else {
            res.status(401).json({ message: 'Expediente no existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' });
    }
}