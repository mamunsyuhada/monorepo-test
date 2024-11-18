import { Stack, Typography } from "@mui/material";
import * as React from "react";

interface Props {
  query?: string;
}

export const Title = React.memo(function Title({ query }: Props) {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.vars.palette.grey[300],
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
        px: 2,
        py: { mobile: 4, tablet: 6 },
      })}
      spacing={4}
    >
      <Typography variant="h3" align="center" sx={{ color: "black" }}>
        {query ? `Hasil Pencarian Untuk: ${query}` : "Halaman Pencarian"}
      </Typography>
    </Stack>
  );
});
