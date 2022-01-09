/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { connectToDatabase } from "./services/database.service";
import { gamesRouter } from "./routes/games.router";

/**
 * App Variables
 */

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * App Configuration
 */

connectToDatabase()
  .then(() => {
    // app.use(helmet());
    app.use(cors());
    // app.use(express.json());

    // app.use("/api/menu/items", itemsRouter);
    app.use("/api/games", gamesRouter);

    app.use(errorHandler);
    app.use(notFoundHandler);

    /**
     * Server Activation
     */
    app.listen(PORT, () =>
      console.log(`server started at http://localhost:${PORT}`)
    );
  })
  .catch((error: Error) => {
    console.log("Database connection failed", error);
    process.exit();
  });
