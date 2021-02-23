import Seller from '../models/Seller'

export const createSeller = async(req, res) => {
    try {
        const { name, sucursal, document } = req.body;

        const newSeller = new Seller({ name, sucursal, document });
        const sellerSaved = await newSeller.save();

        res.json({ message: 'Vendedor creado con éxito' });
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'No puede ejecutar la consulta' })
    }

}

export const getSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const seller = await Seller.findById(sellerId);
        res.send(seller);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }

}

export const getSellers = async(req, res) => {
    try {
        const seller = await Seller.find();

        if (seller.length > 0) {
            res.send(seller);
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error' })
    }
}

export const updateSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const updateSeller = await Seller.findByIdAndUpdate(sellerId, req.body, { new: true });
        res.json({ message: 'Vendedor actualizado con éxito' });
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }
}

export const deleteSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const deletedSeller = await Seller.findByIdAndRemove(sellerId);
        res.json({ message: 'Vendedor eliminado con éxito' });
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }
}