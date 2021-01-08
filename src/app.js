import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import roleRoutes from './routes/roles.routes'
import vehicleRoutes from './routes/vehicle.routes'
import sellerRoutes from './routes/seller.routes'
import campaignRoutes from './routes/campaign.routes'
import propsRoutes from './routes/props.routes'
import customerRoutes from './routes/customer.routes'
import financingRoutes from './routes/financing.routes'
import saleRoutes from './routes/sale.routes'
import recordRoutes from './routes/record.routes'
import path from 'path';
import "regenerator-runtime/runtime";
import { createRoles } from './libs/initialSetup'

const app = express();

createRoles();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/campaign', campaignRoutes);
app.use('/api/props', propsRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/financing', financingRoutes);
app.use('/api/sale', saleRoutes);
app.use('/api/records', recordRoutes);



export default app;