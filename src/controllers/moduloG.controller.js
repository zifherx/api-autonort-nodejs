import MenuG from "../models/MenuG";
import ModuloG from "../models/ModuloG";

const moduloController = {};

moduloController.getAll = async(req, res) => {
    try {
        const query = await ModuloG.find()
        .sort({ name: 1 })
        .populate({
            path: 'menuG',
            select: 'name icon'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen módulos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

moduloController.getOneById = async(req, res) => {
    const { moduloId } = req.params;
    try {
        const query = await ModuloG.findById(moduloId)
        .populate({
            path: 'menuG',
            select: 'name icon'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe módulo' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

moduloController.getAllByActivos = async(req, res) => {
    try {
        const query = await ModuloG.find({ estado: true })
        .sort({ name: 1 })
        .populate({
            path: 'menuG',
            select: 'name icon'
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen módulos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

moduloController.getAllActiveByMenu = async(req, res) => {
    const {menuG} = req.body;

    try {
        
        const menuFound = await MenuG.findOne({name: menuG});
        if(!menuFound) return res.status(404).json({message: `Menú ${menuG} no encontrado`});

        const query = await ModuloG.find({
            menuG: menuFound._id,
            estado: true
        })
        .sort({ name: 1 })
        .populate({
            path: 'menuG',
            select: 'name icon'
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen módulos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

moduloController.createOne = async(req, res) => {
    const { menuG, name, icon, estado } = req.body;
    try {
        const obj = new ModuloG({ name, icon, estado });

        const menuFound = await MenuG.findOne({name: menuG});
        if(!menuFound) return res.status(404).json({message: `Menu ${menuG} no encontrado`});
        obj.menuG = menuFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Módulo creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

moduloController.updateOneById = async(req, res) => {
    const { menuG, name, estado } = req.body;
    const { moduloId } = req.params;

    try {

        const menuFound = await MenuG.findOne({name: menuG});
        if(!menuFound) return res.status(404).json({message: `Menu ${menuG} no encontrado`});

        const query = await ModuloG.findByIdAndUpdate(moduloId, { 
            menuG: menuFound._id,
            name, 
            estado 
        });

        if (query) {
            res.json({ message: 'Módulo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe módulo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

moduloController.deleteOneById = async(req, res) => {
    const { moduloId } = req.params;
    try {
        const query = await ModuloG.findByIdAndDelete(moduloId);
        if (query) {
            res.json({ message: 'Módulo eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe módulo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default moduloController;