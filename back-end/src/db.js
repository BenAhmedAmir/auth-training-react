import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  //specification for docker image instead localhost its mongodb
  client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db ca marche");
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
