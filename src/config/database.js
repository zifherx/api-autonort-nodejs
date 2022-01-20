import mongoose from 'mongoose';
import config from './config';

// mongoose.connect(config.mongodbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(db => console.log(`DB ${db.connection.name} is connected`))
//     .catch(err => console.error(err));W

const connectDB = async() => {

    try {
        const con = await mongoose.connect(config.mongodbURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log('DB', con.connection.name, 'is connected on port:', con.connection.port);
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;