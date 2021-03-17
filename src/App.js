import Express from 'express';
import Router from './Router';

import './database/connectMongoose.database';

class App {
  constructor() {
    this.server = Express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(Express.json());
  }

  routes() {
    this.server.use(Router);
  }
}

export default new App();
