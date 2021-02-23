import Customer from '../models/Customer'

export const createCustomer = async(req, res) => {
    try {
        const { name, document, cellphone, email, address } = req.body;
        const newCustomer = new Customer({ name, document, cellphone, email, address });
        const customerSaved = await newCustomer.save();
        res.json({ message: 'Cliente creado con éxito' });
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find();
        res.send(customers)
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getCustomerById = async(req, res) => {
    try {
        const { customerId } = req.params;
        const customer = await Customer.findById(customerId);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(201).json({ messsage: 'No existe cliente a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(409).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getCustomerByDni = async(req, res) => {
    try {
        const { customerDni } = req.body;
        const customer = await Customer.findOne({ document: customerDni });
        //console.log(customer);
        if (customer) {
            //console.log(customer);
            res.send(customer);
        } else {
            return res.status(201).json({ message: 'No existe el DNI en el Sistema' })
        }
    } catch (e) {
        console.log(e);
        return res.status(403).json({ message: 'No Autorizado' });
    }
}

export const updateCustomerById = async(req, res) => {
    try {
        const { customerId } = req.params;
        const updateCustomer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true });
        if (updateCustomer) {
            res.json({ message: 'Cliente actualizado con éxito' });
        } else {
            res.status(201).json({ messsage: 'No existe cliente a actualizar' });
        }
    } catch (e) {
        console.log(e);
        res.status(409).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const deleteCustomerById = async(req, res) => {
    try {
        const { customerId } = req.params;
        const deletedCustomer = await Customer.findByIdAndDelete(customerId);
        if (deletedCustomer) {
            res.json({ message: 'Cliente eliminado con éxito' });
        } else {
            res.status(401).json({ messsage: 'Cliente no Existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(409).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}