import Customer from "../models/Customer";
import TipoDocumento from "../models/TipoDocumento";
import User from "../models/User";

const controller = {};

controller.createOne = async (req, res) => {
    const {
        name,
        tipoDocumento,
        document,
        representanteLegal,
        documentoRepresentante,
        condicion,
        departamento,
        provincia,
        distrito,
        estado,
        direccion_completa,
        cellphone,
        email,
        address,
        createdBy,
    } = req.body;
    // console.log('BODY',req.body);

    try {
        const newCustomer = new Customer({
            name,
            document,
            representanteLegal,
            documentoRepresentante,
            condicion,
            departamento,
            provincia,
            distrito,
            estado,
            direccion_completa,
            cellphone,
            email,
            address,
        });

        const foundEmployee = await User.findOne({ username: createdBy });
        if (!foundEmployee) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newCustomer.empleado = foundEmployee._id;
        newCustomer.createdBy = foundEmployee._id;

        const tipoDocFound = await TipoDocumento.findOne({ abreviatura: tipoDocumento });
        if (!tipoDocFound) return res.status(404).json({ message: `Documento de identidad ${tipoDocumento} no encontrado` });
        newCustomer.tipoDocumento = tipoDocFound._id;

        const query = await newCustomer.save();

        if (query) {
            res.json({ message: "Cliente creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAll = async (req, res) => {
    try {
        const query = await Customer.find()
            .sort({ name: 1 })
            .populate({ path: "tipoDocumento", select: "name abreviatura longitud" })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "empleado",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Clientes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Customer.findById(itemId)
            .populate({ path: "tipoDocumento", select: "name abreviatura longitud" })
            .populate({ path: "empleado", select: "name username" });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ messsage: "No existe cliente" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getClienteByDNI = async (req, res) => {
    const { document } = req.body;

    try {
        const query = await Customer.findOne({ document })
            .populate({ path: "tipoDocumento", select: "name abreviatura longitud" })
            .populate({ path: "empleado", select: "name username" });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: `El documento ${document} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { itemId } = req.params;
    const {
        name,
        tipoDocumento,
        document,
        representanteLegal,
        documentoRepresentante,
        condicion,
        departamento,
        provincia,
        distrito,
        estado,
        direccion_completa,
        cellphone,
        email,
        address,
    } = req.body;

    try {
        const tipoDocFound = await TipoDocumento.findOne({ abreviatura: tipoDocumento });
        if (!tipoDocFound) return res.status(404).json({ message: `Documento de identidad ${tipoDocumento} no encontrado` });

        const query = await Customer.findByIdAndUpdate(itemId, {
            name,
            tipoDocumento: tipoDocFound._id,
            document,
            representanteLegal,
            documentoRepresentante,
            condicion,
            departamento,
            provincia,
            distrito,
            estado,
            direccion_completa,
            cellphone,
            email,
            address,
        });

        if (query) {
            res.json({ message: "Cliente actualizado con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe cliente a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Customer.findByIdAndDelete(itemId);

        if (query) {
            res.json({ message: "Cliente eliminado con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe cliente a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getCountByType = async (req, res) => {
    const { tipoDocumento } = req.body;

    try {
        const tipoDocumentoFound = await TipoDocumento.findOne({abreviatura: tipoDocumento});
        // console.log(tipoDocumentoFound);
        const query = await Customer.find({ tipoDocumento: tipoDocumentoFound._id}).countDocuments();

        if(query >= 0) res.json({total: query}); 
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default controller;
