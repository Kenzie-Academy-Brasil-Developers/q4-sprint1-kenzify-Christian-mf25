type UserDB = Array<User>;
type ExpiresIN = string | number;
type envType = string | undefined;


interface JWTConfig {
  secretKey: string;
  expiresIn: ExpiresIN;
}

interface PlayList {
  title: string;
  durantion: string;
  releasedDate: Date;
  listenedByMe: number;
  genres: Array<string>;
}

interface User {
  id: string;
  username: string;
  password?: any;
  playlist: Object;
}

export { User, PlayList, UserDB, JWTConfig };
