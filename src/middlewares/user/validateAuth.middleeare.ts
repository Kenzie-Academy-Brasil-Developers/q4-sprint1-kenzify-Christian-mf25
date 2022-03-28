import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../configs';

const validateAuth = (req: Request, res: Response, next: NextFunction): Response | void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'missing header authorization.' });
  }

  jwt.verify(token, config.secretKey, (e, decoded) => {
    if (e) {
      return res.status(401).json({ error: e.message });
    }
    req.userDecoded = decoded as any;
    return next();
  });
};

export default validateAuth;
