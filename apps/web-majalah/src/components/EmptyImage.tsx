import Stack, { StackProps } from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { IconPhotoOff } from "@tabler/icons-react";
import * as React from "react";

export const EmptyImage = React.memo(function EmptyImage(props: StackProps) {
  const theme = useTheme();
  // eslint-disable-next-line prefer-const
  let { sx, ...rest } = props;

  if (typeof sx === "function") {
    sx = sx(theme);
  }

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.vars.palette.grey[200],
        borderRadius: 2,
        ...sx,
      }}
      {...rest}
    >
      <IconPhotoOff />
    </Stack>
  );
});
