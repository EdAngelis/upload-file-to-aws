import "dotenv/config";

const environment = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI || "mongodb://127.0.0.1:27017/",
      db_name: process.env.DB_NAME || "starter",
    },
  },
  production: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI,
      db_name: process.env.DB_NAME || "starter",
    },
  },
  test: {},
};

export default config[environment];
