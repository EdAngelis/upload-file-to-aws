import "dotenv/config";

const environment = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI || "mongodb://localhost:27017/",
      db_name: process.env.DB_NAME || "",
    },
  },
  production: {
    port: process.env.PORT || 3001,
    db: {
      db_uri: process.env.DB_URI,
      db_name: process.env.DB_NAME || "",
    },
  },
  test: {},
};

export default config[environment];
