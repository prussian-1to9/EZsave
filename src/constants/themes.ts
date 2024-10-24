import EZsaveDark from "@assets/EZsave-dark.svg";
import EZsaveLight from "@assets/EZsave-light.svg";

// primary : buttons, links, etc.
const THEMES = {
  // colors only
  light: {
    primaryColor: "#2d2d2d",
    textBase: "#2d2d2d",
    BgBase: "#ffffff",
    logoImg: EZsaveLight,
  },
  dark: {
    fontColor: "#ffffff",
    bgColor: "#2d2d2d",

    primaryColor: "#5f5f5f",
    textBase: "#ffffff",
    BgBase: "#2d2d2d",
    logoImg: EZsaveDark,
  },
};

export default THEMES;
