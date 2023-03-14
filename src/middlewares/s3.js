import { config } from "dotenv";
config();

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const AWS_REGION3 = process.env.AWS_REGION3;
const AWS_BUCKET3 = process.env.AWS_BUCKET3;
const AWS_ACCESS_KEY3 = process.env.AWS_ACCESS_KEY3;
const AWS_SECRET_KEY3 = process.env.AWS_SECRET_KEY3;


const client = new S3Client({    
    region: AWS_REGION3,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY3,
        secretAccessKey: AWS_SECRET_KEY3
    }
});

const uploadFile = async(pathFile) => {
    const command = new PutObjectCommand(pathFile);
    return await client.send(command);
}

export { uploadFile};
