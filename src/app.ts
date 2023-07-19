import express, { Express } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { handleExceptions } from './middlewares/handleExceptions';

dotenv.config({ path: path.resolve() + '/.env' });

import userRoutes from './routes/userRoutes';
import recipeRoutes from './routes/recipeRoutes';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.use(handleExceptions);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/recipes', recipeRoutes);
  }
}

export default new App().app;
