import Role from '../models/Role'

export const createRole = async(req, res) => {
    const { name, description } = req.body;
    const newRole = new Role({ name, description });

    const roleSaved = await newRole.save();
    res.json({ message: 'Rol creado con éxito' });
}

export const getRoles = async(req, res) => {
    const roles = await Role.find();
    res.status(200).json(roles);
}

export const getRolesById = async(req, res) => {
    const roles = await Role.findById(req.params.roleId);
    res.status(200).json(roles);
}

export const updateRoleById = async(req, res) => {
    const { roleId } = req.params;
    const { name, description } = req.body;
    try {
        const updateRole = await Role.findByIdAndUpdate(roleId, { name, description }, { new: true });
        if (updateRole) {
            res.json({ message: 'Rol actualizado con éxito' });
        } else {
            res.status(403).json({ message: 'No Autorizado' });
        }
    } catch (err) {
        console.error(err);
        //res.status(404).json(err)
    }

}

export const deleteRoleById = async(req, res) => {
    const { roleId } = req.params;
    const deletedRole = await Role.findByIdAndRemove(roleId);
    res.json({ message: 'Rol eliminado con éxito' });
}