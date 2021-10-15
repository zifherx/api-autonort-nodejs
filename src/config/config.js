import { config } from 'dotenv';
config();

export default {
    SECRET: 'ADV_API',
    // mongodbURL: process.env.MONGO_URI
    mongodbURL: process.env.MONGO_URI_PUBLIC
}