import Circular from '../models/Circular';
import Anio from '../models/Anio';
import CategoriaCircular from '../models/CategoriaCircular';

const circularController = {};

circularController.createOne = async (req, res) => {
    const { codigo_interno,fecha_registro, nombre, anio,anioE, mes, categoria, categoriaE, representa, enlace } = req.body;
    try {
        const newObj = new Circular({
            codigo_interno,
            fecha_registro,
            nombre,
            anio,
            mes,
            categoria,
            representa,
            enlace
        });

        const anioEFound = await Anio.findOne({name: anioE});
        if(!anioEFound) return res.status(404).json({message: `Año ${anioE} no encontrado.`});
        newObj.anioE = anioEFound._id;
        
        const categoriaEFound = await CategoriaCircular.findOne({name: categoriaE});
        if(!categoriaEFound) return res.status(404).json({message: `Categoria ${categoriaE} no encontrada.`});
        newObj.categoriaE = categoriaEFound._id;

        const query = await newObj.save();

        if(query) res.json({ message: `Circular agregada con éxito!`});
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

circularController.getAll = async (req, res) => {
    try {
        const query = await Circular.find()
        .sort({fecha_registro: -1})
        .populate({
            path: 'anioE',
            select: 'name'
        })
        .populate({
            path: 'categoriaE',
            select: 'name'
        });

        if(query.length > 0){
            res.json({total: query.length, all: query});
        }else{
            return res.status(404).json({message: `No existen circulares`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

export default circularController;