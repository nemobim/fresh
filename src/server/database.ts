import { MongoClient } from "mongodb";

//DB에 설정한 환경변수를 가져온다.
if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL is not in .env file");
}
const mongo_url: string = process.env.MONGO_URL;
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(mongo_url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(mongo_url).connect();
}

export { connectDB };
