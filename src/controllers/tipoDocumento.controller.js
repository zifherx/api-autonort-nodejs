import TipoDocumento from "../models/TipoDocumento";

const documentoController = {};

documentoController.getAll = async (req, res) => {
    try {
        const query = await TipoDocumento.find().sort({ value: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen documentos de dentidad" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

documentoController.getOneById = async (req, res) => {
    const { tipoId } = req.params;
    try {
        const query = await TipoDocumento.findById(tipoId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe el documento de identidad" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

documentoController.getAllByActive = async (req, res) => {
    try {
        const query = await TipoDocumento.find({ estado: true }).sort({ value: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen documentos de identidad activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

documentoController.createOne = async (req, res) => {
    const { cod_interno, name, abreviatura, longitud, estado } = req.body;
    try {
        const nuevo = new TipoDocumento({ cod_interno, name, abreviatura, longitud, estado });
        const query = await nuevo.save();
        if (query) {
            res.json({ message: "Documento de identidad creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

documentoController.updateOneById = async (req, res) => {
    const { name, abreviatura, longitud, estado } = req.body;
    const { tipoId } = req.params;
    try {
        const query = await TipoDocumento.findByIdAndUpdate(tipoId, { name, abreviatura, longitud, estado });
        if (query) {
            res.json({ message: "Documento de identidad actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe documento de identidad a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

documentoController.deleteTipoDocumento = async (req, res) => {
    const { tipoId } = req.params;
    try {
        const query = await TipoDocumento.findByIdAndDelete(tipoId);
        if (query) {
            res.json({ message: "Documento de identidad eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe documento de identidad a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default documentoController;
