import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface Props {
  width: number;
  height: number;
}

export const LogoImage = ({ width, height }: Props) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="main-logo"
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};
