import jwt from 'jsonwebtoken'
import config from '../config/config'
import User from '../models/User'
import Role from '../models/Role'

export const signIn = async(req, res) => {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username });

    if (!userFound) return res.status(404).json({ message: 'Usuario no existe' });

    if (!userFound.status) return res.status(403).json({ message: 'Usuario inactivo' });

    if (userFound.online) return res.status(401).json({ message: 'Usuario ya se encuentra logueado' });

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword) return res.status(403).json({ token: null, message: 'Contraseña Errónea' });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: '36h' });

    //Cambio de estado a online
    await User.findByIdAndUpdate(userFound._id, { online: true });

    console.log('Token:', token);

    res.json({ token, codigo: userFound._id });
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
        res.status(503).json({ error: err });
    }
}

export const cerrarSesion = async(req, res) => {
    const { id } = res.locals.jwtPayload;
    try {
        const userFound = await User.findById(id);

        if (!userFound.online) return res.status(401).json({ message: 'No existe sesión abierta' });

        const offline = await User.findByIdAndUpdate(id, { online: false });

        if (offline) return res.json({ message: 'Sesión cerrada con éxito' });
    } catch (err) {
        return res.status(503).json({ error: err });
    }
}

export const forzarCierre = async(req, res) => {
    const { username } = req.body;

    try {
        const userFound = await User.findOne({ username });

        let codUser = userFound._id;

        if (!userFound) return res.status(404).json({ message: 'Usuario no existe' });

        if (!userFound.online) return res.status(401).json({ message: 'No existe sesión iniciada' });

        const offline = await User.findByIdAndUpdate(codUser, { online: false });

        if (offline) return res.json({ message: 'Se cerró la sesión de forma forzada' })

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
        // return res.status(503).json({ error: err });
    }
}

export const refreshToken = async(req, res) => {
    const refreshTok = req.headers.refresh;

    if (!refreshTok) res.status(400).json({ message: 'Algo salió mal' })


}