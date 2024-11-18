import { Box, Collapse, Stack } from "@mui/material";
import * as React from "react";

import { useDisclose, useFocusInput } from "@/hooks";

import { IconButton } from "../IconButton";
import { LogoImage } from "../LogoImage";
import { DrawerMenu } from "./drawer";
import { ModeSwitcher } from "./ModeSwitcher";
import { SearchInput } from "./SearchInput";

export const AppBarMobile = React.memo(function AppBarMobile() {
  const { isOpen: isSearchBarOpen, onToggle: toggleSearchBar } = useDisclose();
  const { inputRef } = useFocusInput(isSearchBarOpen);
  const {
    isOpen: isDrawerOpen,
    onClose: closeDrawer,
    onOpen: openDrawer,
  } = useDisclose();

  return (
    <>
      <Stack direction="row" sx={{ alignItems: "center", py: 1 }}>
        <Box sx={{ flex: 1, height: 45 }}>
          <LogoImage width={150} height={45} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "flex-end" }}
          >
            <ModeSwitcher />
            <IconButton name="IconSearch" onClick={toggleSearchBar} />
            <IconButton name="IconMenu2" onClick={openDrawer} />
          </Stack>
        </Box>
      </Stack>
      <Collapse in={isSearchBarOpen}>
        <Box sx={{ pb: 1.5 }}>
          <SearchInput inputRef={inputRef} />
        </Box>
      </Collapse>
      <DrawerMenu open={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
});
