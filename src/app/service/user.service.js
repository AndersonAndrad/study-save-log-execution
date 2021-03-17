import ModuleUser from '../module/user.module';
import data from '../../database/connectMongoose.database';

class User {
  async create(request, response) {
    await ModuleUser.create({ name: 'ok' });

    return response.json('ok');
  }
}

export default new User();
