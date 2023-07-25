import Router from 'express';
import { getClientes, getCliente, postCliente, putCliente, deleteCliente } from '../controllers/cliente';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', postCliente);
router.put('/:id', putCliente);
router.delete('/:id', deleteCliente);

export default router;