// External Dependencies

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game";

// Global Config

export const gamesRouter = express.Router();

gamesRouter.use(express.json());

// GET

gamesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const games = await collections.games?.find({}).toArray();
    res.status(200).send(games);
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});

// POST

// PUT

// DELETE
