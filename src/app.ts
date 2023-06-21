import express, { Express } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

dotenv.config({ path: path.resolve() + '/.env' });

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded());
  }
}

export default new App().app;
