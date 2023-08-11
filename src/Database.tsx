import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Database = () => {

    const [inputs, setInputs] = useState({
        nom_cli: "",
        ape_cli: "",
        email_cli: "",
        tel_cli: "",
        dni_cli: "",
        direc_cli: "",
    })

    const [error, seterror] = useState(false)

    const navigate = useNavigate()

    const addDataOnDB = async () => {
        try {
            const sendData = await fetch("http://localhost:8000/api/usuarios/", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            })

            if (sendData.status === 201) {
                navigate("/")
            } else {
                console.log("No se pudo enviar los datos")
                seterror(true)

                setTimeout(() => {
                    seterror(false)
                }, 2000);
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    return (
        <Box
            w={"100%"}
            h={"100vh"}
            p={"20px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            justifyItems={"center"}
            justifySelf={"center"}
        >
            {
                error && (
                    <Box
                        p={"20px"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                    >
                        <Text
                            color={"red"}
                            fontSize={"20px"}
                            fontWeight={"bold"}
                            mb={"20px"}
                        >
                            A ocurrido un error al enviar los datos
                        </Text>
                    </Box>
                )
            }
            <Text
                fontSize={"30px"}
                fontWeight={"bold"}
                mb={"20px"}
            >
                Inserta en la Base de Datos
            </Text>
            <Input
                type="text"
                placeholder="Nombre..."
                value={inputs.nom_cli}
                onChange={(e) => setInputs({ ...inputs, nom_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Input
                type="text"
                placeholder="Apellido..."
                value={inputs.ape_cli}
                onChange={(e) => setInputs({ ...inputs, ape_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Input
                type="number"
                placeholder="Dni..."
                value={inputs.dni_cli}
                onChange={(e) => setInputs({ ...inputs, dni_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Input
                type="text"
                placeholder="Direccion..."
                value={inputs.direc_cli}
                onChange={(e) => setInputs({ ...inputs, direc_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Input
                type="text"
                placeholder="Email..."
                value={inputs.email_cli}
                onChange={(e) => setInputs({ ...inputs, email_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Input
                type="text"
                placeholder="Telefono..."
                value={inputs.tel_cli}
                onChange={(e) => setInputs({ ...inputs, tel_cli: e.target.value })}
                w={"100%"}
                h={"50px"}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
                _focus={{
                    border: "1px solid #237dc7"
                }}
                _hover={{
                    border: "1px solid #237dc7"
                }}
                mb={"10px"}
            />

            <Box>
                <Button
                    mr={"10px"}
                    onClick={() => addDataOnDB()}
                >
                    Insertar
                </Button>

                <Button
                    mr={"10px"}
                    onClick={() => navigate("/")}
                >
                    Cancelar
                </Button>
            </Box>
        </Box>
    )
}

export default Database