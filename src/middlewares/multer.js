import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config/config.js";

const s3 = new S3Client({
  region: config.aws.region,
  credentials: fromEnv(),
});

export const uploadFile = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.aws.s3BucketName,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const fileName = `${Date.now()}_${file.originalname}`;
      cb(null, fileName);
    },
  }),
});
