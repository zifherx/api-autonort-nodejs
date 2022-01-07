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
        return res.status(503).json({ message: err.message });
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
        return res.status(503).json({ message: err.message });
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
        return res.status(503).json({ message: err.message });
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
        return res.status(503).json({ message: err.message });
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
        return res.status(503).json({ message: err.message });
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

export const countByStatusySucursal = async(req, res) => {
    const { sucursal, estado, start, end } = req.body;
    try {
        const query = await Seguro.find({
            sucursal: sucursal,
            status: estado,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
        }).countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const countByDates = async(req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const query = await Seguro.find({
            sucursal: sucursal,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
        }).countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByStatus = async(req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: '$status',
                    qty: { $sum: 1 }
                }
            }
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByTipo = async(req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: '$tipo_venta',
                    qty: { $sum: 1 }
                }
            }
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByVehicle = async(req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: '$modelo',
                    qty: { $sum: 1 }
                }
            }
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingBySeller = async(req, res) => {
    const { sucursal, status, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        status: status,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: '$vendedor',
                    qty: { $sum: 1 }
                }
            }
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByAseguradora = async(req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: '$aseguradora',
                    qty: { $sum: 1 }
                }
            }
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getSegurosByVendedor = async(req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: 'No existe el vendedor' });

        const filtro = {
            vendedor: sellerFound._id,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
        }

        const query = await Seguro.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: '$status',
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'Vendedor no cuenta con seguros' });
        }
    } catch (err) {
        console.log(err.response);
        return res.status(503).json({ message: err.message });
    }
}

export const getSegurosByModelo = async(req, res) => {
    const { vendedor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: 'No existe el vendedor' });

        let filtro = {
            vendedor: sellerFound._id,
            status: estado,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) }
        }

        const query = await Seguro.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: '$modelo',
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'Vendedor no cuenta con solicitudes' });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}