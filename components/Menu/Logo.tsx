import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "@/hooks/useDevice";

const Logo = () => {
  const {isDesktop} = useDevice();
  return (
    <Link href="/">
      <Image src={isDesktop ? "/logo_light.svg" : '/favicon.svg'} alt="Bion Network" width={isDesktop ? 150 : 40} height={isDesktop ? 50 : 40} />
    </Link>
  );
};

export default Logo;
