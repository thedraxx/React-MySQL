import { Request, Response } from 'express';
import Cliente from '../models/cliente';

export const getClientes = async (req: Request, res: Response) => {
    
    const cliente = await Cliente.findAll();
    
    res.json({
        ok: true,
        msg: 'getClientes',
        cliente
    });
}

export const getCliente = async (req: Request, res: Response) => {

    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return res.status(404).json({
            ok: false,
            msg: 'No existe un cliente con ese id'
        });
    }

    res.json({
        ok: true,
        msg: 'getCliente',
        id,
        cliente
    });
}


export const postCliente= async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const usuario = Cliente.build(body);
        await usuario.save();

        res.status(201).json({
            ok: true,
            msg: 'postCliente',
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        ok: true,
        msg: 'putUsuario',
        body,
        id
    });
}


export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'deleteUsuario',
        id
    });
}