import { Request, Response } from 'express';
import USER from '../../configs/database';
import { PlayList } from '../../configs/interfaces';
import makeTitle from '../../utils/title.utils';

const deletePlaylistController = (req: Request, res: Response): Response | void => {
  const userDecoded = req.userDecoded.user;
  const user: any = USER.find((item) => userDecoded.username === item.username);
  try {
    const { artist, song } = req.query;
    const music: PlayList = user.playlist[String(artist)][0];

    for (const keys in user.playlist) {
      if (artist === keys && music.title === makeTitle(String(song))) {
        delete user.playlist[String(artist)];
				return res .status(204).json()
      }
    }
  } catch (e) {
		return res.status(404).json({error: 'artist or song not found'})
	}

};

export default deletePlaylistController;
