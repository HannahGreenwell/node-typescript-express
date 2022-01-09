import express, { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.status(200).send("GET users");
};

export const getUser = (req: Request, res: Response) => {
  res.status(200).send(`GET requested for id ${req.params.id}`);
};

export const createUser = (req: Request, res: Response) => {
  res.status(201).send("POST users");
};

export const updateUser = (req: Request, res: Response) => {
  res.status(201).send(`PUT requested for id ${req.params.id}`);
};

export const patchUser = (req: Request, res: Response) => {
  res.status(201).send(`PATCH requested for id ${req.params.id}`);
};

export const deleteUser = (req: Request, res: Response) => {
  res.status(204).send(`DELETE requested for id ${req.params.id}`);
};
