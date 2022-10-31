import EstadoKaizen from "../models/EstadoKaizen";

const estadoController = {};

estadoController.getAll = async (req, res) => {
    try {
        const query = await EstadoKaizen.find().sort({ valor: 1 });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen estados" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.getActiveAll = async (req, res) => {
    try {
        const query = await EstadoKaizen.find({ estado: true }).sort({ valor: 1 });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen estados activos" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await EstadoKaizen.findById(itemId);

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: `No existe estado ${itemId}` });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.createOne = async (req, res) => {
    const { name, valor, estado } = req.body;

    try {
        const obj = new EstadoKaizen({
            name,
            valor,
            estado,
        });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Estado creado con éxito" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.updateById = async (req, res) => {
    const { itemId } = req.params;
    const { name, valor, estado } = req.body;

    try {
        const query = await EstadoKaizen.findByIdAndUpdate(itemId, { name, valor, estado });

        if (query) {
            res.json({ message: "Estado actualizado con éxito" });
        } else {
            return res.status(404).json({ message: `No existe estado ${itemId}` });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.deleteById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await EstadoKaizen.findByIdAndRemove(itemId);

        if (query) {
            res.json({ message: "Estado eliminado con éxito" });
        } else {
            return res.status(404).json({ message: `No existe estado ${itemId}` });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

export default estadoController;
