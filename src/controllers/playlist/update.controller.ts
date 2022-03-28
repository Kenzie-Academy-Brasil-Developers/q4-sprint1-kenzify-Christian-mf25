import { Response, Request } from 'express';

import USER from '../../configs/database';
import { putPlaylistServices } from '../../services';

const updatePlaylistController = (req: Request, res: Response): Response | void => {
  const { userDecoded, validated } = req;
  const user: any = USER.find((item) => item.username === userDecoded.user.username);

  try {
    const query = req.query;
    const response = putPlaylistServices(validated, req, user, query);
    return res.status(200).json(response);
  } catch (e) {
    return res.json({ message: 'artist or music does not exist' });
  }
};

export default updatePlaylistController;
