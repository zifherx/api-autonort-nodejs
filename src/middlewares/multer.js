import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import path from "path";
import multerS3 from "multer-s3";
import "dotenv/config";

const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY2,
        secretAccessKey: process.env.AWS_SECRET_KEY2,
    },
});

// console.log("AWS:", client);

const storage = multerS3({
    s3: client,
    bucket: process.env.AWS_BUCKET,
    metadata: (req, file, cb) => {
        // console.log(file);
        cb(null, { fieldName: file.fieldname });
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
        // console.log(file);
        // let name = file.originalname.split('.')[0];
        // let campo = name + path.extname(file.originalname);
        // let campo = nanoid() + path.extname(file.originalname);
        // cb(null, campo);
        let alternativo = new Date().getTime() + path.extname(file.originalname);
        cb(null, alternativo);
    },
});

const upload = multer({ storage });

export default upload;
