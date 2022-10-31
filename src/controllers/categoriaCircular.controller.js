import CategoriaCircular from '../models/CategoriaCircular';

const categoriaController = {};

categoriaController.getAll = async(req, res) => {
    try {
        const query = await CategoriaCircular.find().sort({ name: 1 })
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: 'No existen los items' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

categoriaController.getOneById = async(req, res) => {
    const { itemId } = req.params
    try {
        const query = await CategoriaCircular.findById(itemId)
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe item' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

categoriaController.getAllByActive = async(req, res) => {
    try {
        const query = await CategoriaCircular.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen items activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

categoriaController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new CategoriaCircular({ name, estado })
        const query = await obj.save()
        if (query) {
            res.json({ message: 'Item creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

categoriaController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await CategoriaCircular.findByIdAndUpdate(itemId, { name, estado })
        if (query) {
            res.json({ message: 'Item actualizado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe item a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

categoriaController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await CategoriaCircular.findByIdAndDelete(itemId)
        if (query) {
            res.json({ message: 'Item eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe item a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default categoriaController;