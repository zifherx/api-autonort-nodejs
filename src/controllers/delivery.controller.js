import Customer from "../models/Customer";
import Delivery from "../models/Delivery";
import Record from "../models/Record";
import Sale from "../models/Sale";
import User from "../models/User";

export const createDelivery = async (req, res) => {
  const { tramite, fecha_entrega_cliente, hora_entrega_cliente, status,empleado } = req.body;

  try {
    const nuevoRegistro = new Delivery({
      tramite,
      fecha_entrega_cliente,
      hora_entrega_cliente,
      status,
    });
    //Cliente
    const cliente = await Customer.find({ name: { $in: tramite } });
    const cod_cliente = cliente.map((a) => a._id);
    //Sale
    const expediente = await Sale.find({ cliente: cod_cliente });
    const cod_expediente = expediente.map((b) => b._id);
    //Record
    const inmatriculado = await Record.find({ sales: cod_expediente });
    nuevoRegistro.tramite = inmatriculado.map((c) => c._id);

    //Empleado
    const foundEmployee = await User.find({ username: { $in: empleado } });
    nuevoRegistro.empleado = foundEmployee.map(em => em._id);

    //Cambio de filtro al Expediente
    const cod_tramite = inmatriculado[0]._id;
    const a = await Record.findByIdAndUpdate(cod_tramite, {pasoaEntrega: 1}, {new: true})
    /* console.log(cod_tramite);
    console.log(a); */

    const registroGuardado = await nuevoRegistro.save();

    if (registroGuardado) {
      res.json({ message: "Entrega creada con éxito" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const getAll = async (req, res) => {
  const filtro1 = {
    path: "tramite",
    populate: { path: "sales", populate: "auto cliente vendedor empleado" },
  };
  try {
    const query = await Delivery.find().populate(filtro1).populate('empleado');
    if (query.length > 0) {
      res.json(query);
    } else {
      return res.status(404).json({ message: "No existen Entregas" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const getDeliveryById = async (req, res) => {
  const { deliveryId } = req.params;
  const filtro1 = {
    path: "tramite",
    populate: { path: "sales", populate: "auto cliente vendedor empleado" },
  };

  try {
    const query = await Delivery.findById(deliveryId).populate(filtro1).populate('empleado');
    if (query) {
      res.json(query);
    } else {
      return res.status(404).json({ message: "No existe el Expediente" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const updateDeliveryById = async (req, res) => {
  const { deliveryId } = req.params;
  const { tramite, fecha_entrega_cliente, hora_entrega_cliente, status } = req.body;

  try {
    //Cliente
    const cliente = await Customer.find({ name: { $in: tramite } });
    const cod_cliente = cliente.map((a) => a._id);
    //Sale
    const expediente = await Sale.find({ cliente: cod_cliente });
    const cod_expediente = expediente.map((b) => b._id);
    //Record
    const inmatriculado = await Record.find({ sales: cod_expediente });

    if(cliente <= 0){
      return res.status(404).json({message: 'Cliente ingresado no existe'});
    }

    if(expediente <= 0){
      return res.status(404).json({message: 'Cliente ingresado no cuenta con expediente'});
    }

    if(inmatriculado <= 0){
      return res.status(404).json({message: 'El expediente no se encuentra en trámites'});
    }

    const objActualizado = await Delivery.findByIdAndUpdate(deliveryId, {
      tramite: inmatriculado.map((x) => x._id),
      fecha_entrega_cliente,
      hora_entrega_cliente,
      status,
    });

    if(objActualizado){
        res.json({message: 'Entrega actualizada con éxito'});
    }else{
        return res.status(404).json({message: 'No existe Expediente a Actualizar'})
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

export const deleteDeliveryById = async (req, res) => {
    const { deliveryId } = req.params;

  try {

    const objeto = await Delivery.findByIdAndDelete(deliveryId);

    if(objeto){
        res.json({message: 'Entrega eliminada con éxito'});
    }else{
        return res.status(404).json({message: 'No existe Expediente a Eliminar'})
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};
