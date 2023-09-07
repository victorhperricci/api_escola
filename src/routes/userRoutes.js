import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);

router.post('/', UserController.create);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
 em cada controller até 5 métodos
index -> lista todos
show -> lista um
create -> cria
update -> altera
delete -> deleta
*/
