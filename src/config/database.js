import mongoose from "mongoose";
import config from "./config";

// mongoose.connect(config.mongodbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(db => console.log(`DB ${db.connection.name} is connected`))
//     .catch(err => console.error(err));W

// async function connectSCIDB() {
//     try {
//         const con = await mongoose.connect(config.mongoSCIdbURL);

//         console.log("DB", con.connection.name, "is connected on port:", con.connection.port);
//     } catch (err) {
//         console.log(err);
//         process.exit(0);
//     }
// }

export const connectSCIDB = mongoose.createConnection(config.mongoSCIdbURL, { maxPoolSize: 10 });
export const connectSGLDB = mongoose.createConnection(config.mongoSGLdbURL, { maxPoolSize: 10 });

// export const connectSGLDB = async () => {
//     try {
//         const conn = await mongoose.createConnection(config.mongoSGLdbURL).asPromise()
//         console.log(`DB ${conn.db.databaseName} is `, conn.readyState);
//         return conn;
//     } catch (err) {
//         console.log(err);
//     }
// };

// export { connectSCIDB };
