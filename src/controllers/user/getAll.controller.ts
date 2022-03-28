import { Request, Response } from 'express';
import USER from '../../configs/database';
import { User } from '../../configs/interfaces';

const getAllUser = (req: Request, res: Response): Response | void => {
  const users:Array<User>  = JSON.parse(JSON.stringify(USER));

	users.forEach(item => {
		delete item.password
	});
	
	return res.status(200).json(users);
};

export default getAllUser;
