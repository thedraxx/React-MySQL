import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Text } from '@chakra-ui/react';
import { Cliente } from '../../interface/iUsuarios';
import { useState } from 'react';

interface Props {
    usuarios: Cliente[];
}

export const ShowData = ({ usuarios }: Props) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const [isError, setIsError] = useState(false)

    const deleteClienteById = async (id: number) => {
        setIsDeleted(false)
        try {
            const response = await fetch(`http://localhost:8000/api/usuarios/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Cliente eliminado');
                setIsDeleted(true)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                console.log('Error al eliminar cliente');
                setIsError(true)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box
            w="100%"
            border="1px solid black"
            borderRadius="10px"
            p={2}
            m={2}
            overflowX="auto"
        >
            {
                isDeleted && (
                    <Alert
                        status="success"
                        variant='subtle'
                        pt={5}
                        pb={5}
                        mt={2}
                        mb={2}
                    >
                        <AlertIcon />
                        <AlertTitle>Registro eliminado!</AlertTitle>
                        <AlertDescription>Refrescando en breve...</AlertDescription>
                    </Alert>
                )
            }
            {
                isError && (
                    <Alert
                        status="error"
                        variant='subtle'
                        pt={5}
                        pb={5}
                        mt={2}
                        mb={2}
                    >
                        <AlertIcon />
                        <AlertTitle>Error al eliminar registro!</AlertTitle>
                        <AlertDescription>Refrescando en breve...</AlertDescription>
                    </Alert>
                )
            }
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>id</th>
                        <th style={tableHeaderStyle}>nombre</th>
                        <th style={tableHeaderStyle}>apellido</th>
                        <th style={tableHeaderStyle}>email</th>
                        <th style={tableHeaderStyle}>telefono</th>
                        <th style={tableHeaderStyle}>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id_cli}>
                            <td style={tableCellStyle}>{usuario.id_cli}</td>
                            <td style={tableCellStyle}>{usuario.nom_cli}</td>
                            <td style={tableCellStyle}>{usuario.ape_cli}</td>
                            <td style={tableCellStyle}>{usuario.email_cli}</td>
                            <td style={tableCellStyle}>{usuario.tel_cli}</td>
                            <td style={tableCellStyle}>
                                <Button
                                    backgroundColor={"transparent"}
                                    size="sm"
                                    onClick={() => {
                                        deleteClienteById(usuario.id_cli);
                                    }}
                                >
                                    x
                                </Button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
};

const tableHeaderStyle = {
    background: '#f2f2f2',
    fontWeight: 'bold',
    padding: '8px',
    border: '1px solid black',
};

const tableCellStyle = {
    padding: '8px',
    border: '1px solid black',
};