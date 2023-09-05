import TipoComprobante from "../models/TipoComprobante";

const comprobanteController = {};

comprobanteController.getAll = async (req, res) => {
    try {
        const query = await TipoComprobante.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Comprobantes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

comprobanteController.getOneById = async (req, res) => {
    const { comprobanteId } = req.params;
    try {
        const query = await TipoComprobante.findById(comprobanteId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe Comprobante" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

comprobanteController.getAllActivos = async (req, res) => {
    try {
        const query = await TipoComprobante.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen comprobantes activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

comprobanteController.createOne = async (req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new TipoComprobante({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Comprobante creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

comprobanteController.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { comprobanteId } = req.params;
    try {
        const query = await TipoComprobante.findByIdAndUpdate(comprobanteId, { name, estado });

        if (query) {
            res.json({ message: "Comprobante actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe comprobante a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

comprobanteController.deleteOneById = async (req, res) => {
    const { comprobanteId } = req.params;
    try {
        const query = await TipoComprobante.findByIdAndDelete(comprobanteId);
        if (query) {
            res.json({ message: "Comprobante eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe comprobante a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default comprobanteController;
