import { NextFunction, Request, Response } from 'express';
import USER from '../../configs/database';

const verifyUserExists = (req: Request, res: Response, next: NextFunction): Response | void => {
  const username = req.body.username;
  const exists = USER.find((item) => item.username === username);

  if (exists) {
    return res.status(422).json({ message: 'You can not use this username.' });
  }

	return next()
};

export default verifyUserExists;
