import User from '../models/User'
import Role from '../models/Role'

export const createUser = async(req, res) => {
    try {
        const { username, email, name, password, sucursal, direccion, pais, codigo_postal, about, roles, activo } = req.body;
        const newUser = new User({
            username,
            email,
            name,
            password: await User.encryptPassword(password),
            sucursal,
            direccion,
            pais,
            codigo_postal,
            about,
            activo
        });

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map(role => role._id);
        } else {
            const role = await Role.findOne({ name: "Usuario" });
            newUser.roles = [role._id];
        }

        const userSaved = await newUser.save();
        res.status(201).json(userSaved);
    } catch (e) {
        console.log(e);
    }
}

export const getUsers = async(req, res) => {
    await User.find({}, function(err, users) {
        Role.populate(users, { path: "roles" }, function(err, users) {
            res.status(200).send(users);
        })
    });
    //res.json(accounts);
}

export const getUserById = async(req, res) => {
    await User.findById(req.params.userId, function(err, user) {
        Role.populate(user, { path: "roles" }, function(err, user) {
            res.status(200).json(user);
        })
    });

}

export const updateUserById = async(req, res) => {
    const { username, email, name, password, sucursal, direccion, pais, codigo_postal, about, roles, activo } = req.body;

    try {
        const foundRoles = await Role.find({ name: { $in: roles } })
        const userFound = await User.findByIdAndUpdate(req.params.userId, { username, email, name, password: await User.encryptPassword(password), sucursal, direccion, pais, codigo_postal, about, roles: foundRoles.map(role => role._id), activo }, { new: true });

        res.status(200).json(userFound);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error en la consulta' });
    }

}

export const deleteUserById = async(req, res) => {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndRemove(userId);
    res.status(200).json({ message: 'User Removed' });
}