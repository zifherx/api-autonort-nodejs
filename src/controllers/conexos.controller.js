import Area from "../models/Area";
import Conexos from "../models/Conexos";
import Sucursal from "../models/Sucursal";
import User from "../models/User";

const conexosController = {};

conexosController.getAll = async (req, res) => {
    try {
        const query = await Conexos.find()
            .sort({ name: 1 })
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
            return res.status(404).json({ message: "No existen asesores de conexos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.getAllActivos = async (req, res) => {
    try {
        const query = await Conexos.find({ estado: true })
            .sort({ name: 1 })
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
            return res.status(404).json({ message: "No existen asesores activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Conexos.findById(itemId)
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
            return res.status(404).json({ message: "No existe el Asesor" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.createOne = async (req, res) => {
    const { name, email, areaE, sucursalE, encargadoDe, estado, createdBy } = req.body;

    try {
        const newObj = new Conexos({ name, email, encargadoDe, estado });

        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });
        newObj.areaE = areaFound._id;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        newObj.sucursalE = sucursalFound._id;

        const userFound = await User.findOne({ username: createdBy });
        newObj.createdBy = userFound._id;

        const query = await newObj.save();
        if (query) {
            res.json({ message: "Asesor creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.updateOneById = async (req, res) => {
    const { name, email, areaE, sucursalE, encargadoDe, estado } = req.body;
    const { itemId } = req.params;

    try {
        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

        const query = await Conexos.findByIdAndUpdate(itemId, {
            name,
            email,
            areaE: areaFound._id,
            sucursalE: sucursalFound._id,
            encargadoDe,
            estado,
        });

        if (query) {
            res.json({ message: "Asesor actualizado con éxito" });
        } else {
            return res.json(404).json({ message: "No existe Asesor a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Conexos.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Asesor eliminado con éxito" });
        } else {
            return res.json(404).json({ message: "No existe Asesor a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.getAsesorxSucursalyArea = async (req, res) => {
    const { sucursal, area } = req.body;

    try {
        const query = await Conexos.findOne({
            area: area,
            encargadoDe: { $in: sucursal },
            status: true,
        })
            .populate({ path: "areaE", select: "name" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "createdBy", select: "name username" });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No se encontraron asesores" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.getAsesoresxArea = async (req, res) => {
    const { areaE } = req.body;

    try {
        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });

        const query = await Conexos.find({
            areaE: areaFound._id,
            estado: true,
        });

        if (query) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No se encontraron asesores" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

conexosController.getAsesorByName = async (req, res) => {
    const { name } = req.body;

    try {
        const query = await Conexos.findOne({ name })
            .select("name email areaE sucursalE encargadoDe")
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
            return res.status(404).json({ message: "No se encontraron asesores" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default conexosController;
