import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";
import { useStickyBox } from "react-sticky-box";

interface Props extends React.PropsWithChildren, StackProps {
  offsetTop?: number;
}

export const StickySidebar = React.memo(function StickySidebar({
  children,
  offsetTop = 80,
  ...props
}: Props) {
  const stickyRef = useStickyBox({ offsetTop });

  return (
    <Stack
      component="aside"
      sx={{
        position: "relative",
        width: { mobile: "100%", tablet: "33.33%" },
      }}
      {...props}
    >
      <Stack component="div" sx={{ pb: 1 }} ref={stickyRef} spacing={4}>
        {children}
      </Stack>
    </Stack>
  );
});
