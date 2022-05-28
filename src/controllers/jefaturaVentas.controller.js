import JefaturaVentas from "../models/JefaturaVentas";
import User from "../models/User";
import Area from "../models/Area";
import MarcaTasaciones from "../models/MarcaTasaciones";
import Sucursal from "../models/Sucursal";

const jefaturaCtrl = {};

jefaturaCtrl.getAll = async(req, res) => {
    try {
        const query = await JefaturaVentas.find()
            .populate({
                path: 'areaE',
                select: 'name'
            })
            .populate({
                path: 'marcaE',
                select: 'name avatar'
            })
            .populate({
                path: 'sucursalE',
                select: 'name'
            })
            .populate({
                path: 'createdBy',
                select: 'name'
            });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen jefes' })
        }
    } catch (err) {
        console.error(err)
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await JefaturaVentas.find({estado: true })
            .populate({
                path: 'areaE',
                select: 'name'
            })
            .populate({
                path: 'marcaE',
                select: 'name avatar'
            })
            .populate({
                path: 'sucursalE',
                select: 'name'
            })
            .populate({
                path: 'createdBy',
                select: 'name'
            });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen jefes' })
        }
    } catch (err) {
        console.error(err)
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.getOneById = async(req, res) => {
    const { jefaturaId } = req.params;
    try {
        const query = await JefaturaVentas.findById(jefaturaId)
            .populate({
                path: 'areaE',
                select: 'name'
            })
            .populate({
                path: 'marcaE',
                select: 'name avatar'
            })
            .populate({
                path: 'sucursalE',
                select: 'name'
            })
            .populate({
                path: 'createdBy',
                select: 'name'
            });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el Jefe' })
        }
    } catch (err) {
        console.error(err)
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.createOne = async(req, res) => {

    const { name, email, areaE, marcaE, sucursalE, encargadoDe, estado, createdBy } = req.body;

    try {

        const newObj = new JefaturaVentas({ name, email, encargadoDe, estado });

        const userFound = await User.findOne({ username: createdBy });
        if(!userFound) return res.status(404).json({message: `No existe el usuario ${createdBy}`});
        newObj.createdBy = userFound._id;
        
        const areaFound = await Area.findOne({name: areaE});
        if(!areaFound) return res.status(404).json({message: `No existe el area ${areaE}`});
        newObj.areaE = areaFound._id;
        
        const marcaFound = await MarcaTasaciones.findOne({name: marcaE});
        if(!marcaFound) return res.status(404).json({message: `No existe la marca ${marcaE}`});
        newObj.marcaE = marcaFound._id;
        
        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `No existe la sucursal ${sucursalE}`});
        newObj.sucursalE = sucursalFound._id;

        const query = await newObj.save();
        if (query) {
            res.json({ message: 'Jefe creado con éxito' });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.updateById = async(req, res) => {
    const { jefaturaId } = req.params;
    const { name, email, areaE, marcaE, sucursalE, encargadoDe, estado } = req.body;

    try {

        const areaFound = await Area.findOne({name: areaE});
        if(!areaFound) return res.status(404).json({message: `No existe el area ${areaE}`});
        
        const marcaFound = await MarcaTasaciones.findOne({name: marcaE});
        if(!marcaFound) return res.status(404).json({message: `No existe la marca ${marcaE}`});
        
        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `No existe la sucursal ${sucursalE}`});

        const query = await JefaturaVentas.findByIdAndUpdate(jefaturaId, {
            name,
            email,
            areaE: areaFound._id,
            marcaE: marcaFound._id,
            sucursalE: sucursalFound._id,
            encargadoDe,
            estado
        });
        if (query) {
            res.json({ message: 'Jefe actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Jefe a actualizar' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.deleteById = async(req, res) => {
    const { jefaturaId } = req.params;

    try {
        const query = await JefaturaVentas.findByIdAndDelete(jefaturaId);
        if (query) {
            res.json({ message: 'Jefe eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Jefe a eliminar' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.obtenerJefexSucursal = async(req, res) => {
    const { areaE, marcaE, sucursal } = req.body

    try {
        const areaFound = await Area.findOne({name: areaE});
        if(!areaFound) return res.status(404).json({message: `No existe el area ${areaE}`});
        
        const marcaFound = await MarcaTasaciones.findOne({name: marcaE});
        if(!marcaFound) return res.status(404).json({message: `No existe la marca ${marcaE}`});
        
        const query = await JefaturaVentas.findOne({ 
            areaE: areaFound._id,
            marcaE: marcaFound._id,
            encargadoDe: {$in: sucursal},
            estado: true })
        .select('name email areaE marcaE sucursalE encargadoDe area marca sucursal')
        .populate({path: 'areaE', select: 'name'})
        .populate({path: 'marcaE', select: 'name'})
        .populate({path: 'sucursalE', select: 'name'});

        if (query) {
            res.json({ one: query })
        } else {
            return res.status(404).json({ message: 'No se encontraron asesores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default jefaturaCtrl;