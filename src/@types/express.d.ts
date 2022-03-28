import { User } from '../../configs/interfaces';
import PlayList from '../configs/interfaces';
import { ParsedQs } from 'qs';


declare global {
  namespace Express {
    interface Request {
      validated: User;
      user: User;
      userDecoded: any;
      playlistName: PlayList;
      artist: object;
      song: object;
      artist: ParsedQs;
    }
  }
}
