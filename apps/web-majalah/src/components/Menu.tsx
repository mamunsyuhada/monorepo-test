import { ClickAwayListener, Grow } from "@mui/material";
import MenuList, { MenuListProps } from "@mui/material/MenuList";
import Paper, { PaperProps as MUIPaperProps } from "@mui/material/Paper";
import Popper, { PopperProps } from "@mui/material/Popper";
import * as React from "react";

interface Props extends PopperProps {
  children: MenuListProps["children"];
  PaperProps: MUIPaperProps;
  onClose: (event: MouseEvent | TouchEvent | React.KeyboardEvent) => void;
}

export const Menu = React.memo(
  ({ children, open, PaperProps, onClose, ...rest }: Props) => {
    const handleClose = React.useCallback(
      (event: MouseEvent | TouchEvent | React.KeyboardEvent) => {
        onClose(event);
      },
      [onClose]
    );

    const handleListKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
          event.preventDefault();
          handleClose(event);
        } else if (event.key === "Escape") {
          handleClose(event);
        }
      },
      [handleClose]
    );

    return (
      <Popper
        open={open}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
        {...rest}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "right top",
            }}
          >
            <Paper {...PaperProps}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }
);
