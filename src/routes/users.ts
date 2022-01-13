import express from "express";
import * as UsersController from "../controllers/users";
import * as UsersMiddleware from "../middleware/users";

export const usersRouter = express.Router();

usersRouter.get("/", UsersController.getUsers);

usersRouter.post(
  "/",
  UsersMiddleware.validateRequiredFields,
  UsersMiddleware.validateUniqueEmail,
  UsersController.createUser
);

usersRouter.get(
  "/:id",
  UsersMiddleware.extractUserId,
  UsersMiddleware.validateUserExists,
  UsersController.getUser
);

usersRouter.put(
  "/:id",
  UsersMiddleware.extractUserId,
  UsersMiddleware.validateUserExists,
  UsersMiddleware.validateRequiredFields,
  UsersMiddleware.validateCorrectEmail,
  UsersController.updateUser
);

usersRouter.patch(
  "/:id",
  UsersMiddleware.extractUserId,
  UsersMiddleware.validateUserExists,
  UsersMiddleware.validateCorrectEmailPatch,
  UsersController.patchUser
);

usersRouter.delete("/:id", UsersController.deleteUser);
