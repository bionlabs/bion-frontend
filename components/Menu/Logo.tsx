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
      <Image src={colorMode === 'dark' ? "/logo_light.svg" : '/logo.svg'} alt="Bion Network" width={150} height={50} />
    </Link>
  );
};

export default Logo;
