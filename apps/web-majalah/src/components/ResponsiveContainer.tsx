import Stack, { StackProps } from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

type Props = StackProps & React.PropsWithChildren;

export const ResponsiveContainer = React.memo(function ResponsiveContainer({
  children,
  ...props
}: Props) {
  const theme = useTheme();
  let { sx } = props;

  if (typeof sx === "function") {
    sx = sx(theme);
  }

  return (
    <Stack
      {...props}
      sx={{
        alignItems: "stretch",
        borderTop: `0.125rem solid ${theme.vars.palette.divider}`,
        flexDirection: { mobile: "column", tablet: "row" },
        gap: 4,
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
});
