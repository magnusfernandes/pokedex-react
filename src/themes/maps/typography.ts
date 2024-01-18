import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  fontFamily: [
    '"ProductSans"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};
