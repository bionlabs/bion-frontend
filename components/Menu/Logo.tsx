import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "@/hooks/useDevice";
import { useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const {isDesktop} = useDevice();
  const {colorMode} = useColorMode();
  return (
    <Link href="/">
      <Image src={isDesktop ? colorMode === 'dark' ? "/logo_light.svg" : '/logo.svg' : '/favicon.svg'} alt="Bion Network" width={isDesktop ? 200 : 40} height={isDesktop ? 50 : 40} />
    </Link>
  );
};

export default Logo;
