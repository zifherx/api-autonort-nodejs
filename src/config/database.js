import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log(`DB ${db.connection.name} is connected`))
    .catch(err => console.error(err))