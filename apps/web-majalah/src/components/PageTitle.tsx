import { Stack, Typography } from "@mui/material";
import * as React from "react";

interface Props {
  title: string;
}

export const PageTitle = React.memo(function PageTitle({ title }: Props) {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.vars.palette.grey[100],
        p: 5,
      })}
    >
      <Typography variant="h4" align="center" sx={{ color: "black" }}>
        {title}
      </Typography>
    </Stack>
  );
});
