import Router from 'express';
import { getClientes, getCliente, postCliente, putUsuario, deleteUsuario } from '../controllers/usuario';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', postCliente);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;