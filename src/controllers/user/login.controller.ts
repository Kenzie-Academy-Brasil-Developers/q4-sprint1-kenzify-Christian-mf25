import { Request, Response } from 'express';

import { loginService } from '../../services';

const loginController = async (req: Request, res: Response): Promise<Response> => {
  const token = await loginService(req.body.password, req.validated);

  if (!token) {
    res.status(401).json({ message: 'Wrong credentials. Try again!' });
  }

  return res.status(200).json({ token });
};

export default loginController;
