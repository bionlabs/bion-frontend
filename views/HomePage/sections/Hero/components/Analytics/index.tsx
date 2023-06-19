import React from "react";
import { getLaunchpadStats } from "@/api/launchpad";
import { Box, Grid, GridItem, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["launchpadStats"],
    queryFn: getLaunchpadStats,
  });

  const stats = [
    {
      title: "Total Projects",
      value: (data ? data?.totalProjects : 0) + "+",
    },
    {
      title: "Total Users",
      value: (data ? data?.totalUsers : 0) + "+",
    },
    {
      title: "Total Transactions",
      value: (data ? data?.totalSwapTransactions : 0) + "+",
    },
    {
      title: "Fund Raised",
      value: "$50K+",
    },
  ];
  return (
    <Grid
      gap={6}
      w='100%'
      gridTemplateColumns={{base: 'repeat(2, 1fr)' , lg: 'repeat(4, auto)'}}
    >
      {stats.map((item) => (
        <GridItem key={item.title}>
          <Text color='neutral.300'>{item.title}</Text>
          <Text fontWeight={700} fontSize={28}>
            {item.value}
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Analytics;
