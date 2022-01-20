import Accesorio from "../models/Accesorio";
import Oferta from "../models/Oferta";

const ofertaCtrl = {};

ofertaCtrl.getOneActivos = async (req, res) => {
	try {
		const query = await Oferta.find({ estado: true })
        .sort({ codigo: 1 })
        .populate({
            path: 'accesorio',
            select: 'categoria nombre status stock'
        });

		if (query.length > 0) {
			res.json({total:query.length, activos: query});
		} else {
			return res.status(404).json({ message: "No existen Ofertas activas" });
		}

	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

ofertaCtrl.getOneById = async (req, res) => {
	const { ofertaId } = req.params;

	try {
		const query = await Oferta.findById(ofertaId)
        .populate({
            path: 'accesorio',
            select: 'categoria nombre status stock'
        });

		if (query) {
			res.json({ oferta: query });
		} else {
			return res.status(404).json({ message: "No existe la Oferta" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

ofertaCtrl.getAll = async (req, res) => {
	try {
		const query = await Oferta.find()
        .sort({ codigo: 1 })
        .populate({
            path: 'accesorio',
            select: 'categoria nombre status stock'
        });
		if (query.length > 0) {
			res.json({ total: query.length, ofertas: query });
		} else {
			return res.status(404).json({ message: "No existen ofertas" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

ofertaCtrl.createOne = async (req, res) => {
	const { codigo, tipo, opcion, descripcion, moneda, monto, cantidad, accesorio, estado } = req.body;
	try {
		const obj = new Oferta({
			codigo,
			tipo,
			opcion,
			descripcion,
			moneda,
			monto,
			cantidad,
			estado,
		});

		const accesorioFound = await Accesorio.find({ name: { $in: accesorio } });
		obj.accesorio = accesorioFound.map((a) => a._id);

		const query = await obj.save();

		if (query) {
			res.json({ message: "Oferta creada con éxito" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

ofertaCtrl.updateOneById = async (req, res) => {
	const { ofertaId } = req.params;
	const { codigo, tipo, opcion, descripcion, moneda, monto, cantidad, accesorio, estado } = req.body;

	try {
		const accesorioFound = await Accesorio.find({ name: { $in: accesorio } });
        if(!accesorioFound) return res.status(404).json({message: 'No existe el accesorio'});

		const query = await Oferta.findByIdAndUpdate(ofertaId, {
			codigo,
			tipo,
			opcion,
			descripcion,
			moneda,
			monto,
			cantidad,
			accesorio: accesorioFound.map(a => a._id),
			estado,
		});

		if (query) {
			res.json({ message: "Oferta actualizada con éxito" });
		} else {
			return res.status(404).json({ message: "No existe Oferta a actualizar" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

ofertaCtrl.deleteOneById = async (req, res) => {
	const { ofertaId } = req.params;

	try {
		const query = await Oferta.findByIdAndDelete(ofertaId);

		if (query) {
			res.json({ message: "Oferta eliminada con éxito" });
		} else {
			return res.status(404).json({ message: "No existe Oferta a eliminar" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

export default ofertaCtrl;
