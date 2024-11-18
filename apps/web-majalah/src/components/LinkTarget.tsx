import Link, { LinkProps } from "@mui/material/Link";
import * as React from "react";

interface Props extends React.PropsWithChildren, LinkProps {
  isHover?: boolean;
}

const CLinkTarget = React.forwardRef<HTMLAnchorElement, Props>(
  function LinkTarget({ children, isHover, ...props }: Props, ref) {
    return (
      <Link
        ref={ref}
        {...props}
        className={`link ${isHover ? "link-hover" : ""}`}
        target="_blank"
      >
        {children}
      </Link>
    );
  }
);

export const LinkTarget = React.memo(CLinkTarget);
