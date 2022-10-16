import TuningAccesorios from '../models/TuningAccesorios';
import ModeloTasaciones from '../models/ModeloTasaciones';
import Anio from '../models/Anio';
import EstadoTunningAccesorio from '../models/EstadoTunningAccesorio';
import User from '../models/User';
import Sucursal from '../models/Sucursal';

const tunningController = {};

tunningController.getAll = async (req, res) => {
    try {
        const query = await TuningAccesorios.find()
        .sort({producto: 1})
        .populate({
            path: 'forCar',
            select: 'name avatar marca',
            poopulate: {
                path: 'marca',
                select: 'name avatar'
            }
        })
        .populate({
            path: 'anioE',
            select: 'name'
        })
        .populate({
            path: 'sedeE',
            select: 'name'
        })
        .populate({
            path: 'estadoE',
            select: 'name valor'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if(query.length > 0){
            res.json({total: query.length, all: query});
        }else{
            return res.status(404).json({message: `No existen registros de accesorios`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({err: err, message: err.message});
    }
};

tunningController.createOne = async (req, res) => {
    const { codigo_interno,sede,sedeE, clasificacion, producto, pCosto, margenGanancia, stockInicial, pVenta, forCar, anio, anioE, estado, estadoE, createdBy} = req.body;
    try {
        const newObj = new TuningAccesorios({
            codigo_interno,
            sede,
            clasificacion, 
            producto, 
            pCosto, 
            margenGanancia, 
            stockInicial, 
            pVenta,
            anio,
            estado
        });

        const sedeFound = await Sucursal.findOne({name: sedeE});
        if(!sedeFound) return res.status(404).json({message: `Sede ${sedeE} no encontrado`});
        newObj.sedeE = sedeFound._id;

        const forCarFound = await ModeloTasaciones.find({name: {$in: forCar}});
        if(!forCarFound) return res.status(404).json({message: `Modelo ${forCar} no encontrado`});
        newObj.forCar = forCarFound.map(a => a._id);
        
        const anioFound = await Anio.find({name: anioE});
        if(!anioFound) return res.status(404).json({message: `Año ${anioE} no encontrado`});
        newObj.anioE = anioFound.map(a => a._id);
        
        const estadoFound = await EstadoTunningAccesorio.findOne({name: estadoE});
        if(!estadoFound) return res.status(404).json({message: `Estado ${estadoE} no encontrado`});
        newObj.estadoE = estadoFound._id;
        
        const userFound = await User.findOne({username: createdBy});
        if(!userFound) return res.status(404).json({message: `Usuario ${createdBy} no encontrado`});
        newObj.createdBy = userFound._id;

        const query = await newObj.save();

        if(query) res.json({message: 'Accesorio registrado con éxito'});
    } catch (err) {
        console.log(err);
        return res.status(503).json({err: err, message: err.message});
    }
}

tunningController.updateOneById = async (req, res) => {
    const {estado, estadoE} = req.body;
    const {itemId} = req.params;

    try {
        const estadoFound = await EstadoTunningAccesorio.findOne({name: estadoE});
        if(!estadoFound) return res.status(404).json({message: `Estado ${estadoE} no encontrado`});
        
        const query = await TuningAccesorios.findByIdAndUpdate(itemId, {
            estado,
            estadoE: estadoFound._id
        });

        if(query){
            res.json({message: `Registro actualizado con éxito`});
        }else {
            return res.status(404).json({ message: 'No existe registro a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({err: err, message: err.message});
    }
}

export default tunningController;