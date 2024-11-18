export interface NavbarMenuItemProps {
  activeMenu?: string;
  idPrefix?: string;
  item: {
    label: string;
    href: string;
  };
}
