import Router from 'express';
import { getClientes, getCliente, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;