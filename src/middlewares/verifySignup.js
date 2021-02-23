import { ROLES } from '../models/Role'
import User from '../models/User'

export const checkDuplicateUsernameOrEmail = async(req, res, next) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).json({ message: 'El usuario ya existe' });

    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(400).json({ message: 'El email ya existe' });

    next();
}

export const checkRolesExist = (req, res, next) => {
    if (req.body.roles) {
        for (let h = 0; h < req.body.roles.size; h++) {
            if (!ROLES.includes(req.body.roles[h])) {
                return res.status(400).json({ message: `Rol ${req.body.roles[h]} no existe` });
            }
        }
    }
    next();
}