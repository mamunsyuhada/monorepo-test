import {
  AppBar as MUIAppBar,
  Box,
  Collapse,
  Container,
  Divider,
} from "@mui/material";
import * as React from "react";

import { useStickyHeader } from "@/hooks/header";

import { AppBar } from "./AppBar";
import { AppBarMobile } from "./AppBarMobile";
import { Topbar } from "./Topbar";

export const Header = React.memo(
  React.forwardRef<HTMLElement>(function Header(_props, ref) {
    const { isScrolling } = useStickyHeader();

    return (
      <MUIAppBar
        id="header-nav"
        ref={ref}
        position="sticky"
        sx={{ boxShadow: "none" }}
        color="default"
      >
        <Collapse in={!isScrolling}>
          <Topbar />
        </Collapse>
        <Container maxWidth="desktop">
          <Box sx={{ display: { mobile: "none", tablet: "block" } }}>
            <Box sx={{ py: 1 }}>
              <AppBar />
            </Box>
          </Box>
          <Box sx={{ display: { mobile: "block", tablet: "none" } }}>
            <AppBarMobile />
          </Box>
        </Container>
        <Divider
          sx={{
            height: 4,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(181,43,33,1) 50%, rgba(255,255,255,0) 100%)",
          }}
        />
      </MUIAppBar>
    );
  })
);
