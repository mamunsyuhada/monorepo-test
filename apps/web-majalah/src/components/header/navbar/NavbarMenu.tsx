import Stack, { StackProps } from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

import { useNavbarMenu } from "@/hooks/header";
import { menus } from "@/utils";

import { NavbarMenuItem } from "./NavbarMenuItem";

export const NavbarMenu = React.memo(
  React.forwardRef<HTMLElement, StackProps>(function NavbarMenu(props, ref) {
    const theme = useTheme();
    const { activeMenu } = useNavbarMenu();
    let { sx } = props;

    if (typeof sx === "function") {
      sx = sx(theme);
    }

    return (
      <Stack
        ref={ref}
        direction="row"
        component="nav"
        sx={{
          top: 0,
          maxWidth: "100%",
          px: 0,
          left: { tablet: 0, desktop: "50%" },
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
          ...sx,
        }}
      >
        {menus.map((item) => (
          <NavbarMenuItem
            key={item.label}
            activeMenu={activeMenu}
            item={item}
          />
        ))}
      </Stack>
    );
  })
);
