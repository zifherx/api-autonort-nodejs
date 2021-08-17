import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'
import routes from "./routes"
import * as initData from './libs/initialSetup'

const app = express();

initData.createRoles();
initData.createUserAdmin();
initData.createConfigAnios();
initData.createConfigColor();
initData.createConfigChasis();
initData.createConfigMarca();
initData.createConfigBanco();
initData.createConfigFinanciamiento();
initData.createConfigModelo();
initData.createConfigSectorista();
initData.createConfigCondicion();
initData.createConfigSituacion();
initData.createConfigSucursal();
initData.createConfigSustento();
initData.createConfigUbicacion();
initData.createConfigStatusFile();

//Settings
app.set('port', Number(process.env.PORT) || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api', routes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;