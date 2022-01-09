import express from "express";
import * as usersController from "../controllers/users.controller";

export const usersRouter = express.Router();

usersRouter.get("/", usersController.getUsers);

usersRouter.post("/", usersController.createUser);

usersRouter.get("/:id", usersController.getUser);

usersRouter.put("/:id", usersController.updateUser);

usersRouter.patch("/:id", usersController.patchUser);

usersRouter.delete("/:id", usersController.deleteUser);
