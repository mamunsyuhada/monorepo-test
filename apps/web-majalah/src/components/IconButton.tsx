import MUIIconButton, {
  IconButtonProps as MUIIconButtonProps,
} from "@mui/material/IconButton";
import * as Icons from "@tabler/icons-react";
import * as React from "react";

interface IconButtonProps extends MUIIconButtonProps {
  name: keyof typeof Icons;
  iconSize?: string;
}

export const IconButton = React.memo(function IconButton(
  props: IconButtonProps
) {
  const { name, size, iconSize, ...rest } = props;
  let iconSz;

  if (size === "large") {
    iconSz = "32";
  } else if (size === "medium") {
    iconSz = "24";
  } else if (size === "small") {
    iconSz = "18";
  }

  if (props.iconSize) {
    iconSz = props.iconSize;
  }

  // @ts-expect-error
  const TablerIcon: Icons.Icon = Icons[name];

  return (
    <MUIIconButton size={size} {...rest}>
      <TablerIcon size={iconSz} />
    </MUIIconButton>
  );
});
