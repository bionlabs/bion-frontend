'use client'

import { web3Config } from "@/configs/web3Config";
import { WagmiConfig } from "wagmi";

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={web3Config}>{children}</WagmiConfig>;
};

export default Web3Provider;
