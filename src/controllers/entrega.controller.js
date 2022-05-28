import Entrega from "../models/Entrega";
import Record from "../models/Record";
import User from "../models/User";
import StatusEntrega from "../models/StatusEntrega";
import mongoose from "mongoose";

const entregaController = {};

entregaController.getAll = async (req, res) => {
	try {
		const query = await Entrega.find()
			.sort({ fecha_entrega: -1 })
			.populate({
				path: "tramite",
				select: "statusFile status_tarjeta status_placa sales",
				populate: {
					path: "sales",
					select: "vendedor cliente auto serie_tdp ubicacion_vehiculo fecha_entrega estatus_venta fecha_cancelacion estadoVentaE",
					populate: [
						{
							path: "vendedor",
							select: "name",
						},
						{
							path: "cliente",
							select: "name",
						},
						{
							path: "auto",
							select: "cod_tdp version model",
							populate: {
								path: "model",
								select: "name avatar",
							},
						},
						{
							path: "estadoVentaE",
							select: "name",
						},
					],
				},
			})
			.populate({
				path: "estadoEntrega",
				select: "name value",
			})
			.populate({
				path: "createdBy",
				select: "name",
			});

		if (query.length > 0) {
			res.json({ total: query.length, all: query });
		} else {
			return res.status(404).json({ message: "No existen entregas" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

entregaController.createOne = async (req, res) => {
	const { observacion, tramite, fecha_entrega, hora_entrega, estadoEntrega, createdby } = req.body;
	// console.log(req.body);

	try {
		const obj = new Entrega({ observacion, fecha_entrega, hora_entrega });

		const tramiteFound = await Record.findById(new mongoose.Types.ObjectId(tramite));
		if (!tramiteFound) return res.status(404).json({ message: `Tramige ${tramite} no encontrado` });

		const estadoFound = await StatusEntrega.findOne({ name: estadoEntrega });
		if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoEntrega} no encontrado` });

		const userFound = await User.findOne({ username: createdby });
		if (!userFound) return res.status(404).json({ message: `Usuario ${createdby} no encontrado` });

		obj.tramite = tramiteFound._id;
		obj.estadoEntrega = estadoFound._id;
		obj.createdBy = userFound._id;

		// console.log('OBJ:',obj);

		const query = await obj.save();

		if (query) {
			res.json({ message: "Entrega programada con éxito" });
		}
	} catch (err) {
		console.log(err);
		return res.status(503).json({ message: err.message });
	}
};

export default entregaController;
