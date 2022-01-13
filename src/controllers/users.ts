import express, { Request, Response } from "express";
// import argon2 from "argon2";
import UsersService from "../services/users";

export const createUser = async (req: Request, res: Response) => {
  // req.body.password = await argon2.hash(req.body.password);
  const userId = await UsersService.create(req.body);
  res.status(201).send({ id: userId });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await UsersService.list(100, 0);
  res.status(200).send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await UsersService.readById(req.params.id);
  res.status(200).send(user);
};

export const updateUser = async (req: Request, res: Response) => {
  // req.body.password = await argon2.hash(req.body.password);
  await UsersService.putById(req.params.id, req.body);
  res.sendStatus(204);
};

export const patchUser = async (req: Request, res: Response) => {
  // if (req.body.password) {
  //   req.body.password = await argon2.hash(req.body.password);
  // }
  await UsersService.patchById(req.params.id, req.body);
  res.sendStatus(204);
};

export const deleteUser = async (req: Request, res: Response) => {
  await UsersService.deleteById(req.params.id);
  res.sendStatus(204);
};
