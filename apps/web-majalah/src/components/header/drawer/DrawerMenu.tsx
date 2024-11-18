import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { useRouter } from "next/router";
import * as React from "react";

// import { useNavbarMenu } from "@/hooks/header";
import { dayjs } from "@/lib";

// import { menus } from "@/utils";
import { IconButton } from "../../IconButton";
// import { DrawerMenuItem } from "./DrawerMenuItem";

export const DrawerMenu = React.memo(function DrawerMenu({
  open,
  onClose,
}: DrawerProps) {
  const router = useRouter();
  // const { activeMenu } = useNavbarMenu();

  const handleClose = React.useCallback(() => {
    if (typeof onClose === "function") {
      onClose({}, "backdropClick");
    }
  }, [onClose]);

  React.useEffect(() => {
    handleClose();
  }, [handleClose, router.asPath]);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="caption">Menu</Typography>
        <IconButton name="IconX" onClick={handleClose} />
      </Stack>
      <Divider />
      <List sx={{ py: 0 }}>
        {/* {menus.map((item) => (
          <DrawerMenuItem
            key={item.label}
            activeMenu={activeMenu}
            item={item}
          />
        ))} */}
      </List>
      <Divider />
      <Box sx={{ fontSize: 12, px: 2, mt: 2 }}>
        {dayjs().format("dddd, DD MMMM YYYY")}
      </Box>
    </Drawer>
  );
});
