import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

export const connectDB = async (): Promise<MongoClient> => {
  if (!client) {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not in .env file");
    }

    const mongo_url: string = process.env.MONGO_URL;
    client = await new MongoClient(mongo_url).connect();
  }

  return client;
};
