import Seller from '../models/Seller'

export const createSeller = async(req, res) => {
    try {
        const { name, sucursal, document } = req.body;

        const newSeller = new Seller({ name, sucursal, document });
        const sellerSaved = await newSeller.save();

        res.status(201).json(sellerSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'No puede ejecutar la consulta' })
    }

}

export const getSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const seller = await Seller.findById(sellerId);
        res.status(200).json(seller);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }

}

export const getSellers = async(req, res) => {
    try {
        const seller = await Seller.find();
        res.status(201).json(seller);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }
}

export const updateSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const updateSeller = await Seller.findByIdAndUpdate(sellerId, req.body, { new: true });
        res.status(200).json(updateSeller);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }
}

export const deleteSellerById = async(req, res) => {
    try {
        const { sellerId } = req.params;
        const deletedSeller = await Seller.findByIdAndRemove(sellerId);
        res.status(200).json({ message: 'Vendedor eliminado' });
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' })
    }
}