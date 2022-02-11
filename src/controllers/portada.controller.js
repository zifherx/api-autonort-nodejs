import Portada from '../models/Portada'

const portadaCtrl = {};

portadaCtrl.getAll = async(req,res) => {
    try {
        const query = await Portada.find();

        if(query.length > 0){
            res.json({images: query});
        }else{
            return res.status(404).json({message: 'No existen Portadas'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

portadaCtrl.getAllActives = async(req,res) => {
    try {
        const query = await Portada.find({status: true});

        if(query.length > 0){
            res.json({total: query.length, images: query});
        }else{
            return res.status(404).json({message: 'No existen Portadas'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

portadaCtrl.createOne = async (req, res) => {
    const {status} = req.body;
    const avatar = req.file;
    
    try {
            let newObj = new Portada({rutaImage: avatar.location,status});

            const query = await newObj.save();

            if(query){
                res.json({ message: 'Portada creada con éxito' });
            }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

export default portadaCtrl;