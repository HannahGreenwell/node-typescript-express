import express, { Request, Response, NextFunction } from "express";
import UsersService from "../services/users";

export const extractUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.id = req.params.id;
  next();
};

export const validateRequiredFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body?.email && req.body.password) {
    next();
  } else {
    res
      .status(400)
      .send({ error: "Missing required fields email and password" });
  }
};

export const validateUniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await UsersService.readByEmail(req.body.email);
  if (user) {
    res.status(400).send({ error: "User email already exists" });
  } else {
    next();
  }
};

export const validateCorrectEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await UsersService.readByEmail(req.body.email);
  if (user?.id === req.params.id) {
    next();
  } else {
    res.status(400).send({ error: "Invalid email" });
  }
};

export const validateCorrectEmailPatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body?.email) {
    await validateCorrectEmail(req, res, next);
  } else {
    next();
  }
};

export const validateUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await UsersService.readById(req.params.id);
  if (user) {
    next();
  } else {
    res.status(404).send({ error: "User not found" });
  }
};
