import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'
import routes from "./routes"
import { createRoles, createUserAdmin } from './libs/initialSetup'

const app = express();

createRoles();
createUserAdmin();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
    res.json('Bienvenido Puto')
});
app.use('/api', routes);

//Static Files
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static(__dirname + '\\public'));

export default app;