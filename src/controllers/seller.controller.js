import Seller from '../models/Seller';
import User from '../models/User';
import Sucursal from '../models/Sucursal';
import MarcaTasaciones from '../models/MarcaTasaciones';

const sellerController = {};

sellerController.getAll = async(req, res) => {
    try {
        const query = await Seller.find()
        .sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Vendedores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sellerController.getAllActive = async(req, res) => {
    try {
        const query = await Seller.find({estado: true})
        .sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Vendedores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sellerController.getSellerById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Seller.findById(itemId)
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Vendedor' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }

}

sellerController.getSellerBySucursal = async(req, res) => {
    const { sucursal } = req.body;
    try {
        const sucursalFound = await Sucursal.findOne({name: sucursal});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursal} no encontrada`})

        const query = await Seller.find({ 
            sucursalE: sucursalFound._id,
            estado: true })
        .sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        })
        .populate({
            path: 'createdBy',
            select: 'name'
        })

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: `No existen Vendedores en ${sucursal}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

sellerController.getSellerByMarcaAndSucursal = async(req, res) => {
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

sellerController.getSellerByName = async(req, res) => {
    const { name } = req.body;

    try {
        const query = await Seller.findOne({ name })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existen Vendedores con este Nombre' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

sellerController.createSeller = async(req, res) => {
    const { name, document, telefono, email,sucursalE, marcaE, estado, createdBy } = req.body;

    try {
        const obj = new Seller({
            name,
            document,
            telefono,
            email,
            estado
        });

        const foundEmployee = await User.findOne({ username: createdBy });
        if(!foundEmployee) return res.status(404).json({message: `Colaborador ${createdBy} no encontrado`});
        obj.createdBy = foundEmployee._id;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});
        obj.sucursalE = sucursalFound._id;

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if(!marcaFound) return res.status(404).json({message: `Marca ${marcaE} no encontrada`});
        obj.marcaE = marcaFound._id;

        const query = await obj.save();
        if (query) {
            res.json({ message: 'Vendedor creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sellerController.updateSellerById = async(req, res) => {
    const { itemId } = req.params;
    const { name, document, telefono, email, sucursalE, marcaE , estado } = req.body;
    const avatar = req.file;

    try {
        let query = null;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if(!marcaFound) return res.status(404).json({message: `Marca ${marcaE} no encontrada`});

        if(avatar == null || avatar == undefined){
            query = await Seller.findByIdAndUpdate(itemId, {
                name,
                document,
                telefono,
                email,
                sucursalE: sucursalFound._id,
                marcaE: marcaFound._id,
                estado 
            });
        }else{
            query = await Seller.findByIdAndUpdate(itemId, {
                name,
                document,
                telefono,
                email,
                sucursalE: sucursalFound._id,
                marcaE: marcaFound._id,
                avatar: avatar.location,
                estado 
            });
        }
        if (query) {
            res.json({ message: 'Vendedor actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vendedor a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sellerController.deleteSellerById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Seller.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Vendedor eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vendedor a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default sellerController;
