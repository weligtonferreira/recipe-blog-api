import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve() + '/.env' });

class App {
  app: Express;

  constructor() {
    this.app = express();
  }
}

export default new App().app;
