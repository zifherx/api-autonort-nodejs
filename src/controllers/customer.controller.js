import Customer from '../models/Customer'
import User from '../models/User';

export const createCustomer = async(req, res) => {
    const {
        name,
        typeDocument,
        document,
        representanteLegal,
        documentoRepresentante,
        cellphone,
        email,
        address,
        empleado
    } = req.body;
    try {
        const newCustomer = new Customer({
            name,
            typeDocument,
            document,
            representanteLegal,
            documentoRepresentante,
            cellphone,
            email,
            address
        });
        const foundEmployee = await User.find({ username: { $in: empleado } });
        newCustomer.empleado = foundEmployee.map(em => em._id)
        const customerSaved = await newCustomer.save();
        if (customerSaved) {
            res.json({ message: 'Cliente creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find().sort({ name: 'asc' });
        if (customers.length > 0) {
            res.json(customers);
        } else {
            return res.status(404).json({ message: 'No existen Clientes' });
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getCustomerById = async(req, res) => {
    const { customerId } = req.params;
    try {
        const customer = await Customer.findById(customerId);
        if (customer) {
            res.json(customer);
        } else {
            return res.status(404).json({ messsage: 'No existe cliente' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getCustomerByDni = async(req, res) => {
    const { customerDni } = req.body;
    try {
        const customer = await Customer.findOne({ document: customerDni });
        if (customer) {
            res.json(customer);
        } else {
            return res.status(404).json({ message: 'No existe el DNI en el Sistema' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateCustomerById = async(req, res) => {
    const { customerId } = req.params;
    const {
        name,
        typeDocument,
        document,
        representanteLegal,
        documentoRepresentante,
        cellphone,
        email,
        address
    } = req.body;
    try {
        const updateCustomer = await Customer.findByIdAndUpdate(customerId, {
            name,
            typeDocument,
            document,
            representanteLegal,
            documentoRepresentante,
            cellphone,
            email,
            address
        });
        if (updateCustomer) {
            res.json({ message: 'Cliente actualizado con éxito' });
        } else {
            res.status(404).json({ messsage: 'No existe Cliente a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteCustomerById = async(req, res) => {
    const { customerId } = req.params;
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(customerId);
        if (deletedCustomer) {
            res.json({ message: 'Cliente eliminado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe Cliente a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}