import ModuleUser from '../module/user.module';
import History from './history.service';

class User {
  async create(request, response) {
    const { name, email, password } = request.body;
    const existsUser = await ModuleUser.findOne({
      email,
    });

    if (!(await existsUser)) {
      History.saveHistory('User', '/users', 400, 'User.create');
      return response.json({ Error: 'The user exists' });
    }

    const instaceModulerUser = new ModuleUser({
      name,
      email,
      password,
    });
    await instaceModulerUser.save((err, object) => {
      if (err) {
        History.saveHistory('User', '/users', 400, 'User.create');
        return response.json({ Error: 'Does not possible to create user' });
      }
    });

    History.saveHistory('User', '/users', response.statusCode, 'User.create');
    return response.json(instaceModulerUser);
  }
}

export default new User();
