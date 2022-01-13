import express from "express";
import { itemsRouter } from "./items";
import { usersRouter } from "./users";

export const router = express.Router();

router.use("/users", usersRouter);
router.use("/menu/items", itemsRouter);
