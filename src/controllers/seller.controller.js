import Seller from '../models/Seller'
import User from '../models/User'

export const createSeller = async(req, res) => {
    const { name, sucursal, document, empleado } = req.body;
    try {
        const newSeller = new Seller({ name, sucursal, document });
        const foundEmployee = await User.find({ username: { $in: empleado } });
        newSeller.empleado = foundEmployee.map(em => em._id);
        const sellerSaved = await newSeller.save();
        if (sellerSaved) {
            res.json({ message: 'Vendedor creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }

}

export const getSellerById = async(req, res) => {
    const { sellerId } = req.params;
    try {
        const seller = await Seller.findById(sellerId);
        if (seller) {
            res.json(seller);
        } else {
            return res.status(404).json({ message: 'No existe Vendedor' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }

}

export const getSellers = async(req, res) => {
    try {
        const seller = await Seller.find().sort({ name: 'asc' });
        if (seller.length > 0) {
            res.json(seller);
        } else {
            return res.status(404).json({ message: 'No existen Vendedores' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateSellerById = async(req, res) => {
    const { sellerId } = req.params;
    const { name, sucursal, document } = req.body;
    try {

        const updateSeller = await Seller.findByIdAndUpdate(sellerId, { name, sucursal, document });
        if (updateSeller) {
            res.json({ message: 'Vendedor actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vendedor a actualizar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
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
        res.status(409).json({ message: err.message })
    }
}