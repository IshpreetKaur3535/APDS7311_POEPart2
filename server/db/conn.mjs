import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();


const variable = process.env.MONGO_CONN_STRING
console.log(variable);
//console.log(connectionString);
//const connectionString = process.env.ATLAS_URI;
//console.log(connectionString);

const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("POEPart2");



  export default db;