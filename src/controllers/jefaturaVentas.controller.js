import JefaturaVentas from "../models/JefaturaVentas";
import User from "../models/User";

const jefaturaCtrl = {};

jefaturaCtrl.getAll = async(req, res) => {
    try {
        const query = await JefaturaVentas.find().populate('createdBy', 'name');

        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen jefes' })
        }
    } catch (err) {
        console.error(err)
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.createOne = async(req, res) => {

    const { name, email, area, marca, sucursal, createdBy } = req.body;

    try {

        const newObj = new JefaturaVentas({ name, email, area, marca, sucursal });

        const userFound = await User.find({ username: { $in: createdBy } })
        newObj.createdBy = userFound.map(a => a._id)

        const query = await newObj.save();
        if (query) {
            res.json({ message: 'Jefe creada con éxito' });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.updateById = async(req, res) => {
    const { jefaturaId } = req.params;
    const { name, email, area, marca, sucursal } = req.body;

    try {
        const query = await JefaturaVentas.findByIdAndUpdate(jefaturaId, {
            name,
            email,
            area,
            marca,
            sucursal
        });
        if (query) {
            res.json({ message: 'Jefe actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Jefe a actualizar' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.deleteById = async(req, res) => {
    const { jefaturaId } = req.params;

    try {
        const query = await JefaturaVentas.findByIdAndDelete(jefaturaId);
        if (query) {
            res.json({ message: 'Jefe eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Jefe a eliminar' });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}

jefaturaCtrl.obtenerJefexSucursal = async(req, res) => {
    const { sucursal, area, marca } = req.body

    try {
        const query = await JefaturaVentas.findOne({ sucursal: sucursal, area: area, marca: marca, status: true }).select('name email');

        if (query) {
            res.json({ asesor: query })
        } else {
            return res.status(404).json({ message: 'No se encontraron asesores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default jefaturaCtrl;