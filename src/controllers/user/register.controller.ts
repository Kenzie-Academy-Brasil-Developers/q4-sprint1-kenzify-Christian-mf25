import { Request, Response } from 'express';
import USER from '../../configs/database';

const registerUserController = (req: Request, res: Response): Response => {
  const newUser = { ...req.validated };
  newUser.playlist = {};

  const userToReturn = JSON.parse(JSON.stringify(newUser));
  delete userToReturn.password;

  USER.push(newUser);
  return res.status(201).json(userToReturn);
};

export default registerUserController;
