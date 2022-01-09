import express from "express";
import { usersRouter } from "./users.routes";

export const router = express.Router();

router.use("/users", usersRouter);
