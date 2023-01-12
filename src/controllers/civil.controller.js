import EstadoCivil from "../models/EstadoCivil";

const civilController = {};

civilController.getAll = async(req, res) => {
    try {
        const query = await EstadoCivil.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados civiles'})
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

civilController.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoCivil.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe estado civil'})
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

civilController.getAllActivos = async(req, res) => {
    try {
        const query = await EstadoCivil.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados civiles activos'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

civilController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new EstadoCivil({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Estado civil creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

civilController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await EstadoCivil.findByIdAndUpdate(itemId, { name, estado });

        if (query) {
            res.json({ message: 'Estado civil actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado civil a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

civilController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoCivil.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Estado civil eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado civil a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default civilController;
