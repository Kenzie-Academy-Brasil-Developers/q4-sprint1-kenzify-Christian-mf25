import bcrypt from 'bcrypt';
import JsonWebToken from 'jsonwebtoken';

import config from '../configs';
import USER from '../configs/database';
import { User } from '../configs/interfaces';

const loginService = async (password: string, { username }: User): Promise<string | undefined> => {
  const user: User | undefined = USER.find((item) => item.username === username);

  if (!user) {
    return undefined;
  }

  const hasedPassword: boolean = await bcrypt.compare(password, user.password);

  if (!hasedPassword) {
    return undefined;
  }

  const token = JsonWebToken.sign({ user }, config.secretKey, { expiresIn: config.expiresIn });

  return token;
};

export default loginService;
