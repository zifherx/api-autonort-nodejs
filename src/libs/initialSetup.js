import Role from '../models/Role'

export const createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'salesman' }).save(),
            new Role({ name: 'chief-sales' }).save(),
            new Role({ name: 'chief-adv' }).save()
        ]);

        console.log(values);

    } catch (err) {
        console.error(err);
    }
}