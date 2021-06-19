import jwt from 'jsonwebtoken'
import config from '../config/config'
import User from '../models/User'
import Role from '../models/Role'

export const signUp = async(req, res) => {
    const { username, email, password, roles } = req.body

    const newUser = new User({
        username,
        email,
    });

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }

    const saveUser = await newUser.save();
    //console.log(saveUser);

    const token = jwt.sign({ id: saveUser._id }, config.SECRET, { expiresIn: 86400 });

    res.status(200).json({ token })
}

export const signIn = async(req, res) => {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username }).populate("roles");

    if (!userFound) return res.status(404).json({ message: 'Usuario no existe' });

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña Errónea' });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: '24h' });

    res.json({ token, codigo: userFound._id, status: userFound.activo });
}

export const changePassword = async(req, res) => {
    const { id } = res.locals.jwtPayload;
    const { oldPassword, newPassword } = req.body;
    let user;

    if (!(oldPassword && newPassword)) {
        res.status(400).json({ message: 'Contraseña Anterior y Nueva Contraseña son necesarios' });
    }

    try {
        user = await User.findById(id);
    } catch (err) {
        res.status(404).json({ message: 'Usuario no existe' })
    }

    const matchPassword = await User.comparePassword(oldPassword, user.password);

    if (!matchPassword) return res.status(401).json({ message: 'Contraseña Anterior Errónea' });

    try {
        user.password = await User.encryptPassword(newPassword);

        const guardado = await user.save();

        if (guardado) {
            res.json({ message: 'Contraseña actualizada con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message });
    }

}