import { Request, Response } from 'express';
import {ParsedQs} from 'qs';

import { PlayList } from '../configs/interfaces';
import makeTitle from '../utils/title.utils';

const putPlaylistServices = (
  validated: PlayList,
  req: Request,
  user: any,
  query: ParsedQs,
): Response | void => {
  if (Object.keys(query).length > 0) {
    const { artist, song } = req.query;
    const music = user.playlist[String(artist)][0];

    if (music.title === makeTitle(String(song))) {
      user.playlist[String(artist)][0].listenedByMe += 1;
    }
    return music;
  }

  const fullPlaylist = req.body;
  const artistName = String(Object.keys(fullPlaylist));

  for (const key in fullPlaylist[artistName][0]) {
    delete fullPlaylist[artistName][0][key];
  }

  fullPlaylist[artistName][0] = validated;
  fullPlaylist[artistName][0].title = makeTitle(validated.title);
  user.playlist = Object.assign({}, user.playlist, fullPlaylist);

  return fullPlaylist;
};

export default putPlaylistServices;
