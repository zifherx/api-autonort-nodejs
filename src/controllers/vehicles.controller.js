import Vehicle from "../models/Vehicle";
import User from "../models/User";
import ModeloTasaciones from "../models/ModeloTasaciones";
import Chasis from "../models/Chasis";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await Vehicle.find()
            .sort({ cod_tdp: 1 })
            .populate({
                path: "chasis",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: { path: "marca", select: "avatar name" },
            })
            .populate({
                path: "empleado",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen vehículos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getVehicleById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const vehicle = await Vehicle.findById(itemId)
            .populate({
                path: "chasis",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: { path: "marca", select: "avatar name" },
            })
            .populate({
                path: "empleado",
                select: "name",
            });

        if (vehicle) {
            res.json({ one: vehicle });
        } else {
            return res.status(404).json({ message: "No existe el Vehículo" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getVehicleByCodigo = async (req, res) => {
    const { cod_tdp } = req.body;
    try {
        const query = await Vehicle.findOne({ cod_tdp })
            .populate({
                path: "chasis",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: { path: "marca", select: "avatar name" },
            })
            .populate({
                path: "empleado",
                select: "name",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe vehículo a mostrar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getVehiculeByMarca = async (req, res) => {
    const { marca } = req.body;
    try {
        const query = await Vehicle.find()
            .populate({
                path: "chasis",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: {
                    path: "marca",
                    select: "avatar name",
                    match: { name: marca },
                },
            })
            .populate({
                path: "empleado",
                select: "name",
            });

        let obj = query.filter((b) => b.model.marca);
        if (obj.length > 0) {
            res.json({ total: obj.length, all: obj });
        } else {
            return res.status(404).json({ message: "No existen Modelos en esa Marca" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getVehiculeByModelo = async (req, res) => {
    const { modelo } = req.body;
    try {
        const query = await Vehicle.find({ estado: true })
            .select("cod_tdp model version")
            .sort({ cod_tdp: 1 })
            .populate({
                path: "model",
                match: { name: { $in: modelo } },
                select: "avatar name marca",
                populate: {
                    path: "marca",
                    select: "name avatar",
                },
            });

        let obj = query.filter((a) => a.model);
        if (obj.length > 0) {
            res.json({ total: obj.length, all: obj });
        } else {
            return res.status(404).json({ message: "No existen Vehículos en ese Modelo" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createVehicle = async (req, res) => {
    const { codigo_interno, chasis, model, cod_tdp, version, empleado } = req.body;

    try {
        const obj = new Vehicle({
            codigo_interno,
            cod_tdp,
            version,
        });

        const foundEmployee = await User.findOne({ username: empleado });
        if (!foundEmployee) return res.status(404).json({ message: `Empleado ${empleado} no encontrado` });
        obj.empleado = foundEmployee._id;

        const foundChasis = await Chasis.findOne({ name: chasis });
        if (!foundChasis) return res.status(404).json({ message: `Chasis ${chasis} no encontrado` });
        obj.chasis = foundChasis._id;

        const foundModel = await ModeloTasaciones.findOne({ name: model });
        if (!foundModel) return res.status(404).json({ message: `Modelo ${model} no encontrado` });
        obj.model = foundModel._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Vehículo creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateVehicleById = async (req, res) => {
    const { itemId } = req.params;
    const { chasis, model, cod_tdp, version, estado } = req.body;

    try {
        const foundChasis = await Chasis.findOne({ name: chasis });
        if (!foundChasis) return res.status(404).json({ message: `Chasis ${chasis} no encontrado` });

        const foundModel = await ModeloTasaciones.findOne({ name: model });
        if (!foundModel) return res.status(404).json({ message: `Modelo ${model} no encontrado` });

        const updatedVehicle = await Vehicle.findByIdAndUpdate(itemId, {
            chasis: foundChasis._id,
            cod_tdp,
            model: foundModel._id,
            version,
            estado,
        });

        if (updatedVehicle) {
            res.json({ message: "Vehículo actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Vehículo a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteVehicleById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Vehicle.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Vehículo eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Vehículo a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
