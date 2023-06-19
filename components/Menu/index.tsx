"use client";

import React, { Fragment } from "react";
import {
  Container,
  Flex,
  Button,
  ButtonGroup,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { publicMenu, userMenu } from "@/configs/menu";
import { IoSearch } from "react-icons/io5";
import MainButton from "./MainButton";
import styled from "@emotion/styled";
import { usePathname, useSearchParams } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";
import { HiOutlineMenu } from "react-icons/hi";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isDesktop } = useDevice();

  return (
    <Fragment>
      <Wrapper boxShadow={{ lg: "md" }} bg="neutral.500">
        <Container maxW="100%" px={4} py={3}>
          <Flex w="100%" justify="space-between" align="center">
            <HStack align="center" spacing={4}>
              <Logo />
              {isDesktop ? (
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
                    <InputRightElement
                      color="gray.300"
                      opacity="0.5"
                      w={8}
                      h={8}
                    >
                      <IoSearch />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              ): (
                <IconButton
                  aria-label="Search"
                  icon={<IoSearch/>}
                  variant="ghost"
                />
              )
            }
            </HStack>
            <HStack align="center" spacing={1} minH="60px">
              {isDesktop ? (
              userMenu.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  fontSize={14}
                  isDisabled={item.disabled}
                  px={2}
                  py={2}
                  h="auto"
                  alignItems="center"
                  leftIcon={
                    item.icon ? (
                      <Icon as={item.icon} fontSize={16} />
                    ) : undefined
                  }
                >
                  {item.title}
                </Button>
              ))) : (
                <IconButton
                  aria-label="Menu"
                  icon={<HiOutlineMenu/>}
                  variant='ghost'
                  fontSize={24}
                  order={2}
                />
              )
            }
              <Box ml={1} order={isDesktop ? 'unset' : 1}>
                <MainButton />
              </Box>
            </HStack>
          </Flex>
        </Container>
        <Container maxW="100%" px={4} py={2} bg="neutral.500">
          <HStack align="center" spacing={3}>
            <ButtonGroup>
              {publicMenu.map((item, index) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Button
                    key={index}
                    variant={isActive ? "tertiary" : "ghost"}
                    fontSize={14}
                    px={3}
                    h={8}
                    isDisabled={item.disabled}
                    leftIcon={
                      item.icon ? (
                        <Icon as={item.icon} w="16px" h="16px" />
                      ) : undefined
                    }
                    bg={isActive ? "neutral.0" : "inherit"}
                    color={isActive ? "neutral.600" : "inherit"}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </ButtonGroup>
          </HStack>
        </Container>
      </Wrapper>
      <Inner>{children}</Inner>
    </Fragment>
  );
};

const Wrapper = styled(Box)`
  position: fixed;
  z-index: 500;
  width: 100%;
  top: 0;
  left: 0;
  height: 132px;
`;
const Inner = styled(Box)`
  padding-top: 132px;
`;

export default Menu;
