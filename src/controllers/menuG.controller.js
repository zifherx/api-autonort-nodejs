import MenuG from "../models/MenuG";

const menuController = {};

menuController.getAll = async(req, res) => {
    try {
        const query = await MenuG.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen menús' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

menuController.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await MenuG.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe menú' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

menuController.getAllByActivos = async(req, res) => {
    try {
        const query = await MenuG.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen menus activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

menuController.createOne = async(req, res) => {
    const { name, icon, estado } = req.body;
    try {
        const obj = new MenuG({ name, icon, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Menú creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

menuController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await MenuG.findByIdAndUpdate(itemId, { name, estado });

        if (query) {
            res.json({ message: 'Menú actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe menú a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

menuController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await MenuG.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Menú eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe menú a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default menuController;