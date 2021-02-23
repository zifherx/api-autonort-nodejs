import Role from '../models/Role';
import User from '../models/User';

export const createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'Aministrador' }).save(),
            new Role({ name: 'Jefe-ADV' }).save(),
            new Role({ name: 'Jefe-Tunning' }).save(),
            new Role({ name: 'Jefe-Ventas' }).save(),
            new Role({ name: 'Usuario' }).save(),
            new Role({ name: 'Vendedor' }).save(),
        ]);

        console.log(values);

    } catch (err) {
        console.error(err);
    }
}

export const createUserAdmin = async() => {
    try {
        const master = await User.estimatedDocumentCount();
        if (master > 0) return;

        const usuarios = await Promise.all([
            new User({
                name: 'Fernando Rojas Quezada',
                username: 'frojasq',
                password: await User.encryptPassword('admin'),
                roles: 'Administrador',
                activo: 'Activo',
                sucursal: 'Trujillo'
            }).save()
        ]);
    } catch (err) {
        console.error(err);
    }
}