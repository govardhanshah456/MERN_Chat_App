import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
const SignUp = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [Pic, setPic] = useState();
  const [Show, setShow] = useState();
  const handleClick = () => setShow(!Show);
  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" color="black" isRequired>
        <FormLabel>Name:</FormLabel>
        <Input
          color="black"
          _placeholder={{ color: "#000000" }}
          placeholder="Enter Your Name Here"
          onClick={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" color="black" isRequired>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          color="black"
          _placeholder={{ color: "#000000" }}
          placeholder="Enter Your Email Here"
          onClick={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            color="black"
            _placeholder={{ color: "#000000" }}
            type={Show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="2.6rem">
            <Button h="2.15rem" bg="orange" size="sm" onClick={handleClick}>
              {Show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="fconfirm-password" color="black" isRequired>
        <FormLabel>Confirm Password:</FormLabel>
        <Input
          type="password"
          color="black"
          _placeholder={{ color: "#000000" }}
          placeholder="Rewrite It Again"
          onClick={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <FormControl id="pic" color="black" isRequired>
        <FormLabel>Upload a Pic:</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme={"orange"}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
