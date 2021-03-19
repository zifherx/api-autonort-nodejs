import jwt from 'jsonwebtoken'
import config from '../config/config'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(409).json({ message: 'Falta Token' });

        const decoded = jwt.verify(token, config.SECRET);

        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });

        if (!user) return res.status(404).json({ message: 'No se encontró usuario' });

        next();

    } catch (error) {
        return res.status(403).json({ message: 'No Autorizado' });
    }
}

export const isAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Administrador') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso de Administrador' });
}

export const isChiefSales = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Jefe-Ventas') {
            next()
            return;
        }

    }
    return res.status(403).json({ message: 'Requiere permiso de Jefe-Ventas' });
}

export const isChiefAdv = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Jefe-ADV') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso de Jefe-ADV' });
}

export const isChiefTunning = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Jefe-Tunning') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso de Jefe-Tunning' });
}

export const isInmatriculadosAsistant = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Asistente-Inmatriculaciones') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Asistente de Inmatriculacion' });
}