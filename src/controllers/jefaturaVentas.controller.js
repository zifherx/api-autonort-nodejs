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
        return res.status(503).json({ error: err })
    }
}

jefaturaCtrl.createOne = async(req, res) => {

    const { name, email, area, sucursal, createdBy } = req.body;

    try {

        const newObj = new JefaturaVentas({ name, email, area, sucursal });

        const userFound = await User.find({ username: { $in: createdBy } })
        newObj.createdBy = userFound.map(a => a._id)

        const query = await newObj.save();
        if (query) {
            res.json({ message: 'Jefatura creada con éxito' });
        }
    } catch (err) {
        console.error(err);
        res.status(503).json({ error: err });
    }
}

jefaturaCtrl.obtenerJefexSucursal = async(req, res) => {
    const { sucursal, area } = req.body

    try {
        const query = await JefaturaVentas.findOne({ sucursal: sucursal, area: area, status: true }).select('name email');

        if (query) {
            res.json({ asesor: query })
        } else {
            return res.status(404).json({ message: 'No se encontraron asesores' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export default jefaturaCtrl;