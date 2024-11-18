import { Avatar, Box, Collapse, Stack, Tooltip } from "@mui/material";
import React from "react";

import { useStickyHeader } from "@/hooks/header";

import { IconButton } from "../IconButton";
import { Link } from "../Link";
import { LogoImage } from "../LogoImage";
import { ModeSwitcher } from "./ModeSwitcher";
import { SearchInput } from "./SearchInput";

export const AppBar = React.memo(function AppBar() {
  const { isScrolling } = useStickyHeader();

  return (
    <Stack direction="row" sx={{ alignItems: "center", py: 1 }}>
      <Stack
        sx={{
          alignItems: "flex-start",
          width: "33.33%",
          "& a": { lineHeight: 0 },
        }}
      >
        <LogoImage width={180} height={55} />
      </Stack>
      <Box
        sx={{
          width: {
            tablet: isScrolling ? "70.33%" : "33.33%",
            desktop: "33.33%",
          },
          px: 1,
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <SearchInput />
        </Stack>
      </Box>
      <Box sx={{ width: "33.33%" }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Link href="/">
            <IconButton name="IconHome" />
          </Link>
          <ModeSwitcher />
          <Collapse in={!isScrolling} orientation="horizontal">
            <Tooltip title="Kunjungi inilah.com">
              <Link href="https://inilah.com">
                {/* <Image
                src="/logo-round.png"
                alt="Icon inilah.com"
                style={{ borderRadius: "100%" }}
                height={30}
                width={30}
              /> */}
                <Avatar
                  src="/logo-round.png"
                  alt="Icon inilah.com"
                  sx={{ height: 28, width: 28, "&:hover": { opacity: 0.5 } }}
                />
              </Link>
            </Tooltip>
          </Collapse>
        </Stack>
      </Box>
    </Stack>
  );
});
