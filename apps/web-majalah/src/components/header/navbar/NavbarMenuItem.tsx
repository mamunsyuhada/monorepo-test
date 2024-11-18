import { Link as MUILink, ListItem, ListItemText } from "@mui/material";
import * as React from "react";

import { Link } from "@/components";
import { NavbarMenuItemProps } from "@/types/components";

export const NavbarMenuItem = React.memo(function NavbarMenuItem({
  activeMenu,
  item,
}: NavbarMenuItemProps) {
  const isActive = activeMenu === item.label;

  return (
    <ListItem
      sx={(theme) => ({
        py: 1,
        px: 1.35,
        borderRadius: 0,
        borderTop: "0.125rem solid transparent",
        cursor: "pointer",
        "&:hover": {
          color: theme.vars.palette.primary.main,
        },
        ...(isActive
          ? {
              color: theme.vars.palette.primary.main,
              borderTopColor: `${theme.vars.palette.primary.main}`,
            }
          : {}),
      })}
    >
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
              align: "center",
              sx: {
                textTransform: "uppercase",
                textWrap: "nowrap",
                fontSize: "0.75rem !important",
                fontWeight: 600,
              },
            }}
          />
        </MUILink>
      ) : (
        <Link href={item.href}>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              align: "center",
              sx: {
                textTransform: "uppercase",
                textWrap: "nowrap",
                fontSize: "0.75rem !important",
                fontWeight: 600,
              },
            }}
          />
        </Link>
      )}
    </ListItem>
  );
});
