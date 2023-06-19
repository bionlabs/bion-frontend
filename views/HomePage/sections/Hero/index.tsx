"use client";

import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import TrendingCard from "./components/Card/TrendingCard";
import Analytics from "./components/Analytics";

const Hero = () => {
  return (
    <Box w='100%'>
      <Stack
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        spacing={4}
        align="start"
      >
        <Box order={{base: 2, lg: 1}}>
          <VStack align="start" maxW="600px" spacing={6}>
            <VStack>
              <Text fontSize={{base: 32 , lg:42}} fontWeight={700}>
                Defining the Future of Web3 Together
              </Text>
              <Text fontSize={{base:16 , lg: 20}} color="neutral.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>

            <HStack mb={5}>
              <Button variant="primary">Create BUIDLs</Button>
              <Button variant="outline">Get Started</Button>
            </HStack>
            <Analytics />
          </VStack>
        </Box>
        <Box w={{base: '100%', lg: 'auto'}} order={{base: 1, lg: 2}}>
          <TrendingCard />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
