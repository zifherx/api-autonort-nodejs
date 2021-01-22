import Financing from '../models/Financing'

export const createAdelanto = async(req, res) => {
    try {
        const { nombre, monto } = req.body;
        const newAdelanto = new Financing({ nombre, monto });

        const adelantoGuardado = await newAdelanto.save();
        res.status(201).json(adelantoGuardado);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' })
    }
}

export const getAdelantos = async(req, res) => {
    try {
        const adelantos = await Financing.find();
        res.status(201).json(adelantos);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' })
    }
}

export const getAdelantoById = async(req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' })
    }
}

export const updateAdelandoById = async(req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' })
    }
}

export const deleteAdelantoById = async(req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error Interno' })
    }
}