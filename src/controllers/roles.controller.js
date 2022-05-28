import Role from '../models/Role';

const roleController = {};

roleController.createOne = async(req, res) => {
    const { name, description, estado } = req.body;
    try {
        const obj = new Role({ name, description,estado });
        const query = await obj.save();
        if (query) {
            res.json({ message: 'Rol creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

roleController.getAll = async(req, res) => {
    try {
        const query = await Role.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Roles' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

roleController.getAllActivos = async(req, res) => {
    try {
        const query = await Role.find({estado: true}).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen roles activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

roleController.getOneById = async(req, res) => {
    const { roleId } = req.params;
    try {
        const query = await Role.findById(roleId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el Rol' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

roleController.updateOneById = async(req, res) => {
    const { roleId } = req.params;
    const { name, description, estado } = req.body;
    try {
        const query = await Role.findByIdAndUpdate(roleId, { name, description, estado });
        
        if (query) {
            res.json({ message: 'Rol actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Rol a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

roleController.deleteOneById = async(req, res) => {
    const { roleId } = req.params;
    try {
        const query = await Role.findByIdAndDelete(roleId);
        if (query) {
            res.json({ message: 'Rol eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Rol a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default roleController;