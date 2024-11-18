import { useRouter } from "next/router";
import * as React from "react";

export const useNavbarMenu = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { type } = query;
  const [activeMenu, setActiveMenu] = React.useState("");

  React.useEffect(() => {
    let menu = "";

    if (type === "infographic") {
      menu = "Infografis";
    } else if (type === "video") {
      menu = "Video";
    } else if (pathname === "/") {
      menu = "Beranda";
    } else if (pathname === "/profile") {
      menu = "Profil";
    } else if (pathname === "/faq") {
      menu = "FAQ";
    } else if (pathname === "/contact") {
      menu = "Kontak";
    }

    setActiveMenu(menu);
  }, [pathname, type]);

  return { activeMenu };
};
