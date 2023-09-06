import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);

router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
 em cada controller até 5 métodos
index -> lista todos
show -> lista um
create -> cria
update -> altera
delete -> deleta
*/
