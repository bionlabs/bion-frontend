import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo_light.svg" alt="Bion Network" width={150} height={50} />
    </Link>
  );
};

export default Logo;
