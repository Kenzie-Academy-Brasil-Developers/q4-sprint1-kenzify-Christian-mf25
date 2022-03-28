import dotenv from 'dotenv';

import { JWTConfig } from "./interfaces";

dotenv.config();

const config: JWTConfig = {
	secretKey: process.env.SECRET_KEY,
	expiresIn: process.env.EXPIRES_IN ?? '1h',
}

export default config;
