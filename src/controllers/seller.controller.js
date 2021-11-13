import Seller from '../models/Seller'
import User from '../models/User'

export const getSellers = async(req, res) => {
    try {
        const query = await Seller.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Vendedores' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const getSellerById = async(req, res) => {
    const { sellerId } = req.params;
    try {
        const query = await Seller.findById(sellerId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Vendedor' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }

}

export const getSellerBySucursal = async(req, res) => {
    const { sucursal } = req.body;
    try {
        const query = await Seller.find({ sucursal: sucursal, estatus: true }).sort({ name: 'asc' });

        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: `No existen Vendedores en ${sucursal}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getSellerByMarcaAndSucursal = async(req, res) => {
    const { sucursal, marca } = req.body;
    try {
        const query = await Seller.find({ sucursal: sucursal, marca: marca, estatus: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: `No existen vendedores en ${sucursal}` });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getSellerByName = async(req, res) => {
    const { name } = req.body;
    try {
        const query = await Seller.findOne().where({ name });

        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Vendedores con este Nombre' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createSeller = async(req, res) => {
    const { name, sucursal, marca, document, telefono, email, estatus, empleado } = req.body;
    try {
        const newSeller = new Seller({
            name,
            sucursal,
            marca,
            document,
            telefono,
            email,
            estatus
        });

        const foundEmployee = await User.find({ username: { $in: empleado } });
        newSeller.createdBy = foundEmployee.map(em => em._id);

        const sellerSaved = await newSeller.save();
        if (sellerSaved) {
            res.json({ message: 'Vendedor creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const uploadAvatar = async(req, res) => {
    const { sellerId } = req.params;
    const photo = req.file;

    try {
        const query = await User.findByIdAndUpdate(sellerId, {
            avatar: photo.location
        });

        if (query) {
            res.json({ message: 'Avatar subido con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el vendedor' });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateSellerById = async(req, res) => {
    const { sellerId } = req.params;
    const { name, sucursal, marca, document, telefono, email, estatus, empleado } = req.body;
    try {
        const updateSeller = await Seller.findByIdAndUpdate(sellerId, {
            name,
            sucursal,
            marca,
            document,
            telefono,
            email,
            estatus
        });
        if (updateSeller) {
            res.json({ message: 'Vendedor actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vendedor a actualizar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteSellerById = async(req, res) => {
    const { sellerId } = req.params;
    try {
        const deletedSeller = await Seller.findByIdAndDelete(sellerId);
        if (deletedSeller) {
            res.json({ message: 'Vendedor eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vendedor a eliminar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}