import AServicios from "../models/AServicios";
import Sucursal from "../models/Sucursal";

const serviciosCtrl = {};

serviciosCtrl.getAll = async(req, res) => {
    try {
        const query = await AServicios.find().sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Asesores de Servicios' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await AServicios.findById(itemId)
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el Asesor de Servicio' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getAllByActivo = async(req, res) => {
    try {
        const query = await AServicios.find({ estado: true })
        .sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No hay Asesores de Servicios Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.createOne = async(req, res) => {
    const { name, document, cellphone, email, sucursalE, estado } = req.body;
    const avatar = req.file;

    try {
        let obj = null;

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        if(avatar == null || avatar == undefined){
            obj = new AServicios({
                name,
                document,
                cellphone,
                email,
                sucursalE: sucursalFound._id,
                estado
            });
        }else{
            obj = new AServicios({
                name,
                document,
                cellphone,
                email,
                sucursalE: sucursalFound._id,
                estado,
                avatar: avatar.location,
            });
        }

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Asesor de Servicio creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.updatedOneById = async(req, res) => {
    const { name, document, cellphone, email, sucursalE, estado } = req.body;
    const { itemId } = req.params;
    const avatar = req.file;

    try {

        let query = null;

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        if(avatar == undefined || avatar == null){
            query = await AServicios.findByIdAndUpdate(itemId,{
                name,
                document,
                cellphone,
                email,
                sucursalE: sucursalFound._id,
                estado
            })
        }else{
            query = await AServicios.findByIdAndUpdate(itemId,{
                name,
                document,
                cellphone,
                email,
                sucursalE: sucursalFound._id,
                estado,
                avatar: avatar.location
            })
        }

        if (query) {
            res.json({ message: 'Asesor de Servicio actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Asesor de Servicio a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await AServicios.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Asesor de Servicio eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Asesor de Servicio a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getBySucursal = async(req, res) => {
    const { sucursalE } = req.body;

    try {

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        const query = await AServicios.find({ 
            sucursalE: sucursalFound._id, 
            estado: true 
        }).sort({ name: 1 });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No Existen Asesores de Servicios en ${sucursal}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default serviciosCtrl;
