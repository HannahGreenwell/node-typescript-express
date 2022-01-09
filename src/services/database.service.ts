// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { games?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDatabase() {
  dotenv.config();

  const connectionString = process.env.DB_CONN_STRING;
  const databaseName = process.env.DB_NAME;
  const gamesCollectionName = process.env.GAMES_COLLECTION_NAME;

  if (!connectionString || !databaseName || !gamesCollectionName) {
    throw new Error("database configuration not found");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);

  await client.connect();

  const db: mongoDB.Db = client.db(databaseName);

  const gamesCollection: mongoDB.Collection =
    db.collection(gamesCollectionName);

  collections.games = gamesCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`
  );
}
