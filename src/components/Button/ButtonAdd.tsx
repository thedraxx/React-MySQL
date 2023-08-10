import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ButtonAdd = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/add')
    }

    return (
        <Button
            position={"absolute"}
            bottom={0}
            right={0}
            w={"50px"}
            h={"50px"}
            borderRadius={"50%"}
            bg={"#237dc7"}
            color={"white"}
            _hover={{
                bg: "#2771ae"
            }}
            justifyContent={"center"}
            alignItems={"center"}
            justifyItems={"center"}
            justifySelf={"center"}
            shadow={
                "0px 0px 10px 0px rgba(0,0,0,0.75)"
            }
            onClick={redirect}
        >
            <Text
                fontSize={"30px"}
                fontWeight={"bold"}
            >
                +
            </Text>
        </Button>
    )
}
