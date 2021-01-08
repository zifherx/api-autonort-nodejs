import Financing from '../models/Financing'

export const createFinancing = async(req, res) => {
    try {
        const { type, description } = req.body;
        const newFinancing = new Financing({ type, description });

        const financingSaved = await newFinancing.save();

        res.status(201).json(financingSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' });
    }
}

export const getFinancing = async(req, res) => {
    try {
        const financing = await Financing.find();

        if (financing) {
            res.status(200).json(financing);
        } else {
            res.status(201).json({ message: 'No existe financiamiento a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' });
    }
}

export const getFinancingById = async(req, res) => {
    try {
        const { financingId } = req.params;

        const financiamiento = await Financing.findById(financingId);

        if (financiamiento) {
            res.status(200).json(financiamiento);
        } else {
            res.status(201).json({ message: 'No existe el financiamiento' });
        }

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' });
    }
}

export const updateFinancingById = async(req, res) => {
    try {
        const { financingId } = req.params;

        const updateFinancing = await Financing.findByIdAndUpdate(financingId, req.body, { new: true });

        if (updateFinancing) {
            res.status(200).json(updateFinancing);
        } else {
            res.status(201).json({ message: 'No existe financiamiento a actualizar' })
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' });
    }
}

export const deleteFinancingById = async(req, res) => {
    try {
        const { financingId } = req.params;

        const deleteFinancing = await Financing.findByIdAndDelete(financingId);

        if (deleteFinancing) {
            res.status(200).json({ message: 'Financiamiento Eliminado' });
        } else {
            res.status(201).json({ message: 'Financiamiento no Existe' })
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error' });
    }
}