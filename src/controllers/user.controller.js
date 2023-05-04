import User from "../models/User";
import Role from "../models/Role";
import Sucursal from "../models/Sucursal";
import Area from "../models/Area";

const userController = {};

userController.getAll = async (req, res) => {
    try {
        const query = await User.find()
            .select("-password")
            .sort({ name: 1 })
            .populate({
                path: "roles",
                select: "name",
            })
            .populate({
                path: "sedeAcargo",
                select: "name",
            })
            .populate({
                path: "areaE",
                select: "name",
            })
            .populate({
                path: "sucursalE",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen usuarios" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.getAllActivos = async (req, res) => {
    try {
        const query = await User.find({ estado: true })
            .select("-password")
            .sort({ name: 1 })
            .populate({
                path: "roles",
                select: "name",
            })
            .populate({
                path: "sedeAcargo",
                select: "name",
            })
            .populate({
                path: "areaE",
                select: "name",
            })
            .populate({
                path: "sucursalE",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen usuarios activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.getOneById = async (req, res) => {
    const { userId } = req.params;

    try {
        const query = await User.findById(userId)
            .select("-password")
            .populate({
                path: "roles",
                select: "name",
            })
            .populate({
                path: "sedeAcargo",
                select: "name",
            })
            .populate({
                path: "areaE",
                select: "name",
            })
            .populate({
                path: "sucursalE",
                select: "name",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe usuario" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.createOne = async (req, res) => {
    const {
        name,
        username,
        password,
        sucursal,
        sucursalE,
        sedeAcargo,
        roles,
        estado,
        fecha_nacimiento,
        genero,
        area,
        areaE,
        fecha_ingreso,
        documento,
        phone,
        email,
    } = req.body;

    try {
        const newUser = new User({
            name,
            username,
            sucursal,
            password: await User.encryptPassword(password),
            estado,
            fecha_nacimiento,
            genero,
            area,
            fecha_ingreso,
            documento,
            phone,
            email,
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        newUser.sucursalE = sucursalFound._id;

        const cargoFound = await Sucursal.find({ name: { $in: sedeAcargo } });
        if (!cargoFound) return res.status(404).json({ message: `Sede ${sedeAcargo} no encontrada` });
        newUser.sedeAcargo = cargoFound.map((a) => a._id);

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map((role) => role._id);
        } else {
            const role = await Role.findOne({ name: "Usuario" });
            newUser.roles = [role._id];
        }

        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });
        newUser.areaE = areaFound._id;

        const query = await newUser.save();

        if (query) {
            res.json({ message: "Usuario creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.updateOneById = async (req, res) => {
    const { userId } = req.params;
    const { name, username, sucursalE, email, phone, sedeAcargo, roles, estado, fecha_nacimiento, genero, area, areaE, fecha_ingreso, documento } =
        req.body;
    // console.log('BODY: ',req.body);
    const avatar = req.file;
    let areaNull = null;

    try {
        let query = null;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

        const cargoFound = await Sucursal.find({ name: { $in: sedeAcargo } });
        if (!cargoFound) return res.status(404).json({ message: `Sede ${sedeAcargo} no encontrada` });

        if (areaE == null || areaE == undefined || areaE == '' || areaE == 'null') {
            areaNull = null;
        } else {
            const areaFound = await Area.findOne({ name: areaE });
            if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });
            areaNull = areaFound._id;
        }

        const roleFound = await Role.find({ name: { $in: roles } });
        if (!roleFound) return res.status(404).json({ message: `Rol ${roles} no encontrado` });

        if (avatar == null || avatar == undefined) {
            query = await User.findByIdAndUpdate(userId, {
                username,
                name,
                sucursalE: sucursalFound._id,
                roles: roleFound.map((a) => a._id),
                sedeAcargo: cargoFound.map((a) => a._id),
                email,
                phone,
                estado,
                fecha_nacimiento,
                genero,
                area,
                areaE: areaNull,
                fecha_ingreso,
                documento,
            });
        } else {
            query = await User.findByIdAndUpdate(userId, {
                username,
                name,
                sucursalE: sucursalFound._id,
                sedeAcargo: cargoFound.map((a) => a._id),
                roles: roleFound.map((a) => a._id),
                avatar: avatar.location,
                email,
                phone,
                estado,
                fecha_nacimiento,
                genero,
                area,
                areaE: areaNull,
                fecha_ingreso,
                documento,
            });
        }

        if (!query) {
            return res.status(404).json({ messsage: "No existe usuario a actualizar" });
        }
        res.json({ message: "Usuario actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.updateProfileById = async (req, res) => {
    const { userId } = req.params;
    const { name, email, phone, pais, codigo_postal, direccion, about } = req.body;

    try {
        const query = await User.findByIdAndUpdate(userId, {
            name,
            email,
            phone,
            pais,
            codigo_postal,
            direccion,
            about,
        });

        if (query) {
            res.json({ message: "Perfil actualizado con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe perfil a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.deleteOneById = async (req, res) => {
    const { userId } = req.params;
    try {
        const query = await User.findByIdAndRemove(userId);

        if (query) {
            res.json({ message: "Usuario eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe usuario a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

userController.countByOnlineStatus = async (req, res) => {
    const { online } = req.body;

    try {
        const query = await User.find({ online }).countDocuments();

        if (query >= 0) {
            res.json({ total: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default userController;
