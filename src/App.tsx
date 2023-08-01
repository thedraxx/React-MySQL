import './App.css'
import { useEffect, useState } from 'react'
import { Cliente, IUsuarios } from './interface/iUsuarios'
import { Input, ShowData } from './components'
import { Box } from '@chakra-ui/react'

function App() {
  const [usuarios, setUsuarios] = useState<Cliente[] | []>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsuarios()
  }, [])

  const getUsuarios = async () => {
    try {
      setIsLoading(false);
      const resp = await fetch('http://localhost:8000/api/usuarios/')
      const data: IUsuarios = await resp.json()
      setUsuarios(data.cliente);

    } catch (error) {
      console.log(error)
      return;
    }
  }


  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }

  return (
    <Box
      w="100%"
      h="100vh"
      display={"flex"}
      flexDirection={"column"}
      flex={1}
    >
      <Input />
      <ShowData
        usuarios={usuarios}
      />
    </Box>
  )
}

export default App
