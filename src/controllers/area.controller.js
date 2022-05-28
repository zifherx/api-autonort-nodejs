import Area from "../models/Area";

const areaCtrl = {};

areaCtrl.getAll = async(req, res) => {
    try {
        const query = await Area.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Areas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

areaCtrl.getOneById = async(req, res) => {
    const { areaId } = req.params;
    try {
        const query = await Area.findById(areaId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe area' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

areaCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await Area.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen areas activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

areaCtrl.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const newArea = new Area({ name, estado });

        const query = await newArea.save();

        if (query) {
            res.json({ message: 'Area creada con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

areaCtrl.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { areaId } = req.params;
    try {
        const query = await Area.findByIdAndUpdate(areaId, { name, estado });

        if (query) {
            res.json({ message: 'Area actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe area a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

areaCtrl.deleteOneById = async(req, res) => {
    const { areaId } = req.params;
    try {
        const query = await Area.findByIdAndDelete(areaId);
        if (query) {
            res.json({ message: 'Area eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe area a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default areaCtrl;