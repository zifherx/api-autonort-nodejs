import Circular from '../models/Circular';

const circularController = {};

circularController.createOne = async (req, res) => {
    const { codigo_interno,fecha_registro, nombre, anio,anioE, mes, categoria, categoriaE, representa, enlace } = req.body;
    try {
        const newObj = new Circular({

        });

        const query = newObj.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err.message});
    }
}

export default circularController;