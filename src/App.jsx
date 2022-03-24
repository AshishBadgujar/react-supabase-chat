import { ChakraProvider, Box, theme, Flex, Text, Input, InputGroup, Container, InputLeftElement } from "@chakra-ui/react";
import { useState } from 'react'
import { AiOutlineLogin, AiFillLock } from "react-icons/ai";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./context/appContext";

function App() {
  const joiningPw = import.meta.env.VITE_PW;
  const { username, setUsername } = useAppContext();
  const [isAuth, setIsAuth] = useState(false)
  const [pw, setPw] = useState('')
  const authenticate = (e) => {
    e.preventDefault()
    if (pw === joiningPw) {
      setIsAuth(true)
    } else {
      setPw('')
      alert("Wrong password")
      setIsAuth(false)
    }
  }
  return (
    <ChakraProvider theme={theme}>
      {isAuth ?
        <AppContextProvider>
          <Box bg="gray.100">
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <Router>
              <Switch>
                <Route exact path="/">
                  <Header username={username} setUsername={setUsername} />
                  <Chat username={username} />
                  <Footer username={username} />
                </Route>
                <Route>Not found</Route>
              </Switch>
            </Router>
          </Box>
        </AppContextProvider>
        :
        <Container maxW='container.sm'>
          <Flex
            flexDirection="column"
            height="100vh"
            px="5"
            py="10"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize='4xl' color="teal.400">Welcome</Text>
            <InputGroup my="8">
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                children={<AiFillLock color="gray.300" />}
              />
              <Input
                required
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPw(e.target.value)}
                value={pw}
                bg="white"
                border="none"
                autoFocus
              />
            </InputGroup>
            <AiOutlineLogin
              color="#38b2ac"
              size="40px"
              onClick={(e) => authenticate(e)}
            />
          </Flex>
        </Container>
      }
    </ChakraProvider>
  );
}

export default App;
