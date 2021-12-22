import { create } from "@storybook/theming";
import logo from "../src/assets/storybook.svg";

export default create({
  base: "light",

  colorPrimary: "#C9B777",
  colorSecondary: "#FA541C",

  // UI
  appBg: "#FCFBED",
  appContentBg: "white",
  appBorderColor: "#FAAD14",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#302715",
  textInverseColor: "#FCFBED",

  // Toolbar default and active colors
  barTextColor: "#610B00",
  barSelectedColor: "#302715",
  barBg: "#FAAD14",

  // Form colors
  inputBg: "#FCFBED",
  inputBorder: "#610B00",
  inputTextColor: "#302715",
  inputBorderRadius: 2,

  brandTitle: "My custom storybook",
  brandUrl: "#",
  brandImage: logo,
});
