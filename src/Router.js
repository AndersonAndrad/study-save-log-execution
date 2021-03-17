import { Router } from 'express';

// controllers
import UserService from './app/service/user.service';

const router = new Router();

// routes
router.get('/', (request, response) => {
  return response.json({ server: 'is online' });
});

router.post('/user', UserService.create);

export default router;
