import Portada from "../models/Portada";

const portadaCtrl = {};

portadaCtrl.getAll = async (req, res) => {
	try {
		const query = await Portada.find();

		if (query.length > 0) {
			res.json({ total: query.length, all: query });
		} else {
			return res.status(404).json({ message: "No existen Portadas" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

portadaCtrl.getAllActivos = async (req, res) => {
	try {
		const query = await Portada.find({ estado: true })
        .select('name avatar estado');

		if (query.length > 0) {
			res.json({ total_active: query.length, all_active: query });
		} else {
			return res.status(404).json({ message: "No existen Portadas" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
}

portadaCtrl.getOneById = async (req, res) => {
	const { portadaId } = req.params;
	try {
		const query = await Portada.findById(portadaId);

		if (query) {
			res.json({ one: query });
		} else {
			return res.status(404).json({ message: "No existe portada" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

portadaCtrl.createOne = async (req, res) => {
	const { name,estado } = req.body;
	const avatar = req.file;

	try {
		let obj = null;

		if (avatar == null || avatar == undefined) {
			obj = new Portada({
                name,
				estado,
			});
		} else {
			obj = new Portada({
                name,
                nombreAvatar: avatar.originalname,
				avatar: avatar.location,
				estado,
			});
		}

		const query = await obj.save();

		if (query) {
			res.json({ message: "Portada creada con éxito" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

portadaCtrl.updateOneById = async (req, res) => {
	const { estado } = req.body;
	const { portadaId } = req.params;
	const avatar = req.file;

	try {

        let query = null;

        if(avatar == null || avatar == undefined){
            query = await Portada.findByIdAndUpdate(portadaId, {
                estado
            });
        }else{
            query = await Portada.findByIdAndUpdate(portadaId, {
                nombreAvatar: avatar.originalname,
                avatar: avatar.location,
                estado
            });
        }
        

		if (query) {
			res.json({ message: "Portada actualizada con éxito" });
		} else {
			return res.status(404).json({ message: "No se encontró portada" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

portadaCtrl.deleteOneByID = async (req, res) => {
	const { portadaId } = req.params;
	try {
		const query = await Portada.findByIdAndDelete(portadaId);

		if (query) {
			res.json({ message: "Portada eliminada con éxito" });
		} else {
			return res.status(404).json({ message: "No se encontró portada" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

export default portadaCtrl;
