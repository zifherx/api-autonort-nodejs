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
    const userFound = await User.findOne({ username: req.body.username }).populate("roles");

    if (!userFound) return res.status(400).json({ message: 'Usuario no existe' });

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña Errónea' });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 86400 });

    res.status(201).json({ token, codigo: userFound._id, status: userFound.activo });
}