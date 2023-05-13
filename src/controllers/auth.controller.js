import jwt from "jsonwebtoken";
import config from "../config/config";
import User from "../models/User";
import Role from "../models/Role";

const authController = {};

authController.signIn = async (req, res) => {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username });

    if (!userFound) return res.status(404).json({ message: "Usuario no existe" });

    if (!userFound.status) return res.status(403).json({ message: "Usuario inactivo" });

    // if (userFound.online) return res.status(401).json({ message: 'Usuario ya se encuentra logueado' });

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword) return res.status(403).json({ token: null, message: "Contraseña Errónea" });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: "48h" });

    //Cambio de estado a online
    await User.findByIdAndUpdate(userFound._id, { online: true });

    console.log("Token:", token);

    res.json({ token, codigo: userFound._id });
};

authController.changePassword = async (req, res) => {
    const { id } = res.locals.jwtPayload;
    const { oldPassword, newPassword } = req.body;
    let user;

    if (!(oldPassword && newPassword)) {
        res.status(400).json({ message: "Contraseña Anterior y Nueva Contraseña son necesarios" });
    }

    try {
        user = await User.findById(id);
    } catch (err) {
        return res.status(404).json({ message: "Usuario no existe" });
    }

    const matchPassword = await User.comparePassword(oldPassword, user.password);

    if (!matchPassword) return res.status(401).json({ message: "Contraseña actual errónea" });

    try {
        user.password = await User.encryptPassword(newPassword);

        const guardado = await user.save();

        if (guardado) {
            res.json({ message: "Contraseña actualizada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

authController.cerrarSesion = async (req, res) => {
    const { id } = res.locals.jwtPayload;

    try {
        const userFound = await User.findById(id);

        if (!userFound.online) return res.status(401).json({ message: "No existe sesión abierta" });

        const offline = await User.findByIdAndUpdate(id, { online: false });

        if (offline) return res.json({ message: "Sesión cerrada con éxito" });
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

authController.forzarCierre = async (req, res) => {
    const { username } = req.body;

    try {
        const userFound = await User.findOne({ username });

        let codUser = userFound._id;

        if (!userFound) return res.status(404).json({ message: "Usuario no existe" });

        if (!userFound.online) return res.status(401).json({ message: "No existe sesión iniciada" });

        const offline = await User.findByIdAndUpdate(codUser, { online: false });

        if (offline) return res.json({ message: "Se cerró la sesión de forma forzada" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

authController.refreshToken = async (req, res) => {
    const refreshTok = req.headers.refresh;

    if (!refreshTok) res.status(400).json({ message: "Algo salió mal" });
};

authController.resetPassword = async (req, res) => {
    const { id } = res.locals.jwtPayload;
    const { userMod } = req.body;

    const userAdminFound = await User.findById(id);
    if (!userAdminFound) return res.status(404).json({ message: `JWT No válido` });

    const userResetFound = await User.findOne({ username: userMod });
    if (!userResetFound) return res.status(404).json({ message: `Usuario no existe` });

    const roleAdmin = await Role.findById(userAdminFound.roles[0]);
    // console.log(roleAdmin);
    if (roleAdmin.name !== "Administrador") return res.status(404).json({ message: `Usuario no es Administrador` });

    const matchPassword = await User.comparePassword(userResetFound.documento, userResetFound.password);
    if (matchPassword) return res.status(201).json({ message: `Contraseña ya reseteada!` });

    try {
        userResetFound.password = await User.encryptPassword(userResetFound.documento);
        const saved = await userResetFound.save();

        if (saved) res.json({ message: `Contraseña reseteada con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default authController;
