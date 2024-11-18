import { Typography } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

interface Props extends StackProps {
  title?: string;
}

export const Empty = React.memo(function Empty({ title, ...props }: Props) {
  const theme = useTheme();
  let { sx } = props;

  if (typeof sx === "function") {
    sx = sx(theme);
  }

  return (
    <Stack
      {...props}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.vars.palette.grey[200],
        borderRadius: 1,
        color: "black",
        py: 4,
        px: 4,
        ...sx,
      }}
    >
      <Typography component="p" variant="h5">
        {title ?? "Tidak ada berita"}
      </Typography>
    </Stack>
  );
});
