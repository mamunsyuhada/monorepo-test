import { Link as MUILink, ListItem, ListItemText } from "@mui/material";
import * as React from "react";

import { Link } from "@/components";
import { NavbarMenuItemProps } from "@/types/components";

export const DrawerMenuItem = React.memo(function DrawerMenuItem({
  activeMenu,
  item,
}: NavbarMenuItemProps) {
  const isActive = activeMenu === item.label;

  return (
    <ListItem>
      {item.label === "INILAH.COM" ? (
        <MUILink
          href={item.href}
          sx={{
            color: "unset",
            textDecoration: "none",
            lineHeight: 0,
          }}
        >
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              sx: (theme) => ({
                minWidth: "40vw",
                color: isActive
                  ? theme.vars.palette.primary.main
                  : theme.vars.palette.text.primary,
                textTransform: "capitalize",
                fontWeight: 600,
              }),
            }}
          />
        </MUILink>
      ) : (
        <Link href={item.href}>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              sx: (theme) => ({
                minWidth: "40vw",
                color: isActive
                  ? theme.vars.palette.primary.main
                  : theme.vars.palette.text.primary,
                textTransform: "capitalize",
                fontWeight: 600,
              }),
            }}
          />
        </Link>
      )}
    </ListItem>
  );
});
