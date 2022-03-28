import { Request, Response, NextFunction } from 'express';
import USER from '../../configs/database';

const permissionMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { userDecoded } = req;
  const user = USER.find((item) => item.username === userDecoded.user.username);
  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }

	req.user = userDecoded.user.username
	return next()
};

export default permissionMiddleware;
