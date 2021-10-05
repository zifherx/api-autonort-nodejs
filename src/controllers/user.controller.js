import User from '../models/User'
import Role from '../models/Role'

export const createUser = async(req, res) => {
    const { username, name, password, sucursal, roles, status } = req.body;

    try {

        const newUser = new User({
            username,
            name,
            password: await User.encryptPassword(password),
            sucursal,
            status
        });

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
        res.status(503).json({ error: err })
    }
}

export const getUsers = async(req, res) => {
    try {
        const lista = await User.find().sort({ name: 'asc' }).populate('roles', 'name')
        if (lista.length > 0) {
            res.json(lista)
        } else {
            return res.status(404).json({ message: 'No existen Usuarios' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const getUserById = async(req, res) => {
    const { userId } = req.params;

    try {

        const objeto = await User.findById(userId).populate('roles', 'name')

        if (objeto) {
            res.json(objeto)
        } else {
            return res.status(404).json({ message: 'No existe Usuario' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }

}

export const updateUserById = async(req, res) => {
    const { userId } = req.params;
    const { username, name, sucursal, roles, status } = req.body;

    try {
        const foundRoles = await Role.find({ name: { $in: roles } })
        const userFound = await User.findByIdAndUpdate(userId, {
            username,
            name,
            sucursal,
            roles: foundRoles.map(role => role._id),
            status
        });

        if (userFound) {
            res.json({ message: 'Usuario actualizado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe usuario a actualizar' })
        }

    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const updateProfile = async(req, res) => {
    const { email, phone, direccion, pais, codigo_postal, about } = req.body;
    const { userId } = req.params;

    try {
        const objeto = await User.findByIdAndUpdate(userId, { email, phone, direccion, pais, codigo_postal, about });
        if (objeto) {
            res.json({ message: 'Actualización de Perfil con éxito' })
        } else {
            return res.json.status(404).json({ message: 'No existe Perfil a modificar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteUserById = async(req, res) => {
    const { userId } = req.params;
    try {

        const deletedUser = await User.findByIdAndRemove(userId);

        if (deletedUser) {
            res.json({ message: 'Usuario eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe usuario a eliminar' })
        }

    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }

}

export const countAll = async(req, res) => {
    try {
        const query = await User.countDocuments();

        if (query >= 0) return res.json({ count_user: query });
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const countByOnline = async(req, res) => {
    const { online } = req.body;
    try {
        const query = await User.where({ online }).find().countDocuments();

        if (query >= 0) return res.json({ count_onlines: query });
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}