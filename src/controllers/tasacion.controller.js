import Seller from "../models/Seller";
import Tasacion from "../models/Tasacion";
import Customer from "../models/Customer";
import User from "../models/User";

export const getAll = async(req, res) => {
    try {
        const query = await Tasacion.find().populate('cliente').populate('asesor_venta').populate('asesor_servicio').populate('empleado').sort({ fecha_operacion: 'asc' })

        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Tasaciones' })
        }
    } catch (err) {
        console.error(err);
        res.status(409).json({ message: err.message });
    }
}

export const getTasacionById = async(req, res) => {
    const { tasacionId } = req.params;
    try {
        const query = await Tasacion.findById(tasacionId)
            .populate('cliente')
            .populate('asesor_venta')
            .populate('asesor_servicio')
            .populate('empleado')

        if (query) {
            res.json(query)
        } else {
            res.status(404).json({ message: 'No existe la Tasación' })
        }

    } catch (err) {
        console.error(err);
        res.status(409).json({ message: err.message });
    }
}

export const createTasacion = async(req, res) => {
    const { cliente, marca, chasis, modelo, version, color, anio_fabricacion, kilometraje, placa, empresa, sucursal, origen_operacion, metodo, fecha_operacion, precio, mes, asesor_venta, asesor_derivado, asesor_servicio, empleado } = req.body;

    try {
        const newObj = new Tasacion({ marca, chasis, modelo, version, color, anio_fabricacion, kilometraje, placa, empresa, sucursal, origen_operacion, metodo, fecha_operacion, precio, mes, asesor_derivado })

        const foundCliente = await Customer.find({ name: { $in: cliente } })
        newObj.cliente = foundCliente.map(a => a._id)

        if (!foundCliente.length > 0) {
            return res.status(404).json({ message: "No existe este cliente" });
        }

        const foundAsesorV = await Seller.find({ name: { $in: asesor_venta } })
        newObj.asesor_venta = foundAsesorV.map(b => b._id)

        if (!foundAsesorV.length > 0) {
            return res.status(404).json({ message: "No existe este Asesor de Ventas" });
        }

        const foundAsesorS = await Seller.find({ name: { $in: asesor_servicio } })
        newObj.asesor_servicio = foundAsesorS.map(c => c._id)

        if (!foundAsesorS.length > 0) {
            return res.status(404).json({ message: "No existe este Asesor de Servicio" });
        }

        const foundEmployee = await User.find({ username: { $in: empleado } })
        newObj.empleado = foundEmployee.map(d => d._id)

        const objSaved = await newObj.save();

        if (objSaved) {
            res.json({ message: 'Tasación creada con éxito' })
        }

    } catch (err) {
        console.error(err);
        res.status(409).json({ message: err.message });
    }
}

export const updateTasacion = async(req, res) => {
    const { tasacionId } = req.params;
    const { cliente, marca, chasis, modelo, version, color, anio_fabricacion, kilometraje, placa, empresa, sucursal, origen_operacion, metodo, fecha_operacion, precio, mes, asesor_venta, asesor_derivado, asesor_servicio, empleado } = req.body;

    try {
        const foundCliente = await Customer.find({ name: { $in: cliente } })

        const foundAsesorV = await Seller.find({ name: { $in: asesor_venta } })

        const foundAsesorS = await Seller.find({ name: { $in: asesor_servicio } })

        const foundEmployee = await User.find({ username: { $in: empleado } })

        const updateObj = await Tasacion.findByIdAndUpdate(tasacionId, {
            cliente: foundCliente.map(a => a._id),
            marca,
            chasis,
            modelo,
            version,
            color,
            anio_fabricacion,
            kilometraje,
            placa,
            empresa,
            sucursal,
            origen_operacion,
            metodo,
            fecha_operacion,
            precio,
            mes,
            asesor_venta: foundAsesorV.map(b => b._id),
            asesor_derivado,
            asesor_servicio: foundAsesorS.map(c => c._id),
            empleado: foundEmployee.map(d => d._id)
        })

        if (updateObj) {
            res.json({ message: 'Tasacion actualizada con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Tasación a actualizar' })
        }
    } catch (err) {
        console.error(err);
        res.status(409).json({ message: err.message });
    }

}

export const deleteTasacion = async(req, res) => {
    const { tasacionId } = req.params;

    try {
        const deleteObj = await Tasacion.findByIdAndDelete(tasacionId)

        if (deleteObj) {
            res.json({ message: 'Tasacion eliminada con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Tasación a eliminar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message });
    }
}