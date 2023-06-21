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
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { publicMenu, userMenu } from "@/configs/menu";
import { IoSearch } from "react-icons/io5";
import MainButton from "./MainButton";
import styled from "@emotion/styled";
import { usePathname, useSearchParams } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";
import { HiOutlineMenu, HiSun, HiMoon } from "react-icons/hi";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isDesktop } = useDevice();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Fragment>
      <Wrapper
        boxShadow={{ lg: "sm" }}
        borderBottom="1px solid"
        borderColor={colorMode === "light" ? "gray.100" : "gray.700"}
      >
        <Container maxW="container.xxl" px={4} py={3}>
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
              ) : (
                <IconButton
                  aria-label="Search"
                  icon={<IoSearch />}
                  variant="ghost"
                />
              )}
            </HStack>
            <HStack align="center" spacing={1} minH="60px">
              {isDesktop ? (
                publicMenu.map((item, index) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <Button
                      key={index}
                      variant={isActive ? "tertiary" : "tertiary"}
                      fontSize={14}
                      px={3}
                      h={8}
                      isDisabled={item.disabled}
                      color={isActive ? "primary.500" : "inherit"}
                    >
                      {item.title}
                    </Button>
                  );
                })
              ) : (
                <IconButton
                  aria-label="Menu"
                  icon={<HiOutlineMenu />}
                  variant="ghost"
                  fontSize={24}
                  order={2}
                />
              )}
              <HStack ml={1} order={isDesktop ? "unset" : 1}>
                <IconButton
                  aria-label="Toggle Color Mode"
                  variant="tertiary"
                  px={3}
                  icon={colorMode === "light" ? <HiMoon /> : <HiSun />}
                  onClick={toggleColorMode}
                />
                <MainButton />
              </HStack>
            </HStack>
          </Flex>
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
  height: 84px;
  background: inherit;
`;
const Inner = styled(Box)`
  padding-top: 84px;
`;

export default Menu;
