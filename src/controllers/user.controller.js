import User from '../models/User'
import Role from '../models/Role'

export const createUser = async(req, res) => {
    const { username, email, name, password, sucursal, direccion, pais, codigo_postal, about, roles, activo } = req.body;

    try {

        const newUser = new User({ username, email, name, password: await User.encryptPassword(password), sucursal, direccion, pais, codigo_postal, about, activo });

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map(role => role._id);
        } else {
            const role = await Role.findOne({ name: "Usuario" });
            newUser.roles = [role._id];
        }

        const userSaved = await newUser.save();

        if (userSaved) {
            res.json({ message: 'Usuario creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getUsers = async(req, res) => {
    try {
        const lista = await User.find().sort({ name: 'asc' }).populate('roles')
        if (lista.length > 0) {
            res.json(lista)
        } else {
            return res.status(404).json({ message: 'No existen Usuarios' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getUserById = async(req, res) => {
    const { userId } = req.params;

    try {

        const objeto = await User.findById(userId).populate('roles')

        if (objeto) {
            res.json(objeto)
        } else {
            return res.status(404).json({ message: 'No existe Usuario' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }

}

export const updateUserById = async(req, res) => {
    const { userId } = req.params;
    const { username, email, name, sucursal, direccion, pais, codigo_postal, about, roles, activo } = req.body;

    try {
        const foundRoles = await Role.find({ name: { $in: roles } })
        const userFound = await User.findByIdAndUpdate(userId, { username, email, name, sucursal, direccion, pais, codigo_postal, about, roles: foundRoles.map(role => role._id), activo });

        if (userFound) {
            res.json({ message: 'Usuario actualizado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe usuario a actualizar' })
        }

    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateProfile = async(req, res) => {
    const { email, direccion, pais, codigo_postal, about } = req.body;
    const { userId } = req.params;

    try {
        const objeto = await User.findByIdAndUpdate(userId, { email, direccion, pais, codigo_postal, about });
        if (objeto) {
            res.json({ message: 'Actualización de Perfil con éxito' })
        } else {
            return res.json.status(404).json({ message: 'No existe Perfil a modificar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteUserById = async(req, res) => {
    try {
        const { userId } = req.params;

        const deletedUser = await User.findByIdAndRemove(userId);

        if (deletedUser) {
            res.json({ message: 'Usuario eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe usuario a eliminar' })
        }

    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }

}