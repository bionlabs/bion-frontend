"use client";

import React, { Fragment } from "react";
import {
  Container,
  Text,
  Flex,
  Button,
  ButtonGroup,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { publicMenu, userMenu } from "@/configs/menu";
import { IoSearch } from "react-icons/io5";
import MainButton from "./MainButton";
import styled from "@emotion/styled";

const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Wrapper boxShadow={{ lg: "md" }}>
        <Container maxW="100%" px={4} py={3} bg="neutral.500" minH='60px'>
          <Flex w="100%" justify="space-between" align="center">
            <HStack align="center" spacing={4}>
              <Logo />
              <Box>
                <InputGroup>
                  <Input
                    placeholder="Search BUIDLs, Hackathons..."
                    width={{ base: "auto", lg: "300px" }}
                    variant="filled"
                    focusBorderColor="neutral.400"
                    size="sm"
                    borderRadius={{ base: "md", lg: "md" }}
                    _placeholder={{ fontSize: 14 }}
                  />
                  <InputRightElement color="gray.300" opacity="0.5" w={8} h={8}>
                    <IoSearch />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </HStack>
            <HStack align="center" spacing={3}>
              <ButtonGroup>
                {userMenu.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    fontSize={14}
                    px={3}
                    h={8}
                    isDisabled={item.disabled}
                    leftIcon={
                      item.icon ? (
                        <Icon as={item.icon} w="16px" h="16px" />
                      ) : undefined
                    }
                  >
                    {item.title}
                  </Button>
                ))}
              </ButtonGroup>
              <Flex>
                <MainButton />
              </Flex>
            </HStack>
          </Flex>
        </Container>
        <Container maxW="100%" px={4} py={2} bg="neutral.500">
          <HStack align="center" spacing={3}>
            <ButtonGroup>
              {publicMenu.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  fontSize={14}
                  px={3}
                  h={8}
                  isDisabled={item.disabled}
                  leftIcon={
                    item.icon ? (
                      <Icon as={item.icon} w="16px" h="16px" />
                    ) : undefined
                  }
                >
                  {item.title}
                </Button>
              ))}
            </ButtonGroup>
          </HStack>
        </Container>
      </Wrapper>
      <Inner>{children}</Inner>
    </Box>
  );
};

const Wrapper = styled(Box)`
  position: fixed;
  z-index: 500;
  width: 100%;
  top: 0;
  left: 0;
  height: 135px;
`
const Inner = styled(Box)`
  padding-top: 135px;
`

export default Menu;