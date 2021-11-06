import Customer from "../models/Customer";
import Seguro from "../models/Seguro";
import User from "../models/User";
import Seller from "../models/Seller";

export const getAll = async(req, res) => {
    try {
        const query = await Seguro.find()
            .populate({ path: 'cliente', select: 'name document' })
            .populate({ path: 'vendedor', select: 'name document sucursal' })
            .populate({ path: 'createdBy', select: 'name' })
        if (query.length > 0) {
            res.json({ total: query.length, seguros: query });
        } else {
            return res.status(404).json({ message: "No existen Seguros" });
        }
    } catch (err) {
        console.error(err);
        res.status(503).json({ message: err.message });
    }
};

export const getSeguroById = async(req, res) => {
    const { seguroId } = req.params;
    try {
        const query = await Seguro.findById(seguroId)
            .populate({ path: 'cliente', select: 'name document cellphone email' })
            .populate({ path: 'vendedor', select: 'name document sucursal' })
            .populate({ path: 'createdBy', select: 'name' })
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: "No existe el Seguro" });
        }
    } catch (err) {
        console.error(err);
        res.status(503).json({ message: err.message });
    }
};

export const createSeguro = async(req, res) => {
    const {
        cliente,
        company,
        sucursal,
        mes,
        status,
        forma_pago,
        cuotas,
        fecha_emision,
        tipo_venta,
        area_venta,
        poliza,
        vendedor,
        placa,
        chasis,
        motor,
        marca,
        modelo,
        version,
        anio,
        uso,
        asesor,
        endoso,
        entidad,
        inicio_vigencia,
        fin_vigencia,
        suma_asegurada,
        aseguradora,
        comision_seguro,
        comision_asesor,
        createdBy,
    } = req.body;

    try {
        const newObj = new Seguro({
            company,
            sucursal,
            mes,
            status,
            forma_pago,
            cuotas,
            fecha_emision,
            tipo_venta,
            area_venta,
            poliza,
            vendedor,
            placa,
            chasis,
            motor,
            marca,
            modelo,
            version,
            anio,
            uso,
            asesor,
            endoso,
            entidad,
            inicio_vigencia,
            fin_vigencia,
            suma_asegurada,
            aseguradora,
            comision_seguro,
            comision_asesor,
        });

        const foundCliente = await Customer.find({ name: { $in: cliente } });
        newObj.cliente = foundCliente.map((a) => a._id);

        if (!foundCliente.length > 0) {
            return res.status(404).json({ message: "No existe este cliente" });
        }

        const foundSeller = await Seller.find({ name: { $in: vendedor } });
        newObj.vendedor = foundSeller.map(b => b._id);

        if (!foundCliente.length > 0) {
            return res.status(404).json({ message: "No existe este Vendedor" });
        }

        const foundEmployee = await User.find({ username: { $in: createdBy } });
        newObj.createdBy = foundEmployee.map((c) => c._id);

        const objSaved = await newObj.save();

        if (objSaved) {
            res.json({ message: "Seguro creado con éxito" });
        }
    } catch (err) {
        console.error(err);
        res.status(503).json({ message: err.message });
    }
};

export const updateSeguro = async(req, res) => {
    const { seguroId } = req.params;
    const {
        status,
        isProceso,
        fechaProceso,
        isEmitido,
        fechaEmision
    } = req.body;

    try {
        const updateObj = await Seguro.findByIdAndUpdate(seguroId, {
            status,
            isProceso,
            fechaProceso,
            isEmitido,
            fechaEmision
        });

        if (updateObj) {
            res.json({ message: "Seguro actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Seguro a actualizar" });
        }
    } catch (err) {
        console.error(err);
        res.status(503).json({ message: err.message });
    }
};

export const deleteSeguro = async(req, res) => {
    const { seguroId } = req.params;

    try {
        const deleteObj = await Seguro.findByIdAndDelete(seguroId);

        if (deleteObj) {
            res.json({ message: "Seguro eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Seguro a eliminar" });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
};

export const countAll = async(req, res) => {
    try {
        const query = await Seguro.countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const countByStatus = async(req, res) => {
    const { estado, start, end } = req.body;
    try {
        const query = await Seguro.find({ status: estado, fechaRegistro: { $gte: new Date(start), $lte: new Date(end) } }).countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}