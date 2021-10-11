import Role from '../models/Role'

export const createRole = async(req, res) => {
    const { name, description } = req.body;
    try {
        const obj = new Role({ name, description });
        const query = await obj.save();
        if (query) {
            res.json({ message: 'Rol creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const getRoles = async(req, res) => {
    try {
        const roles = await Role.find().sort({ name: 'asc' });
        if (roles.length > 0) {
            res.json(roles);
        } else {
            return res.status(404).json({ message: 'No existen Roles' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const getCountAll = async(req, res) => {
    try {
        const query = await Role.countDocuments();
        if (query >= 0) return res.json({ count_roles: query });
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const getRolesById = async(req, res) => {
    const { roleId } = req.params;
    try {
        const roles = await Role.findById(roleId);
        if (roles) {
            res.json(roles);
        } else {
            return res.status(404).json({ message: 'No existe el Rol' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const updateRoleById = async(req, res) => {
    const { roleId } = req.params;
    const { name, description } = req.body;
    try {
        const updateRole = await Role.findByIdAndUpdate(roleId, { name, description });
        if (updateRole) {
            res.json({ message: 'Rol actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe el Rol a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteRoleById = async(req, res) => {
    const { roleId } = req.params;
    try {
        const deletedRole = await Role.findByIdAndDelete(roleId);
        if (deletedRole) {
            res.json({ message: 'Rol eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Rol a eliminar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}