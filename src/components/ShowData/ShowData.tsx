import { Box, Button, Text } from '@chakra-ui/react';
import { Cliente } from '../../interface/iUsuarios';


interface Props {
    usuarios: Cliente[];
}

export const ShowData = ({ usuarios }: Props) => {

    const deleteClienteById = async (id: number) => {
        console.log(id)
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