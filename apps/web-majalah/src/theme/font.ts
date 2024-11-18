import {
  Anton,
  Open_Sans,
  Roboto,
  Roboto_Serif,
  Titillium_Web,
} from "next/font/google";

export const titiliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const robotSerif = Roboto_Serif({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const roboto = Roboto({
  weight: ["300", "400", "700", "900", "500", "100"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});
