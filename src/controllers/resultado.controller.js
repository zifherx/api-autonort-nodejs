import Resultado from "../models/Resultado";
import TipoProducto from "../models/TipoProducto";
import Anio from "../models/Anio";
import Mes from "../models/Mes";
import Sucursal from "../models/Sucursal";
import User from "../models/User";

const resultadoCtrl = {};

resultadoCtrl.getAll = async (req, res) => {
     try {
          const query = await Resultado.find()
               .sort({ fecha: -1 })
               .populate({
                    path: "tipoProductoE",
                    select: "name",
               })
               .populate({
                    path: "anioE",
                    select: "name",
               })
               .populate({
                    path: "mesE",
                    select: "name numero abreviatura",
               })
               .populate({
                    path: "sucursalE",
                    select: "name",
               })
               .populate({
                    path: "createdBy",
                    select: "name username",
               });

          if (query.length > 0) {
               res.json({ total: query.length, all: query });
          } else {
               return res.status(404).json({ message: "No existen resultados" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

resultadoCtrl.getOneById = async (req, res) => {
     const { itemId } = req.params;

     try {
          const query = await Resultado.findById(itemId)
               .populate({
                    path: "tipoProductoE",
                    select: "name",
               })
               .populate({
                    path: "anioE",
                    select: "name",
               })
               .populate({
                    path: "mesE",
                    select: "name numero abreviatura",
               })
               .poppulat({
                    path: "sucursalE",
                    select: "name",
               })
               .populate({
                    path: "createdBy",
                    select: "name username",
               });

          if (query) {
               res.json({ one: query });
          } else {
               return res.status(404).json({ message: "No existen el resultado" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

resultadoCtrl.createOne = async (req, res) => {
     const { cod_interno, tipoProducto, tipoProductoE, fecha, anio, mes, anioE, mesE, sucursal, sucursalE, meta, valor, createdBy } = req.body;

     try {
          const newObj = new Resultado({
               cod_interno,
               tipoProducto,
               fecha,
               anio,
               mes,
               sucursal,
               meta,
               valor,
          });

          const productoFound = await TipoProducto.findOne({ name: tipoProductoE });
          if (!productoFound) return res.status(404).json({ message: `Tipo Producto ${tipoProductoE} no encontrado` });
          newObj.tipoProductoE = productoFound._id;

          const anioFound = await Anio.findOne({ name: anioE });
          if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });
          newObj.anioE = anioFound._id;

          const mesFound = await Mes.findOne({ name: mesE });
          if (!mesFound) return res.status(404).json({ message: `Mes ${mesE} no encontrado` });
          newObj.mesE = mesFound._id;

          const sucursalFound = await Sucursal.findOne({ name: sucursalE });
          if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });
          newObj.sucursalE = sucursalFound._id;

          const userFound = await User.findOne({ username: createdBy });
          if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
          newObj.createdBy = userFound._id;

          const query = await newObj.save();

          if (query) {
               res.json({ message: `Resultado ${cod_interno} creado con éxito` });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

resultadoCtrl.updateOneById = async (req, res) => {
     const { tipoProducto, tipoProductoE, anio, mes, anioE, mesE, sucursal, sucursalE, meta, valor } = req.body;
     const { itemId } = req.params;

     try {
          const productoFound = await TipoProducto.findOne({ name: tipoProductoE });
          if (!productoFound) return res.status(404).json({ message: `Tipo Producto ${tipoProductoE} no encontrado` });

          const anioFound = await Anio.findOne({ name: anioE });
          if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });

          const mesFound = await Mes.findOne({ name: mesE });
          if (!mesFound) return res.status(404).json({ message: `Mes ${mesE} no encontrado` });

          const sucursalFound = await Sucursal.findOne({ name: sucursalE });
          if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });

          const query = await Resultado.findByIdAndUpdate(itemId, {
               tipoProducto,
               tipoProductoE: productoFound._id,
               anio,
               mes,
               anioE: anioFound._id,
               mesE: mesFound._id,
               sucursal,
               sucursalE: sucursalFound._id,
               meta,
               valor,
          });

          if (query) {
               res.json({ message: "Resultado actualizado con éxito" });
          } else {
               return res.status(404).json({ message: "No existe el resultado a actualizar" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

resultadoCtrl.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
         const query = await Resultado.findByIdAndDelete(itemId);

         if (query) {
              res.json({ message: "Resultado eliminado con éxito" });
         } else {
              return res.status(404).json({ message: "No existe el resultado a eliminar" });
         }
    } catch (err) {
         console.log(err);
         return res.status(503).json({ message: err.message });
    }
};

resultadoCtrl.getAllByProductSedeYear = async (req, res ) => {
     const { sucursalE, productoE, yearE} = req.body;

     try {

          const productoFound = await TipoProducto.findOne({name: productoE});
          if(!productoFound) return res.status(404).json({message: `Producto ${productoE} no encontrado`});

          const query = await Resultado.find({
               sucursal: { $regex: '.*' + sucursalE + '.*'},
               tipoProductoE: productoFound._id,
               anio: yearE
          })
          .select('cod_interno sucursalE tipoProductoE anioE mesE meta valor')
          .sort({fecha: 1})
          .populate({
               path: 'sucursalE',
               select: 'name'
          })
          .populate({
               path: 'tipoProductoE',
               select: 'name'
          })
          .populate({
               path: 'anioE',
               select: 'name'
          })
          .populate({
               path: 'mesE',
               select: 'name'
          });

          if(query.length > 0){
               res.json({total: query.length, all: query});
          }else{
               return res.status(404).json({message: `No se cargaron resultados de ${productoE} en el ${yearE}`});
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({message: err.message});
     }
}

export default resultadoCtrl;
