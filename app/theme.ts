"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#5ba3f5",
			light: "#7bb8ff",
			dark: "#4a8fd9",
		},
		background: {
			default: "#12152a",
			paper: "#1a1e38",
		},
		text: {
			primary: "#e8ecf4",
			secondary: "#8f98b3",
			disabled: "#8a9bb8",
		},
	},
	typography: {
		fontFamily: "var(--font-inter), system-ui, sans-serif",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
	},
});

export default theme;
