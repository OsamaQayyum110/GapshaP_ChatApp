import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));

    if (user) history.push("/chatpage");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        textAlign="center"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          textAlign="center"
          justifyContent="center"
          fontSize={"4xl"}
          fontFamily={"Work sans"}
          color={"black"}
        >
          Gap-shaP
        </Text>
      </Box>

      <Box
        bg="white"
        textAlign="center"
        p={4}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
