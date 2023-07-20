import { Request, Response } from 'express';

export const getUsuarios = async (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'getUsuarios'
    });
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'getUsuario',
        id
    });
}


export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        ok: true,
        msg: 'postUsuario',
        body
    });
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