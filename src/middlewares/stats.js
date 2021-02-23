import Sale from "../models/Sale";

async function conteoUnidadesCanceladas() {
    const unidCanceladas = await Sale.where({ estatus_venta: 'Cancelado' });

    return unidCanceladas.count() > 0;
}

module.exports = async() => {
    const resultado = await Promise.all([conteoUnidadesCanceladas()]);

    return { canceladas: resultado[0] };
}