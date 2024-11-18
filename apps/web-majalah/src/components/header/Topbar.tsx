import { Box, Container } from "@mui/material";
import * as React from "react";

import { dayjs } from "@/lib";

export const Topbar = React.memo(function Topbar() {
  return (
    <Box
      sx={(theme) => ({
        display: { mobile: "none", tablet: "block" },
        bgcolor: theme.vars.palette.grey[900],
        color: "white",
      })}
    >
      <Container maxWidth="desktop">
        <Box sx={{ flex: 1, fontSize: 12, py: 1.1 }}>
          {dayjs().format("dddd, DD MMMM YYYY")}
        </Box>
      </Container>
    </Box>
  );
});
