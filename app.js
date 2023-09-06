import dotenv from 'dotenv';
import express from 'express';

// middlewares
import loginRequired from './src/middlewares/loginRequired';

// routes
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

// database
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', loginRequired, userRoutes);
    this.app.use('/tokens', tokenRoutes);
  }
}

export default new App().app;
