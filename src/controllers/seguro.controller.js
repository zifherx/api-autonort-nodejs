import Customer from "../models/Customer";
import Seguro from "../models/Seguro";
import User from "../models/User";

export const getAll = async (req, res) => {
  try {
    const query = await Seguro.find().populate('cliente').populate('empleado');
    if (query.length > 0) {
      res.json(query);
    } else {
      return res.status(404).json({ message: "No existen Seguros" });
    }
  } catch (err) {
    console.error(err);
    res.status(409).json({ message: err.message });
  }
};

export const getSeguroByActivo = async (req, res) => {};

export const getSeguroById = async (req, res) => {
  const { seguroId } = req.params;
  try {
    const query = await Seguro.findById(seguroId).populate('cliente').populate('empleado');
    if (query) {
      res.json(query);
    } else {
      return res.status(404).json({ message: "No existe el Seguro" });
    }
  } catch (err) {
    console.error(err);
    res.status(409).json({ message: err.message });
  }
};

export const createSeguro = async (req, res) => {
  const {
    cliente,company,sucursal, mes, status, forma_pago,cuotas,fecha_emision, tipo_venta, area_venta,poliza,vendedor, placa, chasis,motor,
    marca, modelo, anio, uso, asesor, endoso, entidad, inicio_vigencia, fin_vigencia,suma_asegurada, aseguradora, comision_seguro, comision_asesor, empleado } = req.body;

  try {
    const newObj = new Seguro({ company, sucursal, mes, status, forma_pago, cuotas, fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis, motor,
      marca, modelo, anio, uso, asesor, endoso, entidad, inicio_vigencia, fin_vigencia, suma_asegurada, aseguradora, comision_seguro, comision_asesor});

    const foundCliente = await Customer.find({ name: {$in: cliente}});
    newObj.cliente =foundCliente.map(a => a._id);

      if(!foundCliente.length > 0){
        return res.status(404).json({message: 'No existe este cliente'});
      }
      
    const foundEmployee = await User.find({ username: { $in: empleado } });
    newObj.empleado = foundEmployee.map((b) => b._id);

    const objSaved = await newObj.save();

    if (objSaved) {
      res.json({ message: "Seguro creado con éxito" });
    }
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
};

export const updateSeguro = async (req, res) => {
  const { seguroId } = req.params;
  const { cliente, company, sucursal, mes, status, forma_pago, cuotas, fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis,
    motor, marca, modelo, anio, uso, asesor, endoso, entidad, inicio_vigencia,fin_vigencia,suma_asegurada, aseguradora,comision_seguro, comision_asesor, empleado } = req.body;

  try {
    //Cliente
    const foundCliente = await Customer.find({ name: {$in: cliente}});
    //Empleado
    const foundEmployee = await User.find({ username: { $in: empleado } });

    const updateObj = await Seguro.findByIdAndUpdate(seguroId, { cliente: foundCliente.map(a => a._id) , company, sucursal, mes, status,forma_pago, cuotas,
      fecha_emision, tipo_venta, area_venta, poliza, vendedor, placa, chasis, motor, marca, modelo, anio, uso, asesor, endoso, entidad, inicio_vigencia, fin_vigencia,
      suma_asegurada, aseguradora, comision_seguro, comision_asesor, empleado: foundEmployee.map((b) => b._id),
    });

    if (updateObj) {
      res.json({ message: "Seguro actualizado con éxito" });
    } else {
      return res.status(404).json({ message: "No existe Seguro a actualizar" });
    }
  } catch (err) {
    console.error(err);
    res.status(409).json({ message: err.message });
  }
};

export const deleteSeguro = async (req, res) => {
  const { seguroId } = req.params;

  try {
    const deleteObj = await Seguro.findByIdAndDelete(seguroId);

    if (deleteObj) {
      res.json({ message: "Seguro eliminado con éxito" });
    } else {
      return res.status(404).json({ message: "No existe Seguro a eliminar" });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};
