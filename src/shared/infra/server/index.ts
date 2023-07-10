import express from 'express';
import cors from 'cors';
import { Config } from '../../config/config';

(async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.listen(Config.SERVER_PORT, () => console.log(`Running server on http://localhost:${Config.SERVER_PORT}`));
  })();