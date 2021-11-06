import Customer from '../models/Customer'
import User from '../models/User'
import Tasacion from '../models/Tasacion'
import Tecnico from '../models/Tecnico'
import AServicios from '../models/AServicios'
import Seller from '../models/Seller'

const tasacionCtrl = {};

tasacionCtrl.getAll = async(req, res) => {
    try {
        const query = await Tasacion.find().sort({ name: 'asc' })
            .populate({ path: 'cliente', select: 'name document' })
            .populate({ path: 'asesor_venta', select: 'name' })
            .populate({ path: 'asesor_servicio', select: 'name' })
            .populate({ path: 'tecnico_inspector', select: 'name' })
            .populate({ path: 'createdBy', select: 'name' });
        if (query.length > 0) {
            res.json({ total: query.length, tasaciones: query });
        } else {
            return res.status(404).json({ message: 'No existen Tasaciones' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.getOneById = async(req, res) => {
    const { tasacionId } = req.params;
    try {
        const query = await Tasacion.findById(tasacionId)
            .populate({ path: 'cliente', select: 'name document email cellphone address' })
            .populate({ path: 'asesor_venta', select: 'name' })
            .populate({ path: 'asesor_servicio', select: 'name' })
            .populate({ path: 'tecnico_inspector', select: 'name' })
            .populate({ path: 'createdBy', select: 'name' });
        if (query) {
            res.json(query)
        } else {
            res.status(404).json({ message: 'No existe la Tasación' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.getAllByTasador = async(req, res) => {
    const { tasador } = req.body;
    try {
        const userFound = await User.find({ username: tasador })

        const query = await Tasacion.find({ createdBy: userFound.map(a => a._id) })
            .sort({ name: 'asc' })
            .populate({ path: 'cliente', select: 'name document' })
            .populate({ path: 'asesor_venta', select: 'name' })
            .populate({ path: 'asesor_servicio', select: 'name' })
            .populate({ path: 'tecnico_inspector', select: 'name' })
            .populate({ path: 'createdBy', select: 'name' });
        if (query.length > 0) {
            res.json({ nro_request: query.length, requests: query });
        } else {
            return res.status(404).json({ message: 'No existen Tasaciones' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.createTasacion = async(req, res) => {
    const {
        cliente,
        marca,
        modelo,
        version,
        placa,
        color,
        anio_fabricacion,
        kilometraje,
        tipo_transmision,
        num_propietarios,
        precio,
        observacion,
        empresa,
        sucursal,
        origen_operacion,
        metodo,
        fecha_operacion,
        mes,
        comentario,
        ingresoPor,
        asesor_venta,
        asesor_servicio,
        inspeccion_tecnica,
        tecnico_inspector,
        createdBy
    } = req.body;
    try {
        const obj = new Tasacion({
            marca,
            modelo,
            version,
            placa,
            color,
            anio_fabricacion,
            kilometraje,
            tipo_transmision,
            num_propietarios,
            precio,
            observacion,
            empresa,
            sucursal,
            origen_operacion,
            metodo,
            fecha_operacion,
            mes,
            comentario,
            ingresoPor,
            inspeccion_tecnica,
        });
        const customerFound = await Customer.find({ name: { $in: cliente } });
        obj.cliente = customerFound.map(a => a._id);

        if (asesor_venta) {
            const sellerFound = await Seller.find({ name: { $in: asesor_venta } });
            obj.asesor_venta = sellerFound.map(b => b._id);
        } else {
            obj.asesor_venta = null;
        }

        if (asesor_servicio) {
            const servicesFound = await AServicios.find({ name: asesor_servicio });
            obj.asesor_servicio = servicesFound.map(c => c._id);
        } else {
            obj.asesor_servicio = null;
        }

        if (tecnico_inspector) {
            const tecnicoFound = await Tecnico.find({ name: tecnico_inspector });
            obj.tecnico_inspector = tecnicoFound.map(d => d._id);
        } else {
            obj.tecnico_inspector = null;
        }

        const userFound = await User.find({ username: { $in: createdBy } });
        obj.createdBy = userFound.map(e => e._id);

        const query = await obj.save();
        if (query) res.json({ message: 'Tasación creada con éxito' })
    } catch (err) {
        console.error(err)
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.updatedOneById = async(req, res) => {
    const { tasacionId } = req.params;
    const {
        status_tasacion,
        IsProceso,
        fechaProceso,
        IsRechazado,
        fechaRechazado,
        IsCerrado,
        fechaCerrado,
        comentario,
        motivo,
        nro_serie_nuevo_vehiculo,
        modelo_nuevo_vehiculo
    } = req.body;

    try {

        const query = await Tasacion.findByIdAndUpdate(tasacionId, {
            status_tasacion,
            IsProceso,
            fechaProceso,
            IsRechazado,
            fechaRechazado,
            IsCerrado,
            fechaCerrado,
            comentario,
            motivo,
            nro_serie_nuevo_vehiculo,
            modelo_nuevo_vehiculo
        });

        if (query) {
            res.json({ message: 'Tasación actualizada con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe Tasación a actualizar' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.deleteOneById = async(req, res) => {
    const { tasacionId } = req.params;
    try {
        const query = await Tasacion.findByIdAndDelete(tasacionId);
        if (query) {
            res.json({ message: 'Tasación eliminada con éxito' })
        } else {
            res.status(404).json({ message: 'No existe la Tasación a eliminar' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

tasacionCtrl.countAll = async(req, res) => {
    try {
        const query = await Tasacion.countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export default tasacionCtrl;