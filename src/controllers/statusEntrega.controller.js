import StatusEntrega from "../models/StatusEntrega";

const statusCtrl = {};

statusCtrl.getAll = async (req, res) => {
	try {
		const query = await StatusEntrega.find().sort({ name: 1 });
		if (query.length > 0) {
			res.json({ total: query.length, all: query });
		} else {
			return res.status(404).json({ message: "No existen estados de entrega" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

statusCtrl.getOneById = async (req, res) => {
	const { statusId } = req.params;
	try {
		const query = await StatusEntrega.findById(statusId);
		if (query) {
			res.json({ one: query });
		} else {
			return res.status(404).json({ message: "No existe estado de entrega" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

statusCtrl.getAllActivos = async (req, res) => {
	try {
		const query = await StatusEntrega.find({ estado: true }).sort({ value: 1 });
		if (query.length > 0) {
			res.json({ total_active: query.length, all_active: query });
		} else {
			return res.status(404).json({ message: "No existen estados de entrega activos" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

statusCtrl.createOne = async (req, res) => {
	const { name, value, estado } = req.body;
	try {
		const obj = new StatusEntrega({ name, value, estado });

		const query = await obj.save();

		if (query) {
			res.json({ message: "Estado de entrega creado con éxito" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

statusCtrl.updateOneById = async (req, res) => {
	const { name, value, estado } = req.body;
	const { statusId } = req.params;
	try {
		const query = await StatusEntrega.findByIdAndUpdate(statusId, { name, value, estado });

		if (query) {
			res.json({ message: "Estado de entrega actualizado con éxito" });
		} else {
			return res.status(404).json({ message: "No existe estado de entrega a actualizar" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

statusCtrl.deleteOneById = async (req, res) => {
	const { statusId } = req.params;
	try {
		const query = await StatusEntrega.findByIdAndDelete(statusId);
		if (query) {
			res.json({ message: "Estado de entrega eliminado con éxito" });
		} else {
			return res.status(404).json({ message: "No existe estado de entrega a eliminar" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

export default statusCtrl;
