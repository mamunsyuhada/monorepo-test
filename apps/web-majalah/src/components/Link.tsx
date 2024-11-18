import NextLink, { LinkProps } from "next/link";
import * as React from "react";

interface Props extends React.PropsWithChildren, LinkProps {
  isHover?: boolean;
}

const CLink = React.forwardRef<HTMLAnchorElement, Props>(function Link(
  { children, isHover, ...props }: Props,
  ref
) {
  return (
    <NextLink
      ref={ref}
      className={`link ${isHover ? "link-hover" : ""}`}
      {...props}
    >
      {children}
    </NextLink>
  );
});

export const Link = React.memo(CLink);
