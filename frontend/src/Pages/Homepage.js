import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "../Component/Authentication/SignUp";
import Login from "../Component/Authentication/Login";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        p={3}
        justifyContent={"center"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        m={"80px 0px 6px 0px"}
        bgGradient={"linear(to-r, red.300, yellow.400, red.200)"}
      >
        <Text
          fontFamily={"cursive"}
          fontSize="x-large"
          bgGradient="linear(to-l, blue.600, red.600)"
          bgClip="text"
        >
          Chat App
        </Text>
      </Box>
      <Box
        d="flex"
        p={3}
        justifyContent={"center"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        m={"0px 0px 6px 0px"}
        bgGradient={"linear(to-r, red.300, yellow.400, red.300)"}
        // bg={"orange"}
      >
        <Tabs variant="soft-rounded" colorScheme={"whiteAlpha"}>
          <TabList mb="1em">
            <Tab width={"50%"} textColor={"black"}>
              Login
            </Tab>
            <Tab width={"50%"} textColor={"black"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
