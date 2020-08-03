import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "#e1e1e1",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "navajowhite",
  barBg: "#313131",

  // Form colors
  inputBg: "snow",
  inputBorder: "black",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "SaxoBank Design System",
  brandUrl: "https://www.home.saxo",
  brandImage:
    "https://www.home.saxo/-/media/global/logos/logo_vector_color-svg.svg",
});
