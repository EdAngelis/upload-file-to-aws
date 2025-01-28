import { MongoClient } from "mongodb";
import assert from "assert";
import config from "../config/config.js";

const uri = config.db.db_uri;

const client = new MongoClient(uri);

let db;

const connect = async () => {
  try {
    const conn = await client.connect();

    db = await conn.db(config.db.db_name);

    // Ensure the database name matches the expected name
    assert.strictEqual(config.db.db_name, db.databaseName);

    console.log(
      "Connected successfully to server to the database: ",
      db.databaseName
    );

    return db;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to the database");
  }
};

export default connect;
