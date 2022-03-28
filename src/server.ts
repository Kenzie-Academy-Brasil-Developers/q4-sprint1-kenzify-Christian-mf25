import * as dotenv from 'dotenv';

import app from './app';

dotenv.config();
const port: string | undefined = process.env.RUN_PORT ?? '3000';

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
