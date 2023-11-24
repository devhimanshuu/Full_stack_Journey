const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank";

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(`error connecting to database  + ${err}`);
  } finally {
    await client.close();
  }
};
main();
