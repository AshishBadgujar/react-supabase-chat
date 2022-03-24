import { ChakraProvider, Box, theme, Flex, Input, InputGroup, Container, InputLeftElement } from "@chakra-ui/react";
import { useState } from 'react'
import { FaLock } from "react-icons/fa";
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
        <div className="unlock">
          <Container maxW='container.sm'>
            <form onSubmit={(e) => authenticate(e)}>
              <Flex
                flexDirection="column"
                height="100vh"
                px="5"
                py="10"
                justifyContent="center"
                alignItems="center"
              >
                <InputGroup my="8">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<FaLock color="gray.300" />}
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
                <button type="submit"></button>
              </Flex>
            </form>
          </Container>
        </div>
      }
    </ChakraProvider>
  );
}

export default App;
