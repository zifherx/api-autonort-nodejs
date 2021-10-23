import jwt from 'jsonwebtoken'
import config from '../config/config'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async(req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(409).json({ message: 'Falta Token' });

        const decoded = jwt.verify(token, config.SECRET);
        res.locals.jwtPayload = decoded;
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });

        if (!user) return res.status(404).json({ message: 'No se encontró usuario' });

        next();

    } catch (err) {
        console.log(err)
        if (err.message == "jwt expired") {
            return res.status(401).json({ message: 'Token ha expirado' });
        } else {
            console.log(err.message)
            return res.status(403).json({ message: 'No Autorizado' });
        }
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

export const isChiefAdvorAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Jefe-ADV' || roles[i].name === 'Administrador') {
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
    return res.status(403).json({ message: 'Requiere permiso del Asistente-Inmatriculacion' });
}

export const isCSAsistant = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Asistente-CS') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Asistente-CS' })
}

export const isConexosAsistant = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Asistente-Conexos') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Asistente-Conexos' })
}

export const isConexosOrADV = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Asistente-Conexos || Jefe ADV' })
}

export const isConexosOrADVOrVendedorOrAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Asistente-Conexos' || roles[i].name === 'Jefe-ADV' || roles[i].name === 'Vendedor' || roles[i].name === 'Administrador') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Asistente-Conexos || Jefe ADV || Vendedor || Administrador' })
}

export const isTasador = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Tasador') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Tasador' })
}

export const isChiefTasador = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Jefe-Tasación') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Jefe de Tasaciones' })
}

export const isVendedor = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Vendedor') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Vendedor' })
}

export const isExecutiveMaf = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'Ejecutivo-MAF') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Requiere permiso del Ejecutivo MAF' })
}