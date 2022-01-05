/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemsService from "./items.service";
import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemsService.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});

// GET items/:id
itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const item: Item = await ItemsService.find(id);
    if (item) {
      return res.status(200).json(item);
    }
    res.status(404).send("Item not found");
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});

// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;
    const newItem = await ItemsService.create(item);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});

// PUT items/:id
itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const item: BaseItem = req.body;
  try {
    const updatedItem = await ItemsService.update(id, item);
    if (updatedItem) {
      return res.status(200).send(updatedItem);
    }
    const newItem = await ItemsService.create(item);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});

// DELETE items/:id
itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    await ItemsService.remove(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send((error as Error)?.message);
  }
});
