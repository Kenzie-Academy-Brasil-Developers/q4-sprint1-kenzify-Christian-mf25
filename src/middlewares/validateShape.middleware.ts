import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

import checkBodyLenServices from '../services/checkBodyLen.services';

const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const key = req.query;

    if (Object.keys(key).length > 0) {
      return next();
    }

    const body = checkBodyLenServices(req.body);
    try {
      const validated = await shape.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.playlistName = body;
      req.validated = validated;
      return next();
    } catch (e: any) {
      return res.status(400).json({ error: e.errors });
    }
  };

export default validateShape;
