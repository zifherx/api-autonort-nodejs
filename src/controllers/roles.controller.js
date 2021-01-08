import Role from '../models/Role'

export const createRole = async(req, res) => {
    const { name, description } = req.body;
    const newRole = new Role({ name, description });

    const roleSaved = await newRole.save();
    res.status(201).json(roleSaved);
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
    const { name, description } = req.body;
    const updateRole = await Role.findByIdAndUpdate(req.params.roleId, req.body, { new: true });

    res.status(200).json(updateRole);
}

export const deleteRoleById = async(req, res) => {
    const { roleId } = req.params;
    const deletedRole = await Role.findByIdAndRemove(roleId);
    res.status(200).json({ message: 'Role Removed' });
}