import User from '../models/User'
import Role from '../models/Role'
import Sucursal from '../models/Sucursal';

const userController = {};

userController.getAll = async(req, res) => {
    try {
        const query = await User.find()
            .select('-password')
            .sort({ name: 1 })
            .populate({
                path: 'roles',
                select: 'name'
            })
            .populate({
                path: 'sucursalE',
                select: 'name'
            });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen usuarios' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

userController.getAllActivos = async(req, res) => {
    try {
        const query = await User.find({estado: true})
            .select('-password')
            .sort({ name: 1 })
            .populate({
                path: 'roles',
                select: 'name'
            })
            .populate({
                path: 'sucursalE',
                select: 'name'
            });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen usuarios activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

userController.getOneById = async(req, res) => {
    const { userId } = req.params;

    try {
        const query = await User.findById(userId)
        .select('-password')
        .populate({
            path: 'roles',
            select: 'name'
        })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe usuario' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }

}

userController.createOne = async(req, res) => {
    const { name, username, password,sucursal, sucursalE, roles, estado } = req.body;
    console.log(req.body);

    try {
        const newUser = new User({
            name,
            username,
            sucursal,
            password: await User.encryptPassword(password),
            estado
        });

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        console.log('Sucursal Found:', sucursalFound);
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        newUser.sucursalE = sucursalFound._id;

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map(role => role._id);
        } else {
            const role = await Role.findOne({ name: "Usuario" });
            newUser.roles = [role._id];
        }

        const query = await newUser.save();

        if (query) {
            res.json({ message: 'Usuario creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

userController.updateOneById = async(req, res) => {
    const { userId } = req.params;
    const { name, username, sucursalE, email, phone, roles, estado } = req.body;
    const avatar = req.file;

    // console.log(req.body);

    try {

        let query = null;

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});
        
        const roleFound = await Role.find({ name: { $in: roles } });
        if(!roleFound) return res.status(404).json({message: `Rol ${roles} no encontrado`});

        if(avatar == null || avatar == undefined){
            query = await User.findByIdAndUpdate(userId, {
                username,
                name,
                sucursalE: sucursalFound._id,
                roles: roleFound.map(a => a._id),
                email, 
                phone,
                estado
            });
        }else{
            query = await User.findByIdAndUpdate(userId, {
                username,
                name,
                sucursalE: sucursalFound._id,
                roles: roleFound.map(a => a._id),
                avatar: avatar.location,
                email, 
                phone,
                estado
            });
        }

        if (query) {
            res.json({ message: 'Usuario actualizado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe usuario a actualizar' })
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

userController.updateProfileById = async (req, res) => {
    const { userId } = req.params;
    const {name, email,phone,pais,codigo_postal,direccion,about} = req.body;

    try {
        const query = await User.findByIdAndUpdate(userId, {
            name,
            email,
            phone,
            pais,
            codigo_postal,
            direccion,
            about
        });

        if (query) {
            res.json({ message: 'Perfil actualizado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe perfil a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

userController.deleteOneById = async(req, res) => {
    const { userId } = req.params;
    try {

        const query = await User.findByIdAndRemove(userId);

        if (query) {
            res.json({ message: 'Usuario eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe usuario a eliminar' })
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }

}

userController.countByOnlineStatus = async (req, res) => {
    const { online } = req.body;

    try {
        const query = await User.find({online}).countDocuments();
        
        if(query >= 0){
            res.json({total: query});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default userController;