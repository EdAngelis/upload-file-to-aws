import "dotenv/config";

const environment = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI || "mongodb://127.0.0.1:27017/",
      db_name: process.env.DB_NAME || "image",
    },
    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      s3BucketName: process.env.AWS_S3_BUCKET_NAME,
    },
  },
  production: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI,
      db_name: process.env.DB_NAME || "test",
    },
    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      s3BucketName: process.env.AWS_S3_BUCKET_NAME,
    },
  },
  test: {},
};

export default config[environment];
